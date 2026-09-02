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

/** Every post including its body — for getStaticPaths on the post route. */
export const POST_WITH_BODY_QUERY = `
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
    mainImage,
    body
  }
`;
