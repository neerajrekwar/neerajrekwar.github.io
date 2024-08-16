"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
    
      <WobbleCard 
        
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            A photo-holistic person involves considering the entirety of the universe in photography
          </h2>
          <p className="mt-4 text-left z-50 text-base/6 text-neutral-200">
            It can be a great way to express yourself capture moments, and make beautiful memories. you can create stunning images that can last a lifetime.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-6 -z-40  lg:-right-[17%] lg:-bottom-4 md:-bottom-40  sm:-bottom-32 -bottom-22   object-contain rounded-2xl"
        />
      </WobbleCard>
  
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sounds of Serenity at my way
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          The sound of music has the power to bring a sense of tranquility and harmony to our lives.
        </p>
        <div className="flex justify-center z-60 p-8">
          <iframe  className="z-50" src="https://open.spotify.com/embed/playlist/6D6D1Cn3AaG1sqaxv2T69I?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </WobbleCard>
      
      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#5e716a] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Books think I&apos;m a genius, wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
             Yet, today, he found himself amidst a sea of paper, scissors, and tape. His mission: to wrap a mountain of books for the upcoming annual book fair.
          </p>
        </div>
        
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -z-40 -right-8 md:-right-[30%] lg:-right-[5%] md:-bottom-60 sm:-bottom-32 -bottom-24   object-contain rounded-2xl"
        />
      </WobbleCard>
      
    </div>
  );
}
