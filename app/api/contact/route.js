import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const filePath = path.join(dataDir, 'inquiries.json');
    let arr = [];
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      try { arr = JSON.parse(raw || '[]'); } catch (e) { arr = []; }
    }
    const entry = { id: Date.now(), name: name || null, email, message, createdAt: new Date().toISOString() };
    arr.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));

    // Try to send an email notification when provider credentials are available.
    let mailResult = { provider: 'none' };
    try {
      const entryText = `New inquiry from ${entry.name || 'n/a'} <${entry.email}>:\n\n${entry.message}`;
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: (process.env.SMTP_SECURE || 'false') === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        const info = await transporter.sendMail({
          from: process.env.FROM_EMAIL || process.env.SMTP_USER,
          to: process.env.TO_EMAIL || process.env.FROM_EMAIL || 'info@uvix.in',
          subject: `Website inquiry: ${entry.name || entry.email}`,
          text: entryText,
        });
        mailResult = { provider: 'smtp', info: info && info.messageId ? info.messageId : info };
      } else if (process.env.SENDGRID_API_KEY) {
        const sgPayload = {
          personalizations: [{ to: [{ email: process.env.TO_EMAIL || 'info@uvix.in' }], subject: `Website inquiry: ${entry.name || entry.email}` }],
          from: { email: process.env.FROM_EMAIL || 'noreply@uvix.in' },
          content: [{ type: 'text/plain', value: entryText }],
        };
        const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(sgPayload),
        });
        mailResult = { provider: 'sendgrid', status: res.status };
      }
    } catch (mailErr) {
      console.error('Mail send failed', mailErr);
      mailResult = { provider: 'error', error: String(mailErr) };
    }

    return new Response(JSON.stringify({ ok: true, entry, mail: mailResult }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
