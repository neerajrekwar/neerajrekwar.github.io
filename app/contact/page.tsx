import FillForm from "@/components/FillForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me | Hire Next.js Developer - Neeraj Rekwar",
  description: "Need a website developer urgent? Contact Neeraj today to hire a freelance web developer, SEO expert, or remote full stack developer for your startup or business website.",
  keywords: [
    "need website developer urgent",
    "hire freelance web developer",
    "hire Next.js developer",
    "hire SEO expert for website",
    "hire developer for business website",
    "remote web developer for startup",
    "freelance full stack developer for hire"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/contact",
    title: "Contact me | Hire Next.js Developer - Neeraj Rekwar",
    description: "Need a website developer urgent? Contact Neeraj today to hire a freelance web developer, SEO expert, or remote full stack developer.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Contact Neeraj Rekwar - Hire Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Contact me | Hire Next.js Developer - Neeraj Rekwar",
    description: "Need a website developer urgent? Contact Neeraj today to hire a freelance web developer.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

const ContactPage: React.FC = () => {
  return(
    <main>
      <FillForm/>
    </main>
  );
  
};

export default ContactPage;
