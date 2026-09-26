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
  const [isVisible, setIsVisible] = useState(false);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeLocation = useActiveScreenLocation();
  const pathname = usePathname();

  // Scroll listener: Hide when user is in the top 200px (up 200px), show when scrolled down > 200px
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Proximity trigger: hovering at the very top of screen (clientY <= 24) reveals navbar even at scrollY <= 200
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY <= 200) {
        if (e.clientY <= 24) {
          setIsTopHovered(true);
        } else if (e.clientY > 90) {
          setIsTopHovered(false);
        }
      } else {
        setIsTopHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const shouldShowNavbar = isVisible || isTopHovered || isMobileMenuOpen;

  const isLinkActive = (link: typeof NAV_LINKS[number]) => {
    if (pathname === link.href) return true;
    if (pathname === "/" && activeLocation.id === link.sectionId) return true;
    return false;
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-md border-b-2 border-black transition-all duration-300 ease-in-out",
          shouldShowNavbar
            ? "translate-y-0 opacity-100 shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
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
          <div className="md:hidden border-t-2 border-black bg-white px-4 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200">
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
    </>

);
}
