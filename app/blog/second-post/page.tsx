import posts from '../data/posts.json';

const post = posts.find(p => p.slug === 'second-post');

export default function SecondPostPage() {
  return (
    <div className="prose mx-auto p-8">
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
