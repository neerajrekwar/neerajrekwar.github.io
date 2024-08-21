"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import InstaGallery from './InstaGallery';
import { IconBrandXFilled, IconBrandLinkedin, IconBrandGithubFilled, IconBrandDiscordFilled, } from '@tabler/icons-react';


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

  useEffect(() => {
    const loadFeed = async () => {
      const feed = await fetchInstagramFeed();
      const latestPosts = feed.data.slice(0, 3); // Get the latest 4 posts
      setImages(latestPosts);
    };

    loadFeed();
  }, []);

  return (
    <>
      <footer className="bgrid">
        <div className="p-4 text-five flex flex-col md:flex-row justify-between py-10 max-w-6xl m-auto">
          <ul className="flex  gap-2 mb-8 items-start flex-col">
            <li className="">
            <div className={caveat.className}>
            <Link href={"/"} className="text-5xl  flex justify-start font-semibold  items-start">
              {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
              nee.
            </Link>
          </div>
            </li>
            <li className="text-1xl flex mb-4 justify-start items-start">
              let&apos;s start creating something new, You & I at same
            </li>
          </ul>
          <ul className="flex gap-2 h-fit">
            <li className='aspect-square flex justify-center items-center  '>
              <a href="https://x.com/neerajrekwar" target="_blank" className='aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four '>
               <IconBrandXFilled />
                
              </a>
            </li>
            <li className='aspect-square flex justify-center items-center  '>
              <a href="https://" target="_blank" className='aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four '>
              
                <IconBrandLinkedin />
              </a>
            </li>
            <li className='aspect-square flex justify-center items-center  '>
              <a href="https://" target="_blank" className='aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four '>
                <IconBrandGithubFilled />
              </a>
            </li>
            <li className='aspect-square flex justify-center items-center  '>
              <a href="https://" target="_blank" className='aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four '>
                <IconBrandDiscordFilled />
              </a>
            </li>
          </ul>
        </div>
        <div className=" py-10  border-lime-400 max-w-6xl m-auto mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-1.25 justify-center items-start h-auto">
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
              <span className="bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 "
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm48 158q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z" />
                </svg>
              </span>
              <h6 className=" text-xl">About</h6>
            </div>
            <ul className=" text-sm ">
              <li className="  flex mb-4 justify-start items-center">
                <span className="  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="var(--five)"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                  </svg>
                </span>
                <span className="px-4 text-five  text-sm font-semibold sm:font-normal ">
                  Dwarka sec 7 New Delhi Delhi India 110075
                </span>
              </li>
              <li className=" flex mb-4 justify-start items-center">
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
              <li className=" flex mb-4 justify-start items-center">
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
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
            <span className="bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 "
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="m787-145 28-28-75-75v-112h-40v128l87 87Zm-587 25q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                </svg>
              </span>
              <h6 className="text-xl">Latest News</h6>
            </div>
            <ul className="">
              <a href="/" className="">
                <li className="grid grid-flow-col gap-2 hover:bg-seven transition-all duration-1000  p-2 rounded-md  justify-center border-black">
                  <div className=" min-h-20 min-w-20  overflow-hidden  bg-cover bg-center">
                    <Image
                      className="h-5f0 w-50  rounded-md"
                      src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-col flex justify-items-end justify-end p-1">
                    <span className="md:text-1xl font-semibold flex-wrap">
                      enormous photography in nature
                    </span>
                    <span className="text-four text-xs ">
                      07 jan, 2022 &#9679; Admin
                    </span>
                  </div>
                </li>
              </a>
              <a href="/" className="">
                <li className="grid grid-flow-col gap-2 hover:bg-seven transition-all duration-1000  p-2 rounded-md  justify-center border-black">
                  <div className=" min-h-20 min-w-20  overflow-hidden  bg-cover bg-center">
                    <Image
                      className="h-5f0 w-50  rounded-md"
                      src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-col flex justify-items-end justify-end p-1">
                    <span className="md:text-1xl font-semibold flex-wrap">
                      enormous photography in nature 
                    </span>
                    <span className="text-four text-xs ">
                      07 jan, 2022 &#9679; Admin
                    </span>
                  </div>
                </li>
              </a>
              
            </ul>
          </div>
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
            <span className="bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 "
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z" />
                </svg>
              </span>
              <h6 className="text-xl">Informartion</h6>
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
                  className="hover:pl-1 hover:text-five hover:translate-x-1 transition-all"
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
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
              <span className="bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--five)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"

                  className="icon icon-tabler md:h-18 md:w-18  icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </span>
              <h6 className='text-xl'>Instagram</h6>
            </div>
            <ul className="">
              <div className="mx-auto">
                <div className="flex justify-center space-x-4">
                  <InstaGallery />
                  
                </div>
              </div>

            </ul>
          </div>
        </div>
        <div className="opacity-75 border-t-[.2px] border-four   mx-4 text-center flex justify-between text-xs text-five p-2">
          <span >Copyright ©2023 Neeraj Rekwar</span>
          <span >build by me</span>
        </div>
      </footer>
      
    </>
  );
}
