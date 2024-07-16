import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";
import CurrentTime from "./CurrentTime";
import Weather from "./WeatherApp";
import { BackgroundBeamsDemo } from "./backgroundBeams";
import DeviceAddress from "./DeviceAddress";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeSectionHeader() {
  return (
    <header className="min-h-screen text-primary overflow-hidden">
      <div className="">
        <BackgroundBeamsDemo />
        <span className="absolute w-full opacity-75 flex justify-between text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-2 text-four z-999  text-right top-2 right-2">
          <div className={caveat.className}>
            <Link href={"/"} className="sm:mx-8 mx-6 text-secondary text-3xl sm:text-4xl md:text-5xl font-bold">
              {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
              nee.
            </Link>
          </div>
          <div className="grid justify-items-end">
            {/*<nav>
              <ul className="text-base hidden md:flex gap-2">
                <li>
                  <Link href={"/about"}>home</Link>
                </li>
                <li>
                  <Link href={"/about"}>about</Link>
                </li>
                <li>
                  <Link href={"/about"}>contact</Link>
                </li>
                <li>
                  <Link href={"/about"}>blog</Link>
                </li>
              </ul>
            </nav>*/}
            <div className="text-secondaryText">
              <DeviceAddress/>
            </div>
          </div>
        </span>
      </div>
    </header>
  );
}
