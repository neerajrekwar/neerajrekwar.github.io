import posts from "./data/posts.json";
import Link from "next/link";
import Image from "next/image";
import BlogExcerpt from "../components/BlogExcerpt";

import { IconHeart, IconLink, IconPointFilled, IconShare } from "@tabler/icons-react";
import LikeButton from "../components/LikeButton";

export default function BlogIndexPage() {
  return (
    <section className="prose  border-five">
      <div className="max-w-5xl  m-auto">
        <p className="px-4 mx-1 text-four max-w-5xl mt-4 m-auto text-xl">Recent posts</p>
      </div>
      <ul className="basis-2/2  max-w-5xl  m-auto flex-col flex gap-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className=" p-2 sm:flex gap-10  flex-row-reverse  m-2 "
          >
            <div className="basis-1/4 flex justify-center items-center aspect-video overflow-hidden  border-red-400">
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
            <div className="basis-3/4 flex-col flex justify-start   border-red-400">
              <Link
                className="text-xl md:text-2xl lg:text-3xl font-bold text-four py-2"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <div className="flex text-sm items-center opacity-75 text-five gap-1 ">
                <p className=" pb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <IconPointFilled className="mb-2 " width={15} height={15}/>
                <p className="pb-2 ">{post.author}</p>
              </div>
              <BlogExcerpt
                key={post.slug}
                decription={post.description || "No description available"}
                slug={post.slug}
              />
              <div className="flex items-center rounded-full text-gray-400 justify-between">
                <IconShare className="text-four hover:text-five" />
                <IconLink className="text-four hover:text-five" />
                <LikeButton />
                <span className=" border-four border-2 font-semibold flex justify-center  items-center text-four p-1 rounded-full px-3">
                  
                  <Link
                    
                    href={`/blog/${post.slug}`}
                  >
                    Read post
                  </Link>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
