export const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'How We Work' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/industries', label: 'Industries' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Get Started' },
];

export const heroStats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '40+', label: 'AI Engineers' },
  { value: '12', label: 'Countries Served' },
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

export const technologyGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
    ],
  },
  {
    title: 'Cloud & Data',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Google Cloud', icon: 'gcp' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Docker', icon: 'docker' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
];

export const featuredStack = [
  { name: 'Next.js', icon: 'nextjs', detail: 'Frontend platform for fast, SEO-friendly product experiences' },
  { name: 'Python', icon: 'python', detail: 'Core engine for automation, analytics, and AI services' },
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
    author: 'Arjun Reddy',
    role: 'CTO, CapitalFlow Fintech',
  },
  {
    quote: 'We were drowning in unstructured medical records. Their clinical NLP system now extracts structured data with 96% accuracy.',
    author: 'Dr. Sneha Kumar',
    role: 'Head of Digital, MedNova India',
  },
  {
    quote: 'Migrated our legacy monolith to a Kubernetes microservices architecture with zero downtime. The technical depth is unlike any vendor I have worked with.',
    author: 'James Molloy',
    role: 'VP Engineering, LogiFlow UK',
  },
];
