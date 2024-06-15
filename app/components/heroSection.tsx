import { TextGenerateEffectDemo } from "./textGenerate";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section className="m-2 bg-white ">
        <div className="p-1">
          <figure className="flex-1 sm:flex ">
            <div className=" lg:w-[50vw] grid sm:justify-items-end justify-items-center  md:w-[20vw] gi">
              <Image
                src="/me.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
                className="rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
              />
            </div>
            <div className="m-2 md:w-[70vw] self-end">
              <h2 className="font-bold text-[#212121] text-3xl pt-4 pb-2 md:text-4xl lg:text-4xl">
                Neeraj Rekwar
              </h2>
              <figcaption className="mb-4 md:pb-8 antialiased">
                <TextGenerateEffectDemo />
              </figcaption>
            </div>
          </figure>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default HeroSection;
