"use client";

import { motion } from "framer-motion";
import React from "react";

export const VisionSection: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl m-auto ">
        <div className="p-2 justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
          <div className="text-4xl text-third sm:text-5xl sm:mx-2">&#8226;</div>
          Vision to the Future
        </div>
        <div className="text-five  min-h-screen md:bg-gradient-to-r from-seven md:rounded-ss-2xl">
          <div className="md:h-80  mb-20 md:flex-row md:flex gap-4  border-four">
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-five basis-1/2 font-bold  rounded-2xl m-2 p-4 h-60 md:h-auto"
            ></div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                UI/UX Design
              </h2>
              <p>
                Websites will{" "}
                <a href="/" target="_blank" className="">
                  <strong className="text-four">
                    customization in website & changes
                  </strong>
                </a>{" "}
                analyze user behavior and preferences,
                <strong className="text-four ">
                  {" "}
                  dynamically tailoring layouts, content, and recommendations to
                  each visitor.
                </strong>{" "}
                Imagine a shopping site that curates a personalized product
                selection based on your browsing history and past purchases.
              </p>
            </div>
          </div>
        </div>
        <div className="text-five  min-h-screen md:bg-gradient-to-l pt-2 from-seven md:rounded-se-2xl">
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
              className="text-4xl basis-1/2 font-bold  rounded-2xl mx-2 p-4 h-60 md:h-auto"
            >
            </div>
            <div className="basis-1/2 text-base md:text-xl p-4">
              <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                User-centric customization
              </h2>
              <p >
                Websites have evolved to seamlessly adapt to various devices,
                ensuring a uniform and exceptional ,<strong className="text-yellow-600"> user experience on desktops,
                  mobiles, and tablets.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="text-five  min-h-screen md:bg-gradient-to-r from-seven md:rounded-ss-2xl">
          <div className="md:h-80  mb-20 md:flex-row md:flex gap-4  border-four">
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-five basis-1/2 font-bold  rounded-2xl m-2 p-4 h-60 md:h-auto"
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
                entirely. Rest assured, <strong className="text-red-600">we&apos;ll solve your web programming bugs.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="text-five  min-h-screen md:h-auto sm:bg-gradient-to-l pt-2 from-seven md:rounded-se-2xl">
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
                Small Business Helps
              </h2>
              <p >
                <strong className="text-green-600">Are you struggling to establish your online presence?</strong> Small Business Helps can be your one-stop shop for all your web development needs. We understand the unique challenges faced by small businesses, and our team of experts will craft a website that perfectly reflects your brand and resonates with your target audience. From user-friendly design and e-commerce functionality to powerful SEO optimization, we&apos;ll equip you with the tools to attract customers, boost sales, and achieve your online goals. Let Small Business Helps translate your vision into a website that works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
