"use client"
import ImageGallery from "./ImageGallery";
import { TypewriterEffectSmoothDemo } from "./typeWriter";
import Image from "next/image";
import DotCircle from "./acceries/DotCircle";

export default function IntroSection() {

  return (
    <>
      <TypewriterEffectSmoothDemo />
      <section className="antialiased p-2 text-[#242424]">
          <div className="flex py-4 sm:py-16 sm:pt-10  max-w-6xl border-black m-auto justify-start items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <DotCircle/>Recent Projects
          </div>
        <div className=" border-orange-400 p-2 max-w-6xl m-auto md:flex justify-evenly items-start">
          <div className="basis-1/2 pb-4 ">
            <div className=" max-w-fit px-3 py-1 mb-4 rounded-full bg-primary text-secondary">2021</div>
            <div className=" border-green-600 max-w-2xl">
              <h2 className="text-2xl font-semibold">Craft & Code: Building the Future, One Line at a Time</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                quo natus accusantium eius molestiae expedita possimus accusamus,
                aspernatur, quia quae asperiores inventore. Quod, officia vel
                aliquam exercitationem est inventore porro?
              </p>
            </div>
          </div>
          <div className="scroll-2 basis-1/2  justify-center">
             <div className=" max-w-fit px-3 py-1 mb-4 rounded-full bg-primary text-secondary">2021</div>
            <div className=" border-green-600 items-center ">
              <div className="grid justify-items-stretch  gap-4 rounded-lg border-lime-600 items-center">
               <Image src="/projects/mypro.png" width={400} height={800} alt="mypro" className="min-h-auto min-w-full rounded-lg" />
               <Image src="/projects/mypro.png" width={400} height={800} alt="mypro" className="min-h-auto min-w-full rounded-lg" />
               <Image src="/projects/mypro.png" width={400} height={800} alt="mypro" className="min-h-auto min-w-full rounded-lg" />
               
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}