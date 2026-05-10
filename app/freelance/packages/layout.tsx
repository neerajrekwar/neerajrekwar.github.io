import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Custom Website Development Services",
  description: "Explore custom website development services and scalable packages by a freelance full stack developer. Perfect for when you need to hire a developer for a business website or startup.",
  keywords: [
    "custom website development services",
    "hire developer for business website",
    "hire freelance web developer",
    "freelance full stack developer for hire",
    "hire Next.js developer for startup website",
    "freelance website developer global"
  ],
  alternates: {
    canonical: "/pricing/packages",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/pricing/packages",
    title: "Pricing & Packages | Custom Website Development Services",
    description: "Explore custom website development services and scalable packages by a freelance full stack developer.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar - Pricing Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Pricing & Packages | Custom Website Development Services",
    description: "Explore custom website development services and scalable packages by a freelance full stack developer.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}