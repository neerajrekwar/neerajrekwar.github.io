"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Source_Code_Pro } from "next/font/google";
import InfoLink from "./IfoLinks";
import { IconArrowUpRight } from "@tabler/icons-react";

const source_Code_Pro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

const StickyRelativeDemo: NextPage = () => {
  return (
    <section className="m-auto scroll-smooth text-secondary justify-between p-2 max-h-fit max-w-6xl">
      <header className="justify-start flex text-secondary items-center gap-2 sm:gap-1 pt-10 text-2xl font-semibold visible sm:text-4xl">
        <div className="text-4xl text-third sm:text-5xl sm:mx-2">&#8226;</div>
        <h2>Recent projects</h2>
      </header>
      <article className="relative m-auto max-w-7xl flex-col justify-evenly sm:flex sm:flex-row">
        <div className="relative visible top-0 flex min-h-full basis-1/2 flex-col justify-between border-rose-500 sm:gap-10">
          <div className="sticky top-0 will-change-transform overflow-hidden z-10 pt-10 items-center justify-center border-green-500">
            <div className="flex flex-wrap border-yellow-400">
              <div className="mb-4 p-2 px-3 max-w-fit rounded-full border bg-seven border-seven backdrop-blur-sm antialiased text-sm text-five text-center text-secondary">
                2024
              </div>
            </div>
            <div className="sm:pr-10 backdrop-blur-sm">
              <div className="max-w-2xl text-four">
                <h3 className="text-3xl text-five py-3 pb-3 font-semibold">
                  Walktrip - Discover Delhi's Hidden Gems
                </h3>
                <div>
                  <p className="text-base">
                    Join our expert local guides for immersive walking tours
                    through Delhi's rich history, vibrant culture, and authentic
                    experiences.
                  </p>
                </div>
              </div>
              <div className="text-sm text-four pt-10">
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="font-normal">Role</li>
                  <li className="text-five">Web Design & Development</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="font-normal">Deliverables</li>
                  <li className="text-five">Website</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven">
                  <li className="font-normal">Company</li>
                  <li className="text-five">Walktrip</li>
                </ul>
                <ul className="flex justify-between font-semibold py-6 border-b-1 border-seven fill-five">
                  <li className="font-normal">Explore Tours</li>
                  <li className="px-2 text-five">
                    <Link href="https://walktrip.com" className="text-five">
                      <IconArrowUpRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 pt-10 overflow-hidden border-rose-500">
          <div className="mb-4 p-2 px-3 max-w-fit rounded-full border bg-seven border-seven backdrop-blur-sm antialiased text-sm text-center text-secondary">
            Showcase
          </div>
          <div className="grid gap-4 p-2 pt-4 sm:gap-10">
            <figure>
              <Image
                src={"/screen.jpg"}
                alt={"My Profile Picture"}
                width={552}
                height={310}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                className="object-cover rounded-2xl"
              />
            </figure>
            <figure>
              <Image
                src={"/screen.jpg"}
                alt={"My Profile Picture"}
                width={552}
                height={310}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                className="object-cover rounded-2xl"
              />
            </figure>
            <figure>
              <Image
                src={"/screen.jpg"}
                alt={"My Profile Picture"}
                width={552}
                height={310}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                className="object-cover rounded-2xl"
              />
            </figure>
          </div>
        </div>
      </article>
    </section>
  );
};

export default StickyRelativeDemo;
