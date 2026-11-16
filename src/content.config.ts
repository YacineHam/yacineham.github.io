import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Career Changelog — one markdown file per role, per locale.
 * File location decides the locale: src/content/changelog/{fr,en}/vX-Y-Z.md
 * Everything is frontmatter: adding a new job = adding one YAML file, no code.
 */
const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string().regex(/^\d+\.\d+\.\d+$/, 'must be semver, e.g. 4.0.0'),
    title: z.string(),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    /** Omit endDate for the current role → rendered as "Présent" / "Present" */
    endDate: z.coerce.date().optional(),
    /** Optional display override (e.g. "2025 – 2026") when exact months are not relevant.
        startDate is still required: it drives the ordering. */
    period: z.string().optional(),
    tags: z.array(z.string()).default([]),
    added: z.array(z.string()).default([]),
    changed: z.array(z.string()).default([]),
    deprecated: z.array(z.string()).default([]),
    /** Optional company logo path (relative to /public) */
    logo: z.string().optional(),
    /** Brand color for the logo background tint */
    brandColor: z.string().optional(),
  }),
});

/**
 * Projects — src/content/projects/{fr,en}/<slug>.md
 * Frontmatter feeds the card; markdown body is the "read more" detail page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    year: z.number(),
    /** Lower = shown first in the grid */
    order: z.number().default(99),
    /** Topic icon shown on the card — must match an Icon.astro name */
    icon: z.enum(['cart', 'cpu', 'search', 'activity', 'layers']).default('cart'),
    /** Optional real company logo to show instead of generic icon */
    logo: z.string().optional(),
    /** Brand color for logo background tint */
    brandColor: z.string().optional(),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { changelog, projects };
