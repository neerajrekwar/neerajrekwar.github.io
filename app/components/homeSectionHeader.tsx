import Link from "next/link";
import Image from "next/image";
import { Alata, Caveat } from "next/font/google";
import DeviceAddress from "./DeviceAddress";
import { AuroraBackgroundDemo } from "./BackgroundAurra";
import Weather from "./WeatherApp";



const alata = Alata({
  weight: "400",
  subsets: ["latin"],
});
const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeSectionHeader() {
  return (
    <>
      <header className="min-h-screen text-primary overflow-hidden">
        <div className=" ">
          <AuroraBackgroundDemo />
          <div className="absolute flex justify-center items-center px-2   w-full opacity-75 flex justify-between  text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-0 text-four z-999  text-right ">
            <div className={caveat.className}>
              <Link
                href={"/"}
                className=" text-secondary text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
                nee.
              </Link>
            </div>
            <div className="">
              <div className="text-secondary pt-1 md:pt-2 font-bold">
                <DeviceAddress />
                <Weather/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
