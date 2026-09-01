/** GROQ queries for the blog. Plain strings — no typegen step required. */

/** All published posts, newest first — fields needed for the blog list cards. */
export const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    author,
    tags,
    featured,
    mainImage
  }
`;

/** Slugs only — for getStaticPaths. */
export const POST_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)][].slug.current
`;

/** A single post by slug, including the full body. */
export const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    author,
    tags,
    featured,
    mainImage,
    body
  }
`;
