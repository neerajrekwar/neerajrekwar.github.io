'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { posts } from './data/posts';
import { IconCornerDownRight } from '@tabler/icons-react';




const BlogPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + postsPerPage < posts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedPosts = posts.slice(currentIndex, currentIndex + postsPerPage);
  return (
    <section className="prose  min-h-screen md:flex mx-auto p-8">
      <div className='basis-1/3 h-64 sm:h-auto three'>
        <h1 className=' text-6xl'>Blog Posts</h1>
        <p>Latest News and <br /> update</p>
      </div>
      <ul className='basis-2/3  flex flex-col gap-16 border-yellow-600 '>
        {displayedPosts.map((post) => (
          <li className='flex border-lime-500 bg-seven bg rounded flex-col sm:flex-row  ' 
            key={post.id}> 
            <Link className='md:basis-1/3 p-1 h-[14vh] md:h-full overflow-hidden  md:aspect-video  rounded border-blue-600  ' 
              href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}/${post.id}`}>
              <img className='w-full h-full rounded  transition-all duration-1000 hover:scale-105 object-cover'
                src={post.imageUrl}/>
            </Link>
            <div className='basis-1/2 flex flex-col justify-between mx-1 border-yellow-500'>
             <div>
                <i className='not-italic  font-semibold text-five 
 py-1 text-sm'>{
                               // Here is the updated line of code
                               new Date(post.date).toLocaleDateString('en-US', {
                                 year: 'numeric',
                                 month: 'short',
                               })
                             }</i>
                               <h2 className='my-2 sm:my-6 font-semibold text-2xl lg:text-4xl  text-five'>
                                 {post.title}
                               </h2>
                             <Link className='flex my-4 p-1 w-fit text-sm bg-five text-primary rounded-full px-3'  href={`/blog/${post.id}`}> Discover <IconCornerDownRight 
               width={20} height={20} /> </Link>
             </div>
              <i className='text-four text-xs md:text-sm'>{post.description}</i>

            </div>
          </li>
        ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded bg-gray-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex + postsPerPage >= posts.length}
          className={`px-4 py-2 rounded bg-gray-200 ${currentIndex + postsPerPage >= posts.length ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
      </ul>
    </section>
  );
};

export default BlogPage;