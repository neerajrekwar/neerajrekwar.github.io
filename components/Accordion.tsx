import { AnimatedTooltipPreview } from "@/app/components/AnimatedToolstips";
import { AnimatedTooltip,  } from "@/app/components/ui/animated-tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <>
      <div className="text-four min-h-screen flex flex-col justify-start items-start pt-20 bg-custom-radial-lg ">
        <div className="max-w-6xl text-center md:text-xl p-2 m-auto">
          
          <div className="text-center text-2xl font-semibold">Frequently Asked Questions</div>
          <p className="text-center text-base py-2 mb-8">Feel free to ask me anything. I'm here to help!</p>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>What web solutions do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer responsive web design services to improve user experience across different devices. Our solutions include successful implementation examples and can help boost user engagement and conversion rates for businesses. Let&apos;s discuss how we can tailor our web solutions to meet your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How scalable are your web solutions?</AccordionTrigger>
              <AccordionContent>
                I&apos;ve noted down your request to remember the text How scalable are your web solutions?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are your web solutions customizable to fit specific business needs?
</AccordionTrigger>
              <AccordionContent>
                Absolutely, our web solutions can be tailored to meet specific business requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes your web solutions reliable?</AccordionTrigger>
              <AccordionContent>
                Our web solutions are built on a foundation of robust technology and rigorous testing, ensuring reliability at every step.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can we get in touch to discuss our business needs?</AccordionTrigger>
              <AccordionContent>
                You can reach out to discuss our business needs via email at [email address] or by phone at [phone number]. Looking forward to connecting with you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="py-12 my-2">
            <h6 className="py-3 text-xl md:text-4xl">Didn&apos;t find an answer?</h6>
            <p className="py-2 mb-16 text-base">My team is just an email away and ready to answer your questions</p>
          <AnimatedTooltipPreview />
            <a href="/contact"
             className="p-2 mt-12 rounded-lg text-sm px-3 bg-secondary text-primary"
            > Contact team </a>
          </div>
        </div>
      </div>
    </>
  );
}
