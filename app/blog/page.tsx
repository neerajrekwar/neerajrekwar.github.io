'use client'
import posts from "./data/posts.json";
import Link from "next/link";
import Image from "next/image";
import BlogExcerpt from "../components/BlogExcerpt";
import { IconLink, IconPointFilled, IconShare, IconSparkles } from "@tabler/icons-react";
import LikeButton from "../components/LikeButton";
import ShareDialog from "../components/ShareDialog"; // Import the ShareDialog component
import { useState } from "react";

export default function BlogIndexPage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const openShareDialog = (url: string) => {
    setShareUrl(url);
    setDialogOpen(true);
  };

  const closeShareDialog = () => {
    setDialogOpen(false);
  };

  return (
    <main className="bg-primary">
      <section className="prose border-five">
        <div className="m-auto  max-w-5xl">
          <div className="max-w-5xl  py-6 md:py-8 mx-2  flex justify-between  rounded-full items-center">
            <p className="m-1 px-2 text-four ">start for beginning</p>
            <p className="m-1 px-2 text-four  text-xl"><IconSparkles /></p>
          </div>
        </div>
        <ul className="basis-2/2 max-w-5xl m-auto flex-col flex gap-6">
          {posts.map((post) => (
            <li key={post.slug} className="p-2 border-b-2 bg-custom-radial-sm md:bg-none rounded border-seven  sm:flex gap-10 flex-row-reverse m-2">
              <div className="basis-1/4  rounded md:rounded-none flex justify-center items-center md:aspect-square  aspect-video overflow-hidden border-red-400">
                {post.imageUrl ? (
                  <Image
                    className="w-full  aspect-square object-cover"
                    src={post.imageUrl}
                    width={200}
                    height={200}
                    alt={post.title}
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>
              <h2 className="basis-3/4 flex-col flex justify-start border-red-400">
                {post.title ? (
                  <Link
                    className="text-2xl md:text-4xl text-five "
                    href={`/blog/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                ) : (<div className=''>title in processing</div>)}
                <div className="flex gap-1 md:gap-2 opacity-50  text-four md:pb-4 tracking-wide text-xs md:text-sm font-medium  py-2 justify-start">
                  {post?.date ? (<p>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>) : (<p>none of print</p>)}
                  ●
                  {post?.author ? (<p>
                    {post.author}
                  </p>) : (<p>unknown</p>)}
                  
              
                </div>
                <BlogExcerpt
                  key={post.slug}

                  description={post.description || "No description available"}
                  slug={post.slug}
                />
                <div className="flex items-center rounded-full text-gray-400 justify-between">
                  <IconShare
                    className="text-four hover:text-five cursor-pointer"
                    onClick={() => openShareDialog(`https://neerajrekwar.github.io/blog/${post.slug}`)}
                  />
                  <IconLink className="text-four hover:text-five" />
                  <LikeButton />
                  <span className="border-four hover:bg-four hover:text-primary border-2 text-four rounded-full  flex justify-center items-center p-1 active:opacity-75 hover:opacity-75 px-3">
                    <Link href={`/blog/${post.slug}`}>Read post</Link>
                  </span>
                </div>
              </h2>
            </li>
          ))}
        </ul>
        <ShareDialog url={shareUrl} isOpen={isDialogOpen} onClose={closeShareDialog} />
      </section>
      <section className="min-h-96 ">
       <div className="m-auto  max-w-5xl py-16 px-2">
       <h4 className="text-center text-4xl">Change thinking, your life Change automatically </h4>
        <p className="text-center p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam culpa eveniet sed commodi beatae, quam nemo, iure, necessitatibus repellendus earum distinctio veritatis ab! Corporis minus dolore dolorem ullam voluptates.</p>
       </div>
       </section>
    </main>

  );
}
