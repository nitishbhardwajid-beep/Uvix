import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import * as Sentry from '@sentry/node';

if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

type InquiryEntry = {
  id: number;
  name: string | null;
  email: string;
  message: string;
  createdAt: string;
};

const appendLog = (obj: Record<string, any>) => {
  try {
    const p = path.join(process.cwd(), 'data');
    if (!fs.existsSync(p)) fs.mkdirSync(p);
    fs.appendFileSync(path.join(p, 'server.log'), JSON.stringify(obj) + '\n');
  } catch (e) {
    // best-effort
    // eslint-disable-next-line no-console
    console.error('Failed to write log', e);
  }
};

const log = (level: 'info' | 'error', message: string, extra: Record<string, any> = {}) => {
  const out = { time: new Date().toISOString(), level, message, ...extra };
  appendLog(out);
  if (level === 'error') {
    // capture to Sentry if configured
    if (process.env.SENTRY_DSN) Sentry.captureMessage(message, 'error');
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(out));
  } else {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(out));
  }
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, any>;
    const name = body.name ?? null;
    const email = body.email;
    const message = body.message;
    const recaptchaToken = body.recaptchaToken;
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    if (process.env.RECAPTCHA_SECRET) {
      if (!recaptchaToken) return new Response(JSON.stringify({ error: 'Missing recaptcha token' }), { status: 400 });
      try {
        const params = new URLSearchParams();
        params.append('secret', process.env.RECAPTCHA_SECRET);
        params.append('response', recaptchaToken);
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        });
        const verifyJson = await verifyRes.json();
        if (!verifyJson.success) return new Response(JSON.stringify({ error: 'Recaptcha verification failed', details: verifyJson }), { status: 403 });
        if (typeof verifyJson.score === 'number' && verifyJson.score < 0.5) return new Response(JSON.stringify({ error: 'Recaptcha score too low', score: verifyJson.score }), { status: 403 });
      } catch (recErr) {
        log('error', 'Recaptcha verify error', { error: String(recErr) });
        return new Response(JSON.stringify({ error: 'Recaptcha verification error' }), { status: 500 });
      }
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const filePath = path.join(dataDir, 'inquiries.json');
    let arr: InquiryEntry[] = [];
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      try {
        arr = JSON.parse(raw || '[]');
      } catch (e) {
        arr = [];
      }
    }
    const entry: InquiryEntry = { id: Date.now(), name, email, message, createdAt: new Date().toISOString() };
    arr.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));

    let mailResult: Record<string, any> = { provider: 'none' };
    try {
      const entryText = `New inquiry from ${entry.name || 'n/a'} <${entry.email}>:\n\n${entry.message}`;
      const maxAttempts = 3;

      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: (process.env.SMTP_SECURE || 'false') === 'true',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        let lastErr: any = null;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
          try {
            const info = await transporter.sendMail({
              from: process.env.FROM_EMAIL || process.env.SMTP_USER,
              to: process.env.TO_EMAIL || process.env.FROM_EMAIL || 'info@uvix.in',
              subject: `Website inquiry: ${entry.name || entry.email}`,
              text: entryText,
            });
            mailResult = { provider: 'smtp', info: info && (info as any).messageId ? (info as any).messageId : info };
            log('info', 'Mail sent', { provider: 'smtp', attempt });
            lastErr = null;
            break;
          } catch (e) {
            lastErr = e;
            log('error', 'SMTP send attempt failed', { attempt, error: String(e) });
            if (attempt < maxAttempts) await sleep(500 * attempt);
          }
        }
        if (lastErr) {
          mailResult = { provider: 'smtp', error: String(lastErr), attempts: maxAttempts };
          try {
            const failPath = path.join(process.cwd(), 'data', 'email-failures.json');
            let fails: any[] = [];
            if (fs.existsSync(failPath)) {
              try {
                fails = JSON.parse(fs.readFileSync(failPath, 'utf8') || '[]');
              } catch (e) {
                fails = [];
              }
            }
            fails.push({ id: entry.id, provider: 'smtp', attempts: maxAttempts, error: String(lastErr), when: new Date().toISOString(), payload: { to: process.env.TO_EMAIL || process.env.FROM_EMAIL || 'info@uvix.in', subject: `Website inquiry: ${entry.name || entry.email}`, text: entryText } });
            fs.writeFileSync(failPath, JSON.stringify(fails, null, 2));
          } catch (pf) {
            log('error', 'Failed to persist email failure', { error: String(pf) });
          }
        }

      } else if (process.env.SENDGRID_API_KEY) {
        let lastErr: any = null;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
          try {
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
            if (res.ok) {
              mailResult = { provider: 'sendgrid', status: res.status };
              log('info', 'SendGrid send succeeded', { status: res.status });
              lastErr = null;
              break;
            } else {
              const body = await res.text();
              lastErr = new Error(`SendGrid status ${res.status}: ${body}`);
              log('error', 'SendGrid send failed', { attempt, status: res.status });
            }
          } catch (e) {
            lastErr = e;
            log('error', 'SendGrid send attempt failed', { attempt, error: String(e) });
            if (attempt < maxAttempts) await sleep(500 * attempt);
          }
        }
        if (lastErr) {
          mailResult = { provider: 'sendgrid', error: String(lastErr), attempts: maxAttempts };
          try {
            const failPath = path.join(process.cwd(), 'data', 'email-failures.json');
            let fails: any[] = [];
            if (fs.existsSync(failPath)) {
              try {
                fails = JSON.parse(fs.readFileSync(failPath, 'utf8') || '[]');
              } catch (e) {
                fails = [];
              }
            }
            fails.push({ id: entry.id, provider: 'sendgrid', attempts: maxAttempts, error: String(lastErr), when: new Date().toISOString(), payload: { subject: `Website inquiry: ${entry.name || entry.email}`, content: entryText } });
            fs.writeFileSync(failPath, JSON.stringify(fails, null, 2));
          } catch (pf) {
            log('error', 'Failed to persist sendgrid email failure', { error: String(pf) });
          }
        }
      }
    } catch (mailErr) {
      log('error', 'Mail send unexpected error', { error: String(mailErr) });
      mailResult = { provider: 'error', error: String(mailErr) };
    }

    return new Response(JSON.stringify({ ok: true, entry, mail: mailResult }), { status: 201 });
  } catch (err: any) {
    log('error', 'Contact POST failed', { error: String(err) });
    if (process.env.SENTRY_DSN && (err instanceof Error)) Sentry.captureException(err);
    return new Response(JSON.stringify({ error: err?.message || String(err) }), { status: 500 });
  }
}
