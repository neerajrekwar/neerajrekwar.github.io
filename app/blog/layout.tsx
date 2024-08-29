import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary min-h-screen">
        <header className="h-44  bg-custom-radial-md md:flex justify-between text-five ">
          <div className="basis-1/3  sm:h-auto p-4 ">
            <h1 className="text-3xl text-">Blog about something</h1>

            <p>problems are create by itself it&apos;s not heppen </p>
          </div>
          <div className="basis-1/3 mx-2 sm:h-auto p-4">
            <ul className="text-four flex justify-center items-center font-semibold flex-row gap-2">
              <li className="border-four border-2 font-semibold flex justify-center  items-center  p-1 rounded-full px-3">
                suggest a ideas
              </li>
              <li className="text-sm md:text-base ">
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
      dayPeriod: 'narrow',
      weekday: 'short',
                })}
              </li>
            </ul>
          </div>
        </header>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
