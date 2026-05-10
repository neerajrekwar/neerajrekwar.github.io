'use client';

import React, { useState } from 'react';
import { Check, X, Terminal, Layout, Database, Cpu } from 'lucide-react';

// Optional: Define the interface to satisfy TypeScript completely
interface Plan {
  title: string;
  price: number;
  period: string;
  desc: string;
  features: string[];
  limitIndex: number; // Feature index where items start being crossed out
  icon: React.ReactNode;
  highlight: boolean;
  color: string; // Added to both types now
}

export default function CombinedPricingPage() {
  const [serviceType, setServiceType] = useState<'retainer' | 'build'>('build');
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  // --- DATA: Retainer Plans (Monthly) ---
  const retainerPlans: Plan[] = [
    {
      title: "Care & Secure",
      price: 299,
      period: "/ mo",
      desc: "Peace of mind. We handle bugs and security.",
      features: [
        "24/7 Uptime Monitoring",
        "Bug Extermination (5 hrs/mo)",
        "Security Patching",
        "Monthly Testing",
        "No New Development",
      ],
      limitIndex: 4,
      icon: <Terminal className="w-6 h-6 text-four" />,
      highlight: false,
      color: "bg-six border-seven text-secondary" // Added to match shape
    },
    {
      title: "Growth & Rank",
      price: 999,
      period: "/ mo",
      desc: "Scale your traffic with Technical SEO.",
      features: [
        "Everything in Care",
        "Technical SEO Audit",
        "Speed Opt (Core Vitals)",
        "Landing Page Tweaks",
        "Content Updates",
      ],
      limitIndex: 5,
      icon: <Layout className="w-6 h-6 text-third" />,
      highlight: true,
      color: "bg-four border-third text-primary" // Added to match shape
    }
  ];

  // --- DATA: Project Build Plans (One-Time) ---
  const buildPlans: Plan[] = [
    {
      title: "Static Presence",
      price: 900,
      period: " one-time",
      desc: "Fast, beautiful static site for portfolios.",
      features: [
        "Pages: 1 - 5 Static Pages",
        "Integrations: Max 2 (Analytics/Form)",
        "Tech: React / Next.js (SSG)",
        "Design: Responsive UI",
        "Delivery: 1 Week",
        "No Database",
        "No Auth System"
      ],
      limitIndex: 5,
      icon: <Layout className="w-6 h-6 text-four" />,
      highlight: false,
      color: "bg-six border-seven text-secondary"
    },
    {
      title: "Functional Web2",
      price: 3500,
      period: " start",
      desc: "Full stack app with database and auth.",
      features: [
        "Pages: Up to 25 Dynamic Pages",
        "Integrations: 5-8 (Stripe, Auth, CMS)",
        "Tech: Next.js + Postgres + API",
        "Admin Dashboard Included",
        "Delivery: 3-4 Weeks",
        "Advanced SEO Setup",
        "No Blockchain"
      ],
      limitIndex: 6,
      icon: <Database className="w-6 h-6 text-primary" />,
      highlight: true,
      color: "bg-four border-third text-primary"
    },
    {
      title: "Dynamic Web3/4",
      price: 8000,
      period: " start",
      desc: "Decentralized ecosystem with AI logic.",
      features: [
        "Pages: Unlimited (Dynamic Gen)",
        "Integrations: Unlimited Custom",
        "Tech: Solidity + AI + Rust",
        "Smart Contract Audit",
        "Wallet Connect & IPFS",
        "AI Agent Integration",
        "Delivery: 6+ Weeks"
      ],
      limitIndex: 7,
      icon: <Cpu className="w-6 h-6 text-four" />,
      highlight: false,
      color: "bg-seven border-seven text-secondary"
    }
  ];

  const activePlans = serviceType === 'retainer' ? retainerPlans : buildPlans;

  const getDisplayPrice = (plan: Plan) => {
    if (serviceType === 'build') return plan.price;
    return billingCycle === 'annual' ? Math.floor(plan.price * 0.85) : plan.price;
  };

  return (
    <div className="min-h-screen bg-primary font-sans text-secondary p-4 md:p-8 flex flex-col items-center">
      

      {/* Main Content */}
      <div className="w-full max-w-7xl">
        
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-normal text-secondary">
              {serviceType === 'retainer' ? 'Maintenance Plans' : 'Development Packages'}
            </h1>
            <p className="text-five mt-2">
              {serviceType === 'retainer' 
                ? 'Keep your software running securely.' 
                : 'Build your next big idea from scratch.'}
            </p>
          </div>
          
          <div className="flex gap-4">
            {/* Main Service Type Toggle */}
            <div className="bg-seven p-1 rounded-full flex">
              <button 
                onClick={() => setServiceType('retainer')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${serviceType === 'retainer' ? 'bg-primary shadow-sm text-secondary' : 'text-four hover:text-secondary'}`}
              >
                Monthly Service
              </button>
              <button 
                onClick={() => setServiceType('build')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${serviceType === 'build' ? 'bg-primary shadow-sm text-secondary' : 'text-four hover:text-secondary'}`}
              >
                Project Build
              </button>
            </div>

            {/* Billing Cycle (Only shows for Retainer) */}
            {serviceType === 'retainer' && (
              <div className="bg-seven border border-seven p-1 rounded-full flex">
                <button 
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-primary text-secondary shadow-sm' : 'text-four hover:text-secondary'}`}
                >
                  Yearly
                </button>
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-primary text-secondary shadow-sm' : 'text-four hover:text-secondary'}`}
                >
                  Monthly
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 gap-6 ${activePlans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
          
          {activePlans.map((plan, index) => (
            <div 
              key={index}
              // We use plan.color to determine background
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 ${plan.color} ${plan.highlight ? 'border-dashed shadow-xl transform md:-translate-y-2' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-8 bg-third text-primary text-xs font-bold px-3 py-1 rounded-full">
                  Best Value ●
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8 mt-4">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-lg font-medium mb-2">{plan.title}</h3>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className={`text-4xl font-normal ${plan.highlight ? 'text-third' : 'inherit'}`}>
                    ${getDisplayPrice(plan)}
                  </span>
                  <span className={`text-xs flex flex-col items-start leading-tight ${plan.highlight ? 'text-primary/70' : 'text-five'}`}>
                    <span>{plan.period}</span>
                    <span>(USD)</span>
                  </span>
                </div>
                <p className={`text-xs mt-4 px-4 leading-relaxed h-10 ${plan.highlight ? 'text-primary/70' : 'text-five'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {idx < plan.limitIndex ? (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                        <Check className={`w-3 h-3 ${plan.highlight ? 'text-four' : 'text-secondary'}`} strokeWidth={3} />
                      </div>
                    ) : (
                      <X className={`flex-shrink-0 w-5 h-5 p-0.5 ${plan.highlight ? 'text-primary/50' : 'text-five/50'}`} />
                    )}
                    <span className={`text-xs ${idx < plan.limitIndex ? (plan.highlight ? 'text-primary' : 'text-four') : (plan.highlight ? 'text-primary/50' : 'text-five/50')}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="text-center mt-auto">
                 <button className={`w-full px-8 py-3 rounded-full text-sm font-bold shadow-sm transition-all border ${plan.highlight ? 'bg-third text-four border-transparent hover:opacity-90' : 'bg-primary text-secondary border-seven hover:bg-seven hover:shadow-md'}`}>
                   {serviceType === 'build' ? 'Book Project' : 'Subscribe'}
                 </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}