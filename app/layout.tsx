import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { FloatingNavDemo } from "../components/floatingNavBar";
import { ThemeProvider } from "../components/context/ThemeContext";
import Script from "next/script";
import GoogleAnalytics from "../components/GoogleAnalytics";
import GoogleTagManager from "../components/GoogleTagManager";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

const dm_Sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});
const alata = Alata({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neerajrekwar.github.io"),
  other: {
    "p:domain_verify": "9915feac8ce474656e7a8a1fa91b7593",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-primary focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven"
    >
      <GoogleTagManager containerId="GTM-MV3R5HQL" />
      <meta
        name="google-site-verification"
        content="pevPfl5iK_JHKnEwB5u-hZs9u54tVHi3UJkbJ9k2eWg"
      />
      <ThemeProvider>
        <body className={`${alata.className} bg-primary`}>
          <FloatingNavDemo />
          <GoogleAnalytics gaId="G-0PCHHEHDFJ" />
          {children}
          <Footer />
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
