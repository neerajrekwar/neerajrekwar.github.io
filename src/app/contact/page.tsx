import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
