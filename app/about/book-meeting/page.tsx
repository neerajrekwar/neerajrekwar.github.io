
import CalendlyWidget from "@/components/Book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book meeting",
  description:
    "Let's make together.",
};

const book = () => {
 
  
  return (
    <div
      
    ><CalendlyWidget/></div>
  );
};


export default book