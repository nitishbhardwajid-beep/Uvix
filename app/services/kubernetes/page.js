import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Kubernetes Administration & Optimization — Uvix',
  description: 'Kubernetes setup, scaling, security, and optimization. Enterprise Kubernetes for containerized applications.',
  canonical: 'https://uvix.in/services/kubernetes',
};

export default function KubernetesPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Kubernetes" intro="Scale containerized applications with Kubernetes">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We architect, deploy, and optimize Kubernetes clusters for production workloads. From small teams to enterprise scale, we handle the complexity of Kubernetes so you can focus on your application.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Scalability:</strong> Scale applications from single server to thousands of nodes</li>
              <li><strong>Reliability:</strong> Self-healing and automatic rollout/rollback capabilities</li>
              <li><strong>Resource Efficiency:</strong> Bin packing reduces infrastructure costs by 50-70%</li>
              <li><strong>Portability:</strong> Run same containers across clouds (AWS, Azure, GCP)</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Kubernetes Strategy</h3>
                <p>Determine cluster architecture, managed vs. self-hosted, and upgrade strategy.</p>
              </div>
              <div className="step">
                <h3>2. Cluster Setup & Configuration</h3>
                <p>Deploy and configure Kubernetes clusters with networking, storage, and security.</p>
              </div>
              <div className="step">
                <h3>3. Application Migration</h3>
                <p>Containerize applications and migrate workloads to Kubernetes.</p>
              </div>
              <div className="step">
                <h3>4. Optimization & Operations</h3>
                <p>Optimize resource usage, implement cost controls, and handle day-2 operations.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Kubernetes Services</h2>
            <ul className="use-cases">
              <li>Kubernetes cluster deployment (EKS, GKE, AKS, self-hosted)</li>
              <li>Application containerization and Helm charts</li>
              <li>Network policies and service mesh (Istio, Linkerd)</li>
              <li>Storage provisioning and persistence</li>
              <li>Security hardening and RBAC setup</li>
              <li>Monitoring and logging (Prometheus, ELK, Datadog)</li>
              <li>Cost optimization and resource scaling</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Tools</h2>
            <p className="tech-list">Kubernetes · Docker · Helm · Istio · Linkerd · Prometheus · ELK Stack · ArgoCD · Kustomize</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Deploy Kubernetes?</h2>
            <p>Let's build a Kubernetes infrastructure that scales with your needs. Book a consultation with our Kubernetes experts.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
