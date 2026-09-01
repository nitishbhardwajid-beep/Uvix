import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { pageMetadata, testimonials } from '../data/siteContent';

export const metadata = pageMetadata.clients;

export default function ClientsPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Clients"
        title="Outcomes that change how teams operate"
        intro="We are proud to partner with teams that expect measurable impact from every release."
      >
        <div className="testi-grid">
          {testimonials.filter(t => t.verified).length > 0 ? (
            testimonials.filter(t => t.verified).map((item) => (
              <div className="testi-card" key={item.author}>
                <div className="stars">★★★★★</div>
                <p className="testi-quote">“{item.quote}”</p>
                <div className="testi-author">
                  <div className="testi-avatar">{item.author.split(' ').map((part) => part[0]).join('').slice(0, 2)}</div>
                  <div>
                    <div className="testi-name">{item.author}</div>
                    <div className="testi-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', gridColumn: '1/-1' }}>
              <p style={{ color: 'var(--slate)' }}>We keep client references private until we have explicit permission to publish them. Request references or case studies via our contact page.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/contact" className="btn-primary">Request Client References</Link>
              </div>
            </div>
          )}
        </div>
        <div className="cta-actions" style={{ marginTop: '2rem' }}>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
