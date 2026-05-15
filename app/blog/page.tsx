import Link from "next/link";
import Image from "next/image";
import BlogExcerpt from "../../components/BlogExcerpt";
import { IconPointFilled, IconSparkles } from "@tabler/icons-react";
import LikeButton from "../../components/LikeButton";
import ShareButton from "../../components/ShareButton";

type Article = {
  id: string;
  slug: string;
  title: string;
  imageUrl?: string;
  description: string;
  date?: string;
  author?: string;
  duration?: string;
  content: string;
};

export default async function BlogIndexPage() {
  let posts: Article[] = [];
  let error: string | null = null;

  try {
    const response = await fetch("https://nee-one.vercel.app/api", {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error("Error reading posts");
    }
    posts = await response.json();
  } catch (err: any) {
    error = err.message || "Failed to load posts";
  }

  return (
    <main className="bg-primary">
      <section className="prose border-five">
        <div className="m-auto max-w-5xl">
          <div className="max-w-5xl py-6 md:py-8 mx-2 flex justify-between rounded-full items-center">
            <p className="m-1 px-2 text-four">start for beginning</p>
            <p className="m-1 px-2 text-four text-xl">
              <IconSparkles />
            </p>
          </div>
        </div>
        {error && <p className="text-center text-red-500 py-10">{error}</p>}
        <ul className="basis-2/2 max-w-5xl m-auto flex-col flex gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="p-2 border-b-2 bg-custom-radial-sm md:bg-none rounded border-seven sm:flex gap-10 flex-row-reverse m-2">
                <div className="basis-1/4 rounded md:rounded-none flex justify-center items-center md:aspect-square aspect-video overflow-hidden">
                  {post.imageUrl ? (
                    <Image
                      className="w-full aspect-square object-cover"
                      src={post.imageUrl}
                      width={200}
                      height={200}
                      alt={post.title}
                    />
                  ) : (
                    <div className="w-full h-full bg-seven flex items-center justify-center text-four">
                      No image available
                    </div>
                  )}
                </div>
                <div className="basis-3/4 flex-col flex justify-start">
                  <header>
                    <h2 className="text-2xl md:text-4xl text-five">
                      {post.title ? (
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      ) : (
                        <span>Title not available</span>
                      )}
                    </h2>
                    <div className="flex gap-1 md:gap-2 opacity-50 text-four md:pb-4 tracking-wide text-xs md:text-sm font-medium py-2 justify-start items-center">
                      {post?.date ? (
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      ) : (
                        <span>Date not available</span>
                      )}
                      <IconPointFilled size={12} />
                      {post?.author ? (
                        <p>{post.author}</p>
                      ) : (
                        <p>Unknown author</p>
                      )}
                    </div>
                  </header>
                  <BlogExcerpt
                    description={post.description || "No description available"}
                    slug={post.slug}
                  />
                  <footer className="flex items-center rounded-full text-gray-400 justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <ShareButton url={`https://neerajrekwar.github.io/blog/${post.slug}`} />
                      <LikeButton />
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="border-four hover:bg-four hover:text-primary border-2 text-four rounded-full flex justify-center items-center p-1 px-3 transition-colors"
                    >
                      Read post
                    </Link>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section className="min-h-96">
        <div className="m-auto text-four max-w-5xl py-16 px-2 text-center">
          <h2 className="text-4xl">
            Once you change your thinking, your life will automatically change.{" "}
          </h2>
          <p className="text-secondary p-4 max-w-xl mx-auto">
            When you shift your mindset to a more positive and empowered
            outlook, you will notice a corresponding transformation in your
            daily life.
          </p>
        </div>
      </section>
    </main>
  );
}
