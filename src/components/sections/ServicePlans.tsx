
"use client";

import { Check, Zap, Shield, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Standard Maintenance",
    price: "$499",
    period: "/mo",
    description: "Essential upkeep for production systems ensuring uptime and security.",
    features: [
      "Monthly Security Audits",
      "Dependency Hardening",
      "8-Hour Response Time",
      "Bug Fixes & Patching",
      "Basic Performance Monitoring"
    ],
    highlight: false
  },
  {
    name: "Architectural Support",
    price: "$1,499",
    period: "/mo",
    description: "Deep technical partnership for scaling infrastructure and complex logic.",
    features: [
      "Standard Maintenance Included",
      "4-Hour Critical Response",
      "Cloud Infrastructure Scaling",
      "Code Reviews & Standards",
      "Custom Tooling Development"
    ],
    highlight: true
  },
  {
    name: "Custom Engineering",
    price: "Custom",
    period: "",
    description: "Full-scale dedicated engineering for high-stakes digital infrastructure.",
    features: [
      "Unlimited Architecture Consulting",
      "1-Hour Priority Response",
      "Dedicated Dev Environment",
      "On-site Deployment Support",
      "Full System Ownership"
    ],
    highlight: false
  }
];

export function ServicePlans() {
  return (
    <section id="service-plans" className="py-24">
      <div className="container mx-auto">
        <div className="mb-16 border-l-8 border-black pl-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">
            Service <span className="text-primary">Protocols</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl font-body">
            Professional engagement models for long-term technical stability and 
            architectural integrity. Choose your operational tier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black bg-black">
          {PLANS.map((plan, i) => (
            <div 
              key={plan.name} 
              className={`p-8 md:p-12 flex flex-col justify-between transition-all ${
                plan.highlight 
                  ? "bg-primary text-white" 
                  : "bg-white text-black"
              } ${i !== PLANS.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2 border-black" : ""}`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 border-2 border-black flex items-center justify-center ${plan.highlight ? "bg-white text-black" : "bg-black text-white"}`}>
                    {i === 0 ? <Shield className="w-6 h-6" /> : i === 1 ? <Zap className="w-6 h-6" /> : <HardHat className="w-6 h-6" />}
                  </div>
                  {plan.highlight && (
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-headline font-bold uppercase tracking-widest">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-headline font-bold uppercase mb-2 leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-headline font-bold">{plan.price}</span>
                  <span className="text-xs font-headline uppercase opacity-60">{plan.period}</span>
                </div>
                
                <p className="font-body text-sm mb-8 opacity-80 leading-relaxed italic">
                  "{plan.description}"
                </p>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 border-2 ${plan.highlight ? "border-white bg-white text-primary" : "border-black bg-black text-white"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-body font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlight ? "secondary" : "default"}
                className={`w-full rounded-none border-2 border-black font-headline font-bold uppercase py-6 h-auto group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  plan.highlight ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-primary"
                }`}
              >
                Initiate Tier {i + 1} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
