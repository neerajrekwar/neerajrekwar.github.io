"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface ActiveScreenLocation {
  id: string;
  label: string;
  type: "route" | "section";
}

const SECTION_IDS = [
  { id: "about", label: "HERO" },
  { id: "projects", label: "PROJECTS" },
  { id: "packages", label: "PACKAGES" },
  { id: "contact", label: "CONTACT" },
];

export function useActiveScreenLocation(): ActiveScreenLocation {
  const pathname = usePathname();
  const [activeLocation, setActiveLocation] = useState<ActiveScreenLocation>(() => {
    if (pathname === "/about") return { id: "about", label: "ABOUT", type: "route" };
    if (pathname === "/packages") return { id: "packages", label: "PACKAGES", type: "route" };
    if (pathname === "/contact") return { id: "contact", label: "CONTACT", type: "route" };
    return { id: "home", label: "HOME", type: "section" };
  });

  useEffect(() => {
    // If not homepage, determine from pathname
    if (pathname === "/about") {
      setActiveLocation({ id: "about", label: "ABOUT", type: "route" });
      return;
    }
    if (pathname === "/packages") {
      setActiveLocation({ id: "packages", label: "PACKAGES", type: "route" });
      return;
    }
    if (pathname === "/contact") {
      setActiveLocation({ id: "contact", label: "CONTACT", type: "route" });
      return;
    }

    // On homepage, track scroll position of sections
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for detection

      let currentSection = SECTION_IDS[0];
      for (const section of SECTION_IDS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = section;
          }
        }
      }

      setActiveLocation({
        id: currentSection.id,
        label: currentSection.label,
        type: "section",
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return activeLocation;
}
