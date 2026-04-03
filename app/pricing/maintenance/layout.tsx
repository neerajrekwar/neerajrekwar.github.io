import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance & Service Plans",
  description: "Choose a monthly maintenance plan that fits your development stage. Let us handle bugs, security, and SEO optimization.",
  alternates: {
    canonical: "/pricing/maintenance",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/pricing/maintenance",
    title: "Maintenance & Service Plans | Neeraj Rekwar",
    description: "Choose a monthly maintenance plan that fits your development stage. Let us handle bugs, security, and SEO optimization.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar - Maintenance Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Maintenance & Service Plans | Neeraj Rekwar",
    description: "Choose a monthly maintenance plan that fits your development stage.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}