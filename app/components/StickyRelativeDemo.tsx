"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Source_Code_Pro } from "next/font/google";
import InfoLink from "./IfoLinks";

const source_Code_Pro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

const StickyRelativeDemo: NextPage = () => {
  return (
    <div className="m-auto scroll-smooth text-secondary justify-between p-2 max-h-fit max-w-6xl">
      <div className="justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
        <div className="text-4xl text-third sm:text-5xl sm:mx-2">
          &#8226;
        </div>
        Recent projects
      </div>
      <div className="relative  m-auto min-h-screen max-w-7xl flex-col justify-evenly border-blue-400 sm:flex sm:flex-row">
        <div className="relative visible  top-0 flex min-h-full basis-1/2 flex-col justify-between  border-rose-500 sm:gap-10">
          <div className="sticky top-0 will-change-transform overflow-hidden z-10 pt-10 items-center justify-center  border-green-500">
            <div className="flex flex-wrap border-yellow-400">
              <div className="mb-4 max-w-fit rounded-full border bg-seven font-semibold text-four border-four  px-3 py-1 antialiased text-sm">
                2024
              </div>
            </div>
            <div className="text-six sm:pr-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl text-secondary py-3 pb-3 font-semibold ">
                  Craft &amp; Code: Building the Future, One Line at a Time
                </h2>
                <div>
                  <p className="text-four text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quo natus accusantium eius molestiae expedita
                    possimus accusamus, aspernatur, quia quae asperiores
                    inventore. Quod, officia vel aliquam exercitationem est
                    inventore porro?
                  </p>
                </div>
              </div>
              <div className="text-sm text-secondary pt-12 ">
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="text-four font-normal">Role</li>
                  <li>Digital Marketing</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="text-four font-normal">Deliverables</li>
                  <li>Survey checks</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="text-four  font-normal">Company</li>
                  <li>VMR</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven fill-secondary">
                  <li className="text-four font-normal">Visit Site</li>
                  <li className="px-2">
                    <Link href="https://veecrew.com" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:fill-blue-500"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="--priamryText"
                      >
                        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 pt-10 overflow-hidden  border-rose-500">
          <div className="mb-4 max-w-fit rounded-full border bg-seven font-semibold text-four border-four  px-3 py-1 antialiased text-sm">
            Showcase
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
