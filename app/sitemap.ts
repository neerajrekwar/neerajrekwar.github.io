import { MetadataRoute } from "next";
import posts from "./blog/data/posts.json";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neerajrekwar.github.io";

  const hardcodedRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://neerajrekwar.github.io/',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 1.0,
    },
    {
      url: 'https://neerajrekwar.github.io/about',
      lastModified: '2026-01-27T19:24:10+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/contact',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/blog',
      lastModified: '2026-01-27T19:24:10+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/freelance',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/about/book-meeting',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.64,
    }
  ];
  // Generate dynamic routes for the blog posts
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // Fallback to the current date if the post date is empty/missing
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Generate static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    // Included both physical and canonical paths for completeness
    "/freelance/maintenance",
    "/freelance/packages",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Combine and return all routes
  return [...hardcodedRoutes, ...staticRoutes, ...blogRoutes];
}
