import { IconLink, IconShare } from '@tabler/icons-react';
import posts from '../data/posts.json';

const post = posts.find(p => p.slug === 'second-post');

export default function SecondPostPage() {
  return (
    <main className="prose min-h-screen max-w-6xl m-auto text-four mx-auto p-2">
      <div className='flex gap-2'>
      <IconShare/>
      <IconLink />

      </div>
      <article>
        <h1 className='text-4xl'>{post?.title}</h1>
        <p>{post?.date ? new Date(post?.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) : 'Date not available'}</p>
        <p>{post?.content}</p>
      </article>
    </main>
  );
}
