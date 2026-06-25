import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { industries } from '../data/siteContent';

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Industries"
        title="Domain-specific thinking for meaningful outcomes"
        intro="Every engagement is shaped by the realities of your sector, your users, and your data."
      >
        <div className="ind-cards">
          {industries.map((industry) => (
            <div className="ind-card" key={industry.name}>
              <div className="ind-card-icon">{industry.icon}</div>
              <div className="ind-card-name">{industry.name}</div>
              <p className="ind-card-desc">{industry.description}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </SiteLayout>
  );
}
