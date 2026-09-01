import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

import { dataset, projectId } from './client';

const builder = createImageUrlBuilder({ projectId: projectId ?? '', dataset });

/**
 * Build a CDN URL for a Sanity image, e.g. urlFor(post.mainImage).width(800).url()
 * Accepts the loosely-typed image objects that come back from GROQ.
 */
export function urlFor(source: SanityImageSource | Record<string, unknown>) {
  return builder.image(source as SanityImageSource);
}
