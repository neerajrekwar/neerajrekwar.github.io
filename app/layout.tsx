
import { Alata, Source_Code_Pro, DM_Sans } from "next/font/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
import InstaGallery from "./components/InstaGallery";

const dm_Sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});
const source_code_pro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
});

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>
        
       <Footer  />
      </body>
    </html>
  );
}
