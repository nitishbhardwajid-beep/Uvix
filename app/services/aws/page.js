import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'AWS Services & Consulting — Amazon Web Services Solutions — Uvix',
  description: 'AWS architecture, migration, and optimization. Expert AWS consulting for startups to enterprise deployments.',
  canonical: 'https://uvix.co.in/services/aws',
};

export default function AWSPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="AWS Services" intro="Expert AWS architecture and optimization">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We provide expert AWS consulting, from architecture design to cost optimization. As AWS specialists with deep hands-on experience, we help you leverage AWS to its full potential.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Cost Efficiency:</strong> Reduce AWS bills by 50%+ with optimization strategies</li>
              <li><strong>Scalability:</strong> Design architectures that scale from 0 to millions of users</li>
              <li><strong>Security:</strong> Enterprise security with AWS best practices and compliance</li>
              <li><strong>Performance:</strong> Optimize for speed with AWS services and caching strategies</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. AWS Assessment</h3>
                <p>Audit current AWS usage, identify optimization opportunities and cost savings.</p>
              </div>
              <div className="step">
                <h3>2. Architecture Design</h3>
                <p>Design AWS infrastructure for your specific requirements and scale.</p>
              </div>
              <div className="step">
                <h3>3. Implementation & Migration</h3>
                <p>Deploy new infrastructure or migrate existing workloads to AWS.</p>
              </div>
              <div className="step">
                <h3>4. Optimization & Support</h3>
                <p>Continuously optimize for cost, performance, and security.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>AWS Services We Specialize In</h2>
            <ul className="use-cases">
              <li><strong>Compute:</strong> EC2, Lambda, ECS, EKS for serverless and containerized workloads</li>
              <li><strong>Storage:</strong> S3, EBS, RDS, DynamoDB for data storage and databases</li>
              <li><strong>Networking:</strong> VPC, CloudFront, ALB for global delivery and security</li>
              <li><strong>Analytics:</strong> Redshift, Athena, QuickSight for data insights</li>
              <li><strong>AI/ML:</strong> SageMaker, Rekognition, Textract for AI services</li>
              <li><strong>Monitoring:</strong> CloudWatch, X-Ray for observability and debugging</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>AWS Certifications & Expertise</h2>
            <p className="tech-list">AWS Solutions Architect · AWS DevOps Engineer · AWS SysOps Administrator · Deep expertise across AWS services</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Optimize Your AWS Infrastructure?</h2>
            <p>Let's reduce costs and improve performance on AWS. Book a consultation with our AWS specialists.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
