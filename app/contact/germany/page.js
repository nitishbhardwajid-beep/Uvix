import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';
import { germanyContact, contactDetails } from '../../shared/content';

export default function GermanyContactPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Contact" title="Germany Office" intro="We're happy to coordinate meetings and discovery calls for prospects in Germany.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div>
            <h3>Office</h3>
            <p>{germanyContact.address}</p>
            <p style={{ marginTop: '1rem' }}>{germanyContact.instructions}</p>
            <p style={{ marginTop: '1rem' }}>Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
          </div>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
