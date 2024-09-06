import { AnimatedTooltipPreview } from "@/app/components/AnimatedToolstips";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <>
      <div className="text-four min-h-screen flex flex-col justify-start items-start pt-20 ">
        <div className="w-full text-center md:text-xl p-2 m-auto">
          <div className="pt-3 text-xl font-semibold sm:font-normal sm:text-2xl text-five md:text-4xl text-center">
            Frequently Asked Questions
          </div>
          <p className="text-center text-base pb-2 mb-8">
            Feel free to ask me anything. I&apos;m here to help!
          </p>
          <Accordion
            type="single"
            collapsible
            className="max-w-5xl m-auto text-left"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What web solutions do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer responsive web design services to improve user
                experience across different devices. Our solutions include
                successful implementation examples and can help boost user
                engagement and conversion rates for businesses. Let&apos;s
                discuss how we can tailor our web solutions to meet your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How scalable are your web solutions?
              </AccordionTrigger>
              <AccordionContent>
                I&apos;ve noted down your request to remember the text How
                scalable are your web solutions?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are your web solutions customizable to fit specific business
                needs?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely, our web solutions can be tailored to meet specific
                business requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What makes your web solutions reliable?
              </AccordionTrigger>
              <AccordionContent>
                Our web solutions are built on a foundation of robust technology
                and rigorous testing, ensuring reliability at every step.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can we get in touch to discuss our business needs?
              </AccordionTrigger>
              <AccordionContent>
                You can reach out to discuss our business needs via email at
                [email address] or by phone at [phone number]. Looking forward
                to connecting with you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="py-12  md:min-h-screen m-auto bg-primary bg-custom-radial-md text-five border-seven flex flex-col justify-center items-center">
        <h6 className="py-3 text-2xl  md:text-4xl text-center">
          Didn&apos;t find an answer?
        </h6>
        <div className="flex flex-col justify-center items-center">
          <p className="py-2 mb-20 text-base text-four md:text-lg px-3 text-center">
            My team is just an email away and ready to answer your questions
          </p>
          <AnimatedTooltipPreview />
          <a href="/contact">
            <button className="bg-slate-800 p-2 ml-4  mt-12 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span> Contact team</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
