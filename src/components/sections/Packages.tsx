
"use client";

import { Terminal, Copy, Check, Download, Package as PackageIcon } from "lucide-react";
import { useState } from "react";

const PACKAGES = [
  {
    name: "@gridsys/geometric-ui",
    description: "A headless UI library for building strictly rectangular interfaces.",
    version: "v1.4.2",
    downloads: "14k/mo",
    install: "npm install @gridsys/geometric-ui"
  },
  {
    name: "@gridsys/stark-auth",
    description: "Geometric identity verification for high-security applications.",
    version: "v2.0.1",
    downloads: "8k/mo",
    install: "yarn add @gridsys/stark-auth"
  }
];

export function Packages() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="packages" className="py-24 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Open-Source Registry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Public modules distributed via NPM and GitHub. Engineered for maximum 
            portability and zero dependency bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className="border-2 border-black p-8 bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-primary text-white">
                      <PackageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-headline font-bold">{pkg.name}</h3>
                      <div className="flex items-center gap-2 text-xs font-headline uppercase font-medium text-muted-foreground">
                        <span>{pkg.version}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {pkg.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="font-body text-black/70 italic border-l-4 border-black pl-4">
                  "{pkg.description}"
                </p>

                <div className="relative group">
                  <div className="bg-black text-white p-4 font-code text-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span>{pkg.install}</span>
                    </div>
                    <button 
                      onClick={() => handleCopy(pkg.install)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      {copied === pkg.install ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 border-2 border-black py-2 uppercase font-headline font-bold text-xs hover:bg-black hover:text-white transition-colors">
                  Documentation
                </button>
                <button className="flex-1 border-2 border-black py-2 uppercase font-headline font-bold text-xs hover:bg-black hover:text-white transition-colors">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
