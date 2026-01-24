"use client";

import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const features = [
  {
    title: "Analytics & data insight",
    description: (
      <>
        Effortlessly monitor all aspects of your performance with our robust,
        GDPR-compliant{" "}
        <strong className="text-four">Analysis and Data insight,</strong> Google
        Analytics integration, and more.
      </>
    ),
    image: "/projects/home/Analytics.svg",
  },
  {
    title: "Metadata Google works",
    description: (
      <>
        Ensure your page stands out with a compelling title and description,
        while our top-notch handles ensure{" "}
        <strong className="text-four"> search engine optimization.</strong>
      </>
    ),
    image: "/projects/home/Dev_productivity.svg",
  },
  {
    title: "Semantic structure",
    description: (
      <>
        Make sure to implement semantic tags on your websites to improve their{" "}
        <strong className="text-four">structure.</strong>
      </>
    ),
    image: "/projects/home/Semantics.svg",
  },
  {
    title: "Accessibility in devices",
    description: (
      <>
        Design inclusive and{" "}
        <strong className="text-four">accessible websites</strong> by utilizing
        alt tags, Tab Index, element tags, and more.
      </>
    ),
    image: "/projects/home/Accessibility.svg",
  },
  {
    title: "Lighthouse Scores",
    description: (
      <>
        Ensure your page stands out with a compelling title and description,{" "}
        <strong className="text-four">
          while our top-notch handles ensure search
        </strong>
        engine optimization.
      </>
    ),
    image: "/projects/home/Dev_productivity.svg",
  },
  {
    title: "Sitemap browsing",
    description: (
      <>
        We understand the importance of generating a sitemap that reflects your
        site&apos;s{" "}
        <strong className="text-four">structure for search bots.</strong>
      </>
    ),
    image: "/projects/home/Sitemap.svg",
  },
  {
    title: "SSR fast accessible",
    description: (
      <>
        Boost your website speed with{" "}
        <strong className="text-four">Server Side Rendering</strong> achieve
        faster load times and higher scores.
      </>
    ),
    image: "/projects/home/Dev_productivity.svg",
  },
  {
    title: "Hosting matters",
    description: (
      <>
        Experience lightning-fast page loading, no matter where you are in the
        world.
      </>
    ),
    image: "/projects/home/hosting.svg",
  },
];

const PrevButton = (props: React.ComponentProps<"button">) => (
  <button
    {...props}
    className="bg-seven rounded-full p-2 disabled:opacity-50"
  >
    <IconArrowLeft />
  </button>
);

const NextButton = (props: React.ComponentProps<"button">) => (
  <button
    {...props}
    className="bg-seven rounded-full p-2 disabled:opacity-50"
  >
    <IconArrowRight />
  </button>
);


export const VisionSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section>
      <header className="p-2 max-w-6xl m-auto justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
        <div className="text-4xl  text-third sm:text-5xl sm:mx-2">
          &#8226;
        </div>
        <h2 id="vision-heading">Vision to the Future</h2>
      </header>
      <article>
        <div className="justify-center items-center flex my-10">
          <span className="text-five rounded-full bg-seven h-10 w-10 justify-center items-center flex p-4">
            1
          </span>
        </div>
        <div className="border-third">
          <div className="text-four  max-w-6xl m-auto md:bg-gradient-to-r  md:rounded-ss-2xl">
            <div className="basis-1/2 p-2 md:flex-row md:flex gap-4">
              <figure className="text-five bg-seven   p-2 basis-1/2  md:aspect-video font-bold flex justify-center items-center  rounded-2xl m-2 p-4 h-60 md:h-auto">
                <Image
                  className="bg-transparent"
                  src={"/projects/home/elements.svg"}
                  height={300}
                  width={300}
                  loading="lazy"
                  alt="UI/UX design elements"
                />
              </figure>
              <div className="basis-1/2 rounded-lg aspect-video m-3 flex-col flex justify-center  text-base md:text-base p-4">
                <h3 className="text-2xl md:text-4xl font-bold pb-2  text-four  ">
                  UI/UX Design
                </h3>
                <p>
                  Websites will{" "}
                  <a href="/" target="_blank" className="">
                    <strong className="text-five font-normal ">
                      customization in website & changes
                    </strong>
                  </a>{" "}
                  analyze user behavior and preferences,
                  <strong className="text-five font-normal">
                    {" "}
                    dynamically tailoring layouts, content, and recommendations
                    to each visitor.
                  </strong>{" "}
                </p>
              </div>
            </div>
            <div className="basis-1/2 p-2 lg:flex flex-col justify-between">
              <div className="basis-1/2 md:flex-row md:flex gap-4">
                <div className="basis-1/2  rounded-lg md:aspect-video m-3 flex-col flex justify-center  text-base md:text-base p-4">
                  <h3 className="text-2xl md:text-4xl font-bold pb-2  text-four  ">
                    Change your old from new engaging user interface
                  </h3>
                  <p>
                    Imagine a shopping site that curates a personalized product
                    selection based on your browsing history and past purchases.
                  </p>
                </div>
                <figure className="text-five  p-2 basis-1/2  md:aspect-video font-bold flex justify-center items-center  rounded-2xl m-2 p-4 h-60 md:h-auto">
                  <Image
                    src="/projects/home/Programming.svg"
                    className="aspect-square"
                    width={300}
                    height={300}
                    loading="lazy"
                    alt="best programing tech development"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <article>
        ... content for section 2 ...
      </article>

      <article>
        ... content for section 3 ...
      </article> */}

      <section aria-labelledby="services-heading" className="py-16">
        <header className="text-center mb-12">
          <h2 id="services-heading" className="md:text-2xl  opacity-50 text-secondary py-3 m-auto max-w-3xl">
            Services and compitable web3 websites
          </h2>
          <div className="flex justify-center mb-8">
            <span className="p-2 px-3 text-four bg-seven border-seven border rounded-full w-fit">
              SEO & Performance
            </span>
          </div>
        </header>

        <div className="overflow-hidden max-w-6xl m-auto" ref={emblaRef}>
          <div className="flex touch-pan-y gap-4">
            {features.map((item, index) => (
              <article
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
              >
                <div className="h-full flex flex-col justify-between rounded-lg p-2 md:p-10 text-five">
                  <div>
                    <h5 className="text-xl text-four">{item.title}</h5>
                    <p className="py-2 text-sm font-normal">
                      {item.description}
                    </p>
                  </div>

                  <figure className="flex justify-center items-center m-2 p-10 bg-seven rounded-md mt-auto">
                    <Image
                      className="h-44 w-44 object-contain"
                      src={item.image}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </section>
    </section>
  );
};
