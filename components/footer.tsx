'use client';
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
} from "@tabler/icons-react";
import posts from "@/app/blog/data/posts.json";
import DarkModebtn from "./theme/DarkModebtn";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const latestPosts = posts.slice(0, 2);

  return (
    <footer className="bg-primary border border-2 border-red-500 bg-custom-radial-sm border-seven text-secondary">
      <div className="p-4 text-four flex flex-col md:flex-row justify-between py-10 max-w-7xl m-auto">
        <div className="flex gap-2 mb-8 items-start flex-col">
          <div className={caveat.className}>
            <Link href={"/"} className="text-5xl text-five font-bold">
              nee.
            </Link>
          </div>
          <p className="text-1xl flex mb-4 justify-start text-five items-start">
            Let&apos;s start creating something new, You & I at same
          </p>
        </div>
        <ul className="flex gap-2 text-five h-fit">
          <li>
            <a
              href="https://x.com/neerajrekwar"
              target="_blank"
              className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four flex justify-center items-center"
              aria-label="Neeraj Rekwar on X"
            >
              <IconBrandXFilled />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/neeraj-rekwar/"
              target="_blank"
              className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four flex justify-center items-center"
              aria-label="Neeraj Rekwar on LinkedIn"
            >
              <IconBrandLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/neerajrekwar"
              target="_blank"
              className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four flex justify-center items-center"
              aria-label="Neeraj Rekwar on Github"
            >
              <IconBrandGithubFilled />
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/neerajrekwar"
              target="_blank"
              className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four flex justify-center items-center"
              aria-label="Neeraj Rekwar on Discord"
            >
              <IconBrandDiscordFilled />
            </a>
          </li>
          <li>
            <DarkModebtn />
          </li>
        </ul>
      </div>
      <div className="py-10 max-w-7xl m-auto mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-center items-start h-auto">
        <aside className="p-4 mb-10 text-four">
          <h2 className="text-xl text-five mb-8">About</h2>
          <address className="not-italic">
            <ul className="space-y-4 text-sm text-four">
              {/* Location */}
              <li className="group flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 text-five transition-transform group-hover:scale-110">
                  <IconLocation size={20} />
                </div>
                <span className="leading-relaxed">
                  Sec 7 Dwarka, New Delhi,<br />
                  Delhi, India 110075
                </span>
              </li>

              {/* Phone */}
              <li className="group flex items-center gap-4">
                <div className="flex-shrink-0 text-five transition-transform group-hover:scale-110">
                  <IconDeviceMobile size={20} />
                </div>
                <a
                  href="tel:+917042149836"
                  className="transition-colors hover:text-five hover:underline underline-offset-4"
                >
                  +91 704 214 9836
                </a>
              </li>

              {/* Email */}
              <li className="group flex items-center gap-4">
                <div className="flex-shrink-0 text-five transition-transform group-hover:scale-110">
                  <IconAt size={20} />
                </div>
                <a
                  href="mailto:dev.neerajrekwar@gmail.com"
                  className="flex items-center gap-1 transition-colors hover:text-five hover:underline underline-offset-4"
                >
                  dev.neerajrekwar@gmail.com
                  <IconExternalLink size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </address>
        </aside>
        <aside className="p-4 mb-10 text-four">
          <h2 className="text-xl text-five mb-8">Latest News</h2>
          <ul>
            {latestPosts.map((post) => (
              <li
                key={post.slug}
                className="flex gap-1 m justify-start items-start mb-4"
              >
                <div className="basis-1/4 m-1 aspect-square">
                  {post.imageUrl ? (
                    <Image
                      className="w-full rounded aspect-square object-cover"
                      src={post.imageUrl}
                      width={80}
                      height={80}
                      alt={post.title}
                    />
                  ) : (
                    <div className="w-full h-full bg-seven flex items-center justify-center text-four rounded">
                      No image
                    </div>
                  )}
                </div>
                <div className="basis-3/4 m-1 flex justify-start items-start flex-col">
                  <h3>
                    <Link
                      className="md:text-sm text-four"
                      href={`/blog/${post.slug}`}
                    >
                      {post.title || "Title in processing"}
                    </Link>
                  </h3>
                  <div className="flex gap-1 text-sm opacity-50">
                    <p>{post.author || "unknown"}</p>
                    <p>{post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "unknown"}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <nav className="p-4 mb-10 text-four" aria-label="Footer Navigation">
          <h2 className="text-xl text-five mb-8">Information</h2>
          <ul className="text-four text-sm">
            <li className="p-1">
              <a
                href="/about"
                className="hover:pl-1 hover:translate-x-1 transition-all"
              >
                About
              </a>
            </li>
            
            <li className="p-1">
              <a
                href="/blog"
                className="hover:pl-1 hover:translate-x-1 transition-all"
              >
                Blog
              </a>
            </li>
            <li className="p-1">
              <a
                href="/contact"
                className="hover:pl-1 hover:text-four hover:translate-x-1 transition-all"
              >
                Contact
              </a>
            </li>
            <li className="p-1">
              <a
                href="/freelance"
                className="hover:pl-1 hover:translate-x-1 transition-all"
              >
                freelance
              </a>
            </li>
          </ul>
        </nav>
        <figure className="p-4 mb-10 text-four">
          <h2 className="text-xl text-five mb-8">Instagram</h2>
          <figcaption className="text-sm text-four mb-4">Follow me on Instagram for more updates</figcaption>
          <div className="grid grid-cols-2 gap-2">
            {/* Instagram images will be dynamically loaded here */}
          </div>
        </figure>
      </div>
      <div className="text-xs px-4 max-w-7xl mx-auto w-full" role="contentinfo">
        <div className="py-6 opacity-50 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} All rights reserved neerajrekwar
          </span>

          <span className="flex items-center gap-1">
            Built by <a href="https://github.com/neerajrekwar" target="_blank" rel="noopener noreferrer" className="hover:underline hover:opacity-100 transition-opacity">neerajrekwar</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
