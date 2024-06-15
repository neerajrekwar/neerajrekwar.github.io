import Image from "next/image";
import FlipComponent from "./components/FlipComponent";
import React from "react";
import { AuroraBackgroundDemo } from "./components/BackgroundAurra";
import { FlipWordsDemo } from "./components/FlipWords";
import { LampDemo } from "./components/lampBar";

export default function Home() {
  return (
    <main className="antialiased overflow-hidden">
      <AuroraBackgroundDemo />
      <div className="overflow-hidden h-screen">
        <FlipWordsDemo />
        <LampDemo />
      </div>
      <section className="m-2 bg-black text-white">
        <div className="p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          consequatur repellendus saepe omnis amet pariatur sint debitis aut
          expedita perspiciatis quo nisi optio voluptatem necessitatibus, magni
          earum reprehenderit ipsum enim.
        </div>
      </section>
      <section className="h-[50vh] m-2 bg-white dark:bg-black dark:text-white">
        <div className="p-1">
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <FlipComponent />
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
