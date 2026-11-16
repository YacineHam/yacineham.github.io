export type Locale = 'fr' | 'en';

export const ui = {
  fr: {
    'meta.title': 'Yacine Hamitou · Ingénieur IA, backend Python et pipelines LLM',
    'meta.description':
      "Ingénieur IA à Paris, 4 ans d'expérience en production : backends Python (FastAPI, Django), pipelines LLM (LangGraph, LangChain, Ollama) et recherche sémantique sur Elasticsearch. Disponible immédiatement.",
    'hero.role': 'Ingénieur IA · Backend Python, pipelines LLM, recherche sémantique',
    'hero.available': 'Disponible immédiatement · Paris, Île-de-France',
    'hero.bio':
      "Ingénieur Python avec 4 ans d'expérience en production. Je développe des backends (Django, DRF, FastAPI) et des pipelines LLM (LangGraph, LangChain, Ollama) pour l'extraction structurée et la recherche sémantique sur Elasticsearch. À l'aise aussi côté frontend (Vue.js). Mon mémoire de Master 2 porte sur la réécriture de requêtes par LLM pour la recherche documentaire. Certifié Google Cloud Associate Cloud Engineer.",
    'hero.stack': 'Stack',
    'hero.cta.cv': 'Télécharger le CV',
    'hero.cta.contact': 'Me contacter',
    'nav.projects': 'Projets',
    'nav.certs': 'Certifications',
    'nav.changelog': 'Parcours',
    'nav.resume': 'CV (PDF)',
    'projects.title': 'Projets',
    'projects.readMore': 'Lire plus',
    'projects.back': '← Retour aux projets',
    'projects.source': 'Code source',
    'projects.live': 'Voir le site',
    'certs.title': 'Certifications',
    'certs.verify': 'Vérifier',
    'changelog.title': 'Career Changelog',
    'changelog.intro':
      'Mon parcours, versionné comme un logiciel : chaque étape est une release, au format semver.',
    'changelog.added': 'Added',
    'changelog.changed': 'Changed',
    'changelog.deprecated': 'Deprecated',
    'changelog.present': 'Présent',
    'notFound.title': 'Page introuvable',
    'notFound.body': "Cette page n'existe pas ou a été déplacée.",
    'notFound.back': "← Retour à l'accueil",
    'footer.builtWith': 'Site statique généré avec Astro. Pas de tracking, pas de cookies.',
    'theme.toggle': 'Changer de thème',
    'lang.switch': 'English',
  },
  en: {
    'meta.title': 'Yacine Hamitou · AI Engineer, Python backend and LLM pipelines',
    'meta.description':
      'AI Engineer in Paris with 4 years of production experience: Python backends (FastAPI, Django), LLM pipelines (LangGraph, LangChain, Ollama) and semantic search on Elasticsearch. Available immediately.',
    'hero.role': 'AI Engineer · Python backend, LLM pipelines, semantic search',
    'hero.available': 'Available immediately · Paris, France',
    'hero.bio':
      "Python engineer with 4 years of production experience. I build backends (Django, DRF, FastAPI) and LLM pipelines (LangGraph, LangChain, Ollama) for structured extraction and semantic search on Elasticsearch. Also comfortable on the frontend (Vue.js). My master's thesis covers LLM-based query rewriting for document retrieval. Google Cloud Associate Cloud Engineer certified.",
    'hero.stack': 'Stack',
    'hero.cta.cv': 'Download resume',
    'hero.cta.contact': 'Get in touch',
    'nav.projects': 'Projects',
    'nav.certs': 'Certifications',
    'nav.changelog': 'Experience',
    'nav.resume': 'Resume (PDF)',
    'projects.title': 'Projects',
    'projects.readMore': 'Read more',
    'projects.back': '← Back to projects',
    'projects.source': 'Source code',
    'projects.live': 'Visit site',
    'certs.title': 'Certifications',
    'certs.verify': 'Verify',
    'changelog.title': 'Career Changelog',
    'changelog.intro':
      'My career, versioned like software: every step is a release, semver style.',
    'changelog.added': 'Added',
    'changelog.changed': 'Changed',
    'changelog.deprecated': 'Deprecated',
    'changelog.present': 'Present',
    'notFound.title': 'Page not found',
    'notFound.body': 'This page does not exist or has moved.',
    'notFound.back': '← Back to home',
    'footer.builtWith': 'Static site built with Astro. No tracking, no cookies.',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Français',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['fr']): string {
  return ui[locale][key];
}

/** Prefix a root-relative path with the locale segment when needed. */
export function localePath(locale: Locale, path: string): string {
  return locale === 'fr' ? path : `/en${path === '/' ? '/' : path}`;
}

/** Entry ids look like "fr/v4-0-0" — filter a collection down to one locale. */
export function byLocale<T extends { id: string }>(entries: T[], locale: Locale): T[] {
  return entries.filter((e) => e.id.startsWith(`${locale}/`));
}

/** Strip the locale prefix from an entry id to get its slug. */
export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}
