import { IconHeartFilled } from "@tabler/icons-react";
import { FloatingNavDemo } from "../components/floatingNavBar";
import { Toaster } from "@/components/ui/toaster";
import { Caveat } from "next/font/google";
import CurrentTime from "../components/CurrentTime";

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
      
        <FloatingNavDemo />
        <header className=" border-b border-seven h-28  bg-custom-radial-lg justify-between items-center  text-five ">
          <div className="flex h-22  basis-1/2 justify-between items-start  max-w-7xl m-auto">
            <div className={caveat.className}>
              <p className= 'text-four text-4xl font-semibold' >nee.</p>
            </div>
            <div className="">
              <ul className="text-four justify-center text-end font-semibold flex-row gap-2">
                <li className="text-sm md:text-base ">
                  <CurrentTime />
                </li>
                <li className="text-sm md:text-base font-semibold text-secondary ">
                  <p className="text-xs md:text-sm">
                    a mistake should be <br /> improved, not retention.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {children}
        <Toaster />
        
    </>
  );
}
