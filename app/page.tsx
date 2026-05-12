import type { Metadata } from "next";
import HomeSectionHeader from "../components/homeSectionHeader";
import IntroSection from "../components/introSection";
import { ReviewSection } from "../components/reviewSection";
import ExpSection from "../components/ExpSection";
import { VisionSection } from "../components/VisionSection";
import StickyRelativeDemo from "../components/StickyRelativeDemo";
import { AccordionDemo } from "@/components/ui/Accordion";
import RotatingText from "@/components/RotatingText";



export const metadata: Metadata = {
  title: {
    default: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    template: "%s | Neeraj Rekwar"
  },
  description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development services. Hire a remote web developer for your startup today.",
  keywords: [
    "hire freelance web developer",
    "hire Next.js developer",
    "freelance full stack developer for hire",
    "remote web developer for startup",
    "hire SEO expert for website",
    "freelance website developer global",
    "custom website development services",
    "hire developer for business website",
    "Next.js expert freelancer",
    "need website developer urgent",
    "redesign my website SEO friendly",
    "fix website performance issues",
    "hire Next.js developer for startup website",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Neeraj Rekwar", url: "https://neerajrekwar.github.io" }],
  creator: "Neeraj Rekwar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development services.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp", // You should create an image file in your public folder
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar - Freelance Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of web development services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I offer full-stack web development and responsive web design services to improve user experience across all devices. My custom solutions are built to boost user engagement and conversion rates for your business. Let's discuss how I can tailor my services to meet your exact needs.",
        },
      },
      {
        "@type": "Question",
        name: "Are the websites and applications you build scalable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I design and build applications with scalability in mind from day one. Using modern frameworks like Next.js and robust backend architectures, I ensure your website can easily handle increased traffic and grow seamlessly alongside your business.",
        },
      },
      {
        "@type": "Question",
        name: "Can you customize the website to fit my specific business needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. I don't use one-size-fits-all templates. Every project I take on is fully tailored to match your specific business requirements, brand identity, and long-term goals.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure the projects you deliver are reliable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I build my projects on a foundation of modern, industry-standard technologies and follow best practices for clean code. Combined with rigorous testing and performance optimization, I ensure your website is fast, secure, and highly reliable.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get in touch with you to discuss my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out to me directly via email at dev.neerajrekwar@gmail.com or by calling +91 704 214 9836. I am always excited to discuss new ideas and look forward to connecting with you.",
        },
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neeraj Rekwar",
    url: "https://neerajrekwar.github.io",
    image: "https://neerajrekwar.github.io/me_profile.webp",
    jobTitle: "Freelance Full Stack Developer",
    description: "Freelance Full Stack Developer specializing in Next.js, React, and custom website development services.",
    sameAs: [
      "https://www.linkedin.com/in/neeraj-rekwar/",
      "https://github.com/neerajrekwar",
      "https://x.com/neerajrekwar"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Neeraj Rekwar - Web Development Services",
    image: "https://neerajrekwar.github.io/me_profile.webp",
    description: "Expert full-stack web development, SEO optimization, and performance fixes for startups and businesses.",
    url: "https://neerajrekwar.github.io",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN"
    },
    priceRange: "$$"
  };

  return (
    <main className="scroll-smooth bg-primary  focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven">
      {/* JSON-LD Scripts for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, professionalServiceSchema, faqSchema]) }}
      />

      <section className="">
        <HomeSectionHeader />
      </section>
      <section className="md:min-h-screen mx-auto w-full max-w-7xl px-4">
        <div className="flex gap-6 items-center flex-col justify-center h-[40rem] w-full text-center">
          <h3 className="text-sm sm:text-base md:text-lg text-four tracking-wide uppercase opacity-80">
            embrace the new, seek innovation, and discover possibilities.
          </h3>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center w-full">
           <span className="px-2 sm:px-2 md:px-3 text-3xl sm:text-4xl md:text-5xl font-bold text-four">Build awesome apps with</span>
            <RotatingText
              texts={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
              mainClassName="px-4 sm:px-5 md:px-6 bg-four text-white text-3xl sm:text-4xl md:text-5xl font-bold overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-xl  "
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              animatePresenceMode="popLayout"
              splitBy="characters"
              auto
              loop
            />
          </div>
        </div>
      </section>
      <section className="three">
        <StickyRelativeDemo />
      </section>
      <section className="">
        <ReviewSection />
      </section>
      <section id="vision" className="">
        <ExpSection />
      </section>
      <section className="">
        <VisionSection />
      </section>
      <section className="text-five">
        <AccordionDemo />
      </section>
    </main>
  );
}
