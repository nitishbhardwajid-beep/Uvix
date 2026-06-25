import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { services } from '../data/siteContent';

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Services"
        title="AI-first delivery for ambitious teams"
        intro="We build resilient digital systems that combine automation, cloud architecture, and intelligent product experiences."
      >
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.name}</div>
              <p className="service-desc">{service.description}</p>
              <span className="service-pill">{service.pill}</span>
            </div>
          ))}
        </div>
        <div className="cta-actions" style={{ marginTop: '2rem' }}>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
