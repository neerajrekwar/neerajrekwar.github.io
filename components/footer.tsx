import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import React from "react";
import {
  IconBrandXFilled,
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandDiscordFilled,
  IconLocation,
  IconDeviceMobile,
  IconAt,
  IconExternalLink,
  IconArrowRight,
} from "@tabler/icons-react";
import DarkModebtn from "./theme/DarkModebtn";

type LatestArticle = {
  id: string;
  slug: string;
  title: string;
  imageUrl?: string;
  description: string;
  date: string | any;
  author?: string;
  duration?: string;
};

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default async function Footer() {
  let latestPosts: LatestArticle[] = [];

  try {
    const timestamp = Date.now();
    const res = await fetch(`https://nee-one.vercel.app/api/articles?t=${timestamp}`);
    if (res.ok) {
      latestPosts = await res.json();
    }
  } catch (err) {
    console.error("Error fetching latest posts:", err);
  }

  return (
    <footer className="bg-primary border-t border-seven text-secondary relative overflow-hidden">
      {/* Optional decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-five/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="flex flex-col max-w-sm">
            <div className={caveat.className}>
              <Link href={"/"} className="text-5xl text-five font-bold hover:opacity-80 transition-opacity inline-block mb-4">
                nee.
              </Link>
            </div>
            <p className="text-four text-base leading-relaxed mb-8">
              Let&apos;s start creating something new, You & I at the same time. Crafting digital experiences with passion and precision.
            </p>
            <div className="flex items-center gap-4">
              <ul className="flex flex-wrap gap-3 text-five">
                {[
                  { icon: <IconBrandXFilled size={20} />, href: "https://x.com/neerajrekwar", label: "X (Twitter)" },
                  { icon: <IconBrandLinkedin size={20} />, href: "https://www.linkedin.com/in/neeraj-rekwar/", label: "LinkedIn" },
                  { icon: <IconBrandGithubFilled size={20} />, href: "https://github.com/neerajrekwar", label: "GitHub" },
                  { icon: <IconBrandDiscordFilled size={20} />, href: "https://discordapp.com/users/neerajrekwar", label: "Discord" },
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-seven/50 hover:bg-five hover:text-primary transition-all duration-300 shadow-sm"
                      aria-label={`Neeraj Rekwar on ${social.label}`}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="h-8 w-px bg-seven/50" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-seven/50 hover:bg-seven transition-all duration-300 shadow-sm cursor-pointer">
                <DarkModebtn />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full md:w-auto flex-1 md:ml-10">
            {/* Contact Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-five mb-6 tracking-wide">Contact</h3>
              <ul className="space-y-4 text-sm text-four">
                <li className="group flex items-start gap-3">
                  <IconLocation size={18} className="mt-0.5 text-five/70 group-hover:text-five transition-colors" />
                  <span className="leading-relaxed">
                    Sec 7 Dwarka, New Delhi,<br />
                    Delhi, India 110075
                  </span>
                </li>
                <li className="group flex items-center gap-3">
                  <IconDeviceMobile size={18} className="text-five/70 group-hover:text-five transition-colors" />
                  <a href="tel:+917042149836" className="transition-colors hover:text-five">
                    +91 704 214 9836
                  </a>
                </li>
                <li className="group flex items-center gap-3">
                  <IconAt size={18} className="text-five/70 group-hover:text-five transition-colors" />
                  <a href="mailto:dev.neerajrekwar@gmail.com" className="flex items-center gap-1 transition-colors hover:text-five truncate">
                    dev.neerajrekwar@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-five mb-6 tracking-wide">Explore</h3>
              <ul className="space-y-3 text-sm text-four">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Freelance', path: '/freelance' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path}
                      className="group flex items-center gap-2 w-fit transition-colors hover:text-five"
                    >
                      <IconArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-five" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest News */}
            <div className="flex flex-col sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-five mb-6 tracking-wide">Latest Thoughts</h3>
              <ul className="space-y-5">
                {latestPosts.length > 0 ? latestPosts.map((post) => (
                  <li key={post.slug} className="group flex gap-3 items-center">
                    <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md bg-seven/50">
                      {post.imageUrl ? (
                        <Image
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          src={post.imageUrl}
                          width={64}
                          height={64}
                          alt={post.title}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-four/50">
                          No img
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-four group-hover:text-five transition-colors line-clamp-2 mb-1"
                      >
                        {post.title || "Title in processing"}
                      </Link>
                      <span className="text-xs text-four/60">
                        {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : "Unknown date"}
                      </span>
                    </div>
                  </li>
                )) : (
                  <li className="text-sm text-four/60">No recent thoughts available.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-seven/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-four/60">
          <p>
            &copy; {new Date().getFullYear()} Neeraj Rekwar. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed & Built by 
            <a 
              href="https://github.com/neerajrekwar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-four hover:text-five font-medium transition-colors"
            >
              @neerajrekwar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
