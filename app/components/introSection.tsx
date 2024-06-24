import { TypewriterEffectSmoothDemo } from "./typeWriter";

export default function IntroSection() {
  return (
    <>
      <section className="workSection antialiased py-10 p-2 dark:text-white dark:text-white text-white dark:bg-black  w-full bg-gradient-to-r from-slate-900 to-slate-700 ">
        <h2 className="text-3xl bg-clip-text text-left text-3xl font-bold tracking-tight text-transparent bg-gradient-to-br from-slate-200 to-slate-500">
          Craft & Code: Building the Future, One Line at a Time
        </h2>
        <p className="py-1 text-sm antialiased  bg-clip-text text-left text-3xl font-bold tracking-tight text-transparent bg-gradient-to-br from-slate-200  to-slate-500">
          I'm not just a programmer, I'm a builder. I take your ideas and
          translate them into powerful, innovative applications that solve
          real-world problems. 
        </p>
        <TypewriterEffectSmoothDemo />
      </section>
    </>
  );
}
