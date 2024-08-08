// app/sitemap.xml.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Generate your sitemap data here (example: using fs or a database)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://neerajrekwar.gihub.io/</loc>
      <lastmod>2024-08-08</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    {/* Add more URLs here */}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
