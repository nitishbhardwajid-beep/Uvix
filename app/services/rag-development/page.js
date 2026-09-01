import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'RAG Development — Retrieval-Augmented Generation — Uvix',
  description: 'Build RAG systems that combine LLMs with your knowledge base for accurate, contextual responses. Production-ready retrieval-augmented generation.',
  canonical: 'https://uvix.in/services/rag-development',
};

export default function RAGDevelopmentPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="RAG Development" intro="Connect LLMs to your data for accurate, grounded AI responses">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We build Retrieval-Augmented Generation (RAG) systems that combine the power of Large Language Models with your proprietary data. These systems answer questions with accuracy and context, reducing hallucinations and keeping responses grounded in your knowledge base.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Accuracy:</strong> Eliminate hallucinations by grounding responses in real data</li>
              <li><strong>Up-to-Date Information:</strong> Use latest data without expensive model retraining</li>
              <li><strong>Cost Reduction:</strong> Smaller models with RAG often outperform larger models with better ROI</li>
              <li><strong>Compliance:</strong> Full audit trail of source documents and reasoning</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Knowledge Base Analysis</h3>
                <p>Assess your documents, databases, and data sources for RAG integration.</p>
              </div>
              <div className="step">
                <h3>2. Vector Database Setup</h3>
                <p>Chunk and embed documents, configure vector stores (Pinecone, Weaviate, Milvus).</p>
              </div>
              <div className="step">
                <h3>3. RAG Pipeline Development</h3>
                <p>Build retrieval logic, ranking, and synthesis layers for accurate responses.</p>
              </div>
              <div className="step">
                <h3>4. Integration & Deployment</h3>
                <p>Deploy as APIs, chatbots, or embedded features in your applications.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>RAG Capabilities</h2>
            <ul className="use-cases">
              <li>Document Q&A systems for internal knowledge</li>
              <li>Customer support chatbots with company-specific context</li>
              <li>Search systems with semantic understanding</li>
              <li>Multi-document reasoning and synthesis</li>
              <li>Real-time data integration and updates</li>
              <li>Source attribution and fact verification</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">LangChain · LlamaIndex · GPT-4 · Claude · Llama · Vector DBs (Pinecone, Weaviate, Milvus) · Embeddings (OpenAI, BAAI) · Python</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Build Grounded AI?</h2>
            <p>Let's create RAG systems that leverage your data to deliver accurate, contextual AI responses. Book a consultation with our RAG specialists.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
