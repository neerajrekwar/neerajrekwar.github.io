"use client";
import { NextPage } from "next";
import Image from "next/image";
import DotCircle from "./acceries/DotCircle";

const StickyRelativeDemo: NextPage = () => {
  return (
    <div className="border-2 border-blue-400">
      <div className="flex jutify-start items-center text-base sm:text-2xl">
        {" "}
        <DotCircle /> Recent projects
      </div>
      <div className="relative p-2 1 sm:flex border-2 border-blue-400 min-h-screen ">
        <div className="basis-1/2 max-h-full sm:gap-10 mb-8 sm:mb-0 bg-blue-100">
          <div className="sticky top-0 bg-red-500  items-center justify-center">
            <div className=" text-sm border-2 border-blue-500 bg-blue-200 text-primary  max-w-fit px-3 py-1 mb-4 rounded-full text-primary bg-secondary">
              showcase
            </div>
            <div className="">
              <div className=" max-w-fit px-3 py-1 mb-4 rounded-full bg-primary text-secondary">
                2021
              </div>
              <div className=" border-green-600 max-w-2xl">
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
        <div className="relative basis-1/2 ">
          <div className=" text-sm border-2 border-blue-500 bg-blue-200 text-primary  max-w-fit px-3 py-1 mb-4 rounded-full text-primary bg-secondary">
            showcase
          </div>
          <div className="grid gap-4 pt-4 sm:gap-10 p-2 ">
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
              className="min-w-full min-h-full rounded-2xl"
            />
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              className="min-w-full min-h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyRelativeDemo;
