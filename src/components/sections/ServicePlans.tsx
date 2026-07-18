
"use client";

import { useState, useEffect } from "react";
import { Check, Zap, Shield, HardHat, ArrowRight, Loader2, Cpu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'INR';

const CURRENCIES: Record<CurrencyCode, { symbol: string, label: string }> = {
  USD: { symbol: "$", label: "USD" },
  EUR: { symbol: "€", label: "EUR" },
  GBP: { symbol: "£", label: "GBP" },
  JPY: { symbol: "¥", label: "JPY" },
  INR: { symbol: "₹", label: "INR" }
};

const INITIAL_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 150,
  INR: 83
};

interface Plan {
  name: string;
  basePrice: number | null;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  icon: 'shield' | 'zap' | 'hardhat';
}

const SERVICE_PLANS: Plan[] = [
  {
    name: "Architectural Audit",
    basePrice: 999,
    period: "/audit",
    description: "Deep dive inspection of system bottlenecks and structural security vulnerabilities.",
    features: [
      "Dependency Graph Analysis",
      "Query Performance Profiling",
      "Security Perimeter Scan",
      "Refactoring Roadmap",
      "Full Technical Debt Report"
    ],
    highlight: false,
    icon: 'shield'
  },
  {
    name: "Engineering Sprint",
    basePrice: 2499,
    period: "/sprint",
    description: "Dedicated high-velocity development for critical features or infrastructure upgrades.",
    features: [
      "Strictly Typed Integration",
      "Real-time Data Architecture",
      "Cloud Infrastructure Setup",
      "API Design & Documentation",
      "Automated Testing Suite"
    ],
    highlight: true,
    icon: 'zap'
  },
  {
    name: "Custom Engineering",
    basePrice: null,
    period: "",
    description: "Bespoke full-scale engineering solutions for high-stakes enterprise projects.",
    features: [
      "Custom Module Development",
      "Legacy System Migration",
      "Distributed Systems Design",
      "On-site Deployment Protocol",
      "Full Source Ownership"
    ],
    highlight: false,
    icon: 'hardhat'
  }
];

const MAINTENANCE_PLANS: Plan[] = [
  {
    name: "Standard Patching",
    basePrice: 499,
    period: "/mo",
    description: "Baseline maintenance ensuring dependencies remain secure and updated.",
    features: [
      "Weekly Dependency Updates",
      "Automated Security Alerts",
      "Basic Uptime Monitoring",
      "Standard Backup Protocol",
      "8-Hour Response SLA"
    ],
    highlight: false,
    icon: 'shield'
  },
  {
    name: "Active Support",
    basePrice: 1299,
    period: "/mo",
    description: "Proactive management and performance hardening for scaling production environments.",
    features: [
      "Proactive Resource Scaling",
      "Database Optimization Runs",
      "Encrypted Off-site Backups",
      "4-Hour Critical Response",
      "Quarterly Performance Audit"
    ],
    highlight: true,
    icon: 'zap'
  },
  {
    name: "Mission Critical",
    basePrice: 2999,
    period: "/mo",
    description: "Zero-downtime engineering support for systems where failure is not an option.",
    features: [
      "1-Hour Priority Response",
      "Real-time Anomaly Detection",
      "Disaster Recovery Drills",
      "Dedicated Dev Ops Liaison",
      "Unlimited Incident Support"
    ],
    highlight: false,
    icon: 'hardhat'
  }
];

export function ServicePlans() {
  const [activeTab, setActiveTab] = useState<'services' | 'maintenance'>('services');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(INITIAL_RATES);
  const [isLoadingRates, setIsLoadingRates] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchRates() {
      setIsLoadingRates(true);
      try {
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,INR');
        if (!response.ok) throw new Error('API Response was not OK');
        const data = await response.json();
        if (isMounted && data && data.rates) {
          setRates({ USD: 1, ...data.rates });
        }
      } catch (error) {
        console.warn("Currency synchronization skipped. Using internal baseline rates.", error);
      } finally {
        if (isMounted) setIsLoadingRates(false);
      }
    }
    fetchRates();
    return () => { isMounted = false; };
  }, []);

  const formatPrice = (basePrice: number | null) => {
    if (basePrice === null) return "Custom";
    const rate = rates[currency] || INITIAL_RATES[currency];
    const converted = Math.round(basePrice * rate);
    return `${CURRENCIES[currency].symbol}${converted.toLocaleString()}`;
  };

  const currentPlans = activeTab === 'services' ? SERVICE_PLANS : MAINTENANCE_PLANS;

  return (
    <section id="service-plans" className="py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 border-l-8 border-black pl-8 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">
                Engineering <span className="text-primary">Registries</span>
              </h2>
              {isLoadingRates && <Loader2 className="w-6 h-6 animate-spin text-primary" />}
            </div>
            <p className="text-muted-foreground max-w-2xl font-body">
              Select an operational tier to initialize deployment or long-term structural maintenance.
              Synchronizing with global economic registries for real-time pricing fidelity.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Protocol Toggle */}
            <Tabs 
              defaultValue="services" 
              className="w-full md:w-auto"
              onValueChange={(val) => setActiveTab(val as any)}
            >
              <TabsList className="h-14 p-1 bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TabsTrigger 
                  value="services" 
                  className="data-[state=active]:bg-black data-[state=active]:text-white h-full px-6 rounded-none font-headline font-bold uppercase text-xs"
                >
                  <Cpu className="w-4 h-4 mr-2" /> Service Protocols
                </TabsTrigger>
                <TabsTrigger 
                  value="maintenance" 
                  className="data-[state=active]:bg-black data-[state=active]:text-white h-full px-6 rounded-none font-headline font-bold uppercase text-xs"
                >
                  <Wrench className="w-4 h-4 mr-2" /> Maintenance
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Currency Selector */}
            <div className="flex p-1 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-14 items-center">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`h-full px-4 font-headline font-bold text-xs transition-all ${
                    currency === code 
                      ? "bg-black text-white" 
                      : "bg-white text-black hover:bg-muted"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black bg-black overflow-hidden">
          {currentPlans.map((plan, i) => (
            <div 
              key={plan.name} 
              className={`p-8 md:p-12 flex flex-col justify-between transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
                plan.highlight 
                  ? "bg-primary text-white" 
                  : "bg-white text-black"
              } ${i !== currentPlans.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2 border-black" : ""}`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 border-2 border-black flex items-center justify-center ${plan.highlight ? "bg-white text-black" : "bg-black text-white"}`}>
                    {plan.icon === 'shield' ? <Shield className="w-6 h-6" /> : plan.icon === 'zap' ? <Zap className="w-6 h-6" /> : <HardHat className="w-6 h-6" />}
                  </div>
                  {plan.highlight && (
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-headline font-bold uppercase tracking-widest">
                      Primary Path
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-headline font-bold uppercase mb-2 leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-headline font-bold">{formatPrice(plan.basePrice)}</span>
                  <span className="text-xs font-headline uppercase opacity-60">{plan.period}</span>
                </div>
                
                <p className="font-body text-sm mb-8 opacity-80 leading-relaxed italic h-12">
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
                Initiate Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
