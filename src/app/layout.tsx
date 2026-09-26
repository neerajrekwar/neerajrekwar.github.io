
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neerajrekwar.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'neerajrekwar Portfolio | Full-Stack Developer',
    template: '%s | neerajrekwar',
  },
  description: 'Geometric architectural portfolio of a high-performance full-stack engineer.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'neerajrekwar Portfolio | Full-Stack Developer',
    description: 'Geometric architectural portfolio of a high-performance full-stack engineer.',
    url: siteUrl,
    siteName: 'neerajrekwar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'neerajrekwar Portfolio | Full-Stack Developer',
    description: 'Geometric architectural portfolio of a high-performance full-stack engineer.',
    creator: '@neerajrekwar',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
