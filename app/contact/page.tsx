import FillForm from "@/components/FillForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Ready to take your online business to the next level? Contact Nee today for top-notch SEO services in Delhi. Let's work together to achieve your digital marketing goals",
};

const ContactPage: React.FC = () => {
  return(
    <main>
      <FillForm/>
    </main>
  );
  
};

export default ContactPage;
