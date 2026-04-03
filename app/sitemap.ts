import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
      url: 'https://neerajrekwar.github.io/blog/first-post',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/blog/second-post',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/pricing',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.8,
    },
    {
      url: 'https://neerajrekwar.github.io/about/book-meeting',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.64,
    },
    {
      url: 'https://neerajrekwar.github.io/blog/third-post',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.64,
    },
    {
      url: 'https://neerajrekwar.github.io/pricing/packages',
      lastModified: '2026-01-27T19:24:11+00:00',
      priority: 0.64,
    },
    {
      url: 'https://neerajrekwar.github.io/pricing/maintenance',
      lastModified: '2026-01-27T19:24:10+00:00',
      priority: 0.64,
    },
  ];
}
