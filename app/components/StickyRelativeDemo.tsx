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
    <div className="m-auto scroll-smooth text-secondary justify-between p-2 max-h-fit max-w-6xl ">
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
              <div className="mb-4 p-2 px-3 max-w-fit rounded-full border bg-seven border-seven backdrop-blur-sm antialiased text-sm  text-five text-center text-secondary">
                2024
              </div>
            </div>
            <div className="sm:pr-10 backdrop-blur-sm">
              <div className="max-w-2xl text-four ">
                <h2 className="text-3xl text-five py-3 pb-3 font-semibold ">
                  Craft &amp; Code: Building the Future, One Line at a Time
                </h2>
                <div>
                  <p className="text-base ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quo natus accusantium eius molestiae expedita <br />
                    possimus accusamus, aspernatur, quia quae asperiores
                    inventore. Quod, officia vel aliquam exercitationem est
                    inventore porro?
                  </p>
                </div>
              </div>
              <div className="text-sm text-four pt-10 ">
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="font-normal">Role</li>
                  <li className="text-five">Digital Marketing</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="font-normal">Deliverables</li>
                  <li className="text-five">Survey checks</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="  font-normal">Company</li>
                  <li className="text-five">VMR</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven fill-five">
                  <li className="font-normal">Visit Site</li>
                  <li className="px-2 text-five ">
                    <Link href="https://veecrew.com" className="text-five">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="var(--five)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 pt-10 overflow-hidden  border-rose-500">
          <div className="mb-4 p-2 px-3 max-w-fit rounded-full border bg-seven border-seven backdrop-blur-sm antialiased text-sm text-center text-secondary">
            Showcase
          </div>
          <div className="grid gap-4 p-2 pt-4 sm:gap-10">
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              loading="lazy"
              className="min-w-full min-h-full rounded-2xl "
            />
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              loading="lazy"
              className="min-w-full min-h-full rounded-2xl "
            />
            <Image
              src={"/projects/mypro.png"}
              alt={"My Profile Picture"}
              width={300}
              height={300}
              loading="lazy"
              className="min-w-full min-h-full rounded-2xl "
            />

            
          </div>
        </div>
      </div>



    </div>
  );
};

export default StickyRelativeDemo;
