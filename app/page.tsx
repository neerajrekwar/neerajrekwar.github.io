import DarkModeToggle from "./components/DarkModeToggle";
import HomeSectionHeader from "./components/homeSectionHeader";
import { InfiniteMovingCardsDemo } from "./components/infiniteMoningCards";
import { TypewriterEffectSmoothDemo } from "./components/typeWriter";

// `app/page.tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <main>
      <HomeSectionHeader />
      <TypewriterEffectSmoothDemo />
      <InfiniteMovingCardsDemo />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <DarkModeToggle />
        {/* Other components or content */}
      </div>
    </main>
  );
}
