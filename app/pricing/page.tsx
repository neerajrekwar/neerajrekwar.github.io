'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Layers, ArrowRight } from 'lucide-react';

export default function PricingHubPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Choose Your Path</h1>
        <p className="text-lg text-slate-500">
          Are you building something new from scratch, or scaling a platform that already exists?
        </p>
      </div>

      {/* Selection Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        
        {/* Option 1: Project Build (Links to /pricing/packages) */}
        <Link href="/pricing/packages" className="group">
          <motion.div 
            whileHover={{ y: -8 }}
            className="h-full p-10 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all flex flex-col items-start"
          >
            <div className="w-14 h-14 bg-[#FFFBEB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-7 h-7 text-yellow-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Project Build</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              For startups and founders. Get a fixed-price package to architect and build your Web2 or Web3 product from zero to launch.
            </p>

            <div className="mt-auto flex items-center text-sm font-bold text-slate-900 group-hover:gap-2 transition-all">
              View Build Packages <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </Link>

        {/* Option 2: Monthly Service (Links to /pricing/maintenance) */}
        <Link href="/pricing/maintenance" className="group">
          <motion.div 
            whileHover={{ y: -8 }}
            className="h-full p-10 rounded-3xl bg-[#2A2A2A] text-white shadow-xl hover:shadow-2xl hover:shadow-slate-900/20 transition-all flex flex-col items-start"
          >
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-7 h-7 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">Monthly Service</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              For existing businesses. Ongoing support, bug fixes, security patching, and SEO optimization on a monthly retainer.
            </p>

            <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all">
              View Service Plans <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </Link>

      </div>
    </div>
  );
}