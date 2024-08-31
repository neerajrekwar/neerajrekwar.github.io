import { IconHeartFilled, IconLink, IconShare } from '@tabler/icons-react';
import posts from '../data/posts.json';
import Image from 'next/image'

const post = posts.find(p => p.slug === 'third-post');

export default function ThirdPostPage() {
  return (
    <main className="prose min-h-screen max-w-6xl  bg-primary m-auto text-four mx-auto p-2">
    <section className='mb-44'>
     <p className='p-[4px] font-semibold flex justify-center rounded-full items-center my-10 max-w-fit m-auto text-four border-2 border-four bg-primary px-2 uppercase text-sm'>think it</p>
       <article className="prose max-w-none min-h-screen p-4">
         <h1 className="text-3xl text-five md:text-center md:text-4xl font-bold mb-4">{post?.title}</h1>
         <div className='flex gap-2 md:gap-4  md:pb-2 tracking-wide text-xs md:text-sm font-semibold uppercase py-4 justify-center'>

           <span className='opacity-50'>by</span>
           <span className='text-four'>
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

     </section>
     <section className='min-h-screen border-third uppercase tracking-wide text-four'>
       <div className='flex items-center  py-4 justify-center  '>
         <span className='flex items-center bg-secondary rounded-full gap-2 text-primary p-2 px-3'><IconHeartFilled /> like this</span>
       </div>
       <div className='flex gap-4 text-sm py-2  items-center font-semibold justify-center  '>

         <span className="font-bold">Himanshu</span> <span className="opacity-50">and</span><span className="font-bold">12</span>
         <p className="opacity-50">others love this</p>
       </div>
       <div className="">
         <div className="relative ">
           <div className="absolute h-44 w-full flex  justify-center items-center  w-full ">
             <div className="h-[0.3px] bg-seven w-full "></div>
           </div>
           <div className="absolute h-44   w-full absolute h-20 w-full flex flex-col justify-center items-center">
             <Image
               className="rounded-full"
               src={'/me.webp'}
               width={40}
               height={40}
               alt="neel"
             />
             <div className="absolute  bottom-0 text-center ">
               <h6 className="font-bold py-2 text-sm">neeraj rekwar</h6>
               <p className="text-xs opacity-50 tracking-widest">Artist way show realism</p>
               <div className="absolute w-full text-center -bottom-24 ">
                 <a href="/" target="_blank" className="flex justify-center items-center bg-secondary rounded-full gap-2 text-primary p-2 px-3">suggest an idea</a>
               </div>
             </div>
           </div>



         </div>


       </div>
     </section>
   </main>
  );
}
