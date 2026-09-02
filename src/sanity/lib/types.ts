import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset?: { _ref: string; _type: 'reference' };
  alt?: string;
  hotspot?: unknown;
  crop?: unknown;
}

/** Shape returned by POSTS_QUERY (list card). */
export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
  mainImage?: SanityImage | null;
}

/** Shape returned by the single-post query (adds the body). */
export interface Post extends PostListItem {
  body?: PortableTextBlock[];
}
