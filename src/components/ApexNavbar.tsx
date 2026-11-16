"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocation } from "@/context/LocationContext";
import { ApexLogo } from "./ApexLogo";
import { WhatsAppIcon } from "./ApexWhatsAppWidget";
import {
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Why Me", href: "#why-hire-me", id: "why-hire-me" },
  { name: "Process", href: "#process", id: "process" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Reviews", href: "#reviews", id: "reviews" },
  { name: "Areas", href: "#service-areas", id: "service-areas" },
  { name: "FAQ", href: "#faq", id: "faq" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function ApexNavbar() {
  const {
    currentLocation,
    openBookingModal,
  } = useLocation();

  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized non-flickering Active ScrollSpy implementation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          const sectionIds = NAV_LINKS.map((l) => l.id);
          const scrollPosition = window.scrollY + 120;

          let current = "hero";
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPosition) {
              current = sectionIds[i];
              break;
            }
          }
          if (window.scrollY < 160) {
            current = "hero";
          }
          setActiveSection((prev) => (prev !== current ? current : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 70; // Height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          scrolled
            ? "py-2 sm:py-2.5 shadow-md border-slate-200/90"
            : "py-2.5 sm:py-3.5 border-slate-100"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link
            href="/#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="shrink-0 flex items-center"
            aria-label="Apex Plumber Home"
          >
            <ApexLogo className="h-8 xs:h-9 sm:h-10" />
          </Link>

          {/* Desktop Navigation Links with Active ScrollSpy Highlighting */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold transition-all rounded-md whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#0052da] bg-blue-50/90 font-black"
                      : "text-[#253041] hover:text-[#0052da] hover:bg-slate-50/80"
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#0052da] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp Direct Chat Button (Desktop) */}
            <a
              href="https://wa.me/8801319630516"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#075E54] hover:text-[#064e46] text-xs sm:text-sm font-bold border border-emerald-200/80 transition shadow-xs"
              aria-label="Chat with Apex Plumber on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Direct Call Now Button */}
            <a
              href="tel:+8801319630516"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#0052da] hover:bg-[#0042b3] text-white text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition whitespace-nowrap"
              aria-label="Call Apex Plumber Now"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 xs:p-2 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Blurred Backdrop Overlay (Click outside to close) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Right-to-Left Slide-in Mobile Drawer (75% Width of Main Screen) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 h-[100dvh] w-[75vw] sm:w-[320px] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden border-l border-slate-100 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <ApexLogo className="h-8" showSubtitle={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Navigation Links (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-between ${
                  isActive
                    ? "bg-blue-50 text-[#0052da] font-extrabold"
                    : "text-[#253041] hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#0052da]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Drawer Footer Call & WhatsApp Actions */}
        <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50/70">
          <a
            href="tel:+8801319630516"
            className="w-full btn-plumco py-2.5 text-xs font-bold text-center flex items-center justify-center gap-2 rounded-xl shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/8801319630516"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white py-2.5 text-xs font-bold text-center flex items-center justify-center gap-2 rounded-xl shadow-xs transition"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </header>
  );
}
