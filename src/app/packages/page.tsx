import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicePlans } from "@/components/sections/ServicePlans";

export default function PackagesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="border-2 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <ServicePlans />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
