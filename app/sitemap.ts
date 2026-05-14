import { MetadataRoute } from 'next';

type Article = {
  slug: string;
  date?: string;
};

// Force Static Site Generation (SSG) for the sitemap
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://neerajrekwar.github.io';

  // 1. Add your core static pages
  const staticRoutes = ['', '/about', '/blog', '/contact', '/freelance'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Fetch all blog posts to generate dynamic routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch('https://nee-one.vercel.app/api');
    if (res.ok) {
      const posts: Article[] = await res.json();
      blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date && !isNaN(new Date(post.date).getTime()) 
          ? new Date(post.date) 
          : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch (err) {
    console.error('Failed to fetch posts for sitemap generation:', err);
  }

  return [...staticRoutes, ...blogRoutes];
}