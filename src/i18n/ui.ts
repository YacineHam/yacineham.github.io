export type Locale = 'fr' | 'en';

export const ui = {
  fr: {
    'meta.title': 'Yacine Hamitou — Ingénieur Backend Python',
    'meta.description':
      "Ingénieur Backend Python à Paris — Django, FastAPI, Elasticsearch, GCP, LLM. 4+ ans d'expérience, certifié GCP Associate Cloud Engineer.",
    'hero.role': 'Ingénieur Backend Python',
    'hero.bio':
      "4+ ans d'expérience à concevoir des APIs REST et des systèmes scalables en Python — de MVPs livrés en production à des plateformes à 256 000+ utilisateurs. Certifié GCP Associate Cloud Engineer, aujourd'hui à Paris, je travaille sur des pipelines NLP agentiques (LangGraph) pour l'INA en parallèle d'un Master à l'Université Paris-Saclay.",
    'nav.projects': 'Projets',
    'nav.certs': 'Certifications',
    'nav.changelog': 'Changelog',
    'nav.resume': 'CV (PDF)',
    'projects.title': 'Projets',
    'projects.readMore': 'Lire plus',
    'projects.back': '← Retour aux projets',
    'projects.source': 'Code source',
    'projects.live': 'Voir en ligne',
    'certs.title': 'Certifications',
    'certs.verify': 'Vérifier',
    'changelog.title': 'Career Changelog',
    'changelog.intro':
      'Mon parcours, versionné comme un logiciel — chaque poste est une release, au format semver.',
    'changelog.added': 'Added',
    'changelog.changed': 'Changed',
    'changelog.deprecated': 'Deprecated',
    'changelog.present': 'Présent',
    'footer.builtWith': 'Site statique généré avec Astro — pas de tracking, pas de cookies.',
    'theme.toggle': 'Changer de thème',
    'lang.switch': 'English',
  },
  en: {
    'meta.title': 'Yacine Hamitou — Python Backend Engineer',
    'meta.description':
      'Python Backend Engineer in Paris — Django, FastAPI, Elasticsearch, GCP, LLM. 4+ years of experience, GCP Associate Cloud Engineer certified.',
    'hero.role': 'Python Backend Engineer',
    'hero.bio':
      "4+ years of experience designing REST APIs and scalable systems in Python — from MVPs shipped to production to platforms serving 256,000+ users. GCP Associate Cloud Engineer certified, now based in Paris, working on agentic NLP pipelines (LangGraph) for INA while completing a Master's at Université Paris-Saclay.",
    'nav.projects': 'Projects',
    'nav.certs': 'Certifications',
    'nav.changelog': 'Changelog',
    'nav.resume': 'Resume (PDF)',
    'projects.title': 'Projects',
    'projects.readMore': 'Read more',
    'projects.back': '← Back to projects',
    'projects.source': 'Source code',
    'projects.live': 'View live',
    'certs.title': 'Certifications',
    'certs.verify': 'Verify',
    'changelog.title': 'Career Changelog',
    'changelog.intro':
      'My career, versioned like software — every role is a release, semver style.',
    'changelog.added': 'Added',
    'changelog.changed': 'Changed',
    'changelog.deprecated': 'Deprecated',
    'changelog.present': 'Present',
    'footer.builtWith': 'Static site built with Astro — no tracking, no cookies.',
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
