import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Cloud Engineering & Architecture — Scalable Cloud Solutions — Uvix',
  description: 'Enterprise cloud infrastructure design, migration, and optimization. Multi-cloud strategies for AWS, Azure, and GCP.',
  canonical: 'https://uvix.in/services/cloud-engineering',
};

export default function CloudEngineeringPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Cloud Engineering" intro="Build and scale cloud-native infrastructure">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We design, implement, and optimize cloud infrastructure that scales with your business. From cloud migrations to multi-region deployments, we build reliable, cost-efficient cloud solutions.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Scalability:</strong> Infrastructure that grows from startup to enterprise scale</li>
              <li><strong>Cost Optimization:</strong> Reduce infrastructure costs by 40-60% with optimization</li>
              <li><strong>Reliability:</strong> 99.99% uptime with automated failover and disaster recovery</li>
              <li><strong>Security:</strong> Enterprise-grade security with compliance certifications</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Infrastructure Assessment</h3>
                <p>Audit current infrastructure, identify bottlenecks, and plan improvements.</p>
              </div>
              <div className="step">
                <h3>2. Architecture Design</h3>
                <p>Design cloud-native architecture with scalability, reliability, and cost in mind.</p>
              </div>
              <div className="step">
                <h3>3. Migration & Implementation</h3>
                <p>Execute cloud migration with minimal downtime, or build new infrastructure.</p>
              </div>
              <div className="step">
                <h3>4. Optimization & Monitoring</h3>
                <p>Continuously optimize for cost and performance, with comprehensive monitoring.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Cloud Architecture Services</h2>
            <ul className="use-cases">
              <li>Cloud migration from on-premise or legacy systems</li>
              <li>Multi-region and global deployment architecture</li>
              <li>High-availability and disaster recovery setup</li>
              <li>Cost optimization and right-sizing</li>
              <li>Security hardening and compliance (SOC 2, HIPAA, GDPR)</li>
              <li>CI/CD pipelines and automated deployments</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Platforms</h2>
            <p className="tech-list">AWS · Azure · Google Cloud · Kubernetes · Docker · Terraform · CloudFormation · Jenkins · GitHub Actions</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Modernize Your Cloud Infrastructure?</h2>
            <p>Let's build cloud infrastructure that scales with your business. Book a consultation with our cloud architects.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
