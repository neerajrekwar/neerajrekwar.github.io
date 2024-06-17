import DarkModeToggle from "./components/DarkModeToggle";
import { LampDemo } from "./components/ui/lamp";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <main className="h-[200vh] ">
      <header>
        <h1>
          <LampDemo />
        </h1>
      </header>
      <section className="dark:bg-black dark:text-white">
        <h1>new mode</h1>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
          <DarkModeToggle />
          {/* Other components or content */}
        </div>
      </section>
    </main>
  );
}
