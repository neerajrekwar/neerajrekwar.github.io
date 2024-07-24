"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image"

export const VisionSection: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl m-auto ">
        <div className="p-2 justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
          <div className="text-4xl text-third sm:text-5xl sm:mx-2">&#8226;</div>
          Vision to the Future
        </div>
        <div className="text-four min-h-screen md:bg-gradient-to-r from-seven md:rounded-ss-2xl">
          <div className="md:h-80 md:flex-row md:flex gap-4  border-four">
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-five basis-1/2 font-bold  rounded-2xl m-2 p-4 h-60 md:h-auto"
            ></div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five  ">
                UI/UX Design
              </h2>
              <p>
                Websites will{" "}
                <a href="/" target="_blank" className="">
                  <strong className="text-five font-normal ">
                    customization in website & changes
                  </strong>
                </a>{" "}
                analyze user behavior and preferences,
                <strong className="text-five font-normal">
                  {" "}
                  dynamically tailoring layouts, content, and recommendations to
                  each visitor.
                </strong>{" "}
                Imagine a shopping site that curates a personalized product
                selection based on your browsing history and past purchases.
              </p>
            </div>
          </div>
          <div className=" p-2 border-four  md:flex flex-col justify-between">
            <div className=" flex justify-between">
              <div className="flex items-end">
                <h4 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-four md:text-3xl lg:text-5xl">Change your old from new engaging user experience</h4>
              </div>
              <div className="bg-seven p-4 rounded-3xl">
                <Image src="/projects/home/Programming.svg"
                  className=""
                  width={300} height={300} alt="best programing tech development" />
              </div>
            </div>
            <div className=" md:flex gap-4 border-five">
              <div className="flex md:flex-col gap-2 my-10 flex-row-reverse">
                <h3>Ours technology to use improving web appearance.</h3>
                <div className="flex ">
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                      <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                    </svg>
                  </span>
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                      <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                    </svg>
                  </span>
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                      <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex md:flex-col gap-2 my-10 justify-between flex-row">
                <h5 className="text-4xl md:text-base">use library</h5>
                <div className="flex  justify-center">
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
                      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
                      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
                      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
                      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
                      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
                      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
                    </svg>
                  </span>
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                    </svg>
                  </span>
                  <span className="p-1 m-2 bg-seven rounded-md fill-five">
                    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-npm">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M1 8h22v7h-12v2h-4v-2h-6z" />
                      <path d="M7 8v7" />
                      <path d="M14 8v7" />
                      <path d="M17 11v4" />
                      <path d="M4 11v4" />
                      <path d="M11 11v1" />
                      <path d="M20 11v4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-four  min-h-screen md:bg-gradient-to-l pt-2 from-seven md:rounded-se-2xl">
          <div
            style={{}}
            className=" md:h-80 mb-20 md:flex-row-reverse md:flex gap-4  border-four"
          >
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDl8fHxlbnwwfHx8fHw%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-4xl basis-1/2 font-bold rounded-2xl mx-2 p-4 h-60 md:h-auto">
            </div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                User-centric customization
              </h2>
              <p >
                Websites have evolved to seamlessly adapt to various devices,
                ensuring a uniform and exceptional ,<strong className="text-five font-normal"> user experience on desktops,
                  mobiles, and tablets.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="text-four min-h-screen md:bg-gradient-to-r from-seven md:rounded-ss-2xl">
          <div className="md:h-80  mb-20 md:flex-row md:flex gap-4  border-four">
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-four basis-1/2 font-bold  rounded-2xl m-2 p-4 h-60 md:h-auto"
            ></div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                Web Bugs fixing
              </h2>
              <p>
                Web Programming bugs, also known as software bugs, are errors or
                flaws in a computer program that cause it to produce incorrect
                outputs or behave unexpectedly. These bugs can vary from minor
                inconveniences to critical issues that crash the program
                entirely. Rest assured, <strong className="text-five font-normal">we&apos;ll solve your web programming bugs.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="text-four min-h-screen md:h-auto sm:bg-gradient-to-l pt-2 from-seven md:rounded-se-2xl">
          <div
            style={{}}
            className="md:h-80  md:flex-row-reverse md:flex gap-4  border-four"
          >
            <div
              style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683133924436-a7afbdf8cd25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-4xl basis-1/2 font-bold  rounded-2xl mx-2 p-4 h-60 md:h-auto"
            >
            </div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                Startups & Small Businesses
              </h2>
              <p >
                <strong className="text-five font-normal">Are you struggling to establish your online presence?</strong> Small Business Helps can be your one-stop shop for all your web development needs. We understand the unique challenges faced by small businesses, and our team of experts will craft a website that perfectly reflects your brand and resonates with your target audience. From user-friendly design and e-commerce functionality to powerful SEO optimization, we&apos;ll equip you with the tools to attract customers, boost sales, and achieve your online goals. Let Small Business Helps translate your vision into a website that works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
