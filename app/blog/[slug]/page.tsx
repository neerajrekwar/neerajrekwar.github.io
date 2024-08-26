// app/blog/[id]/page.tsx
import { posts } from '../data/posts';
import { BlogPost } from '../types/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;  // The `slug` will be used to identify the post
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post: BlogPost | undefined = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();  // Return 404 if the post is not found
  }
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <article className="prose min-h-screen border-blue-600 border mx-auto p-8">
      <h1>{post?.title}</h1>
      <p><em>{post?.author} - {formattedDate}</em></p>
      <div className=''>
        <img className='h-6 '
          src={post?.imageUrl}/>
      </div>
      <div>{post?.content}</div>
    </article>
  );
};

export default BlogPostPage;
