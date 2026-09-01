import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Web Development Services — Modern Web Applications — Uvix',
  description: 'High-performance web applications with React, Next.js, and Node.js. Scalable, secure, and user-focused web development.',
  canonical: 'https://uvix.in/services/web-development',
};

export default function WebDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Web Development" intro="Build fast, secure, and engaging web applications">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We develop modern web applications optimized for performance, user experience, and scalability. From responsive frontends to robust APIs, we build the web infrastructure that powers your business.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Speed:</strong> Fast-loading web apps increase conversion by 50%+</li>
              <li><strong>Mobile-First:</strong> Optimized for mobile users who represent 80%+ of traffic</li>
              <li><strong>SEO:</strong> Server-rendered and optimized for search engine visibility</li>
              <li><strong>Reliability:</strong> 99.9% uptime with automated deployments and monitoring</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Requirements & Design</h3>
                <p>Collaborate on requirements, design responsive interfaces, and plan architecture.</p>
              </div>
              <div className="step">
                <h3>2. Frontend Development</h3>
                <p>Build modern, interactive UIs with React/Next.js, optimized for performance.</p>
              </div>
              <div className="step">
                <h3>3. Backend & APIs</h3>
                <p>Develop robust APIs and backend services with Node.js or Python.</p>
              </div>
              <div className="step">
                <h3>4. Deployment & Optimization</h3>
                <p>Deploy to the cloud, optimize performance, and set up monitoring.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Web Development Expertise</h2>
            <ul className="use-cases">
              <li>Single Page Applications (SPAs) with React</li>
              <li>Server-Side Rendering (SSR) with Next.js</li>
              <li>Progressive Web Apps (PWAs) with offline support</li>
              <li>Real-time applications with WebSockets</li>
              <li>E-commerce platforms and marketplace</li>
              <li>Admin dashboards and analytics platforms</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">React · Next.js · TypeScript · Node.js · Express · PostgreSQL · Redis · AWS · Vercel · Docker · Kubernetes</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Your Web Application?</h2>
            <p>Let's create web experiences that drive engagement and conversion. Book a consultation with our web developers.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
