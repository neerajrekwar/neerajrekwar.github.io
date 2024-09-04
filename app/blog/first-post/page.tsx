import { IconShare, IconLink, IconHeartFilled, IconQuote } from '@tabler/icons-react';
import posts from '../data/posts.json';
import LikeButton from '@/app/components/LikeButton';
import Image from "next/image"

const post = posts.find(p => p.slug === 'first-post');

export default function FirstPostPage() {
  return (
    <body className='bg-primary'>
      <main className="prose min-h-screen max-w-5xl bg-primary m-auto text-four mx-auto py-2">
        <section className='mb-44'>
          <p className='p-[4px] font-semibold flex justify-center rounded-full items-center my-10 max-w-fit m-auto text-four border-2 border-four bg-primary px-2 uppercase text-sm'>think it</p>
          <article className="prose max-w-none min-h-screen p-4">
            <h1 className="text-3xl text-five md:text-center md:text-4xl font-bold mb-4">{post?.title}</h1>
            <div className='flex gap-2 md:gap-4  md:pb-4 tracking-wide text-xs md:text-sm  uppercase py-4 justify-center'>

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
            <p className='first-letter:text-xl text-sm p-2 opacity-75  rounded-sm my-2 first-letter:font-bold first-letter:ml-1 '>
              {post?.description}

            </p>
            {post && (
              <div>

                <img
                  src={post?.imageUrl}
                  alt={post?.title}
                  className="float-left mr-4 mb-2 w-1/3 h-auto object-cover rounded-lg"
                />
                <div>
                  {/* Check if post.content is an object and has the "data-ctn" property */}
                  {typeof post.content === 'object' && 'data-ctn' in post.content && post.content["data-ctn"].map((contentItem) => (
                    <div key={contentItem.id}>
                      {contentItem.heading3 && (
                        <h3 className='text-xl md:opacity-95 md:font-semibold font-medium md:text-2xl text-five pt-2'>{contentItem.heading3}</h3>
                      )}
                      {contentItem.paraChildPara && (
                        <p className='pb-4'>{contentItem.paraChildPara}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional post content */}
            <div className='max-w-6xl m-auto'>

              <IconQuote className='skew-x-12 rotate-120' />
              <IconQuote className='' />
            </div>
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
                <div className="h-[0.5px] md:h-[1px]  bg-custom-radial-lg w-full "></div>
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
    </body>
  );
}
