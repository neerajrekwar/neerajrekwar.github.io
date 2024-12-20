import { MetadataRoute } from 'next';
import posts from '@/app/blog/data/posts.json'; // Example JSON data file with dynamic routes

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://neerajrekwar.github.io',
      lastModified: new Date(),
      changeFrequency: 'yearly', // Typed correctly
      priority: 1,
    },
    {
      url: 'https://neerajrekwar.github.io/about',
      lastModified: new Date(),
      changeFrequency: 'monthly', // Typed correctly
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Typed correctly
      priority: 0.5,
    },
    {
      url: 'https://neerajrekwar.github.io/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Typed correctly
      priority: 0.5,
    },
  ];

  // Generate dynamic routes for blog posts
  const dynamicRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://neerajrekwar.github.io/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly', // Typed correctly
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
