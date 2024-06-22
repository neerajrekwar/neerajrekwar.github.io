
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "./components/floatingNavBar";
import { ThemeProvider } from "./context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNavDemo />
        <ThemeProvider>{children}</ThemeProvider>
        
      
      </body>
    </html>
  );
}
