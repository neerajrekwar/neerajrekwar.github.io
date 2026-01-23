import { AnimatedTooltipPreview } from "@/components/AnimatedToolstips";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "../accordion";



export function AccordionDemo() {
  return (
    <>
      <section className="text-four min-h-screen flex flex-col justify-start items-start pt-20 ">
        <div className="w-full text-center md:text-xl p-2 m-auto">
          <header className="pt-3 text-center text-xl pb-2 py-3 text-2xl  md:text-3xl lg:text-4xl font-bold text-center">
            <h2>Frequently Asked Questions</h2>
          </header>
          <p className="text-center  md:text-base pb-2 mb-8">
            Feel free to ask me anything. I&apos;m here to help!
          </p>
          <Accordion
            type="single"
            collapsible
            className="max-w-5xl m-auto text-left"
          >
            <dl>
              <AccordionItem value="item-1">
                <dt>
                  <AccordionTrigger>
                    What web solutions do you offer?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    We offer responsive web design services to improve user
                    experience across different devices. Our solutions include
                    successful implementation examples and can help boost user
                    engagement and conversion rates for businesses. Let&apos;s
                    discuss how we can tailor our web solutions to meet your needs.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-2">
                <dt>
                  <AccordionTrigger>
                    How scalable are your web solutions?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    I&apos;ve noted down your request to remember the text How
                    scalable are your web solutions?
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-3">
                <dt>
                  <AccordionTrigger>
                    Are your web solutions customizable to fit specific business
                    needs?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    Absolutely, our web solutions can be tailored to meet specific
                    business requirements.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-4">
                <dt>
                  <AccordionTrigger>
                    What makes your web solutions reliable?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    Our web solutions are built on a foundation of robust technology
                    and rigorous testing, ensuring reliability at every step.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-5">
                <dt>
                  <AccordionTrigger>
                    How can we get in touch to discuss our business needs?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    You can reach out to discuss our business needs via email at
                    [email address] or by phone at [phone number]. Looking forward
                    to connecting with you.
                  </AccordionContent>
                </dd>
              </AccordionItem>
            </dl>
          </Accordion>
        </div>
      </section>
      <section className="py-12  md:min-h-screen bg-primary bg-custom-radial-sm m-auto border-seven text-secondary">
        <h6 className="py-3  text-four text-2xl  md:text-3xl lg:text-4xl font-bold text-center">
          Didn&apos;t find an answer?
        </h6>
        <div className="flex flex-col justify-center items-center">
          <p className=" mb-8 px-4 max-w-2xl text-four mx-auto text-center md:text-base pb-4">
            My team is just an email away and ready to answer your questions
          </p>
          <div className="pr-6 mt-14 pt-4 md:mt-16 md:pt-8 ">
            <AnimatedTooltipPreview />
            <a href="/contact">
              <button className="bg-slate-800 ml-4  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative  flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>Contact team</span>
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
      </section>
    </>
  );
}
