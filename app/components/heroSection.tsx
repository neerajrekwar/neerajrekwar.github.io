import FlipperComponent from "./FlipComponent";
import { TextGenerateEffectDemo } from "./textGenerate";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section className="bg-transparent border-lime-600 h-screen">
        <div className="p-1 ">
          <figure className="w-auto flex-1 border-blue-500 sm:justify-between sm:flex sm:border-green-500 ">
            <div className="aspact-sqaure md:w-[40vw] h-[18rem] sm:h-[30rem]  grid items-center h-atuo border-lime-600 justify-items-center sm:justify-items-end md:justify-items-center">
              <Image
                src="/me.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
                className="rounded md:h-[18rem] aspact-sqaure boreder-2 sm:w-[18rem] sm:h-[rem] h-[8rem] w-[8rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
              />
            </div>
            <div className="m-2 border-yellow-600  self-end">
              <h2 className="font-bold text-[#353535] text-xl pt-4 pb-2 md:text-4xl lg:text-4xl">
                <FlipperComponent />
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
