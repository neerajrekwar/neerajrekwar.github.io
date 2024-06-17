import Image from "next/image";
import FlipperComponent from "../components/FlipComponent";
import React from "react";
import { FlipWordsDemo } from "../components/FlipWords";
import { AuroraBackgroundHeroSection } from "../components/BackgroundAurra";

export default function Home() {
  return (
    <main className="antialiased overflow-hidden">
      <div className=""></div>
      <AuroraBackgroundHeroSection />
      <div className="">
        <FlipWordsDemo />
      </div>
      <section className=" m-2 bg-white dark:bg-black dark:text-white">
        <div className="">
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <FlipperComponent />
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem
          exercitationem quam ad reiciendis perspiciatis dignissimos ea
          assumenda ducimus quasi, non vel quidem, suscipit eius, illo
          voluptatibus eaque inventore. Veritatis.
        </div>
      </section>
    </main>
  );
}
