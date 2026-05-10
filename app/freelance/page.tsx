"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Layers, ArrowRight } from "lucide-react";

export default function PricingHubPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20">
      
      {/* Header */}
      <header className="text-center mb-16 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-four mb-4">
          Choose Your Path
        </h1>
        <p className="text-base md:text-lg text-secondary">
          Are you building something new from scratch, or scaling a platform that already exists?
        </p>
      </header>

      {/* Cards */}
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 px-4">
        
        {/* Project Build */}
        <Link href="/freelance/packages" className="group">
          <motion.div
            whileHover={{ y: -6 }}
          className="flex h-full flex-col p-8 rounded-3xl border shadow-lg bg-primary border-seven hover:shadow-xl transition-all"
          >
          <div className="w-14 h-14 rounded-2xl bg-seven flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Layers className="w-7 h-7 text-third" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-four mb-2">
              Project Build
            </h2>

          <p className="text-five leading-relaxed mb-8">
              For startups and founders. Get a fixed-price package to architect and build your Web2 or Web3 product from zero to launch.
            </p>

            <div className="mt-auto flex items-center font-semibold text-four text-sm group-hover:gap-2 transition-all">
              View Build Packages <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </Link>

        {/* Monthly Service */}
        <Link href="/freelance/maintenance" className="group">
          <motion.div
            whileHover={{ y: -6 }}
          className="flex h-full flex-col p-8 rounded-3xl shadow-lg border border-seven bg-six text-secondary hover:shadow-xl transition-all"
          >
          <div className="w-14 h-14 rounded-2xl flex bg-seven items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Terminal className="w-7 h-7 text-third" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Monthly Service
            </h2>

          <p className="text-five leading-relaxed mb-8">
              For existing businesses. Ongoing support, bug fixes, security patching, and SEO optimization on a monthly retainer.
            </p>

            <div className="mt-auto flex items-center font-semibold text-secondary text-sm group-hover:gap-2 transition-all">
              View Service Plans <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </Link>

      </div>
    </section>
  );
}
