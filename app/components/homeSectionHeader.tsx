import Link from "next/link";
import { LampDemo } from "../components/ui/lamp";
import CurrentTime from "./CurrentTime";
import Weather from "./WeatherApp";

export default function HomeSectionHeader() {
  return (
    <header className="min-h-screen overflow-hidden">
      <div className="">
        <LampDemo />
        <span className=" absolute w-full opacity-75 flex justify-between text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-2 text-white z-999  text-right top-2 right-2">
          <Link
            href={"/"}
            className="ml-4 text-sm text-yellow-400 sm:text-xl font-bold"
          >
            {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
            nee.
          </Link>
          <div className="grid justify-items-end">
            <CurrentTime />
            <Weather />
          </div>
        </span>
      </div>
    </header>
  );
}
