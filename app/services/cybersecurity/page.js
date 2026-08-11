import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Cybersecurity Services — Security & Compliance — Uvix',
  description: 'Cybersecurity consulting, vulnerability assessment, and security infrastructure. Protect your applications and data.',
  canonical: 'https://uvix.co.in/services/cybersecurity',
};

export default function CybersecurityPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Cybersecurity" intro="Protect your systems and data with enterprise-grade security">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We build security into your applications and infrastructure. From vulnerability assessments to secure architecture design, we help you protect against modern threats while maintaining compliance.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Risk Reduction:</strong> Identify and eliminate security vulnerabilities before they're exploited</li>
              <li><strong>Compliance:</strong> Meet regulatory requirements (SOC 2, HIPAA, GDPR, PCI-DSS)</li>
              <li><strong>Customer Trust:</strong> Security certifications build customer confidence</li>
              <li><strong>Incident Response:</strong> Prepared response plans minimize damage from breaches</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Security Assessment</h3>
                <p>Audit applications, infrastructure, and processes for vulnerabilities.</p>
              </div>
              <div className="step">
                <h3>2. Security Design</h3>
                <p>Design secure architecture aligned with compliance requirements.</p>
              </div>
              <div className="step">
                <h3>3. Implementation</h3>
                <p>Implement security controls, encryption, and access management.</p>
              </div>
              <div className="step">
                <h3>4. Monitoring & Response</h3>
                <p>Continuous security monitoring and incident response planning.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Security Services</h2>
            <ul className="use-cases">
              <li>Vulnerability assessment and penetration testing</li>
              <li>Secure application development and code review</li>
              <li>Infrastructure security hardening</li>
              <li>Identity and access management (IAM)</li>
              <li>Encryption and data protection</li>
              <li>Compliance audits (SOC 2, HIPAA, GDPR, PCI-DSS)</li>
              <li>Security incident response and recovery</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Security Standards & Frameworks</h2>
            <p className="tech-list">OWASP · SOC 2 · HIPAA · GDPR · PCI-DSS · ISO 27001 · Zero Trust Architecture</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Secure Your Systems?</h2>
            <p>Let's protect your applications and data with enterprise-grade security. Book a consultation with our security experts.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
