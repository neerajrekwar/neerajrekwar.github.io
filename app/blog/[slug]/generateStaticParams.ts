import { posts } from '../data/posts';

export async function getStaticPaths() {
  return posts.map((post) => ({
    slug: post.slug,  // Generate paths based on the `slug`
  })); 
}
