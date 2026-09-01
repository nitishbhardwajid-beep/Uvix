import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';
import { caseStudies } from '../../../data/caseStudies';

export default function CaseStudiesPage() {
  // Prepare JSON-LD for any case studies that include a public source link.
  const verifiedStudies = caseStudies.filter(cs => cs.source && cs.source.trim().length > 0);
  const ld = verifiedStudies.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': verifiedStudies.map((cs, i) => ({
      '@type': 'Article',
      'position': i + 1,
      'headline': cs.title,
      'description': cs.summary,
      'url': cs.source,
    })),
  } : null;
  return (
    <SiteLayout>
      {ld && <script type="application/ld+json">{JSON.stringify(ld)}</script>}
      <PageSection eyebrow="Case Studies" title="Verified outcomes" intro="Case studies should include client approval and public sources. Fill `source` links in the data file before promoting.">
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {caseStudies.map((cs) => (
            <article key={cs.id} className="case-card" style={{ padding: '1rem', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3>{cs.title}</h3>
              <p style={{ color: 'var(--slate)' }}>{cs.summary}</p>
              <ul>
                {cs.outcomes.map((o) => (<li key={o}>{o}</li>))}
              </ul>
              {cs.source ? (
                <Link href={cs.source} className="btn-ghost">View Source</Link>
              ) : (
                <div style={{ color: 'var(--slate)' }}>
                  <p style={{ margin: 0 }}>Source: <strong>Not yet provided</strong></p>
                  <p style={{ marginTop: '0.5rem', color: 'var(--slate-l)' }}>{cs.notes}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </PageSection>
    </SiteLayout>
  );
}
