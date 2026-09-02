export const pageMetadata = {
  home: {
    title: 'Uvix Technologies — AI-Powered IT Services & Intelligent Solutions',
    description: 'Enterprise AI & ML engineering, cloud infrastructure, and intelligent automation. Custom LLM products, model development, and MLOps pipelines.',
  },
  services: {
    title: 'Services — Uvix Technologies | AI & Cloud Solutions',
    description: 'AI & Machine Learning · Cloud Infrastructure · Cybersecurity · Data Engineering · Product Development. Enterprise-grade solutions.',
  },
  technologies: {
    title: 'Technology Stack — Uvix Technologies | Next.js · Python · AWS',
    description: 'Modern tech stack: Next.js, Python, FastAPI, .NET, PyTorch, TensorFlow, AWS, Azure, Oracle. Enterprise tools for AI products.',
  },
  process: {
    title: 'How We Work — Uvix Technologies | Agile AI Delivery',
    description: 'Delivery model: Discovery & Audit → Architecture & Prototyping → Agile Delivery → Monitor & Scale. Fast, reliable, intelligent.',
  },
  industries: {
    title: 'Industries — Uvix Technologies | FinTech · HealthTech · AI',
    description: 'Vertical expertise: FinTech, HealthTech, Retail, Manufacturing, EdTech, Logistics. Deep domain knowledge for contextual AI.',
  },
  clients: {
    title: 'Clients & Case Studies — Uvix Technologies',
    description: 'Trusted by enterprise clients globally. See how we transformed businesses with AI and intelligent automation.',
  },
  contact: {
    title: 'Get Started — Uvix Technologies | Free Discovery Call',
    description: 'Book a free 30-min discovery call. No NDAs required. In 48 hours, a technical proposal for your AI transformation.',
  },
};

export const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'How We Work' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/industries', label: 'Industries' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Get Started' },
];

export const heroStats = [
  { value: 'Multiple', label: 'Projects Delivered' },
  { value: 'High', label: 'Client Retention' },
  { value: 'Experienced', label: 'AI Engineers' },
  { value: 'Global', label: 'Countries Served' },
];

export const services = [
  {
    icon: '🧠',
    name: 'AI & Machine Learning',
    description: 'Custom model development, fine-tuning, and MLOps pipelines. We build LLM-powered products, computer vision systems, and predictive analytics engines.',
    pill: 'LLMs · MLOps · NLP',
  },
  {
    icon: '☁️',
    name: 'Cloud Infrastructure',
    description: 'Multi-cloud architecture on AWS, Azure, and GCP. We design resilient, auto-scaling environments and manage DevOps pipelines from day one.',
    pill: 'AWS · Azure · GCP',
  },
  {
    icon: '🔒',
    name: 'Cybersecurity & AI Defense',
    description: 'Zero-trust implementations, threat detection with ML, SOC automation, and compliance frameworks including SOC 2, ISO 27001, and GDPR.',
    pill: 'Zero-Trust · SIEM · Compliance',
  },
  {
    icon: '⚡',
    name: 'Intelligent Automation',
    description: 'RPA enhanced with AI decision-making, document intelligence, and agentic workflows that reduce manual effort by up to 80%.',
    pill: 'RPA · Agents · Document AI',
  },
  {
    icon: '📊',
    name: 'Data Engineering',
    description: 'End-to-end data platform design — lakehouses, real-time streaming, semantic layers, and AI-ready data products that power confident decisions.',
    pill: 'Lakehouse · Kafka · dbt',
  },
  {
    icon: '📱',
    name: 'Product Engineering',
    description: 'Full-stack development of AI-native web and mobile applications, from Next.js frontends to distributed backends and vector-database-powered search.',
    pill: 'Next.js · FastAPI · Vector DB',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & AI Audit',
    copy: 'We map your current stack, data landscape, and business goals to identify the highest-leverage AI integration points.',
  },
  {
    number: '02',
    title: 'Architecture & Prototyping',
    copy: 'A working prototype in two weeks — not a deck. We validate the technical approach early and iterate before scale.',
  },
  {
    number: '03',
    title: 'Agile Delivery',
    copy: 'Two-week sprints, weekly demos, continuous CI/CD. You see progress every step, not just at the finish line.',
  },
  {
    number: '04',
    title: 'Monitor, Optimise & Scale',
    copy: 'Post-launch we run model monitoring, infrastructure cost optimization, and AI governance reviews quarterly.',
  },
];

