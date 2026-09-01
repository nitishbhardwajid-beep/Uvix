import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Machine Learning Development & MLOps — Uvix',
  description: 'Custom ML model development, training, and production deployment. End-to-end machine learning solutions from data to inference.',
  canonical: 'https://uvix.in/services/machine-learning',
};

export default function MachineLearningPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Machine Learning" intro="Build and scale predictive models for production">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We design, build, and deploy machine learning models that solve real business problems. From classification and regression to clustering and anomaly detection, we handle the entire ML lifecycle from data preparation through model monitoring.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Predictive Insights:</strong> Anticipate customer behavior, market trends, and operational issues</li>
              <li><strong>Automation:</strong> Automate decision-making at scale with consistent accuracy</li>
              <li><strong>Competitive Edge:</strong> Leverage data to make smarter business decisions faster</li>
              <li><strong>ROI Focused:</strong> We measure success by business impact, not accuracy metrics</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Problem Definition & Scoping</h3>
                <p>Understand business objectives and define success metrics aligned with KPIs.</p>
              </div>
              <div className="step">
                <h3>2. Data Engineering & Feature Work</h3>
                <p>Build data pipelines, engineer features, and prepare datasets for modeling.</p>
              </div>
              <div className="step">
                <h3>3. Model Development & Optimization</h3>
                <p>Train multiple models, tune hyperparameters, and select the best performer.</p>
              </div>
              <div className="step">
                <h3>4. Deployment & Monitoring</h3>
                <p>Deploy to production, implement MLOps practices, and monitor model performance.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>ML Model Types</h2>
            <ul className="use-cases">
              <li>Classification models for predicting categories or outcomes</li>
              <li>Regression models for price forecasting and trend prediction</li>
              <li>Clustering for customer segmentation and anomaly detection</li>
              <li>Time series forecasting for demand and resource planning</li>
              <li>Recommendation systems for personalization</li>
              <li>Ensemble methods combining multiple models for accuracy</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">Python · PyTorch · TensorFlow · scikit-learn · XGBoost · Pandas · NumPy · MLflow · Weights & Biases · Kubeflow</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Production ML Systems?</h2>
            <p>Let's create ML solutions that drive measurable business value. Book a consultation with our ML engineers.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
