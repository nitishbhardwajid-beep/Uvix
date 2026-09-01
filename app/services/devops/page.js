import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'DevOps Engineering & CI/CD — Uvix Technologies',
  description: 'DevOps consulting, CI/CD pipeline automation, and infrastructure as code. Streamline deployment and operations.',
  canonical: 'https://uvix.in/services/devops',
};

export default function DevOpsPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="DevOps Engineering" intro="Automate deployment and operations">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We build DevOps practices and infrastructure that enable fast, reliable deployments. From CI/CD pipelines to infrastructure as code, we automate your path to production.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Deployment Speed:</strong> Ship code to production 10x faster with automation</li>
              <li><strong>Reliability:</strong> Automated testing and rollback reduce production incidents</li>
              <li><strong>Team Efficiency:</strong> Infrastructure automation frees teams to focus on features</li>
              <li><strong>Observability:</strong> Comprehensive monitoring and alerting catch issues early</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Current State Assessment</h3>
                <p>Evaluate existing deployment practices and identify bottlenecks.</p>
              </div>
              <div className="step">
                <h3>2. CI/CD Pipeline Design</h3>
                <p>Design automated build, test, and deployment pipelines.</p>
              </div>
              <div className="step">
                <h3>3. Infrastructure as Code</h3>
                <p>Implement infrastructure automation with Terraform, CloudFormation, or Ansible.</p>
              </div>
              <div className="step">
                <h3>4. Monitoring & Optimization</h3>
                <p>Set up observability, alerting, and continuous optimization.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>DevOps Services</h2>
            <ul className="use-cases">
              <li>CI/CD pipeline setup and optimization</li>
              <li>Infrastructure as Code (Terraform, CloudFormation, Ansible)</li>
              <li>Container orchestration with Docker and Kubernetes</li>
              <li>Automated testing and quality gates</li>
              <li>Blue-green and canary deployments</li>
              <li>Monitoring, logging, and alerting setup</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Tools</h2>
            <p className="tech-list">Jenkins · GitHub Actions · GitLab CI · Terraform · Ansible · Docker · Kubernetes · CloudFormation · ELK · Prometheus</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Automate Your DevOps?</h2>
            <p>Let's build DevOps practices that enable fast, reliable deployments. Book a consultation with our DevOps engineers.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
