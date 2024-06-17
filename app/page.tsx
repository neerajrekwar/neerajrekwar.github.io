import DarkModeToggle from "./components/DarkModeToggle";
import { LampDemo } from "./components/ui/lamp";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <main className="h-[200vh] ">
      <header>
        <div>
          <LampDemo />
        </div>
      </header>
      <section className="dark:bg-black dark:text-white">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          modi.
        </h1>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
          <DarkModeToggle />
          {/* Other components or content */}
        </div>
      </section>
    </main>
  );
}
