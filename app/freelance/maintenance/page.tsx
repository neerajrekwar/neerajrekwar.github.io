'use client';

import React, { useState } from 'react';
import { Check, X, Bell, Settings, User, Code, Terminal, Cpu } from 'lucide-react';
import { IconBrandWhatsapp, IconBrandTelegram } from '@tabler/icons-react';


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

  // JSON-LD Schema for Google Rich Results
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Custom Website Maintenance & Development Plans",
    "description": "Hire a remote Next.js developer for startup website maintenance, fix website performance issues, and redesign your website to be SEO friendly.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Care & Secure Maintenance Plan",
          "description": "Essential website maintenance services to fix website performance issues, including 24/7 uptime monitoring, security patching, and bug fixes.",
          "provider": { "@type": "Person", "name": "Neeraj Rekwar" },
          "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "USD",
            "url": "https://neerajrekwar.github.io/freelance/maintenance"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Growth & Rank SEO Plan",
          "description": "Hire an SEO expert for your website to improve rankings. Includes technical SEO audits, core web vitals speed optimization, and redesigning your website to be SEO friendly.",
          "provider": { "@type": "Person", "name": "Neeraj Rekwar" },
          "offers": {
            "@type": "Offer",
            "price": "999",
            "priceCurrency": "USD",
            "url": "https://neerajrekwar.github.io/freelance/maintenance"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Future Architect Web3 Plan",
          "description": "Custom website development services for startups. Let a remote web developer for startup build smart contracts, integrate AI agents, and provide full-stack Next.js solutions.",
          "provider": { "@type": "Person", "name": "Neeraj Rekwar" },
          "offers": {
            "@type": "Offer",
            "price": "2499",
            "priceCurrency": "USD",
            "url": "https://neerajrekwar.github.io/freelance/maintenance"
          }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-primary font-sans text-secondary p-4 md:p-8 flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-normal text-secondary">Service Plans</h1>
            <p className="text-five mt-2">Choose a plan that fits your development stage.</p>
          </div>
          
          {/* Toggle */}
          <div className="flex items-center bg-seven rounded-full p-1 border border-seven shadow-sm mt-4 md:mt-0">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-primary text-secondary shadow-sm' : 'text-four hover:text-secondary'}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual (Save 15%)
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-primary text-secondary shadow-sm' : 'text-four hover:text-secondary'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Care & Secure (Maintenance) */}
          <div className="relative bg-six text-secondary rounded-3xl p-8 border border-seven flex flex-col">
            <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-five">Essential</span>
               <div className="w-2 h-2 rounded-full bg-five"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2">Care & Secure</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal">${getPrice(299)}</span>
                <span className="text-xs text-five flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(299)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-five mt-4 px-4 leading-relaxed h-10">
                Peace of mind for existing sites. We handle bugs, testing, and security updates.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 4 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                      <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-five/50 p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 4 ? 'text-four' : 'text-five/50'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto flex flex-col gap-3">
               <a href="https://wa.me/917042149836?text=Hi%20Neeraj%2C%20I'd%20like%20to%20subscribe%20to%20the%20Care%20%26%20Secure%20plan.%20Here%20are%20my%20project%20details%3A" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full text-sm font-bold hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300">
                 <IconBrandWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                 Discuss on WhatsApp
               </a>
               <a href="https://t.me/neerajrekwar" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0088cc]/10 text-[#0088cc] border border-[#0088cc]/20 rounded-full text-sm font-bold hover:bg-[#0088cc] hover:text-white hover:shadow-lg hover:shadow-[#0088cc]/20 transition-all duration-300">
                 <IconBrandTelegram size={18} className="group-hover:scale-110 transition-transform" />
                 Message on Telegram
               </a>
            </div>
          </div>

          {/* Card 2: Growth & Rank (SEO/Opt) - Dark Card */}
          <div className="relative bg-four text-primary rounded-3xl p-8 border-2 border-dashed border-third shadow-xl transform md:-translate-y-2 flex flex-col">
            <div className="absolute -top-3 right-8 bg-third text-primary text-xs font-bold px-3 py-1 rounded-full">
              Best Value ●
            </div>

            <div className="text-center mb-8 mt-4 text-primary">
              <h3 className="text-lg font-medium mb-2">Growth & Rank</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl text-primary/50 line-through decoration-primary/50">${getPrice(1200)}</span>
                <span className="text-4xl font-normal text-third">${getPrice(999)}</span>
                <span className="text-xs text-primary/70 flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(999)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-primary/70 mt-4 px-2 leading-relaxed h-10">
                For businesses ready to scale. Includes technical SEO, speed optimization, and CRO.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 7 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                      <Check className="w-3 h-3 text-four" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-primary/50 p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 7 ? 'text-primary' : 'text-primary/50'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto flex flex-col gap-3">
               <a href="https://wa.me/917042149836?text=Hi%20Neeraj%2C%20I'd%20like%20to%20subscribe%20to%20the%20Growth%20%26%20Rank%20plan.%20Here%20are%20my%20project%20details%3A" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white border border-[#25D366] rounded-full text-sm font-bold shadow-lg shadow-[#25D366]/30 hover:bg-[#1DA851] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                 <IconBrandWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                 Discuss on WhatsApp
               </a>
               <a href="https://t.me/neerajrekwar" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0088cc] text-white border border-[#0088cc] rounded-full text-sm font-bold shadow-lg shadow-[#0088cc]/30 hover:bg-[#0077b5] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                 <IconBrandTelegram size={18} className="group-hover:scale-110 transition-transform" />
                 Message on Telegram
               </a>
            </div>
          </div>

          {/* Card 3: Future Architect (Web3) */}
          <div className="relative bg-seven text-secondary rounded-3xl p-8 border border-seven flex flex-col">
             <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-five">Web4 Ready</span>
               <div className="w-2 h-2 rounded-full bg-third"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2">Future Architect</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal">${getPrice(2499)}</span>
                <span className="text-xs text-five flex flex-col items-start leading-tight">
                  <span>/ month</span>
                  <span>${getYearlyBill(2499)} billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-five mt-4 px-2 leading-relaxed h-10">
                Full-stack development for the decentralized web. Smart contracts, AI, and Blockchain.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-four">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto flex flex-col gap-3">
               <a href="https://wa.me/917042149836?text=Hi%20Neeraj%2C%20I'd%20like%20to%20discuss%20the%20Future%20Architect%20plan.%20Here%20are%20my%20project%20details%3A" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full text-sm font-bold hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300">
                 <IconBrandWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                 Discuss on WhatsApp
               </a>
               <a href="https://t.me/neerajrekwar" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0088cc]/10 text-[#0088cc] border border-[#0088cc]/20 rounded-full text-sm font-bold hover:bg-[#0088cc] hover:text-white hover:shadow-lg hover:shadow-[#0088cc]/20 transition-all duration-300">
                 <IconBrandTelegram size={18} className="group-hover:scale-110 transition-transform" />
                 Message on Telegram
               </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}