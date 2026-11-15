"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocation } from "@/context/LocationContext";
import { ApexLogo } from "./ApexLogo";
import {
  PhoneCall,
  MapPin,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
  ShieldCheck,
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
    selectedStateKey,
    setSelectedStateKey,
    allLocations,
    openBookingModal,
  } = useLocation();

  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
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
          const scrollPosition = window.scrollY + 160;

          let current = "hero";
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPosition) {
              current = sectionIds[i];
              break;
            }
          }
          if (window.scrollY < 200) {
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 88; // Height of fixed navbar
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
      {/* 1. Minimal Clean Top Utility Bar (Single-Line Guarantee) */}
      <div className="bg-[#162132] text-slate-300 text-[11px] sm:text-xs py-1 px-3 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Location & License (Strictly Single Line) */}
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
            <span className="flex items-center gap-1 text-slate-300 shrink-0 font-medium">
              <MapPin className="w-3 h-3 text-[#0052da] shrink-0" />
              <strong className="text-white font-bold whitespace-nowrap">
                {currentLocation.primaryCity}, {currentLocation.stateCode}
              </strong>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1 font-mono text-slate-300 shrink-0">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">{currentLocation.licenseNumber}</span>
            </span>
          </div>

          {/* Right: Dispatch Speed & State Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
            <span className="hidden md:inline text-slate-400 font-mono text-[11px] whitespace-nowrap">
              Arrival: <strong className="text-emerald-400 font-bold">{currentLocation.averageArrival}</strong>
            </span>

            {/* Quick State Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                className="flex items-center gap-1 bg-[#253041] hover:bg-slate-700 text-white px-2 py-0.5 rounded text-[11px] font-semibold border border-slate-700 transition cursor-pointer whitespace-nowrap"
                aria-label="Switch service location"
              >
                <span>{currentLocation.stateCode}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {stateDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setStateDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1 w-52 bg-white rounded-lg shadow-2xl border border-slate-200 py-1 z-50 text-slate-800 text-xs">
                    <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase border-b border-slate-100">
                      Select Market Area
                    </div>
                    {Object.values(allLocations).map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          setSelectedStateKey(loc.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-blue-50 transition cursor-pointer ${
                          loc.id === selectedStateKey
                            ? "bg-blue-50 font-bold text-[#0052da]"
                            : "text-slate-700"
                        }`}
                      >
                        <span className="whitespace-nowrap font-medium">
                          {loc.primaryCity}, {loc.stateCode}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {loc.licenseNumber}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Minimal Navigation Bar */}
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
            {/* Quick Call Button */}
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="inline-flex items-center gap-1 px-2 xs:px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#0052da] text-xs sm:text-sm font-extrabold font-mono transition whitespace-nowrap"
              aria-label={`Call Apex Plumber at ${currentLocation.phone}`}
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">
                {currentLocation.phone}
              </span>
              <span className="sm:hidden text-xs font-bold">Call</span>
            </a>

            {/* Book Apex Plumber Primary Button (Visible on screens >= 640px or sm) */}
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "emergency" })}
              className="hidden! sm:inline-flex! btn-plumco text-xs sm:text-sm font-bold py-1.5 sm:py-2 px-3 xs:px-3.5 sm:px-4 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Book Service</span>
            </button>

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

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 mb-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-3 py-2 text-sm font-bold rounded-lg transition flex items-center justify-between ${
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

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full btn-plumco-dark py-2.5 text-xs font-bold text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Apex Plumber: {currentLocation.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal({ urgency: "emergency" });
                }}
                className="w-full btn-plumco py-2.5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Direct / Hire Apex</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
