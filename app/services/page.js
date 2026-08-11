import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { pageMetadata, services } from '../data/siteContent';

export const metadata = pageMetadata.services;

const serviceRoutes = [
  { name: 'AI Development', slug: 'ai-development', icon: '🧠' },
  { name: 'LLM Development', slug: 'llm-development', icon: '🔤' },
  { name: 'RAG Development', slug: 'rag-development', icon: '🔍' },
  { name: 'AI Agents', slug: 'ai-agents', icon: '🤖' },
  { name: 'Machine Learning', slug: 'machine-learning', icon: '📊' },
  { name: 'Computer Vision', slug: 'computer-vision', icon: '👁️' },
  { name: 'SaaS Development', slug: 'saas-development', icon: '☁️' },
  { name: 'Web Development', slug: 'web-development', icon: '🌐' },
  { name: 'Mobile Development', slug: 'mobile-development', icon: '📱' },
  { name: 'Cloud Engineering', slug: 'cloud-engineering', icon: '🏗️' },
  { name: 'AWS', slug: 'aws', icon: '☁️' },
  { name: 'DevOps', slug: 'devops', icon: '⚙️' },
  { name: 'Kubernetes', slug: 'kubernetes', icon: '🐳' },
  { name: 'Data Engineering', slug: 'data-engineering', icon: '📈' },
  { name: 'Cybersecurity', slug: 'cybersecurity', icon: '🔒' },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Services"
        title="15 Specialized Services"
        intro="From AI & ML to cloud infrastructure, we deliver enterprise-grade solutions across the full technology stack."
      >
        <div className="services-grid-detailed">
          {serviceRoutes.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="service-card-link">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>Expert development and consulting →</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="services-overview" style={{ marginTop: '3rem' }}>
          <h2>Our Service Categories</h2>
          <div className="service-categories">
            <div className="category">
              <h3>🧠 AI & Machine Learning</h3>
              <p>Build intelligent systems with custom AI development, LLMs, RAG systems, autonomous agents, computer vision, and ML models.</p>
              <ul className="service-links">
                <li><Link href="/services/ai-development">AI Development</Link></li>
                <li><Link href="/services/llm-development">LLM Development</Link></li>
                <li><Link href="/services/rag-development">RAG Systems</Link></li>
                <li><Link href="/services/ai-agents">AI Agents</Link></li>
                <li><Link href="/services/machine-learning">Machine Learning</Link></li>
                <li><Link href="/services/computer-vision">Computer Vision</Link></li>
              </ul>
            </div>
            <div className="category">
              <h3>🌐 Product Development</h3>
              <p>Full-stack product engineering for SaaS, web, and mobile applications using modern technologies and best practices.</p>
              <ul className="service-links">
                <li><Link href="/services/saas-development">SaaS Development</Link></li>
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/services/mobile-development">Mobile Development</Link></li>
              </ul>
            </div>
            <div className="category">
              <h3>☁️ Cloud & Infrastructure</h3>
              <p>Cloud architecture, AWS expertise, DevOps automation, Kubernetes orchestration, and data engineering solutions.</p>
              <ul className="service-links">
                <li><Link href="/services/cloud-engineering">Cloud Engineering</Link></li>
                <li><Link href="/services/aws">AWS Services</Link></li>
                <li><Link href="/services/devops">DevOps Engineering</Link></li>
                <li><Link href="/services/kubernetes">Kubernetes</Link></li>
                <li><Link href="/services/data-engineering">Data Engineering</Link></li>
              </ul>
            </div>
            <div className="category">
              <h3>🔒 Security</h3>
              <p>Enterprise-grade cybersecurity, vulnerability assessments, compliance audits, and security-first architecture design.</p>
              <ul className="service-links">
                <li><Link href="/services/cybersecurity">Cybersecurity Services</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </PageSection>
    </SiteLayout>
  );
}
