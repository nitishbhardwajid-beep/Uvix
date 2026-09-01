"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || 'Lead'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto = `mailto:info@uvix.in?subject=${subject}&body=${body}`;
    window.location.href = mailto;
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
        <button type="submit" className="btn-primary">Send Message</button>
      </div>
    </form>
  );
}
