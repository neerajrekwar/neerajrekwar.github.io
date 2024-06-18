import DarkModeToggle from "../components/DarkModeToggle";
import { TypewriterEffectSmoothDemo } from "../components/typeWriter";
import { LampDemo } from "../components/ui/lamp";
import CurrentLocationAndTime from "./CurrentLocationAndTime";

// `app/page.tsx` is the UI for the `/` URL
export default function HomeSectionHeader() {
  return (
    <main className="h-[200vh] ">
      <header>
        <div className="">
          <div className="absolute top-10">
            <h1>Welcome to My Next.js App</h1>
            <CurrentLocationAndTime />
          </div>
          <LampDemo />
        </div>
        <TypewriterEffectSmoothDemo />
      </header>
      <section className="dark:bg-black dark:text-white">
        <DarkModeToggle/>
          {/* Other components or content */}
      </section>
    </main>
  );
}
