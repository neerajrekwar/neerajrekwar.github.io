"use client";
import { NextPage } from "next";
import Image from "next/image";
import DotCircle from "./acceries/DotCircle";

const StickyRelativeDemo: NextPage = () => {
  return (
    <div className="m-auto justify-between p-2 max-h-fit max-w-6xl border-green-500">
      <div className="jutify-start  flex items-center  border-rose-500 py-4 font-semibold text-[#242424] sm:text-4xl">
        <DotCircle />
        Recent projects
      </div>
      <div className="relative text-primary m-auto min-h-full max-w-7xl flex-col justify-evenly border-blue-400 sm:flex sm:flex-row">
        <div className="b 1 relative top-0 flex min-h-full basis-1/2 flex-col justify-between  border-rose-500 sm:gap-10">
          <div className="sticky top-0 pt-10 items-center justify-center  border-green-500">
            <div className="flex flex-wrap border-yellow-400">
              <div className=" mb-4 max-w-fit rounded-full border-blue-500 bg-blue-200 px-3 py-1 text-sm">
                2021
              </div>
            </div>
            <div className="border-yellow-400">
              <div className="max-w-2xl border-green-600">
                <h2 className="text-2xl font-semibold">
                  Craft &amp; Code: Building the Future, One Line at a Time
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae quo natus accusantium eius molestiae expedita
                  possimus accusamus, aspernatur, quia quae asperiores
                  inventore. Quod, officia vel aliquam exercitationem est
                  inventore porro?
                </p>
              </div>
              Sticky Div
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 pt-10  border-rose-500">
          <div className=" mb-4 max-w-fit rounded-full border-blue-500 bg-blue-200 px-3 py-1 text-sm">
            showcase
          </div>
          <div className="grid gap-4 p-2 pt-4 sm:gap-10">
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              className="min-w-full min-h-full rounded-2xl "
            />
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              className="min-w-full min-h-full rounded-2xl "
            />
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              className="min-w-full min-h-full rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyRelativeDemo;
