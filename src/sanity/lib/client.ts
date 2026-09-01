import { createClient, type SanityClient } from '@sanity/client';

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-10-01';

/** True once PUBLIC_SANITY_PROJECT_ID is set (locally in .env, or in Cloudflare). */
export const sanityConfigured = Boolean(projectId);

if (!sanityConfigured) {
  console.warn(
    '[sanity] PUBLIC_SANITY_PROJECT_ID is not set — the blog will build with no posts. ' +
      'See SETUP.md to create the project.',
  );
}

/**
 * Read-only client used at build time to fetch blog content.
 * `useCdn: true` — served from Sanity's edge cache; a deploy hook rebuilds the
 * site when content changes, so slightly-stale reads here are fine.
 */
export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
