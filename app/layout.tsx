import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleTagManager from "./components/GoogleTagManager";
import { Toaster } from "@/components/ui/toaster"

const dm_Sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});
const alata = ({
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-primary focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven">
      <GoogleTagManager containerId="GTM-MV3R5HQL" />
      <meta
        name="google-site-verification"
        content="pevPfl5iK_JHKnEwB5u-hZs9u54tVHi3UJkbJ9k2eWg"
      />
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <GoogleAnalytics gaId="G-0PCHHEHDFJ" />
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
