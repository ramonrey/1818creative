import { sanityClient } from './client';
import { POSTS_QUERY, POST_WITH_BODY_QUERY } from './queries';
import type { Post, PostListItem } from './types';

/** All published posts, newest first. Returns [] when Sanity isn't configured. */
export async function getPosts(): Promise<PostListItem[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<PostListItem[]>(POSTS_QUERY);
}

/** Every post including its body — used by getStaticPaths. */
export async function getPostsWithBody(): Promise<Post[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<Post[]>(POST_WITH_BODY_QUERY);
}
