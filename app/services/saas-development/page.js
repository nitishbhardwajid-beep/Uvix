import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'SaaS Product Development — Uvix Technologies',
  description: 'Build enterprise-grade SaaS products with scalable architecture, user engagement, and global reach. Full-stack SaaS development.',
  canonical: 'https://uvix.in/services/saas-development',
};

export default function SaaSDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="SaaS Development" intro="Build, scale, and monetize cloud-native software products">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We architect and develop enterprise SaaS products designed for scale, reliability, and user retention. From MVP to Series B, we build the technical foundation that supports business growth.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Market Speed:</strong> Launch faster than in-house teams with our product expertise</li>
              <li><strong>Scalability:</strong> Infrastructure designed to handle 1000x growth without redesign</li>
              <li><strong>Unit Economics:</strong> Optimized for profitability with reduced infrastructure costs</li>
              <li><strong>User Retention:</strong> Features and UX designed for engagement and expansion revenue</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Product Strategy & Planning</h3>
                <p>Define product roadmap, positioning, and go-to-market strategy.</p>
              </div>
              <div className="step">
                <h3>2. Architecture & Tech Stack</h3>
                <p>Design scalable architecture with cloud-native best practices.</p>
              </div>
              <div className="step">
                <h3>3. MVP to Scaling</h3>
                <p>Ship MVP quickly, validate with customers, then scale based on product-market fit.</p>
              </div>
              <div className="step">
                <h3>4. Ongoing Operations</h3>
                <p>Handle infrastructure, security, compliance, and scaling as your user base grows.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>SaaS Specializations</h2>
            <ul className="use-cases">
              <li>Multi-tenant architecture and data isolation</li>
              <li>Subscription and billing management</li>
              <li>User authentication and authorization (OAuth, SSO)</li>
              <li>Real-time collaboration features</li>
              <li>Advanced analytics and reporting</li>
              <li>Data privacy and compliance (GDPR, HIPAA, SOC 2)</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">Next.js · React · Node.js · Python · FastAPI · PostgreSQL · MongoDB · AWS · Kubernetes · Stripe</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Your SaaS Product?</h2>
            <p>Let's create a SaaS product that scales with your business. Book a consultation with our product architects.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
