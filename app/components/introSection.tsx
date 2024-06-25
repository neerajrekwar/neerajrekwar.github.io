import { TypewriterEffectSmoothDemo } from "./typeWriter";

export default function IntroSection() {
  return (
    <>
      <section className="antialiased py-10 p-2 dark:text-white dark:text-white text-white  w-full bg-gradient-to-r from-slate-900 to-slate-700 dark:to-slate-200 ">
        <h2 className="text-3xl bg-clip-text text-left text-3xl font-bold tracking-tight text-transparent bg-gradient-to-br from-slate-200 to-slate-500">
          Craft & Code: Building the Future, One Line at a Time
        </h2>
        <p className="py-4 text-sm antialiased bg-clip-text text-left text-3xl font-medium tracking-tight text-transparent bg-gradient-to-br from-slate-200 to-yellow-500 dark:to-slate-900">
          I am not just a programmer, I am a builder. I take your ideas and
          translate them into powerful, innovative applications that solve
          real-world problems. 
        </p>
        <TypewriterEffectSmoothDemo />
      </section>
    </>
  );
}
