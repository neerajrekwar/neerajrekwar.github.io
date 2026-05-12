"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Layers, ArrowRight } from "lucide-react";

export default function PricingHubPage() {
  // JSON-LD Schema for Google Rich Results
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Freelance Web Developer Services",
    "description": "Hire a freelance full stack developer for custom website development services. Remote Next.js expert available for startups, business websites, SEO redesigns, and performance fixes.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Project Build Packages",
          "description": "Custom website development services for startups. Hire a Next.js developer to architect and build your Web2 or Web3 product from zero to launch.",
          "provider": { "@type": "Person", "name": "Neeraj Rekwar" },
          "url": "https://neerajrekwar.github.io/freelance/packages"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Monthly Maintenance Plans",
          "description": "Remote web developer for startup ongoing support, fix website performance issues, security patching, and SEO optimization on a monthly retainer.",
          "provider": { "@type": "Person", "name": "Neeraj Rekwar" },
          "url": "https://neerajrekwar.github.io/freelance/maintenance"
        }
      }
    ]
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-third/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-seven/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-3xl px-4 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-seven/30 border border-seven text-five text-sm font-semibold mb-6 inline-block">
          Services & Pricing
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-four mb-6 tracking-tight">
          Choose Your <span className="text-third">Path</span>
        </h1>
        <p className="text-lg md:text-xl text-five leading-relaxed">
          Are you building something new from scratch, or scaling a platform that already exists? Select the journey that fits your current goals.
        </p>
      </motion.header>

      {/* Cards */}
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 px-4 relative z-10">
        
        {/* Project Build */}
        <Link href="/freelance/packages" className="group h-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="flex h-full flex-col p-10 rounded-[2rem] border border-seven/50 bg-primary/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-third/5 hover:border-third/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Layers className="w-32 h-32 text-four" />
            </div>

            <div className="w-16 h-16 rounded-2xl bg-seven/40 border border-seven flex items-center justify-center mb-8 group-hover:bg-third/10 group-hover:border-third/30 transition-colors duration-300">
              <Layers className="w-8 h-8 text-four group-hover:text-third transition-colors duration-300" />
            </div>

            <h2 className="text-3xl font-bold text-four mb-4">
              Project Build
            </h2>

            <p className="text-five text-lg leading-relaxed mb-10">
              For startups and founders. Get a fixed-price package to architect and build your Web2 or Web3 product from zero to launch.
            </p>

            <div className="mt-auto flex items-center font-bold text-four text-base group-hover:text-third transition-colors duration-300">
              View Build Packages 
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </Link>

        {/* Monthly Service */}
        <Link href="/freelance/maintenance" className="group h-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="flex h-full flex-col p-10 rounded-[2rem] border border-seven/50 bg-four/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-five/10 hover:border-five/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Terminal className="w-32 h-32 text-four" />
            </div>

            <div className="w-16 h-16 rounded-2xl bg-seven/40 border border-seven flex items-center justify-center mb-8 group-hover:bg-five/20 group-hover:border-five/40 transition-colors duration-300">
              <Terminal className="w-8 h-8 text-four group-hover:text-five transition-colors duration-300" />
            </div>

            <h2 className="text-3xl font-bold text-four mb-4">
              Monthly Service
            </h2>

            <p className="text-five text-lg leading-relaxed mb-10">
              For existing businesses. Ongoing support, bug fixes, security patching, and SEO optimization on a monthly retainer.
            </p>

            <div className="mt-auto flex items-center font-bold text-four text-base group-hover:text-five transition-colors duration-300">
              View Service Plans 
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </Link>

      </div>
    </section>
  );
}
