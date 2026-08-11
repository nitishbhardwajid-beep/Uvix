import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'AI Development Services — Uvix Technologies',
  description: 'Custom AI solutions, intelligent automation, and ML-powered products. Enterprise-grade AI development from concept to production.',
  canonical: 'https://uvix.co.in/services/ai-development',
};

export default function AIDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="AI Development" intro="Build intelligent systems that solve complex business problems">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We architect and deliver custom AI solutions that integrate seamlessly into your business. From intelligent document processing to predictive analytics, we transform raw data into actionable intelligence.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Competitive Advantage:</strong> AI-powered features differentiate your product in crowded markets</li>
              <li><strong>Cost Reduction:</strong> Automate manual processes and reduce operational overhead by 40-60%</li>
              <li><strong>Faster Time to Market:</strong> Accelerate product development with pre-built AI frameworks</li>
              <li><strong>Better Decisions:</strong> Data-driven insights enable smarter business strategy</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Discovery & Assessment</h3>
                <p>We analyze your data, processes, and business objectives to identify high-impact AI opportunities.</p>
              </div>
              <div className="step">
                <h3>2. Prototype & Validation</h3>
                <p>Rapid prototyping to validate technical feasibility and business value before full development.</p>
              </div>
              <div className="step">
                <h3>3. Production Deployment</h3>
                <p>We handle model training, infrastructure setup, and deployment with comprehensive monitoring.</p>
              </div>
              <div className="step">
                <h3>4. Monitor & Scale</h3>
                <p>Continuous model performance monitoring, retraining, and scaling as your data evolves.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">PyTorch · TensorFlow · Hugging Face · OpenAI APIs · LangChain · scikit-learn · MLflow · Python · FastAPI</p>
          </section>

          <section className="service-section">
            <h2>Use Cases</h2>
            <ul className="use-cases">
              <li>Predictive analytics for demand forecasting</li>
              <li>Intelligent document processing and extraction</li>
              <li>Customer churn prediction and retention</li>
              <li>Recommendation engines for personalization</li>
              <li>Anomaly detection for fraud/compliance</li>
              <li>Natural language processing for customer insights</li>
            </ul>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Intelligent Solutions?</h2>
            <p>Let's discuss how AI can transform your business. Book a free 30-min strategy session with our AI architects.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
