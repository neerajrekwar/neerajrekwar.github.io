
import { Alata, Source_Code_Pro, DM_Sans, } from "next/font/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
const dm_Sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});

const source_Code_Pro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={dm_Sans.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>
        
       <Footer />
      </body>
    </html>
  );
}
