'use client';

import React, { useState } from 'react';
import { Check, X, Bell, Settings, User, Code, Terminal, Cpu } from 'lucide-react';


export default function ServicePricingPage() {
  const [billingCycle, setBillingCycle] = useState('annual');

  // Logic to toggle prices based on cycle
  const getPrice = (monthlyPrice: number) => {
    return billingCycle === 'annual' ? Math.floor(monthlyPrice * 0.85) : monthlyPrice;
  };

  const getYearlyBill = (monthlyPrice: number) => {
    return Math.floor(monthlyPrice * 0.85 * 12);
  };

  // The "Ladder" of features: 
  // 0-3: Basic (Care), 4-6: Growth (SEO), 7-8: Advanced (Web3)
  const features = [
    "24/7 Uptime Monitoring",            // 0
    "Bug Extermination (5 hrs/mo)",      // 1
    "Security Patching & Updates",       // 2
    "Monthly Functionality Testing",     // 3
    "Technical SEO Audit & Fixes",       // 4
    "Speed Optimization (Core Vitals)",  // 5
    "Conversion Landing Page Tweaks",    // 6
    "Smart Contract / Solidity Dev",     // 7
    "Web3 & AI Agent Integration",       // 8
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF5] font-sans text-slate-800 p-4 md:p-8 flex flex-col items-center">
      
     

      {/* Main Content */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-normal text-slate-800">Service Plans</h1>
            <p className="text-slate-500 mt-2">Choose a plan that fits your development stage.</p>
          </div>
          
          {/* Toggle */}
          <div className="flex items-center bg-white rounded-full p-1 border border-slate-200 shadow-sm mt-4 md:mt-0">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual (Save 15%)
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Care & Secure (Maintenance) */}
          <div className="relative bg-[#EAE8DE] rounded-3xl p-8 border border-transparent flex flex-col">
            <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-slate-500">Essential</span>
               <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2">Care & Secure</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal">${getPrice(299)}</span>
                <span className="text-xs text-slate-500 flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(299)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-4 px-4 leading-relaxed h-10">
                Peace of mind for existing sites. We handle bugs, testing, and security updates.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 4 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8BC34A] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-slate-400 p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 4 ? 'text-slate-700' : 'text-slate-400'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto">
               <button className="w-full px-8 py-3 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                 Subscribe
               </button>
            </div>
          </div>

          {/* Card 2: Growth & Rank (SEO/Opt) - Dark Card */}
          <div className="relative bg-[#2A2A2A] rounded-3xl p-8 border-2 border-dashed border-yellow-400 shadow-xl transform md:-translate-y-2 flex flex-col">
            <div className="absolute -top-3 right-8 bg-yellow-300 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              Best Value ●
            </div>

            <div className="text-center mb-8 mt-4 text-white">
              <h3 className="text-lg font-medium mb-2">Growth & Rank</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl text-slate-500 line-through decoration-slate-500">${getPrice(1200)}</span>
                <span className="text-4xl font-normal text-yellow-400">${getPrice(999)}</span>
                <span className="text-xs text-slate-400 flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(999)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-4 px-2 leading-relaxed h-10">
                For businesses ready to scale. Includes technical SEO, speed optimization, and CRO.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 7 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8BC34A] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-slate-600 p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 7 ? 'text-slate-200' : 'text-slate-600'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto">
               <button className="w-full px-8 py-3 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold shadow-lg hover:bg-yellow-300 transition-colors">
                 Start Optimization
               </button>
            </div>
          </div>

          {/* Card 3: Future Architect (Web3) */}
          <div className="relative bg-[#FFFBEB] rounded-3xl p-8 border border-transparent flex flex-col">
             <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-slate-500">Web4 Ready</span>
               <div className="w-2 h-2 rounded-full bg-[#8BC34A]"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2">Future Architect</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal">${getPrice(2499)}</span>
                <span className="text-xs text-slate-500 flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(2499)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-4 px-2 leading-relaxed h-10">
                Full-stack development for the decentralized web. Smart contracts, AI, and Blockchain.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8BC34A] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto">
               <button className="w-full px-8 py-3 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                 Contact for Scope
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}