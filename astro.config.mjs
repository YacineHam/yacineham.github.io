// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site (repo: YacineHam.github.io) — no base path needed.
  site: 'https://yacineham.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
