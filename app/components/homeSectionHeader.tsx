import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import { TypewriterEffectSmoothDemo } from "../components/typeWriter";
import { LampDemo } from "../components/ui/lamp";
import CurrentLocationAndTime from "./CurrentLocationAndTime";

// `app/page.tsx` is the UI for the `/` URL
export default function HomeSectionHeader() {
  return (
    <main className="h-[200vh] ">
      <header>
        <div>
          
          <LampDemo />
          <span className="absolute w-full opacity-75 flex justify-between text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-2 text-white z-999  text-right top-2 right-2">
            <Link href={"/"}
              className="ml-4">
             nee/&gt;
            </Link>
            <CurrentLocationAndTime />
          </span>
        </div>
        <TypewriterEffectSmoothDemo />
      </header>
      <section className="dark:bg-black dark:text-white">
        <h1 className="dark:text-white">new mode</h1>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <DarkModeToggle />
          {/* Other components or content */}
        </div>
      </section>
    </main>
  );
}
