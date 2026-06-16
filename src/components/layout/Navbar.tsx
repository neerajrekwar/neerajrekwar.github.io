
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b-2 border-black">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-12 w-12 border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors">
          <span className="font-headline font-bold text-xl">GS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="font-headline font-medium uppercase text-sm tracking-widest hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#projects" className="font-headline font-medium uppercase text-sm tracking-widest hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#packages" className="font-headline font-medium uppercase text-sm tracking-widest hover:text-primary transition-colors">
            Packages
          </Link>
          <Link href="/#contact" className="font-headline font-medium uppercase text-sm tracking-widest hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Button 
          variant="default" 
          className="rounded-none border-2 border-black bg-primary hover:bg-accent text-white font-headline font-bold uppercase py-6 px-8 h-12"
        >
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
