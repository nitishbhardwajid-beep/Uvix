import Link from 'next/link';
import { navItems } from '../data/siteContent';

export default function SiteLayout({ children, title, description }) {
  return (
    <>
      <nav>
        <Link className="nav-logo" href="/">Uvix Technologies</Link>
        <ul className="nav-links">
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
            <p>AI-integrated IT services for companies serious about intelligent transformation. Bangalore · London · New York.</p>
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
              <li><Link href="/clients">Blog</Link></li>
              <li><Link href="/technologies">Research</Link></li>
              <li><Link href="/contact">Partners</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@uvix.co.in">info@uvix.co.in</a></li>
              <li><a href="#">Bangalore, IN</a></li>
              <li><a href="#">London, UK</a></li>
              <li><a href="#">New York, US</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Uvix Technologies. All rights reserved.</span>
          <div className="footer-socials">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">GitHub</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
