import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/Search',
    },
    sitemap: 'https://neerajrekwar.github.io/sitemap.xml',
  }
}