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
} from "@tabler/icons-react";
import posts from "@/app/blog/data/posts.json";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const latestPosts = posts.slice(0, 2);

  return (
    <footer className="bg-primary bg-custom-radial-sm border-seven text-secondary">
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
        </ul>
      </div>
      <div className="py-10 max-w-7xl m-auto mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-center items-start h-auto">
        <aside className="p-4 mb-10 text-four">
          <h2 className="text-xl text-five mb-8">About</h2>
          <address className="not-italic">
            <ul className="text-sm">
              <li className="flex mb-4 justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="var(--four)"
                  aria-hidden="true"
                >
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                </svg>
                <span className="px-4 text-four text-sm font-semibold sm:font-normal">
                  Sec 7 Dwarka New Delhi, Delhi, India 110075
                </span>
              </li>
              <li className="flex mb-4 justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="var(--four)"
                  aria-hidden="true"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                </svg>
                <a
                  href="tel:+917042149836"
                  className="px-4 text-four text-sm font-semibold sm:font-normal"
                >
                  +91 704 214 9836
                </a>
              </li>
              <li className="flex mb-4 justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="var(--four)"
                  aria-hidden="true"
                >
                  <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z" />
                </svg>
                <a
                  href="mailto:neerajrekwar817@gmail.com"
                  className="px-4 text-four text-sm font-semibold sm:font-normal"
                >
                  neerajrekwar817@gmail.com
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
                href="/products"
                className="hover:pl-1 hover:translate-x-1 transition-all"
              >
                Products
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
                href="/support"
                className="hover:pl-1 hover:translate-x-1 transition-all"
              >
                Help & support
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
      <div className="text-xs px-4 max-w-7xl m-auto" role="contentinfo">
        <div className="py-1 opacity-50 flex justify-between max-w-7xl m-auto items-center">
          <span>Copyright ©{new Date().getFullYear()} Neeraj</span>
          <span>Built by me</span>
        </div>
      </div>
    </footer>
  );
}
