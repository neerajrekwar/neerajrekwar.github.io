"use client";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import React, { useEffect, useState } from "react";
import InstaGallery from "./InstaGallery";
import {
  IconBrandXFilled,
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandDiscordFilled,
} from "@tabler/icons-react";
import posts from "../app/blog/data/posts.json";
import DataSet from "./DataSet";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

interface Image {
  id: string;
  media_url: string;
  caption: string;
}

interface Feed {
  data: Image[];
}

async function fetchInstagramFeed(): Promise<Feed> {
  const url = `https://graph.instagram.com/v20.0/me/media?fields=id,username,media_url,caption,timestamp,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Footer() {
  const [images, setImages] = useState<Image[]>([]);

  // useEffect(() => {
  //   const loadFeed = async () => {
  //     const feed = await fetchInstagramFeed();
  //     const latestPosts = feed.data.slice(0, 3); // Get the latest 4 posts
  //     setImages(latestPosts);
  //   };

  //   loadFeed();
  // }, []);

  return (
    <>
      <footer className="bg-primary bg-custom-radial-sm m-auto border-seven text-secondary">
        <div className="p-4 text-four  flex flex-col md:flex-row justify-between py-10 max-w-7xl m-auto">
          <ul className="flex  gap-2 mb-8 items-start flex-col">
            <li className="">
              <div className={caveat.className}>
                <Link href={"/"} className="text-5xl text-five  font-bold">
                  {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
                  nee.
                </Link>
              </div>
            </li>
            <li className="text-1xl flex mb-4 justify-start text-five items-start">
              let&apos;s start creating something new, You & I at same
            </li>
          </ul>
          <ul className="flex gap-2 text-five h-fit">
            <li className="aspect-square flex justify-center items-center  ">
              <a
                href="https://x.com/neerajrekwar"
                target="_blank"
                className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four "
              >
                <IconBrandXFilled />
              </a>
            </li>
            <li className="aspect-square flex justify-center items-center  ">
              <a
                href="https://"
                target="_blank"
                className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four "
              >
                <IconBrandLinkedin />
              </a>
            </li>
            <li className="aspect-square flex justify-center items-center  ">
              <a
                href="https://"
                target="_blank"
                className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four "
              >
                <IconBrandGithubFilled />
              </a>
            </li>
            <li className="aspect-square flex justify-center items-center  ">
              <a
                href="https://"
                target="_blank"
                className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four "
              >
                <IconBrandDiscordFilled />
              </a>
            </li>
          </ul>
        </div>
        <div className=" py-10  border-lime-400 max-w-7xl m-auto mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-1.25 justify-center items-start h-auto">
          <div className="p-4 mb-10 text-four">
            <div className="flex gap-2 mb-8 items-center">
              <h6 className="text-xl text-five">About</h6>
            </div>
            <ul className=" text-sm ">
              <li className="flex mb-4 justify-start items-center">
                <span className="  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="var(--four)"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                  </svg>
                </span>
                <span className="px-4 text-four  text-sm font-semibold sm:font-normal ">
                Sec 7 Dwarka New Delhi, Delhi, India 110075
                </span>
              </li>
              <li className="flex mb-4 justify-start items-center">
                <span className=" ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="var(--four)"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                  </svg>
                </span>
                <span className="px-4 text-four text-sm font-semibold sm:font-normal ">
                  {" "}
                  +91 704 214 9836
                </span>
              </li>
              <li className="  flex mb-4 justify-start items-center">
                <span className=" pt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="var(--four)"
                  >
                    <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z" />
                  </svg>
                </span>
                <span className="px-4 text-four text-sm font-semibold sm:font-normal ">
                  <a href="mailto:neerajrekwar817@gmail.com">
                    neerajrekwar817@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="p-4 mb-10 text-four">
            <div className="flex gap-2 mb-8 items-center">
              <h6 className="text-xl text-five">Latest News</h6>
            </div>
            <ul>
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="flex gap-1 m justify-start items-start"
                >
                  <div className="basis-1/4 m-1 aspect-square">
                    {post.imageUrl ? (
                      <Image
                        className="w-full rounded  aspect-square object-cover"
                        src={post.imageUrl}
                        width={300}
                        height={300}
                        alt={post.title}
                      />
                    ) : (
                      <div>No image available</div>
                    )}
                  </div>
                  <div className="basis-3/4 m-1 flex justify-start items-start flex-col">
                    {post.title ? (
                      <Link
                        className="md:text-sm  text-four "
                        href={`/blog/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    ) : (
                      <div className="md:text-sm  text-four ">
                        title in processing
                      </div>
                    )}
                    <div className="flex gap-1">
                      {post.author ? (
                        <p className="text-sm opacity-50">{post.author}</p>
                      ) : (
                        <p className="text-sm opacity-50">unknown</p>
                      )}{" "}
                      
                      {post.date ? (
                        <p className="text-sm opacity-50">{post.date}</p>
                      ) : (
                        <p className="text-sm opacity-50">unknown</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 mb-10 text-four">
            <div className="flex gap-2 mb-8 items-center">
              <h6 className="text-xl text-five">Informartion</h6>
            </div>
            <ul className=" text-four text-sm">
              <li className="p-1  ">
                {" "}
                <a
                  href="/about"
                  className="hover:pl-1 hover:translate-x-1 transition-all"
                >
                  About
                </a>
              </li>
              <li className="p-1">
                {" "}
                <a
                  href="/about"
                  className="hover:pl-1 hover:translate-x-1 transition-all"
                >
                  Products
                </a>
              </li>
              <li className="p-1">
                {" "}
                <a
                  href="/about"
                  className="hover:pl-1 hover:translate-x-1 transition-all"
                >
                  Blog
                </a>
              </li>
              <li className="p-1">
                {" "}
                <a
                  href="/about"
                  className="hover:pl-1 hover:text-four hover:translate-x-1 transition-all"
                >
                  contact
                </a>
              </li>
              <li className="p-1">
                {" "}
                <a
                  href="/about"
                  className="hover:pl-1 hover:translate-x-1 transition-all"
                >
                  Help & support
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4 mb-10 text-four">
            <div className="flex gap-2 mb-8 items-center">
              <h6 className="text-xl text-five">Instagram</h6>
            </div>
            <ul className="">
              <div className="mx-auto">
                <div className="flex justify-center space-x-4">
                  {/* <InstaGallery /> */}
                  {/* <DataSet /> */}
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="text-xs px-4 max-w-7xl   m-auto">
          <div className="py-1 opacity-50 flex justify-between max-w-7xl  m-auto  items-center">
            <span>Copyright ©2023 Neeraj</span>
            <span>build by me</span>
          </div>
        </div>
      </footer>
    </>
  );
}
