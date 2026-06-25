import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { contactDetails } from '../shared/content';

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Contact"
        title="Let’s shape the next phase of your platform"
        intro="Share your challenge and we will propose the right path forward — from strategy to delivery."
      >
        <div className="contact-card">
          <p>Reach us at <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> for a discovery conversation.</p>
          <div className="cta-actions" style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
            <a href={`mailto:${contactDetails.email}`} className="btn-primary" aria-label="Book a free discovery call via email">{contactDetails.ctaLabel}</a>
            <Link href="/services" className="btn-ghost">View Services</Link>
          </div>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
