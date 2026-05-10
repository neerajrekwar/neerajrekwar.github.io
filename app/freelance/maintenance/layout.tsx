import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance Plans | Fix Website Performance Issues",
  description: "Choose a monthly maintenance plan that fits your startup. Let a remote Next.js developer handle bugs, security, fix website performance issues, and redesign your website to be SEO friendly.",
  keywords: [
    "fix website performance issues",
    "redesign my website SEO friendly",
    "hire SEO expert for website",
    "remote web developer for startup",
    "hire Next.js developer for startup website",
    "custom website development services"
  ],
  alternates: {
    canonical: "/pricing/maintenance",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/pricing/maintenance",
    title: "Maintenance Plans | Fix Website Performance Issues",
    description: "Choose a monthly maintenance plan that fits your startup. Let a remote Next.js developer handle bugs, security, fix website performance issues, and redesign your website to be SEO friendly.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar - Maintenance Plans and SEO Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Maintenance Plans | Fix Website Performance Issues",
    description: "Choose a monthly maintenance plan that fits your startup.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}