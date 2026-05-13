import { IconHeartFilled } from '@tabler/icons-react';
import { CheckCircle, AlertCircle, BarChart } from 'lucide-react';
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

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const isValidDate = post.date && !isNaN(new Date(post.date).getTime());

  return {
    title: `${post.title} | Neeraj Rekwar Blog`,
    description: post.description || "Read this amazing article on Neeraj Rekwar's blog.",
    alternates: {
      canonical: `https://neerajrekwar.github.io/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://neerajrekwar.github.io/blog/${slug}`,
      type: 'article',
      publishedTime: isValidDate ? new Date(post.date).toISOString() : undefined,
      authors: [post.author || 'Neeraj Rekwar'],
      images: post.imageUrl ? [{ url: post.imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : [],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // --- SEO Evaluation Metrics ---
  const titleLength = post.title?.length || 0;
  const descLength = post.description?.length || 0;

  let plainTextContent = "";
  if (typeof post.content === 'string') {
    plainTextContent = post.content.replace(/<[^>]+>/g, ' ');
  } else if (post.content && typeof post.content === 'object' && 'data-ctn' in (post.content as any)) {
    plainTextContent = (post.content as any)['data-ctn'].map((c: any) => c.paraChildPara || c.heading3 || "").join(" ");
  }
  const wordCount = plainTextContent.trim() ? plainTextContent.trim().split(/\s+/).filter((w: string) => w.length > 0).length : 0;

  let score = 0;
  if (titleLength >= 40 && titleLength <= 60) { score += 33.3; }
  else if (titleLength > 0) { score += 15; }

  if (descLength >= 120 && descLength <= 160) { score += 33.3; }
  else if (descLength > 0) { score += 15; }

  if (wordCount >= 300) { score += 33.4; }
  else if (wordCount > 100) { score += 15; }

  const seoScore = Math.min(Math.round(score), 100);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#25D366]';
    if (score >= 50) return 'text-[#f59e0b]';
    return 'text-[#ef4444]';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-[#25D366]/10 border-[#25D366]/30';
    if (score >= 50) return 'bg-[#f59e0b]/10 border-[#f59e0b]/30';
    return 'bg-[#ef4444]/10 border-[#ef4444]/30';
  };

  const isValidDate = post.date && !isNaN(new Date(post.date).getTime());

  // --- Google JSON-LD Schema ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://neerajrekwar.github.io/blog/${slug}`
    },
    "headline": post.title,
    "description": post.description,
    "image": post.imageUrl ? [post.imageUrl] : [],
    "author": {
      "@type": "Person",
      "name": post.author || 'Neeraj Rekwar',
      "url": "https://neerajrekwar.github.io"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Neeraj Rekwar Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neerajrekwar.github.io/me_profile.webp"
      }
    },
    "datePublished": isValidDate ? new Date(post.date).toISOString() : undefined,
    "dateModified": isValidDate ? new Date(post.date).toISOString() : undefined,
  };

  return (
    <main className="prose min-h-screen max-w-5xl bg-primary m-auto text-four mx-auto py-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
              'data-ctn' in (post.content as any) ? (
                (post.content as any)['data-ctn'].map((contentItem: any) => (
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
                <div className="pb-4 prose-content" dangerouslySetInnerHTML={{ __html: post.content as string }} />
              )}
            </div>
            
            {/* SEO Status Card embedded in Article Page */}
            <div className="mt-16 bg-six/10 border border-seven rounded-3xl p-6 md:p-8 shadow-sm max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between not-prose">
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart className="w-5 h-5 text-third" />
                  <h3 className="text-lg font-bold text-four m-0">Article SEO Status</h3>
                </div>
                <div className={`w-28 h-28 rounded-full border-[6px] flex items-center justify-center mb-2 transition-colors duration-500 ${getScoreBg(seoScore)}`}>
                  <span className={`text-3xl font-extrabold ${getScoreColor(seoScore)}`}>
                    {seoScore}%
                  </span>
                </div>
                <p className="text-five font-medium text-xs uppercase tracking-wider">Accuracy Score</p>
              </div>

              <div className="space-y-4 w-full md:flex-1">
                <SeoCheckItem label={`Title Length (${titleLength} chars)`} passed={titleLength >= 40 && titleLength <= 60} />
                <SeoCheckItem label={`Description Length (${descLength} chars)`} passed={descLength >= 120 && descLength <= 160} />
                <SeoCheckItem label={`Content Length (${wordCount} words)`} passed={wordCount >= 300} />
              </div>
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

function SeoCheckItem({ label, passed }: { label: string, passed: boolean | string }) {
  return (
    <div className="flex items-start gap-3">
      {passed ? (
        <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
      )}
      <span className={`text-sm font-medium ${passed ? 'text-four' : 'text-five'}`}>
        {label}
      </span>
    </div>
  );
}