import PricingSection from "@/components/Pricing";
import ThemeToggle from "@/components/ThemeToggle";


export default function PricingPage() {
  return (
    <main className="scroll-smooth bg-primary focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <PricingSection />
    </main>
  );
}