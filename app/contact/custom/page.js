import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';
import ContactForm from '../../components/ContactForm';
import { contactDetails } from '../../shared/content';

export default function CustomContactPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Contact"
        title="Contact Us"
        intro="We will get in touch with you shortly."
      >
        <div className="contact-layout">
          <div>
            <ContactForm />
          </div>

          <aside>
            <div style={{ padding: '1.5rem', border: '1px solid var(--slate-l)', borderRadius: 6, background: '#fff' }}>
              <h3>BARYONS SOFTWARE SOLUTIONS</h3>
              <address style={{ whiteSpace: 'pre-line', marginTop: '0.75rem' }}>
                Cabin #9, 4th Floor, AJ Coworking and Study Space,
                ASR Avenue, Kasavanahalli, Choodasandra
                Bangalore – 560035, Karnataka, India
              </address>

              <p style={{ marginTop: '1rem' }}><strong>Phone:</strong><br />{contactDetails.phone}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Email:</strong><br /><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
              <p style={{ marginTop: '0.5rem' }}><strong>Website:</strong><br /><a href="https://uvix.in">uvix.in</a></p>
            </div>
          </aside>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
