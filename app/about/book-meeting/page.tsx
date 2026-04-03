
import CalendlyWidget from "@/components/Book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description:
    "Let's make something great together. Book a meeting with Neeraj Rekwar to discuss your next big idea.",
  alternates: {
    canonical: "/about/book-meeting",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about/book-meeting",
    title: "Book a Meeting | Neeraj Rekwar",
    description: "Let's make something great together. Book a meeting with Neeraj to discuss your next big idea.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Book a meeting with Neeraj Rekwar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Book a Meeting | Neeraj Rekwar",
    description: "Let's make something great together. Book a meeting with Neeraj to discuss your next big idea.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

const book = () => {
 
  
  return (
    <div
      
    ><CalendlyWidget/></div>
  );
};


export default book