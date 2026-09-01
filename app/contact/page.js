import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { pageMetadata } from '../data/siteContent';
import { contactDetails } from '../shared/content';
import ContactForm from '../components/ContactForm';

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Contact"
        title="Let’s shape the next phase of your platform"
        intro="Share your challenge and we will propose the right path forward — from strategy to delivery."
      >
        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '2rem', alignItems: 'start' }}>
          <div className="contact-card">
            <p>Reach us at <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> for a discovery conversation.</p>
            <p style={{ marginTop: '1rem' }}>Prefer a meeting? Book a free 30-minute discovery call and we'll prepare a short technical proposal.</p>
            <div className="cta-actions" style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
              <a href={`mailto:${contactDetails.email}`} className="btn-primary" aria-label="Book a free discovery call via email">{contactDetails.ctaLabel}</a>
              <Link href="/services" className="btn-ghost">View Services</Link>
            </div>
          </div>

          <aside>
            <h3 style={{ marginBottom: '0.75rem' }}>Contact Us</h3>
            <ContactForm />
          </aside>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
