/** Global site data — edit here, used everywhere. */
export const site = {
  name: 'Yacine Hamitou',
  url: 'https://yacineham.github.io',
  email: 'ya.hamitou@gmail.com',
  github: 'https://github.com/YacineHam',
  linkedin: 'https://www.linkedin.com/in/yacine-hamitou-29206817b/',
  /** One PDF per locale, served from /public. */
  cv: {
    fr: { path: '/cv-yacine-hamitou.pdf', filename: 'CV-Yacine-Hamitou.pdf' },
    en: { path: '/resume-yacine-hamitou.pdf', filename: 'Resume-Yacine-Hamitou.pdf' },
  },
  stack: [
    'Python',
    'FastAPI',
    'Django / DRF',
    'LangGraph',
    'LangChain',
    'Ollama',
    'RAG',
    'Elasticsearch (BM25, kNN)',
    'PostgreSQL',
    'GCP',
    'Docker',
    'Vue.js',
  ],
} as const;
