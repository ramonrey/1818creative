import { createClient } from '@sanity/client';

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-10-01';

if (!projectId) {
  throw new Error(
    'Missing PUBLIC_SANITY_PROJECT_ID. Copy .env.example to .env and fill it in ' +
      '(see SETUP.md — run `npm create sanity@latest` to create the project).',
  );
}

/**
 * Read-only client used at build time to fetch blog content.
 * `useCdn: true` — served from Sanity's edge cache; a deploy hook rebuilds the
 * site when content changes, so slightly-stale reads here are fine.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
