"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export const VisionSection: React.FC = () => {
  return (
    <>
      <div className=" ">
        <div className="p-2 max-w-6xl m-auto justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
          <div className="text-4xl  text-third sm:text-5xl sm:mx-2">&#8226;</div>
          Vision to the Future
        </div>
        <div className="justify-center items-center flex my-10">
          <span className="text-five rounded-full bg-seven h-10 w-10 justify-center items-center flex p-4">
            1
          </span>
        </div>
        <div className="border-third ">
          <div className="text-four  max-w-6xl m-auto min-h-screen md:bg-gradient-to-r  md:rounded-ss-2xl">
            <div className="md:h-80 md:flex-row md:flex gap-4  border-four">
              <div className="text-five basis-1/2 font-bold flex justify-center items-center bg-seven rounded-2xl m-2 p-4 h-60 md:h-auto">
                <Image
                  src={"/projects/home/elements.svg"}
                  height={500}
                  width={500}
                  loading="lazy"
                  alt="ui best in your we3b"
                />
              </div>
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
                    dynamically tailoring layouts, content, and recommendations
                    to each visitor.
                  </strong>{" "}
                  Imagine a shopping site that curates a personalized product
                  selection based on your browsing history and past purchases.
                </p>
              </div>
            </div>
            <div className=" p-2 border-four  md:flex flex-col justify-between">
              <div className=" flex justify-between">
                <div className="flex items-end">
                  <h4 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-four  p-4 font-bold md:text-3xl lg:text-7xl">
                    Change your old from new engaging user interface
                  </h4>
                </div>
                <div className="bg-seven flex justify-center items-center p-4 rounded-3xl">
                  <Image
                    src="/projects/home/Programming.svg"
                    className=""
                    width={300}
                    height={300}
                    loading="lazy"
                    alt="best programing tech development"
                  />
                </div>
              </div>
              <div className=" md:flex gap-4 border-five">
                <div className="flex md:flex-col gap-2 my-10 flex-row-reverse">
                  <h3 className="md:text-base text-five font-semibold">
                    Ours technology to use improving web appearance.
                  </h3>
                  <div className="flex ">
                    <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </span>
                    <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </span>
                    <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                        <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="border-four flex md:flex-col gap-2 my-10 justify-between flex-row">
                  <h5 className="text-4xl md:text-base text-five font-semibold">
                    use library
                  </h5>
                  <div>
                    <p className="bg-seven p-3 rounded-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus corporis tempora commodi minima blanditiis
                      ipsum esse ab nobis repellat repudiandae.
                    </p>
                    <div className="flex  justify-start">
                      <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
                        >
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
                      <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                        </svg>
                      </span>
                      <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-npm"
                        >
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
                <div className=" md:flex md:flex-col gap-2 my-10 justify-between">
                  <h5 className="text-4xl md:text-base text-five font-semibold">
                    Framework{" "}
                  </h5>
                  <div>
                    <p className="bg-seven p-3 rounded-2xl">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ex qui quisquam velit?
                    </p>
                    <div className="flex  justify-start">
                      <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                          <path d="M15 12v-3" />
                        </svg>
                      </span>
                      <span className="p-1 m-2 bg-seven rounded-lg fill-five">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-third three ">
          <div className="text-four  max-w-6xl m-auto min-h-screen pt-2 ">
            <div className="justify-center items-center flex my-10">
              <span className="text-five rounded-full bg-seven h-10 w-10 justify-center items-center flex p-4">
                2
              </span>
            </div>
            <div
              style={{}}
              className=" md:flex-row-reverse md:flex gap-4  border-four"
            >
              <div
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDl8fHxlbnwwfHx8fHw%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="text-4xl basis-1/2 font-bold rounded-2xl mx-2 p-4 h-40 md:h-auto"
              ></div>
              <div className="basis-1/2 text-base md:text-xl p-4">
                <h2 className="text-4xl md:text-6xl font-bold pb-2 text-five ">
                  User-centric customization
                </h2>
                <p>
                  Websites have evolved to seamlessly adapt to various devices,
                  ensuring a uniform and exceptional ,
                  <strong className="text-five font-normal">
                    {" "}
                    user experience on desktops, mobiles, and tablets.
                  </strong>
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex  justify-between border-rose-500 md:mt-20 items-center md:flex-row-reverse md:flex ">
                <div className="flex basis-1/2 items-end">
                  <h4 className="text-2xl m-2 md:text-6xl font-bold pb-2 text-four   ">
                    How to evolved a screen that effectiveness in browsing
                  </h4>
                </div>
                <div className=" m-4 bg-seven basis-1/2 flex justify-center p-4 w-fit rounded-3xl">
                  <Image
                    className=""
                    src="/projects/home/Futuristic_interface.svg"
                    width={300}
                    height={300}
                    alt="how's the Futuristic interface"
                  />
                </div>
              </div>
              <div className="md:flex-col gap-2 my-10 flex-row-reverse">
                <div className="flex items-center ">
                  <h3 className="md:text-4xl text-2xl py-6 text-center m-auto max-w-3xl">
                    Make a Innovative customization
                  </h3>
                  
                </div>
                <div className="flex justify-center my-8">
                  <span className="p-2 px-3 bg-seven rounded-full w-fit ">How &apos;s need it</span>
                </div>
                <ul className="flex flex-wrap md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3  text-four rounded-lg m-2 h-auto ">
                  <motion.li
                    initial={{}}
                    className="col-span-2 flex items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2  "
                  >
                    <p className="basis-2/2 md:basis-1/2  md:text-6xl p-2">
                      online activity on smartphones 3hrs and 50min avg.{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="basis-1/2  icon icon-tabler icons-tabler-outline icon-tabler-devices"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                      <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                      <path d="M16 9h2" />
                    </svg>
                  </motion.li>
                  <li className="flex flex-row-reverse items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2  ">
                    <p className="basis-2/2 md:basis-1/2 md:text-3xl p-2">
                      Earthweb reports that 67% of the global
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="basis-1/2  icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 19l18 0" />
                      <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                    </svg>
                  </li>
                  <li
                    className="flex items-center items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2 "
                  >
                    <p className="basis-2/2 md:basis-1/2  md:text-4xl p-2">
                      {" "}
                      smart streaming devices will be $9.2 billion by 2024.{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" basis-1/2 icon icon-tabler icons-tabler-outline icon-tabler-devices-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
                      <path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                      <path d="M7 19l3 0" />
                      <path d="M17 8l0 .01" />
                      <path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M9 15l0 4" />
                    </svg>
                  </li>
                  <li className="flex col-span-2 flex-row-reverse items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2 ">
                    <p className="basis-2/2 md:basis-1/2 md:text-4xl p-2">
                      2.16% tablet user in worldwide & digital landscape
                      changing in web3 after{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="basis-1/2  icon icon-tabler icons-tabler-outline icon-tabler-device-tablet"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16z" />
                      <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                    </svg>
                  </li>
                  <li className="flex col-span-2 flex items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2 ">
                    <p className="basis-2/2 md:basis-1/2 md:text-4xl p-2 ">
                      mobiles that users in use 37.23%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="basis-1/2  icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                      <path d="M11 4h2" />
                      <path d="M12 17v.01" />
                    </svg>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-center h-28 md:h-auto w-full md:w-auto p-1 m-2 bg-seven rounded-2xl bg-sevenh-28 md:h-auto w-full md:w-auto p-1 m-2 ">
                    <p className="basis-2/2 md:basis-1/2  p-1">
                      Desktops that users in use 60.61%{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="basis-1/2  icon icon-tabler icons-tabler-outline icon-tabler-device-desktop"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                      <path d="M7 20h10" />
                      <path d="M9 16v4" />
                      <path d="M15 16v4" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-third ">
          <div className="text-four  max-w-6xl m-auto min-h-screen py-4  md:bg-gradient-to-r from-seven md:rounded-ss-2xl">
            <div className="justify-center items-center flex my-10">
              <span className="text-five rounded-full bg-seven h-10 w-10 justify-center items-center flex p-4">
                3
              </span>
            </div>
            <div className=" md:flex-row md:flex gap-4 border-four">
              <div
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="text-four basis-1/2 font-bold  rounded-2xl m-2 p-4 h-40 md:h-auto"
              ></div>
              <div className="basis-1/2 text-base md:text-xl p-4">
                <h2 className="  text-4xl md:text-6xl font-bold pb-2 text-five ">
                  Web Bugs fixing
                </h2>
                <p className="text-four">
                  Web Programming bugs, also known as software bugs, are errors
                  or flaws in a computer program that cause it to produce
                  incorrect outputs or behave unexpectedly. These bugs can vary
                  from minor inconveniences to critical issues that crash the
                  program entirely. Rest assured,{" "}
                  <strong className="text-five font-normal">
                    we&apos;ll solve your web programming bugs.
                  </strong>
                </p>
              </div>
            </div>
            <div className=" flex gap-4 flex-col max-w-5xl m-auto mt-10 mb-20 py-20 justify-center items-center">
              <span className="bg-seven text-four p-1 px-3 rounded-full">
                Find error
              </span>

              <div className="md:flex-wrap lg:flex justify-center items-center gap-4">
                <span className="flex flex-col p-2 h-auto text-five w-[340px]  transition-all duration-1000 text-center rounded-2xl justify-center items-center">
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
                    className="w-fit h-fit m-4 p-2 bg-seven text-four rounded-full icon icon-tabler icons-tabler-outline icon-tabler-bug"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 8l-4 4l4 4" />
                    <path d="M17 8l4 4l-4 4" />
                    <path d="M14 4l-4 16" />
                  </svg>
                  <h6 className="text-2xl py-2">Syntax errors</h6>
                  <p className="text-four">
                    Mistakes in the programming language. over size usually
                    caught by the compiler or interpreter.
                  </p>
                </span>
                <span className="flex flex-col p-2 h-full  text-five  w-[340px] hover:bg-seven transition-all duration-1000 text-center rounded-2xl  justify-center items-center">
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
                    className="w-fit h-fit m-4 p-2 bg-seven text-four rounded-full icon icon-tabler icons-tabler-outline icon-tabler-time-duration-15"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
                    <path d="M9 9v6" />
                    <path d="M3 12v.01" />
                    <path d="M12 21v.01" />
                    <path d="M7.5 4.2v.01" />
                    <path d="M16.5 19.8v.01" />
                    <path d="M7.5 19.8v.01" />
                    <path d="M4.2 16.5v.01" />
                    <path d="M19.8 16.5v.01" />
                    <path d="M4.2 7.5v.01" />
                    <path d="M21 12a9 9 0 0 0 -9 -9" />
                  </svg>
                  <h6 className="text-2xl py-2">Runtime errors</h6>
                  <p className="text-four">
                    These occur while the program is running. They can cause the
                    program to crash or behave unexpectedly.
                  </p>
                </span>
              </div>
              <div className="lg:flex md:flex-wrap relative  justify-center items-center gap-4">
                <span className="flex flex-col p-2 h-auto text-five  w-[340px] hover:bg-seven transition-all duration-1000 text-center rounded-2xl justify-center items-center">
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
                    className="w-fit h-fit m-4 p-2 bg-seven text-four rounded-full icon icon-tabler icons-tabler-outline icon-tabler-bug"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 12h-5" />
                    <path d="M2 9h5" />
                    <path d="M2 15h5" />
                    <path d="M7 5l10 7l-10 7z" />
                  </svg>
                  <h6 className="text-2xl py-2">Logic errors</h6>
                  <p className="text-four">
                    These are errors in the program&apos;s logic, leading to
                    incorrect results without causing the program to crash.
                  </p>
                </span>
                <span className="flex flex-col p-2 h-auto text-five  w-[340px] hover:bg-seven transition-all duration-1000 text-center rounded-2xl justify-center items-center">
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
                    className="w-fit h-fit m-4 p-2 bg-seven text-four rounded-full icon icon-tabler icons-tabler-outline icon-tabler-bug"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z" />
                    <path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z" />
                    <path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
                    <path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
                    <path d="M8 7h-4" />
                  </svg>
                  <h6 className="text-2xl py-2">Poor testing</h6>
                  <p className="text-four">
                    {" "}
                    Inadequate testing can leave bugs undetected. Debugging is
                    the process of identifying and removing errors from computer
                    program code
                  </p>
                </span>
                <span className="flex flex-col p-2 h-auto text-five  hover:bg-seven transition-all duration-1000 w-[340px] text-center rounded-2xl justify-center items-center">
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
                    className="w-fit h-fit m-4 p-2 bg-seven text-four  rounded-full icon icon-tabler icons-tabler-outline icon-tabler-bug"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
                    <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
                    <path d="M3 13h4" />
                    <path d="M17 13h4" />
                    <path d="M12 20v-6" />
                    <path d="M4 19l3.35 -2" />
                    <path d="M4 7l3.75 2.4" />
                    <path d="M20 7l-3.75 2.4" />
                    <path d="M3 3l18 18" />
                  </svg>
                  <h6 className="text-2xl py-2">Preventing Bugs</h6>
                  <p className="text-four">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis facere quos maiores sed quae nobis similique cum
                    accusamus, omnis error.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-third ">
          <div className="text-four  max-w-6xl m-auto min-h-screen md:h-auto sm:bg-gradient-to-l pt-2 from-seven md:rounded-se-2xl">
            <div className=" md:flex-row-reverse md:flex gap-4 items-center border-four">
              <div
                style={{
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683133924436-a7afbdf8cd25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="text-four basis-1/2 font-bold  rounded-2xl m-2 p-4 h-60 "
              ></div>
              <div className="basis-1/2 text-base md:text-xl p-4">
                <h2 className=" text-4xl md:text-6xl font-bold pb-2 text-five ">
                  Small Initiative & Startups
                </h2>
                <p>
                  <strong className="text-five font-normal">
                    Are you struggling to establish your online presence?{" "}
                  </strong>
                  Small Business Helps can be your one-stop shop for all your
                  web development needs. We understand the unique challenges
                  faced by small businesses, and our team of experts will craft
                  a website that perfectly reflects your brand and resonates
                  with your target audience. From user-friendly design and
                  e-commerce functionality to powerful SEO optimization,
                  we&apos;ll equip you with the tools to attract customers,
                  boost sales, and achieve your online goals.
                </p>
              </div>
            </div>
            <div className="">
              <div></div>
              <div>
                <div className="md:flex  flex-1 text-five p-2 justify-center items-center">
                  <div className="flex basis-1/2 justify-center items-center">
                    <Image
                      src={"/projects/home/Startup_life.svg"}
                      className="  md:p-10 p-8  m-2  bg-seven rounded-2xl"
                      width={300}
                      height={300}
                      loading="lazy"
                      alt="Startup life"
                    />
                  </div>
                  <div className="flex basis-1/2 justify-center items-center flex-col p-2">
                    <h2 className="md:text-6xl text-2xl text-five  basis-1/2 font-semibold">
                      How to Building Your Online Business: A Step-by-Step Guide
                    </h2>
                    <div className="flex items-start"></div>
                  </div>
                </div>
              </div>
              <div className=" my-6  p-2">
                <h1 className="md:text-4xl text-2xl py-6 text-center m-auto max-w-3xl">
                  Maximized efficiency with fully automated best practices and
                  fully supported advanced tricks.
                </h1>

                <div className="flex justify-center">
                  <span className="p-2 px-3 bg-seven rounded-full w-fit ">SEO & Performance</span>
                </div>

                <div className="flex flex-col md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3  text-five rounded-lg m-2 max-h-fit gap-4">
                  <div className=" col-span-2 rounded-md bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2">
                    <h5 className="text-2xl text-five font-semibold">
                      Analytics
                    </h5>
                    <p className="py-2 text-secondary ">
                      Effortlessly monitor all aspects of your performance with
                      our robust, GDPR-compliant analytics, Google Analytics
                      integration, and more.
                    </p>
                    <div className="flex justify-center items-center m-2 p-2 bg-seven rounded-md">
                      <Image
                        className="h-64 w-64"
                        src={"/projects/home/Analytics.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className="row-span-1 rounded-md  bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2 ">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Metadata
                    </h5>
                    <p className=" py-2 text-secondary ">
                      Ensure your page stands out with a compelling title and
                      description, while our top-notch handles ensure search
                      engine optimization.
                    </p>
                    <div className=" flex justify-center items-center m-2 p-2 bg-seven rounded-md">
                      <Image
                        src={"/projects/home/Dev_productivity.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className=" rounded-md  bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2 ">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Semantics
                    </h5>
                    <p className=" text-secondary ">
                      Make sure to implement semantic tags on your websites to
                      improve their structure.
                    </p>
                    <div className=" flex justify-center p-10 items-center m-2 p-2 bg-seven rounded-md">
                      <Image
                        src={"/projects/home/Semantics.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 rounded-md rounded-md bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Accessibility
                    </h5>
                    <p className=" text-secondary ">
                      Design inclusive and accessible websites by utilizing alt
                      tags, Tab Index, element tags, and more.
                    </p>
                    <div className=" flex justify-center items-center m-2 p-2 bg-seven rounded-md p-10">
                      <Image
                        src={"/projects/home/Accessibility.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>        
                  <div className="col-span-2 rounded-md rounded-md bg-primary md:p-10  flex flex-col justify-start  md:text-xl  p-2">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Lighthouse Scores
                    </h5>
                    <p className=" text-secondary ">
                      Ensure your page stands out with a compelling title and
                      description, while our top-notch handles ensure search
                      engine optimization.
                    </p>
                    <div className=" flex justify-center items-center m-2 p-2 bg-seven rounded-md p-10">
                      <Image
                        src={"/projects/home/Dev_productivity.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className="rounded-md rounded-md bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Sitemap
                    </h5>
                    <p className=" text-secondary ">
                      We understand the importance of generating a sitemap that
                      reflects your site&apos;s structure for search bots.
                    </p>
                    <div className=" flex justify-center items-center p-10 m-2 p-2 bg-seven rounded-md">
                      <Image
                        src={"/projects/home/Sitemap.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className="rounded-md rounded-md bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Server Side Rendering
                    </h5>
                    <p className=" text-secondary">
                      Boost your website speed with SSR: achieve faster load
                      times and higher scores.
                    </p>
                    <div className=" flex justify-center items-center m-2 p-2 bg-seven rounded-md">
                      <Image
                        src={"/projects/home/Dev_productivity.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                  <div className="md:p-10 col-span-2 rounded-md bg-primary md:p-10  flex flex-col justify-start md:text-xl  p-2">
                    <h5 className="text-2xl  text-five  font-semibold">
                      Hosting
                    </h5>
                    <p className="text-secondary">
                      Experience lightning-fast page loading, no matter where
                      you are in the world.
                    </p>
                    <div className="flex justify-center items-center m-2 p-2 bg-seven rounded-md ">
                      <Image
                        className=""
                        src={"/projects/home/hosting.svg"}
                        width={300}
                        height={200}
                        alt="find best practice Analytice"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
