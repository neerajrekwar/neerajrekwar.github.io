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
    "freelance full stack developer for hire",
    "Shopify website developer"
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you start if I need a website developer urgently?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I can usually prioritize and start within 24-48 hours for urgent projects. Please fill out the contact form or message me directly on WhatsApp for the fastest response.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire you as a remote full stack developer for my startup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! I offer freelance full stack development services and monthly retainer plans to support, maintain, and scale your business website or startup.",
        },
      },
      {
        "@type": "Question",
        name: "Do your web development services include SEO optimization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I ensure that all the websites I build or redesign are fully SEO-friendly, optimized for core web vitals and technical performance to help you rank better.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to discuss my custom website development needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out by filling out the contact form on this page, emailing me, or connecting via Telegram or WhatsApp. We can then schedule a discovery call to discuss your exact needs.",
        },
      }
    ],
  };

  return(
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FillForm/>
    </main>
  );
  
};

export default ContactPage;
