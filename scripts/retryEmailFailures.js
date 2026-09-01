#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const nodemailer = require('nodemailer');

async function run() {
  const failPath = path.join(process.cwd(), 'data', 'email-failures.json');
  if (!fs.existsSync(failPath)) {
    console.log('No failures to process');
    return;
  }
  let fails = [];
  try { fails = JSON.parse(fs.readFileSync(failPath, 'utf8') || '[]'); } catch (e) { console.error('Failed to read failures', e); return; }
  if (!fails.length) { console.log('No failures to process'); return; }

  const remaining = [];
  for (const f of fails) {
    try {
      if (f.provider === 'smtp') {
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) throw new Error('Missing SMTP creds');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: (process.env.SMTP_SECURE || 'false') === 'true',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({ from: process.env.FROM_EMAIL || process.env.SMTP_USER, to: process.env.TO_EMAIL || process.env.FROM_EMAIL, subject: f.payload.subject || 'Retry: website inquiry', text: f.payload.text || f.payload.content || '' });
        console.log('Retried smtp for', f.id);
      } else if (f.provider === 'sendgrid') {
        if (!process.env.SENDGRID_API_KEY) throw new Error('Missing SendGrid key');
        const res = await fetch('https://api.sendgrid.com/v3/mail/send', { method: 'POST', headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ personalizations: [{ to: [{ email: process.env.TO_EMAIL || 'info@uvix.in' }], subject: f.payload.subject || 'Retry: website inquiry' }], from: { email: process.env.FROM_EMAIL || 'noreply@uvix.in' }, content: [{ type: 'text/plain', value: f.payload.text || f.payload.content || '' }] }) });
        if (!res.ok) throw new Error('SendGrid retry failed ' + res.status);
        console.log('Retried sendgrid for', f.id);
      }
    } catch (e) {
      console.error('Retry failed for', f.id, e);
      remaining.push(f);
    }
  }
  try { fs.writeFileSync(failPath, JSON.stringify(remaining, null, 2)); } catch (e) { console.error('Failed to write remaining failures', e); }
}

run().catch((e) => { console.error(e); process.exit(1); });
