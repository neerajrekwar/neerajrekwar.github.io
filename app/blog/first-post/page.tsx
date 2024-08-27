import posts from '../data/posts.json';

const post = posts.find(p => p.slug === 'first-post');

export default function FirstPostPage() {
  return (
    <div className="prose mx-auto p-8">
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
