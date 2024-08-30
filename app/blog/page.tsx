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
    <main>
<section className="prose border-five">
      <div className="m-auto  max-w-5xl">
      <div className="max-w-5xl  py-6 md:py-8 mx-2  flex justify-between  rounded-full items-center">
        <p className="m-1 px-2 text-four text-xl">start for beginning</p>
        <p className="m-1 px-2 text-four  text-xl"><IconSparkles /></p>
      </div>
      </div>
      <ul className="basis-2/2 max-w-5xl m-auto flex-col flex gap-6">
        {posts.map((post) => (
          <li key={post.slug} className="p-2 sm:flex gap-10 flex-row-reverse m-2">
            <div className="basis-1/4 flex justify-center items-center aspect-video overflow-hidden border-red-400">
              {post.imageUrl ? (
                <Image
                  className="w-full aspect-square object-cover"
                  src={post.imageUrl}
                  width={200}
                  height={200}
                  alt={post.title}
                />
              ) : (
                <div>No image available</div>
              )}
            </div>
            <div className="basis-3/4 flex-col flex justify-start border-red-400">
              <Link
                className="text-xl md:text-2xl lg:text-3xl font-bold text-four py-2"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <div className="flex my-2 text-xs sm:text-sm items-center opacity-75 text-five gap-1">
                <p>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <IconPointFilled width={15} height={15} />
                <p>{post.author}</p>
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
            </div>
          </li>
        ))}
      </ul>
      <ShareDialog url={shareUrl} isOpen={isDialogOpen} onClose={closeShareDialog} />
    </section>
<section className="min-h-[50vh]">

</section>
    </main>
    
  );
}
