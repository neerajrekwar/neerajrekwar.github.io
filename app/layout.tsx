import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
import Script from "next/script"

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
     <head>
        {/* <GoogleAnalytics
          gaId='G-0PCHHEHDFJ'
        />
        <GoogleTagManager
          gtmId='GTM-MV76385'
        /> */}

       <Script
         id="google-tag-manager"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-MV3R5HQL');`
         }}
         >
       </Script>
      </head>
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>

        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string} />
    </html>
  );
}
