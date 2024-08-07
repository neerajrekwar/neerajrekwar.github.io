import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
import Script from "next/script"
import  GoogleAnalytics  from './components/GoogleAnalytics';

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
        
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
       
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
        />
        <ThemeProvider>{children}</ThemeProvider>

        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string} />
    </html>
  );
}
