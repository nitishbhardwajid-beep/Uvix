import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import TechnologyIcon from '../components/TechnologyIcon';
import { aiMlTechGroup, aiMlTopCapabilities, cloudDataTechGroup, featuredStack, pageMetadata, technologyGroups } from '../data/siteContent';

export const metadata = pageMetadata.technologies;

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
        <div className="ai-ml-toplist">
          <div className="stack-highlight-title">Top 10 AI/ML capabilities</div>
          <div className="ai-ml-toplist-grid">
            {aiMlTopCapabilities.map((capability) => (
              <div className="ai-ml-toplist-card" key={capability.name}>
                <div className="ai-ml-toplist-name">{capability.name}</div>
                <p className="ai-ml-toplist-detail">{capability.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="tech-specialized-grid">
          <div className="tech-category tech-special-category">
            <span className="tech-category-label">{aiMlTechGroup.title}</span>
            <div className="tech-grid">
              {aiMlTechGroup.items.map((tech) => (
                <div className="tech-badge" key={tech.name}>
                  <div className="tech-badge-icon">
                    <TechnologyIcon icon={tech.icon} />
                  </div>
                  <div className="tech-badge-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-category tech-special-category">
            <span className="tech-category-label">{cloudDataTechGroup.title}</span>
            <div className="tech-grid">
              {cloudDataTechGroup.items.map((tech) => (
                <div className="tech-badge" key={tech.name}>
                  <div className="tech-badge-icon">
                    <TechnologyIcon icon={tech.icon} />
                  </div>
                  <div className="tech-badge-name">{tech.name}</div>
                </div>
              ))}
            </div>
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
