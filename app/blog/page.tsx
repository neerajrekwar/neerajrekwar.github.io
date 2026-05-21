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
    const timestamp = Date.now();
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://nee-one.vercel.app/api?t=${timestamp}`)}`);
    if (!response.ok) {
      throw new Error("Error reading posts");
    }
    posts = await response.json();
  } catch (err: any) {
    error = err.message || "Failed to load posts";
  }

  return (
    <main className="bg-primary">
      <section className="border-five mx-auto">
        <div className="m-auto">
          <div className="max-w-5xl py-6 md:py-8 mx-auto flex justify-between rounded-full items-center">
            <p className="m-1 px-2 text-four">start for beginning</p>
            <p className="m-1 px-2 text-four text-xl">
              <IconSparkles />
            </p>
          </div>
        </div>
        {error && <p className="text-center text-red-500 py-10">{error}</p>}
        {!error && (
          <ul className="w-full max-w-5xl mx-auto flex flex-col gap-10 md:gap-16 px-2">
            {posts.map((post) => (
            <li key={post.slug} className="group">
              <article className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch pb-10 md:pb-16 border-b border-seven/30 last:border-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="w-full md:w-2/5 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-seven/20 block relative aspect-video md:aspect-[4/3] bg-seven/10"
                >
                  {post.imageUrl && (post.imageUrl.startsWith('http') || post.imageUrl.startsWith('/')) ? (
                    <Image
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={post.imageUrl}
                      width={600}
                      height={400}
                      alt={post.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-four font-medium">
                      No image available
                    </div>
                  )}
                </Link>
                <div className="w-full md:w-3/5 flex flex-col justify-center py-2">
                  <header className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-four/70 text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider">
                      {post?.date ? (
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      ) : (
                        <span>Date unknown</span>
                      )}
                      <IconPointFilled size={8} className="text-seven" />
                      {post?.author ? (
                        <span className="text-five">{post.author}</span>
                      ) : (
                        <span>Unknown author</span>
                      )}
                      {post?.duration && (
                        <>
                          <IconPointFilled size={8} className="text-seven" />
                          <span>{post.duration}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-five leading-tight transition-colors duration-300 group-hover:text-third">
                      {post.title ? (
                        <Link href={`/blog/${post.slug}`} className="line-clamp-2">{post.title}</Link>
                      ) : (
                        <span>Title not available</span>
                      )}
                    </h2>
                  </header>
                  <div className="mb-6 text-four/90 leading-relaxed text-sm md:text-base">
                    <BlogExcerpt
                      description={post.description || "No description available"}
                      slug={post.slug}
                    />
                  </div>
                  <footer className="flex items-center justify-between mt-auto pt-4 border-t border-seven/20">
                    <div className="flex items-center gap-4 bg-secondary/5 border border-seven/40 rounded-full px-5 py-2 shadow-sm transition-colors hover:bg-secondary/10">
                      <ShareButton url={`https://neerajrekwar.github.io/blog/${post.slug}`} />
                      <div className="w-px h-4 bg-seven/50"></div>
                      <LikeButton />
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-four hover:text-third transition-colors duration-300 group/link"
                    >
                      Read Article
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">&rarr;</span>
                    </Link>
                  </footer>
                </div>
              </article>
            </li>
            ))}
          </ul>
        )}
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
