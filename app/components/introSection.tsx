import DotCircle from "./acceries/DotCircle";
import { TypewriterEffectSmoothDemo } from "./typeWriter";

export default function IntroSection() {
  return (
    <>
      <div className="max-w-4xl m-auto text-[#242424]">
        <i className="not-italic flex text-2xl font-medium py-4 justify-start items-center"><DotCircle /> 
          Recent projects </i>
      </div>
      <section className="antialiased">
        <h2 className="text-3xl py-6 p-1 font-bold text-[#242424] max-w-4xl m-auto ">
          Craft & Code: Building the Future, One Line at a Time
        </h2>
        <p className="p-2 font-medium max-w-2xl m-auto">
          I am not just a programmer, I am a builder. I take your ideas and
          translate them into powerful, innovative applications that solve
          real-world problems. 
        </p>
        <TypewriterEffectSmoothDemo />
      </section>
    </>
  );
}
