"use client";
import Link from 'next/link';
import { navItems } from '../data/siteContent';
import { useState, useEffect } from 'react';

export default function SiteLayout({ children, title, description }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeLight, setThemeLight] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('uvix_theme_light');
      const isLight = stored === '1';
      setThemeLight(isLight);
      if (isLight) document.documentElement.classList.add('theme-light');
      else document.documentElement.classList.remove('theme-light');
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('uvix_theme_light', themeLight ? '1' : '0');
      if (themeLight) document.documentElement.classList.add('theme-light');
      else document.documentElement.classList.remove('theme-light');
    } catch (e) {}
  }, [themeLight]);
  return (
    <>
      <nav>
        <Link className="nav-logo" href="/">
          {logoVisible ? (
            <img src={themeLight ? '/uvix-logo-dark.svg' : '/uvix-logo.svg'} alt="Uvix Technologies" className="site-logo" onError={() => setLogoVisible(false)} />
          ) : (
            'Uvix Technologies'
          )}
        </Link>
        <div className="nav-actions">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setThemeLight((s) => !s)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 3v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.2 4.2l1.4 1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.4 18.4l1.4 1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.2 19.8l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="sr-only">Toggle theme</span>
          </button>
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen((s) => !s)}>
            ☰
          </button>
        </div>
        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} onClick={() => setMobileOpen(false)}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="nav-logo" href="/">Uvix Technologies</Link>
            <p>AI engineering and cloud services focused on measurable outcomes. Bangalore · Germany.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">AI & ML Engineering</Link></li>
              <li><Link href="/services">Cloud Infrastructure</Link></li>
              <li><Link href="/services">Data Engineering</Link></li>
              <li><Link href="/services">Cybersecurity</Link></li>
              <li><Link href="/services">Product Development</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/process">About</Link></li>
              <li><Link href="/contact">Careers</Link></li>
              <li><Link href="/clients">Case Studies</Link></li>
              <li><Link href="/technologies">Research</Link></li>
              <li><Link href="/clients">Partners</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@uvix.in">info@uvix.in</a></li>
              <li><a href="/contact">Bangalore, IN</a></li>
              <li><a href="/contact/germany">Germany</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Uvix Technologies. All rights reserved.</span>
          <div className="footer-socials">
            <a href="https://linkedin.com/company/uvix-technologies" aria-label="LinkedIn" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://twitter.com/uvix_tech" aria-label="Twitter" target="_blank" rel="noopener">Twitter / X</a>
            <a href="https://github.com/uvix-tech" aria-label="GitHub" target="_blank" rel="noopener">GitHub</a>
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms.html">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
