import posts from '../data/posts.json';

const post = posts.find(p => p.slug === 'first-post');

export default function FirstPostPage() {
  return (
    <div className="prose text-four mx-auto m-2">
      <h1>{post?.title}</h1>
      <p>{post?.date ? new Date(post?.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) : 'Date not available'}</p>
      <p>{post?.content}</p>
    </div>
  );
}
