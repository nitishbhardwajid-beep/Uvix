import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Data Engineering & ETL — Uvix Technologies',
  description: 'Data pipelines, ETL systems, and data warehouses. Build scalable data infrastructure for analytics and ML.',
  canonical: 'https://uvix.in/services/data-engineering',
};

export default function DataEngineeringPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Data Engineering" intro="Build scalable data infrastructure">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We build data pipelines and infrastructure that transform raw data into insights. From real-time streaming to batch processing, we handle the data engineering complexity so your analytics and ML teams can focus on insights.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Data-Driven Decisions:</strong> Transform raw data into accessible insights</li>
              <li><strong>ML Ready:</strong> Clean, structured data accelerates ML model development</li>
              <li><strong>Real-Time Insights:</strong> Stream processing enables real-time decision making</li>
              <li><strong>Cost Efficiency:</strong> Efficient data pipelines reduce infrastructure costs</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Data Assessment</h3>
                <p>Audit data sources, quality issues, and infrastructure needs.</p>
              </div>
              <div className="step">
                <h3>2. Pipeline Design</h3>
                <p>Design ETL/ELT pipelines optimized for your data volume and latency needs.</p>
              </div>
              <div className="step">
                <h3>3. Infrastructure Setup</h3>
                <p>Implement data warehouses, data lakes, and real-time streaming platforms.</p>
              </div>
              <div className="step">
                <h3>4. Data Governance</h3>
                <p>Implement quality checks, monitoring, and compliance controls.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Data Engineering Services</h2>
            <ul className="use-cases">
              <li>Batch ETL pipelines for data integration</li>
              <li>Real-time streaming with Kafka, Kinesis, Pub/Sub</li>
              <li>Data warehousing (Redshift, BigQuery, Snowflake)</li>
              <li>Data lakes and data lakehouses</li>
              <li>Data quality and validation frameworks</li>
              <li>Analytics and reporting infrastructure</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Platforms</h2>
            <p className="tech-list">Apache Spark · Apache Airflow · Kafka · Apache Flink · Snowflake · BigQuery · Redshift · dbt · Python · Scala</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Your Data Infrastructure?</h2>
            <p>Let's create data pipelines that turn data into competitive advantage. Book a consultation with our data engineers.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
