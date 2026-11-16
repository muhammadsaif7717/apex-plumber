"use client";

import React, { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Expose lenis instance to window for clean navbar coordination
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Sync window anchor link clicks with Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.hash && target.hash.startsWith("#") && target.origin === window.location.origin) {
        if (target.hash === "#" || target.hash === "#hero") {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.1 });
          return;
        }
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: 0, duration: 1.1 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
