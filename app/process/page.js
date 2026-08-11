import SiteLayout from '../components/SiteLayout';
import PageSection from '../components/PageSection';
import { pageMetadata, processSteps } from '../data/siteContent';

export const metadata = pageMetadata.process;

export default function ProcessPage() {
  return (
    <SiteLayout>
      <PageSection
        eyebrow="How We Work"
        title="A structured delivery model that stays fast and dependable"
        intro="We blend strategic thinking, rapid prototyping, and disciplined execution so your roadmap stays clear from day one."
      >
        <div className="process-steps page-steps">
          {processSteps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-num">{step.number}</div>
              <div className="step-body">
                <h4>{step.title}</h4>
                <p>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </SiteLayout>
  );
}
