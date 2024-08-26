import { posts } from '../data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,  // Generate paths based on the `slug`
  })); 
}
export default function Page({ params }) {
  const { slug } = params

  return (
 <div>{slug}</div>
)
}