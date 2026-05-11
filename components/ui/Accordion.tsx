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
                    What kind of web development services do you offer?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    I offer full-stack web development and responsive web design services to improve user
                    experience across all devices. My custom solutions are built to boost user
                    engagement and conversion rates for your business. Let&apos;s
                    discuss how I can tailor my services to meet your exact needs.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-2">
                <dt>
                  <AccordionTrigger>
                    Are the websites and applications you build scalable?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    I design and build applications with scalability in mind from day one. 
                    Using modern frameworks like Next.js and robust backend architectures, 
                    I ensure your website can easily handle increased traffic and grow seamlessly alongside your business.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-3">
                <dt>
                  <AccordionTrigger>
                    Can you customize the website to fit my specific business needs?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    Absolutely. I don&apos;t use one-size-fits-all templates. Every project I take on is 
                    fully tailored to match your specific business requirements, brand identity, and long-term goals.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-4">
                <dt>
                  <AccordionTrigger>
                    How do you ensure the projects you deliver are reliable?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    I build my projects on a foundation of modern, industry-standard technologies and follow 
                    best practices for clean code. Combined with rigorous testing and performance optimization, 
                    I ensure your website is fast, secure, and highly reliable.
                  </AccordionContent>
                </dd>
              </AccordionItem>
              <AccordionItem value="item-5">
                <dt>
                  <AccordionTrigger>
                    How can I get in touch with you to discuss my project?
                  </AccordionTrigger>
                </dt>
                <dd>
                  <AccordionContent>
                    You can reach out to me directly via email at dev.neerajrekwar@gmail.com 
                    or by calling +91 704 214 9836. I am always excited to discuss new ideas and look forward to connecting with you.
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
            I am just an email away and ready to answer any questions you might have.
          </p>
          <div className="pr-6 mt-14 pt-4 md:mt-16 md:pt-8 ">
            <AnimatedTooltipPreview />
            <a href="/contact">
              <button className="bg-slate-800 ml-4  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative  flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>Contact me</span>
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
