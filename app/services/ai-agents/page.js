import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'AI Agent Development — Autonomous Intelligence — Uvix',
  description: 'Build autonomous AI agents that reason, plan, and take action. LLM-powered agents for workflow automation, customer service, and business processes.',
  canonical: 'https://uvix.in/services/ai-agents',
};

export default function AIAgentsPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="AI Agents" intro="Build autonomous agents that think, plan, and act">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We develop AI agents — autonomous systems that use language models to reason, plan, and execute actions. These agents integrate with your tools and APIs to handle complex workflows, customer interactions, and business processes with minimal human intervention.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Autonomous Workflows:</strong> Agents handle multi-step processes without human oversight</li>
              <li><strong>24/7 Operations:</strong> Always-on AI assistance for customers and internal processes</li>
              <li><strong>Scalability:</strong> Handle unlimited volume without hiring more staff</li>
              <li><strong>Consistency:</strong> Repeatable, predictable AI behavior across interactions</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Agent Design & Architecture</h3>
                <p>Define agent goals, tool integrations, and decision-making logic.</p>
              </div>
              <div className="step">
                <h3>2. Tool Integration</h3>
                <p>Connect agents to your APIs, databases, and business systems.</p>
              </div>
              <div className="step">
                <h3>3. Agent Training & Prompting</h3>
                <p>Fine-tune agent behavior, safety constraints, and error handling.</p>
              </div>
              <div className="step">
                <h3>4. Deployment & Orchestration</h3>
                <p>Deploy multi-agent systems with coordination and monitoring.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Agent Use Cases</h2>
            <ul className="use-cases">
              <li>Customer service agents handling support tickets and inquiries</li>
              <li>Sales agents qualifying leads and booking meetings</li>
              <li>Data analysis agents for business intelligence queries</li>
              <li>Content generation agents for marketing and documentation</li>
              <li>Workflow automation agents for business processes</li>
              <li>Research agents for information gathering and synthesis</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">LangChain Agents · AutoGPT · LlamaIndex · GPT-4 · Claude · Tool Integration · Memory Systems · Monitoring & Logging</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Autonomous AI Agents?</h2>
            <p>Let's create agents that automate your most complex workflows. Book a consultation with our AI agent architects.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
