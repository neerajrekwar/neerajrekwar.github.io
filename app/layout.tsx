
import { Alata } from "next/font/google";
import "./globals.css";
import "./add.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer";
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
    <html lang="en">
      <body className={alata.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>
        
       <Footer />
      </body>
    </html>
  );
}
