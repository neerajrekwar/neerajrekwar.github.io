
import type { Metadata } from 'next';
import { Alata, Caveat, } from 'next/font/google';
import Link from 'next/link';
import { Terminal, Settings, Bell, User } from 'lucide-react';
import '../globals.css';

const alata = Alata({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});
const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Hire Freelance Web Developer | Developer Services - Neeraj Rekwar',
  description: 'Hire a freelance full stack developer for custom website development services. Remote Next.js expert available for startups, business websites, SEO redesigns, and performance fixes.',
  keywords: [
    "hire freelance web developer",
    "hire Next.js developer",
    "freelance full stack developer for hire",
    "remote web developer for startup",
    
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/pricing",
    title: "Hire Freelance Web Developer | Developer Services - Neeraj Rekwar",
    description: "Hire a freelance full stack developer for custom website development services. Remote Next.js expert available for startups, business websites, SEO redesigns, and performance fixes.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "Freelance Full Stack Developer - Neeraj Rekwar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Hire Freelance Web Developer | Developer Services - Neeraj Rekwar",
    description: "Hire a freelance full stack developer for custom website development services.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alata.className} min-h-screen bg-primary text-secondary`}>
        <div className="flex flex-col items-center p-4 md:p-8">

          {/* Navigation */}
          <nav className="w-full max-w-7xl flex items-center justify-between mb-12">
            <div className="flex items-center justify-center gap-2">
              <Link href="/" className={`${caveat.className}  flex items-center justify-center gap-2 text-five  font-sans gap-2 text-four text-3xl sm:text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity`}>
                <div className=" rounded-md flex px-2 items-center justify-center justify-center">
                  <Terminal className="w-5 h-5" />
                  nee
                </div>
              </Link>
            </div>

            {/* Desktop Menu - Updated Paths */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium ">
              <Link href="/dashboard" className="hover:text-four transition-colors">Dashboard</Link>
              <Link href="/projects" className="hover:text-four transition-colors">Projects</Link>

              {/* Updated Links */}
              <Link href="/pricing" className="hover:text-four transition-colors">Pricing</Link>
              <Link href="/pricing/packages" className="hover:text-four transition-colors">Packages</Link>
              <Link href="/pricing/maintenance" className="hover:text-four transition-colors">Maintenance</Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button  className="flex items-center gap-1 px-3 py-1.5 bg-six rounded-full border border-seven text-sm font-medium text-four hover:bg-seven transition-colors">
                {/* <Settings className="w-4 h-4" /> */}
                <span>Let's talk</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-six border border-seven flex items-center justify-center text-four hover:bg-seven transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-six border border-seven flex items-center justify-center text-four hover:bg-seven transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </nav>

          <main className="w-full max-w-7xl">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
