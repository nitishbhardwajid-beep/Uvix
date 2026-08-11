import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'LLM Development & Fine-tuning — Uvix Technologies',
  description: 'Custom Large Language Model development, fine-tuning, and deployment. GPT-4, Claude, Llama, and open-source LLMs tailored to your domain.',
  canonical: 'https://uvix.co.in/services/llm-development',
};

export default function LLMDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="LLM Development" intro="Build proprietary language models tailored to your business domain">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We develop, fine-tune, and deploy custom Large Language Models optimized for your specific use cases. From domain-specific models to multi-modal applications, we leverage cutting-edge LLM technology to create intelligent systems that understand your business context.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Domain Expertise:</strong> Fine-tuned models outperform generic APIs by 60%+ on your specific tasks</li>
              <li><strong>Cost Efficiency:</strong> Smaller, specialized models reduce inference costs by 70%+ vs. commercial APIs</li>
              <li><strong>Data Privacy:</strong> Keep sensitive data on-premise with self-hosted LLMs</li>
              <li><strong>Proprietary Advantage:</strong> Create unique AI capabilities competitors can't easily replicate</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Model Selection & Strategy</h3>
                <p>Evaluate foundation models (GPT-4, Claude, Llama) and design the optimal architecture for your use case.</p>
              </div>
              <div className="step">
                <h3>2. Data Preparation & Curation</h3>
                <p>Prepare high-quality training data, handle annotation, and ensure dataset quality for fine-tuning.</p>
              </div>
              <div className="step">
                <h3>3. Fine-tuning & Optimization</h3>
                <p>Fine-tune models on your domain data, optimize prompts, and implement retrieval augmentation (RAG).</p>
              </div>
              <div className="step">
                <h3>4. Deployment & Monitoring</h3>
                <p>Deploy models to production with API endpoints, scale for demand, and monitor performance metrics.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>LLM Specializations</h2>
            <ul className="use-cases">
              <li><strong>Model Fine-tuning:</strong> GPT-3.5, Claude, Llama 2, Mistral fine-tuning</li>
              <li><strong>Prompt Engineering:</strong> Optimized prompts for consistency and accuracy</li>
              <li><strong>RAG Systems:</strong> Retrieval-Augmented Generation for knowledge integration</li>
              <li><strong>Multi-modal Models:</strong> Vision-language models for image understanding</li>
              <li><strong>LLM Deployment:</strong> vLLM, Ollama, TGI for production scaling</li>
              <li><strong>Guardrails & Safety:</strong> Content filtering, fact verification, output validation</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">GPT-4 · Claude · Llama · Mistral · Hugging Face · LangChain · LlamaIndex · PEFT · LoRA · vLLM · Python</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Custom LLM Applications?</h2>
            <p>Let's create a language model that understands your domain better than generic APIs. Book a consultation with our LLM specialists.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
