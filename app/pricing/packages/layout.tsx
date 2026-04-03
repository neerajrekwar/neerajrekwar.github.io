import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description: "Explore development packages and monthly maintenance plans by Neeraj Rekwar. Scalable solutions for your next big idea.",
  alternates: {
    canonical: "/pricing/packages",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/pricing/packages",
    title: "Pricing & Packages | Neeraj Rekwar",
    description: "Explore development packages and monthly maintenance plans by Neeraj Rekwar.",
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
    title: "Pricing & Packages | Neeraj Rekwar",
    description: "Explore development packages and monthly maintenance plans by Neeraj Rekwar.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}