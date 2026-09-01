import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

/**
 * Build a CDN URL for a Sanity image, e.g. urlFor(post.mainImage).width(800).url()
 * Accepts the loosely-typed image objects that come back from GROQ.
 */
export function urlFor(source: SanityImageSource | Record<string, unknown>) {
  return builder.image(source as SanityImageSource);
}
