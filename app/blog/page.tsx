import posts from "./data/posts.json";
import Link from "next/link";
import Image from "next/image";
import BlogExcerpt from "../components/BlogExcerpt";

export default function BlogIndexPage() {
  return (
    <section className="prose ">
      <div className="basis-1/3 max-w-5xl m-auto h-64 sm:h-auto three"><h1 className=" text-6xl">Blog Posts</h1><p>Latest News and <br /> update</p></div>

      <ul className="basis-2/2 max-w-5xl m-auto flex-col flex gap-16">
        <p className=" ">Recent post</p>
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border-b p-2 sm:flex gap-10 flex-row-reverse  m-1 p-1 "
          >
            <div className="basis-1/4 aspect-video   border-red-400">
              {post.imageUrl ? (
                <Image
                  className="h-full w-full object-cover"
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
                className="text-xl md:text-2xl lg:text-4xl font-bold text-four py-4"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <p className="text-gray-400 pb-3">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <BlogExcerpt
                key={post.slug}
                decription={post.description || 'De'} 
                slug={post.slug}
              />
              {/* <div className="flex text-gray-400 justify-between">
                <span>post a comment</span>
                <span>Read more</span>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
