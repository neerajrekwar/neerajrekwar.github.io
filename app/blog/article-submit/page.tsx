import { Metadata } from 'next';
import SubmitFormClient from './SubmitFormClient';

export const metadata: Metadata = {
  title: 'Submit an Article | Neeraj Rekwar Blog',
  description: 'Contribute to our blog by submitting your article. We welcome high-quality guest posts and articles about web development, Next.js, and programming.',
  keywords: [
    'submit article',
    'guest post',
    'write for us',
    'tech blog submission',
    'web development blog'
  ],
  alternates: {
    canonical: '/blog/article-submit',
  },
  openGraph: {
    type: 'website',
    url: '/blog/article-submit',
    title: 'Submit an Article | Neeraj Rekwar Blog',
    description: 'Contribute to our blog by submitting your article. We welcome high-quality guest posts and articles.',
    siteName: 'Neeraj Rekwar Portfolio',
    images: [
      {
        url: '/me_profile.webp',
        width: 1200,
        height: 630,
        alt: 'Submit an Article',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neerajrekwar',
    title: 'Submit an Article | Neeraj Rekwar Blog',
    description: 'Contribute to our blog by submitting your article.',
    images: ['/me_profile.webp'],
    creator: '@neerajrekwar',
  },
};

export default function ArticleSubmitPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Submit an Article | Neeraj Rekwar Blog",
    "description": "Contribute to our blog by submitting your article. We welcome high-quality guest posts and articles about web development, Next.js, and programming.",
    "url": "https://neerajrekwar.github.io/blog/article-submit",
    "mainEntity": {
      "@type": "Action",
      "name": "SubmitArticle",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://neerajrekwar.github.io/blog/article-submit"
      }
    }
  };

  return (
    <main className="min-h-screen bg-primary py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-four mb-6 tracking-tight">
            Submit Your <span className="text-third">Article</span>
          </h1>
          <p className="text-five text-lg max-w-2xl mx-auto leading-relaxed">
            Share your knowledge and expertise with our community. Use our real-time SEO analysis tool to ensure your content is fully optimized before submission.
          </p>
        </div>
        <SubmitFormClient />
      </div>
    </main>
  );
}