import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';
import { caseStudies } from '../../../data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Case Studies" title="Verified outcomes" intro="Case studies should include client approval and public sources. Fill `source` links in the data file before promoting.">
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {caseStudies.map((cs) => (
            <article key={cs.id} className="case-card" style={{ padding: '1rem', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3>{cs.title}</h3>
              <p style={{ color: 'var(--slate)' }}>{cs.summary}</p>
              <ul>
                {cs.outcomes.map((o) => (<li key={o}>{o}</li>))}
              </ul>
              {cs.source ? <Link href={cs.source} className="btn-ghost">View Source</Link> : <span style={{ color: 'var(--slate-l)' }}>Source: <strong>Not yet provided</strong></span>}
            </article>
          ))}
        </div>
      </PageSection>
    </SiteLayout>
  );
}
