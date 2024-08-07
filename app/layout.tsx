import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";

const dm_Sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-primary focus:scroll-auto">
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-0PCHHEHDFJ'}
      />
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || 'GT-57ZV3XX'}
      />
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}
