import { IconHeartFilled, IconSparkles } from '@tabler/icons-react';
import { CheckCircle, AlertCircle, BarChart } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

type Article = {
  id: string;
  slug: string;
  title: string;
  imageUrl?: string;
  description: string;
  date: string | any;
  author?: string;
  duration?: string;
  content: string | any; // Accommodates string or your existing structured JSON content
};

// Generate static routes for all blog posts at build time
export async function generateStaticParams() {
  try {
    const res = await fetch('https://nee-one.vercel.app/api');
    if (!res.ok) return [];
    const posts: Article[] = await res.json();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

// Generate metadata dynamically based on the current post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(`https://nee-one.vercel.app/api/articles/${slug}`);
    if (!res.ok) throw new Error("Not found");
    const post: Article = await res.json();

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
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: Article;
  try {
    const res = await fetch(`https://nee-one.vercel.app/api/articles/${slug}`);
    if (!res.ok) notFound();
    post = await res.json();
  } catch {
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
    <main className="bg-primary min-h-screen pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Header Section */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 md:pt-6 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-five uppercase bg-secondary/10 rounded-full border border-five/20">
          <IconSparkles size={14} />
          Article
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-third tracking-tight mb-8 leading-tight">
          {post.title || "Untitled Post"}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-medium text-four/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-five text-primary flex items-center justify-center font-bold text-xs">
              {post.author ? post.author[0].toUpperCase() : 'A'}
            </div>
            <span className="text-five font-bold text-base">{post.author || 'Admin'}</span>
          </div>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/40"></span>
          <time dateTime={post.date}>
            {post.date && !isNaN(new Date(post.date).getTime())
              ? new Date(post.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })
              : 'Date unknown'}
          </time>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/40"></span>
          <span className="flex items-center gap-1">
            {post.duration || '5 min read'}
          </span>
        </div>
      </header>

      {/* Featured Breakout Image */}
      {post.imageUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-secondary/10 bg-secondary/5 group">
              <Image
                src={post.imageUrl}
                alt={post.title || "Blog post image"}
                width={1200}
                height={600}
              className="w-full max-h-[600px] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              />
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {post.description && (
          <div className="mb-12 p-6 sm:p-8 bg-secondary/5 rounded-2xl border-l-4 border-five shadow-sm">
            <p className="text-lg sm:text-xl text-five/90 font-medium leading-relaxed m-0">
              {post.description}
            </p>
          </div>
        )}

        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none w-full prose-headings:text-five prose-headings:font-bold prose-p:text-four prose-p:leading-relaxed prose-a:text-third hover:prose-a:text-five prose-strong:text-five prose-strong:font-bold prose-ul:text-four prose-ol:text-four prose-li:text-four prose-blockquote:text-five prose-blockquote:bg-secondary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:border-five prose-blockquote:rounded-r-xl prose-code:text-five prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:text-primary prose-img:rounded-2xl prose-img:shadow-md">
          {typeof post.content === 'object' && post.content !== null && 'data-ctn' in (post.content as any) ? (
            (post.content as any)['data-ctn'].map((contentItem: any) => (
              <div key={contentItem.id}>
                {contentItem.heading3 && <h3>{contentItem.heading3}</h3>}
                {contentItem.paraChildPara && <p>{contentItem.paraChildPara}</p>}
              </div>
            ))
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
          )}
        </div>
      </article>

      {/* Post Footer & SEO Stats */}
      <footer className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 pt-10 border-t border-secondary/20">
        {/* <div className="mb-12 bg-secondary/5 border border-secondary/20 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="w-5 h-5 text-five" />
              <h3 className="text-lg font-bold text-five m-0">Post Quality</h3>
            </div>
            <div className={`w-28 h-28 rounded-full border-[6px] flex items-center justify-center mb-2 transition-colors duration-500 ${getScoreBg(seoScore)}`}>
              <span className={`text-3xl font-extrabold ${getScoreColor(seoScore)}`}>
                {seoScore}%
              </span>
            </div>
          </div>

          <div className="space-y-4 w-full md:flex-1 bg-primary p-6 rounded-2xl border border-secondary/10">
            <SeoCheckItem label={`Title Length (${titleLength} chars)`} passed={titleLength >= 40 && titleLength <= 60} />
            <SeoCheckItem label={`Description Length (${descLength} chars)`} passed={descLength >= 120 && descLength <= 160} />
            <SeoCheckItem label={`Content Length (${wordCount} words)`} passed={wordCount >= 300} />
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 bg-secondary/5 rounded-full px-8 border border-secondary/10">
          <button className="flex items-center gap-2 text-primary bg-five hover:bg-five/90 px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <IconHeartFilled size={20} />
            <span>Like this post</span>
          </button>
          <div className="flex gap-2 text-sm items-center justify-center text-four">
            <span className="font-bold text-five">Himanshu</span> 
            <span className="opacity-70">and</span>
            <span className="font-bold text-five">12 others</span>
            <span className="opacity-70">liked this</span>
          </div>
        </div>
      </footer>
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