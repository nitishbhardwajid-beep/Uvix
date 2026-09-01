import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Mobile App Development — iOS & Android Apps — Uvix',
  description: 'Native iOS, Android, and cross-platform mobile apps. User-focused mobile development for startup and enterprise apps.',
  canonical: 'https://uvix.in/services/mobile-development',
};

export default function MobileDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Mobile Development" intro="Build native and cross-platform mobile apps">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We develop high-performance mobile applications for iOS and Android. Whether native for optimal performance or cross-platform for efficiency, we build apps that users love and keep coming back to.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Market Reach:</strong> Mobile-first users are your primary audience</li>
              <li><strong>User Engagement:</strong> Apps have 10x higher engagement than web</li>
              <li><strong>Retention:</strong> Push notifications and offline features drive retention</li>
              <li><strong>Revenue:</strong> App monetization options (IAP, subscriptions) unlock new revenue</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. App Strategy & Design</h3>
                <p>Define app positioning, core features, and monetization strategy.</p>
              </div>
              <div className="step">
                <h3>2. Platform Selection</h3>
                <p>Choose native vs. cross-platform based on your requirements and timeline.</p>
              </div>
              <div className="step">
                <h3>3. Development & Testing</h3>
                <p>Build with device-optimized performance, extensive testing across devices.</p>
              </div>
              <div className="step">
                <h3>4. Launch & Growth</h3>
                <p>App Store optimization, analytics setup, and user acquisition strategy.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Mobile Development Options</h2>
            <ul className="use-cases">
              <li><strong>Native iOS:</strong> Swift with SwiftUI for optimal iOS experience</li>
              <li><strong>Native Android:</strong> Kotlin for modern Android development</li>
              <li><strong>Cross-Platform:</strong> React Native or Flutter for code sharing</li>
              <li>Offline-first architecture with local databases</li>
              <li>Push notifications and real-time updates</li>
              <li>App Store and Google Play optimization</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">Swift · SwiftUI · Kotlin · React Native · Flutter · Firebase · GraphQL · Node.js · PostgreSQL</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Your Mobile App?</h2>
            <p>Let's create a mobile app that drives engagement and growth. Book a consultation with our mobile developers.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
