'use client';

import React, { useState } from 'react';
import { Check, X, Bell, Settings, User, ChevronDown } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('annual');

  const features = [
    "Access to core HR features",
    "Employee record management",
    "Basic reporting tools",
    "Manage up to 10 team members",
    "Track employee attendance",
    "Assign and monitor tasks",
    "Email support",
    "Simple onboarding process",
    "Designed user-focused interfaces, optimized user"
  ];

  return (
    <div className="min-h-screen bg-primary font-sans text-secondary p-4 md:p-8 flex flex-col items-center">
      
     

      {/* Main Content */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-normal text-secondary">Pricing</h1>
          
          {/* Toggle */}
          <div className="flex items-center bg-primary rounded-full p-1 border border-seven shadow-sm mt-4 md:mt-0">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-five text-primary' : 'text-four hover:text-secondary'}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-five text-primary' : 'text-four hover:text-secondary'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Recruit Basic */}
          <div className="relative bg-six rounded-3xl p-8 border border-transparent">
            <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-four">Active</span>
               <div className="w-2 h-2 rounded-full bg-third"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2 text-secondary">Recruit Basic</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal text-secondary">$17</span>
                <span className="text-xs text-four flex flex-col items-start leading-tight">
                  <span>/ month (USD)</span>
                  <span>$228 billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-four mt-4 px-4 leading-relaxed">
                Get started with essential tools to manage your team efficiently. Ideal for small teams with fundamental needs
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 4 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-four p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 4 ? 'text-secondary' : 'text-four'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
               <button className="px-8 py-3 bg-primary rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow text-secondary">
                 Cancel
               </button>
            </div>
          </div>

          {/* Card 2: Talent Pro (Dark) */}
          <div className="relative bg-five rounded-3xl p-8 border-2 border-dashed border-third shadow-xl transform md:-translate-y-2">
            <div className="absolute -top-3 right-8 bg-third text-five text-xs font-bold px-3 py-1 rounded-full">
              Save 27% ●
            </div>

            <div className="text-center mb-8 mt-4 text-primary">
              <h3 className="text-lg font-medium mb-2">Talent Pro</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl text-four line-through decoration-four">$26</span>
                <span className="text-4xl font-normal text-third">$19</span>
                <span className="text-xs text-four flex flex-col items-start leading-tight">
                  <span>/ month (USD)</span>
                  <span>$228 billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-four mt-4 px-2 leading-relaxed">
                A comprehensive solution for growing teams, offering enhanced features to streamline HR processes
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < 7 ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                      <Check className="w-3 h-3 text-five" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="flex-shrink-0 w-5 h-5 text-four p-0.5" />
                  )}
                  <span className={`text-xs ${idx < 7 ? 'text-primary' : 'text-four'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
               <button className="px-8 py-3 bg-primary rounded-full text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors text-five">
                 Start 7-days Free Trial
               </button>
            </div>
          </div>

          {/* Card 3: HR Master */}
          <div className="relative bg-seven rounded-3xl p-8 border border-transparent">
             <div className="absolute top-6 right-8 flex items-center gap-2">
               <span className="text-xs font-medium text-four">Popular</span>
               <div className="w-2 h-2 rounded-full bg-third"></div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-lg font-medium mb-2 text-secondary">HR Master</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-normal text-secondary">$34</span>
                <span className="text-xs text-four flex flex-col items-start leading-tight">
                  <span>/ month (USD)</span>
                  <span>$408 billed yearly</span>
                </span>
              </div>
              <p className="text-xs text-four mt-4 px-2 leading-relaxed">
                Maximize team performance with premium tools and full customization options, perfect for larger organizations
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-third flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
               <button className="px-8 py-3 bg-primary rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow text-secondary">
                 Start 7-days Free Trial
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}