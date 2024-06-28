import DotCircle from "./acceries/DotCircle";
import { TypewriterEffectSmoothDemo } from "./typeWriter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      <section className="antialiased p-2">
        <div className="max-w-5xl m-auto text-[#242424]">
          <i className="not-italic flex text-lg md:text-3xl  font-medium py-4 justify-start items-center">
            <DotCircle />
            Recent projects
          </i>
        </div>
        <div className=" md:flex flex-row m-auto max-w-5xl ">
          <div className="text-left w-full basis-1/2">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6] rounded-full my-2 w-fit not-italic ">
              2021
            </div>
            <h2 className="text-3xl py-6 p-1 font-bold text-[#242424] max-w-3xl  ">
              Craft & Code: Building the Future, One Line at a Time
            </h2>
            <p className="p-2 font-medium max-w-4xl m-auto">
              I am not just a programmer, I am a builder. I take your ideas and
              translate them into powerful, innovative applications that solve
              real-world problems.
            </p>
          </div>

          <div className="text-left w-4xl  basis-1/2">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6]  rounded-full my-2 w-fit not-italic border">
              nee
            </div>
            <div className=" border-black border grid gap-4 h-[44vh] overflow-y-scroll  rounded-md min-w-2xl max-h-screen  text-3xl py-6 p-1 font-bold text-[#242424]">
              <div className="rounded-lg">
                <Image
                  src="/projects/Capturedsa.PNG"
                  alt="Description of the image"
                  width={500} // specify the width of the image
                  height={300} // specify the height of the image
                  className="rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </div>
              <div className="rounded-lg">
                <Image
                  src="/projects/Capturedsa.PNG"
                  alt="Description of the image"
                  width={500} // specify the width of the image
                  height={300} // specify the height of the image
                  className="rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </div>
              <div className="rounded-lg">
                <Image
                  src="/projects/Capturedsa.PNG"
                  alt="Description of the image"
                  width={500} // specify the width of the image
                  height={300} // specify the height of the image
                  className="rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:flex flex-row m-auto max-w-5xl ">
          <div className="text-left w-full basis-1/2">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6] rounded-full my-2 w-fit not-italic ">
              2021
            </div>
            <h2 className="text-3xl py-6 p-1 font-bold text-[#242424] max-w-3xl  ">
              Craft & Code: Building the Future, One Line at a Time
            </h2>
            <p className="p-2 font-medium max-w-4xl m-auto">
              I am not just a programmer, I am a builder. I take your ideas and
              translate them into powerful, innovative applications that solve
              real-world problems.
            </p>
          </div>

          <div className="text-left w-4xl  basis-1/2">
            <div className="px-3 ml-2 p-1 bg-[#e6e6e6]  rounded-full my-2 w-fit not-italic border">
              nee
            </div>
            <div className=" rounded-md min-w-2xl max-h-screen  text-3xl py-6 p-1 font-bold text-[#242424]">
              <div className="rounded-lg">
                <Image
                  src="/projects/Capturedsa.PNG"
                  alt="Description of the image"
                  width={500} // specify the width of the image
                  height={300} // specify the height of the image
                  className="rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
