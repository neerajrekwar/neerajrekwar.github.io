import DotCircle from "./acceries/DotCircle";
import { TypewriterEffectSmoothDemo } from "./typeWriter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      <div className="max-w-4xl m-auto text-[#242424]">
        <i className="not-italic flex text-lg md:text-3xl  font-medium py-4 justify-start items-center">
          <DotCircle />
          Recent projects{" "}
        </i>
      </div>
      <section className="antialiased p-2">
        <div className="sm:flex justify-evenly m-auto max-w-4xl ">
          <div className="text-left w-full">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6] rounded-full my-2 w-fit not-italic border">
              2021
            </div>
            <h2 className="text-3xl py-6 p-1 font-bold text-[#242424] max-w-4xl m-auto ">
              Craft & Code: Building the Future, One Line at a Time
            </h2>
            <p className="p-2 font-medium max-w-4xl m-auto">
              I am not just a programmer, I am a builder. I take your ideas and
              translate them into powerful, innovative applications that solve
              real-world problems.
            </p>
          </div>

          <div className="text-left w-full min-h-screen border">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6]  rounded-full my-2 w-fit not-italic border">
              2021
            </div>
            <div className="border-2 max-h-full border-black text-3xl py-6 p-1 font-bold text-[#2424">
              <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
