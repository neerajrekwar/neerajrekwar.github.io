import { IconShare, IconLink } from '@tabler/icons-react';
import posts from '../data/posts.json';
import LikeButton from '@/app/components/LikeButton';

const post = posts.find(p => p.slug === 'first-post');

export default function FirstPostPage() {
  return (
    <main className="prose min-h-screen max-w-6xl m-auto text-four mx-auto p-2">
      <section className='gap-2 flex justify-center items-center mt-16'>
        <p className=' p-[4px] font-semibold text-secondary border-2 border-secondary bg-primary px-2 uppercase text-sm'>motivation</p>
        {/* <IconShare/>
      <IconLink /> */}

      </section>
      <article className="prose max-w-none p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post?.title}</h1>
        <div className='flex gap-2 md:gap-4  tracking-wide text-xs md:text-sm font-semibold uppercase py-4 justify-center'>

          <span className='opacity-50'>by</span>
          <span className='text-secondary'>
            {post?.author}
          </span>
          <span>/</span>
          <span className='opacity-50'>{new Date(post?.date as string).toLocaleString("en-US", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'

          })}</span>
          <span>/</span>
          <span className='opacity-50'>
            {post?.duration}
          </span>
        </div>
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
