import { IconHeartFilled } from '@tabler/icons-react';
import posts from '../data/posts.json';
import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all blog posts at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata dynamically based on the current post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post?.title || "Default Blog Title",
    description: post?.description || "Default blog description for your reference.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="prose min-h-screen max-w-5xl bg-primary m-auto text-four mx-auto py-2">
      <section className="mb-44">
        <p className="p-[4px] font-semibold flex justify-center rounded-full items-center my-10 max-w-fit m-auto text-four border-2 border-four bg-primary px-2 uppercase text-sm">
          think it
        </p>
        <article className="prose max-w-none min-h-screen p-4">
          <h1 className="text-3xl text-five md:text-center md:text-4xl font-bold mb-4">
            {post.title ? (
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            ) : (
              <div className="">title in processing</div>
            )}
          </h1>
          <div className="flex gap-2 md:gap-4 md:pb-4 tracking-wide text-xs uppercase py-4 justify-center">
            <span className="opacity-75">by</span>
            <span className="text-four">{post.author || 'admin'}</span>
            <span>/</span>
            <span className="opacity-75">
              {post.date
                ? new Date(post.date).toLocaleString("en-US", {
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Date not available'}
            </span>
            <span>/</span>
            <span className="opacity-75">{post.duration || 'N/A'}</span>
          </div>
          <p className="first-letter:text-xl text-sm p-2 opacity-75 rounded-sm my-2 first-letter:font-bold first-letter:ml-1">
            {post.description}
          </p>
          <div>
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt={post.title || "Blog post image"}
                width={600}
                height={400}
                className="float-left mr-4 mb-2 w-1/3 h-auto object-cover rounded-lg"
              />
            )}
            <div>
              {typeof post.content === 'object' &&
              post.content !== null &&
              'data-ctn' in post.content ? (
                post.content['data-ctn'].map((contentItem: any) => (
                  <div key={contentItem.id}>
                    {contentItem.heading3 && (
                      <h3 className="text-xl md:opacity-95 font-medium md:text-2xl text-five pt-2">
                        {contentItem.heading3}
                      </h3>
                    )}
                    {contentItem.paraChildPara && (
                      <p className="pb-4">{contentItem.paraChildPara}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="pb-4">{post.content as string}</p>
              )}
            </div>
          </div>
        </article>
      </section>
      <section className="min-h-screen border-third uppercase tracking-wide text-four">
        <div className="flex items-center py-4 justify-center">
          <span className="flex items-center bg-secondary rounded-full gap-2 text-primary p-2 px-3">
            <IconHeartFilled /> like this
          </span>
        </div>
        <div className="flex gap-4 text-sm py-2 items-center font-semibold justify-center">
          <span className="font-bold">Himanshu</span> <span className="opacity-50">and</span>
          <span className="font-bold">12</span>
          <p className="opacity-50">others love this</p>
        </div>
      </section>
    </main>
  );
}