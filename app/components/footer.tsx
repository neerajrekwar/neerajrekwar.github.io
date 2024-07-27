"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import InstaGallery from './InstaGallery';


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
      const latestPosts = feed.data.slice(0, 4); // Get the latest 4 posts
      setImages(latestPosts);
    };

    loadFeed();
  }, []);

  return (
    <>
      <footer className="bg-seven ">
        <div className="p-4 text-five py-10 max-w-6xl m-auto">
          <ul className="flex gap-2 mb-8 items-start flex-col">
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
          <ul className="flex gap-2">
            <li>
              <a href="https://x.com/neerajrekwar" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className=" py-10  border-lime-400 max-w-6xl m-auto mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-1.25 justify-center items-start h-auto">
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
              <span className="border-2 hover:bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm48 158q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z" />
                </svg>
              </span>
              <span className=" text-xl">About</span>
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
                <span className="px-4 text-five ">
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
                <span className="px-4 text-four text-sm">
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
                <span className="px-4 text-four text-sm">
                  <a href="mailto:neerajrekwar817@gmail.com">
                    neerajrekwar817@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="p-4 mb-10 text-five">
            <div className="flex gap-2 mb-8 items-center">
              <span className="border-2 hover:bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="m787-145 28-28-75-75v-112h-40v128l87 87Zm-587 25q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                </svg>
              </span>
              <span className="text-xl">Latest News</span>
            </div>
            <ul className="">
              <a href="/" className="">
                <li className="grid grid-flow-col gap-2 hover:bg-seven transition-all duration-1000  p-2 rounded-md justify-center border-black">
                  <div className="aspact-square overflow-hidden  bg-cover bg-center">
                    <Image
                      className="aspact-square  rounded-md"
                      src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-col flex justify-items-end justify-end p-1">
                    <span className="md:text-1xl flex-wrap">
                      enormous photography in nature
                    </span>
                    <span className="text-four text-xs ">
                      07 jan, 2022 &#9679; Admin
                    </span>
                  </div>
                </li>
              </a>
              <a href="/" className="">
                <li className="grid grid-flow-col gap-2 hover:bg-seven transition-all duration-1000  p-2 rounded-md justify-center border-black">
                  <div className="aspact-square overflow-hidden  bg-cover bg-center">
                    <Image
                      className="aspact-square  rounded-md"
                      src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-col flex justify-items-end justify-end p-1">
                    <span className="md:text-1xl flex-wrap">
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
              <span className="border-2 hover:bg-seven transition-all duration-10000 border-four rounded-full p-1">
                <svg
                  className="md:h-18 md:w-18 p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="var(--five)"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z" />
                </svg>
              </span>
              <span className="text-xl">Informartion</span>
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
              <span className="border-2 hover:bg-seven transition-all duration-10000 border-four rounded-full p-1">
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
              <span className='text-xl'>Instagram</span>
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
        <div className="opacity-50 border-t-[.2px] border-four mx-8 text-center flex flex-col text-xs p-4">
          <span >Copyright ©2023 Neeraj Rekwar</span>
          <span >build by me</span>
        </div>
      </footer>
    </>
  );
}