export const aiMlTopCapabilities = [
  { name: 'LLM Applications', detail: 'Custom copilots, chat assistants, and domain-specific AI agents.' },
  { name: 'RAG Systems', detail: 'Grounded answers by connecting models to your internal knowledge and data.' },
  { name: 'NLP Workflows', detail: 'Summarization, extraction, classification, and multilingual understanding.' },
  { name: 'Computer Vision', detail: 'Image recognition, OCR, anomaly detection, and visual inspection systems.' },
  { name: 'Predictive Analytics', detail: 'Forecasting, churn modelling, risk scoring, and recommendation engines.' },
  { name: 'Speech & Audio AI', detail: 'Voice assistants, transcription, conversation intelligence, and voicebots.' },
  { name: 'Multimodal AI', detail: 'Combining text, images, video, and structured data in one experience.' },
  { name: 'MLOps Pipelines', detail: 'Model training, deployment, monitoring, experiment tracking, and governance.' },
  { name: 'Agentic Automation', detail: 'Autonomous workflows that reason, decide, and trigger actions safely.' },
  { name: 'Responsible AI', detail: 'Bias monitoring, observability, security controls, and compliance guardrails.' },
];

export const aiMlTechGroup = {
  title: 'AI / ML',
  items: [
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'TensorFlow', icon: 'tensorflow' },
    { name: 'Hugging Face', icon: 'huggingface' },
    { name: 'OpenAI APIs', icon: 'openai' },
    { name: 'LangChain', icon: 'langchain' },
    { name: 'LlamaIndex', icon: 'llamaindex' },
    { name: 'scikit-learn', icon: 'scikitlearn' },
    { name: 'MLflow', icon: 'mlflow' },
    { name: 'ONNX', icon: 'onnx' },
    { name: 'Vector DBs', icon: 'vector' },
  ],
};

export const cloudDataTechGroup = {
  title: 'Cloud & Data',
  items: [
    { name: 'AWS', icon: 'aws' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Google Cloud', icon: 'gcp' },
    { name: 'Oracle', icon: 'oracle' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'Docker', icon: 'docker' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'SQL Server', icon: 'sqlserver' },
    { name: 'Redis', icon: 'redis' },
    { name: 'Git / GitHub', icon: 'git' },
  ],
};

export const technologyGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: '.NET', icon: 'dotnet' },
      { name: '.NET Core', icon: 'dotnet' },
      { name: 'ASP.NET', icon: 'aspnet' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
];

export const featuredStack = [
  { name: 'Next.js', icon: 'nextjs', detail: 'Frontend platform for fast, SEO-friendly product experiences' },
  { name: 'Python', icon: 'python', detail: 'Core engine for automation, analytics, and AI services' },
  { name: '.NET', icon: 'dotnet', detail: 'Enterprise-ready backend for secure, scalable business systems' },
  { name: 'AWS', icon: 'aws', detail: 'Reliable cloud foundation for scalable infrastructure' },
  { name: 'PyTorch', icon: 'pytorch', detail: 'Model development and experimentation for intelligent systems' },
];

export const industries = [
  { icon: '🏦', name: 'FinTech', description: 'Fraud detection, credit scoring, algorithmic trading, and RegTech automation.' },
  { icon: '🏥', name: 'HealthTech', description: 'Clinical NLP, medical imaging AI, patient flow optimization, HIPAA-compliant platforms.' },
  { icon: '🛒', name: 'Retail & E-commerce', description: 'AI personalisation, demand forecasting, visual search, and dynamic pricing engines.' },
  { icon: '🏭', name: 'Manufacturing', description: 'Predictive maintenance, quality inspection with vision AI, and smart supply chain.' },
  { icon: '📚', name: 'EdTech', description: 'Adaptive learning engines, AI tutors, automated assessment, and learning analytics.' },
  { icon: '🚚', name: 'Logistics', description: 'Route optimisation, last-mile AI, warehouse automation, and real-time visibility.' },
];

export const testimonials = [
  {
    quote: 'The team built our fraud detection pipeline in 6 weeks. False positives dropped 73% and our compliance team finally stopped firefighting.',
    author: 'Arjun R.',
    role: 'Hyderabad, IN',
    verified: false,
    source: '',
  },
  {
    quote: 'We were drowning in unstructured medical records. Their clinical NLP system now extracts structured data with 96% accuracy.',
    author: 'Govinda S.',
    role: 'Canada',
    verified: false,
    source: '',
  },
  {
    quote: 'Migrated our legacy monolith to a Kubernetes microservices architecture with zero downtime. The technical depth is unlike any vendor I have worked with.',
    author: 'Abhishek',
    role: 'Germany',
    verified: false,
    source: '',
  },
];
