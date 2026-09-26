"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavbarWeather } from "@/components/layout/NavbarWeather";
import { useActiveScreenLocation } from "@/hooks/use-active-screen-location";
import { Menu, X, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "/about", sectionId: "about" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Packages", href: "/packages", sectionId: "packages" },
  { name: "Contact", href: "/contact", sectionId: "contact" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeLocation = useActiveScreenLocation();
  const pathname = usePathname();

  // Smart Sticky Navbar: Hide on scroll down, show on scroll up, always show at the top of the page
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // Subtle elevation shadow when scrolled down from the very top
      setIsScrolled(currentScrollY > 10);

      // Always show navbar if near the top of the page
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;

        // Use a 5px threshold to prevent jitter on tiny scroll increments
        if (diff > 5) {
          // Scrolling DOWN -> smoothly hide navbar
          setIsVisible(false);
        } else if (diff < -5) {
          // Scrolling UP -> smoothly reveal navbar
          setIsVisible(true);
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and ensure navbar is visible
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
  }, [pathname]);

  const shouldShowNavbar = isVisible || isMobileMenuOpen;

  const isLinkActive = (link: typeof NAV_LINKS[number]) => {
    if (pathname === link.href) return true;
    if (pathname === "/" && link.href.startsWith("/#") && activeLocation.id === link.sectionId) {
      return true;
    }
    return false;
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b-2 border-black transition-all duration-300 ease-in-out",
        shouldShowNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        isScrolled
          ? "shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          : "shadow-none"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Logo & Screen Location Radar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="h-12 w-12 border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0"
          >
            <span className="font-headline font-bold text-lg">NJR</span>
          </Link>

          {/* Screen Location Telemetry (Desktop / Tablet) */}
          <div 
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-zinc-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-mono"
            title="Active position indicator on current viewport"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-1">
              <Crosshair className="w-3 h-3 text-primary" />
              LOC:
            </span>
            <span className="text-black font-extrabold uppercase tracking-wide">
              [{activeLocation.label}]
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links with Active Section Indicator */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-headline uppercase text-xs tracking-widest px-3.5 py-1.5 transition-all",
                  active
                    ? "border-2 border-black bg-black text-white font-bold shadow-[2px_2px_0px_0px_rgba(92,121,121,1)]"
                    : "border-2 border-transparent font-medium hover:border-black hover:bg-zinc-100 text-black"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Geolocation & Weather Widget + CTA (Desktop/Tablet) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Geo & Atmospheric Weather Widget */}
          <NavbarWeather isMobileCompact={false} />

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden sm:inline-block">
            <Button
              variant="default"
              className="rounded-none border-2 border-black bg-primary hover:bg-accent text-white font-headline font-bold uppercase py-5 px-6 h-11 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
            >
              Hire Me
            </Button>
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-11 w-11 border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white px-4 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-[0_8px_20px_rgba(0,0,0,0.12)] max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Screen location badge on mobile */}
          <div className="flex items-center justify-between border-2 border-black bg-zinc-50 p-2.5 text-xs font-mono">
            <span className="text-zinc-500 font-bold uppercase flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              SCREEN POSITION:
            </span>
            <span className="font-extrabold text-black uppercase">
              [{activeLocation.label}]
            </span>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-headline uppercase text-xs tracking-wider p-3 text-center border-2 border-black transition-all",
                    active
                      ? "bg-black text-white font-bold shadow-[2px_2px_0px_0px_rgba(92,121,121,1)]"
                      : "bg-white text-black font-semibold hover:bg-zinc-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block"
          >
            <Button
              variant="default"
              className="w-full rounded-none border-2 border-black bg-primary hover:bg-accent text-white font-headline font-bold uppercase py-6 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Hire Me
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
