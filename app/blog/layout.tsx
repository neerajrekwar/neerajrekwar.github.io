import { IconHeartFilled } from "@tabler/icons-react";
import { FloatingNavDemo } from "../components/floatingNavBar";
import { Toaster } from "@/components/ui/toaster";
import { Caveat } from "next/font/google";
import CurrentTime from "../components/CurrentTime";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Never give up on your dreams. With perseverance and resilience, you can overcome any challenge.",
};

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className=" border-b border-seven h-28 bg-primary  bg-custom-radial-lg justify-between items-center  text-five ">
        <div className="flex bg-transparent  basis-1/2 justify-between items-start  max-w-7xl m-auto">
          <div className={caveat.className}>
            <p className='text-four pl-2 text-2xl md:text-3xl font-semibold' >nee</p>
          </div>
          <div className="">
            <ul className="text-four flex flex-col justify-end items-end font-semibold ">
              <li className="text-sm md:text-base p-1">
                <CurrentTime />
              </li>
              <li className="text-sm md:text-base px-1 text-right font-semibold text-secondary ">
                <p className="text-xs md:text-sm">
                  a mistake should be
                </p>
                <p className="text-xs md:text-sm">
                  improved, not retention.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
