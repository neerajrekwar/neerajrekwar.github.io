import type { Metadata } from "next";
import DarkModeToggle from "./components/DarkModeToggle";
import HomeSectionHeader from "./components/homeSectionHeader";
import WorkSection from "./components/workSection";
import AdminWeather from "./components/AdminWeather";
import IntroSection from "./components/introSection";


export const metadata: Metadata = {
  title: "bug fixer programmer freelancer",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="">
      <HomeSectionHeader />
      <IntroSection/>
      
      <section className="h-screen flex justify-center items-center">
        
      </section>
      <section className="h-screen flex flex-col justify-center items-center">
        Vision to learn
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <AdminWeather />
        <DarkModeToggle />
        {/* Other components or content */}
      </div>
    </main>
  );
}