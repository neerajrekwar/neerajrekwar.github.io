import { IconShare, IconLink } from '@tabler/icons-react';
import posts from '../data/posts.json';

const post = posts.find(p => p.slug === 'first-post');

export default function FirstPostPage() {
  return (
    <main className="prose min-h-screen max-w-6xl m-auto text-four mx-auto p-2">
      <div className='flex gap-2 px-4 mt-16'>
      <IconShare/>
      <IconLink />
      
      </div>
      <article className="prose max-w-none p-4">
        <span>{post?.date}</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post?.title}</h1>
        <p className='first-letter:text-2xl first-letter:font-bold first-letter:ml-1 '>
          This is an introductory paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <img 
            src={post?.imageUrl} 
            alt={post?.title} 
            className="float-left mr-4 mb-2 w-1/3 h-auto object-cover rounded-lg" 
          />
          Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
          Phasellus porttitor at massa in vestibulum. Suspendisse potenti. Integer in sapien 
          a velit aliquam viverra. Fusce elementum turpis sed urna tincidunt, nec luctus nisi 
          consectetur.
        </p>
        <p>
          Continuation of the paragraph. Duis vel libero at quam laoreet blandit. 
          Nullam luctus nisl ut magna scelerisque, a convallis erat scelerisque. 
          Sed fringilla nulla id enim faucibus, vel ullamcorper magna pulvinar.
        </p>
        {/* Additional post content */}
      </article>
    </main>
  );
}
