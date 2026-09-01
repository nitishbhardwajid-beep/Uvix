#!/usr/bin/env node
const nodemailer = require('nodemailer');

async function sendViaSmtp() {
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
    subject: 'Test email from Uvix site',
    text: 'This is a test email sent from the Uvix mailer scaffold.',
  });
  return { provider: 'smtp', info };
}

async function sendViaSendGrid() {
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: process.env.TO_EMAIL || 'info@uvix.in' }], subject: 'Test email from Uvix site' }],
      from: { email: process.env.FROM_EMAIL || 'noreply@uvix.in' },
      content: [{ type: 'text/plain', value: 'This is a test email sent from the Uvix mailer scaffold.' }],
    }),
  });
  return { provider: 'sendgrid', status: res.status };
}

async function main() {
  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const r = await sendViaSmtp();
      console.log('SMTP send result:', r);
      return;
    }
    if (process.env.SENDGRID_API_KEY) {
      const r = await sendViaSendGrid();
      console.log('SendGrid send result:', r);
      return;
    }
    console.error('No SMTP or SendGrid credentials found in environment. See .env.example.');
    process.exitCode = 2;
  } catch (err) {
    console.error('Send failed:', err);
    process.exitCode = 1;
  }
}

main();
