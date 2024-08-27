  import posts from './data/posts.json';
  import Link from 'next/link';

  export default function BlogIndexPage() {
    return (
      <section className='prose mx-auto p-8'>
        <h1>Blog</h1>
        <ul >
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
