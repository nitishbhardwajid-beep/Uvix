import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import TechnologyIcon from '../components/TechnologyIcon';
import { featuredStack, technologyGroups } from '../data/siteContent';

export default function TechnologiesPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="Technologies"
        title="The tooling stack behind modern AI products"
        intro="We select the best fit for your problem, balancing speed, reliability, and future scale."
      >
        <div className="stack-highlight">
          <div className="stack-highlight-title">Featured stack</div>
          <div className="stack-highlight-grid">
            {featuredStack.map((tech) => (
              <div className="stack-highlight-card" key={tech.name}>
                <div className="tech-badge-icon">
                  <TechnologyIcon icon={tech.icon} />
                </div>
                <div className="stack-highlight-name">{tech.name}</div>
                <p className="stack-highlight-detail">{tech.detail}</p>
              </div>
            ))}
          </div>
        </div>
        {technologyGroups.map((group) => (
          <div className="tech-category" key={group.title}>
            <span className="tech-category-label">{group.title}</span>
            <div className="tech-grid">
              {group.items.map((tech) => (
                <div className="tech-badge" key={tech.name}>
                  <div className="tech-badge-icon">
                    <TechnologyIcon icon={tech.icon} />
                  </div>
                  <div className="tech-badge-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PageSection>
    </SiteLayout>
  );
}
