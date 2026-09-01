import Link from 'next/link';
import HeroCanvas from './components/HeroCanvas';
import SiteLayout from './components/SiteLayout';
import TechnologyIcon from './components/TechnologyIcon';
import { aiMlTechGroup, aiMlTopCapabilities, cloudDataTechGroup, featuredStack, heroStats, industries, pageMetadata, processSteps, services, technologyGroups, testimonials } from './data/siteContent';

export const metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <SiteLayout>
      <section id="hero">
        <HeroCanvas />
        <div className="hero-eyebrow">
          <span className="pulse-dot" />
          AI Engineering & Cloud Solutions
        </div>
        <h1 className="hero-title">
          Build Reliable AI Systems<br />with Applied Machine Learning
        </h1>
        <p className="hero-sub">
          We design, build, and deploy production ML systems and cloud platforms that improve operational KPIs and integrate with your product roadmap.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-primary">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/services" className="btn-ghost">Explore Services</Link>
        </div>
        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services">
        <div className="services-head">
          <span className="section-tag">What We Build</span>
          <h2 className="section-title">Services Designed for<br />the AI Era</h2>
          <p className="section-sub">From strategy to deployment, every engagement is shaped by the intelligence your business needs to lead.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.name}</div>
              <p className="service-desc">{service.description}</p>
              <span className="service-pill">{service.pill}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="process">
        <div className="process-layout">
          <div>
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Structured for Speed.<br />Built for Longevity.</h2>
            <p className="section-sub">Our delivery model pairs deep technical expertise with embedded AI acceleration at every phase.</p>
            <div className="process-steps">
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
          </div>
          <div className="process-visual">
            <p className="pipeline-label">Live AI Pipeline</p>
            <div className="ai-loop">
                  <div className="ai-row">
                    <div className="ai-row-icon">🗃️</div>
                    <div className="ai-row-text" style={{ flex: 1 }}>
                      <strong>Data Ingestion</strong>
                      Reliable, validated pipelines for structured and unstructured sources
                      <div className="ai-bar"><div className="ai-bar-fill" style={{ animationDelay: '0s' }} /></div>
                    </div>
                  </div>
                  <div className="ai-row">
                    <div className="ai-row-icon">🔮</div>
                    <div className="ai-row-text" style={{ flex: 1 }}>
                      <strong>Model Inference</strong>
                      Low-latency inference with production-grade monitoring
                      <div className="ai-bar"><div className="ai-bar-fill" style={{ animationDelay: '.4s' }} /></div>
                    </div>
                  </div>
                  <div className="ai-row">
                    <div className="ai-row-icon">📡</div>
                    <div className="ai-row-text" style={{ flex: 1 }}>
                      <strong>Anomaly Detection</strong>
                      Automated alerts and observability for operational reliability
                      <div className="ai-bar"><div className="ai-bar-fill" style={{ animationDelay: '.8s', background: 'linear-gradient(90deg,#10B981,#06B6D4)' }} /></div>
                    </div>
                  </div>
                  <div className="ai-row">
                    <div className="ai-row-icon">🚀</div>
                    <div className="ai-row-text" style={{ flex: 1 }}>
                      <strong>Auto-Scaling</strong>
                      Elastic infrastructure that adapts to traffic with cost controls
                      <div className="ai-bar"><div className="ai-bar-fill" style={{ animationDelay: '1.2s', background: 'linear-gradient(90deg,var(--indigo),#A78BFA)' }} /></div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech">
        <div className="tech-head">
          <span className="section-tag">Our Stack</span>
          <h2 className="section-title">Best-in-Class Technology</h2>
          <p className="section-sub">We choose tools for your problem, not ours — but here is the stack we trust most.</p>
        </div>
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
      </section>

      <section id="industries">
        <div className="ind-layout">
          <div>
            <span className="section-tag">Industries</span>
            <h2 className="section-title">Deep Domain,<br />Wider Impact</h2>
            <p className="section-sub">We do not believe in generic AI. Our teams carry vertical expertise that makes every solution contextually intelligent.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn-primary">Talk to a Domain Expert →</Link>
            </div>
          </div>
          <div className="ind-cards">
            {industries.map((industry) => (
              <div className="ind-card" key={industry.name}>
                <div className="ind-card-icon">{industry.icon}</div>
                <div className="ind-card-name">{industry.name}</div>
                <p className="ind-card-desc">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="testi-head">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Outcomes, Not Promises</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>We measure success by the numbers our clients report back.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((item) => (
            <div className="testi-card" key={item.author}>
              <div className="stars">★★★★★</div>
              <p className="testi-quote">“{item.quote}”</p>
              <div className="testi-author">
                <div className="testi-avatar">{item.author.split(' ').map((part) => part[0]).join('').slice(0, 2)}</div>
                <div>
                  <div className="testi-name">{item.author}</div>
                  <div className="testi-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta">
        <h2 className="cta-title">Ready to Build<br />Something Intelligent?</h2>
        <p className="cta-sub">Tell us your challenge. In 48 hours, we will come back with a technical proposal — no fluff, no NDAs required upfront.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-primary">
            Book a Free Discovery Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/services" className="btn-ghost">View Case Studies</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
