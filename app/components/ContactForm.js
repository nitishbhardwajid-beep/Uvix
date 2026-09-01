"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // If a reCAPTCHA site key is configured, execute reCAPTCHA v3 to obtain a token.
      let recaptchaToken = null;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (siteKey) {
        if (!window.grecaptcha) {
          await new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            s.async = true;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
          });
        }
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'contact' });
        } catch (recErr) {
          console.warn('reCAPTCHA execution failed', recErr);
        }
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, recaptchaToken }),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('ok');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      // fallback to mailto
      const subject = encodeURIComponent(`Website inquiry from ${name || 'Lead'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailto = `mailto:info@uvix.in?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form-row">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-row">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-row">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        <span role="status" aria-live="polite" style={{ marginLeft: '0.75rem' }}>
          {status === 'ok' ? <span style={{ color: 'var(--cyan-l)' }}>Thanks — we'll respond shortly.</span> : null}
        </span>
      </div>
    </form>
  );
}
