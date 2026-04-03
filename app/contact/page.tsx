import FillForm from "@/components/FillForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Ready to take your online business to the next level? Contact Nee today for top-notch SEO services in Delhi. Let's work together to achieve your digital marketing goals",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/contact",
    title: "Contact me | Neeraj Rekwar",
    description: "Ready to take your online business to the next level? Contact Nee today for top-notch SEO services in Delhi.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Contact Neeraj Rekwar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Contact me | Neeraj Rekwar",
    description: "Ready to take your online business to the next level? Contact Nee today.",
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
