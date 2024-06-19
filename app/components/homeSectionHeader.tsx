import Link from "next/link";
import { LampDemo } from "../components/ui/lamp";
import CurrentTime from "./CurrentTime";


// `app/page.tsx` is the UI for the `/` URL
export default function HomeSectionHeader() {
  return (
    
      <header className="min-h-screen">
        <div>
          
          <LampDemo />
          <span className="absolute w-full opacity-75 flex justify-between text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-2 text-white z-999  text-right top-2 right-2">
            <Link href={"/"}
              className="ml-4  font-bold">
             {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
               nee/&gt;
            </Link>
            <CurrentTime />
          </span>
        </div>

      </header>

  );
}
