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

const NAV_LINKS = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Why Me", href: "#why-hire-me", id: "why-hire-me" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Reviews", href: "#reviews", id: "reviews" },
  { name: "Tips & Blog", href: "#blog", id: "blog" },
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

  // Active ScrollSpy implementation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sectionIds = NAV_LINKS.map((l) => l.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200">
      {/* Streamlined Minimal Topbar */}
      <div className="bg-[#162132] text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Single-line Clean Location & Personal License */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#0052da] shrink-0" />
              <strong className="text-white">{currentLocation.primaryCity}, {currentLocation.stateCode}</strong>
            </span>
            <span className="text-slate-600 hidden xs:inline">•</span>
            <span className="hidden sm:flex items-center gap-1 font-mono text-slate-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{currentLocation.licenseNumber}</span>
            </span>
          </div>

          {/* Right: State Switcher & Response Time */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="hidden md:inline text-slate-400 font-mono text-[11px]">
              Avg Arrival: <strong className="text-emerald-400 font-bold">{currentLocation.averageArrival}</strong>
            </span>

            {/* Quick State Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                className="flex items-center gap-1 bg-[#253041] hover:bg-slate-700 text-white px-2 py-0.5 rounded text-[11px] font-semibold border border-slate-700 transition"
                aria-label="Select market"
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
                  <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-1 z-50 text-slate-800 text-xs">
                    {Object.values(allLocations).map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          setSelectedStateKey(loc.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-blue-50 transition ${
                          loc.id === selectedStateKey
                            ? "bg-blue-50 font-bold text-[#0052da]"
                            : "text-slate-700"
                        }`}
                      >
                        <span>{loc.primaryCity}, {loc.stateCode}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{loc.licenseNumber}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Frosted Fixed Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          scrolled
            ? "py-2 sm:py-2.5 shadow-md border-slate-200"
            : "py-3 sm:py-3.5 border-slate-100"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Dave Vance Home">
            <ApexLogo className="h-9 sm:h-10" />
          </Link>

          {/* Desktop Navigation with Active ScrollSpy Highlighting */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-all rounded-md ${
                    isActive
                      ? "text-[#0052da] bg-blue-50/80 font-extrabold"
                      : "text-[#253041] hover:text-[#0052da] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0052da] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Direct Call & Hire Dave Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Call Button */}
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#0052da] text-xs sm:text-sm font-extrabold font-mono transition"
              aria-label={`Call Dave directly at ${currentLocation.phone}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{currentLocation.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Hire Dave CTA */}
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "emergency" })}
              className="btn-plumco text-xs sm:text-sm font-bold py-2 px-3.5 sm:px-4 shadow-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Hire Dave</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 mb-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-bold rounded-lg transition flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50 text-[#0052da] font-extrabold"
                        : "text-[#253041] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0052da]" />}
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
                <span>Call Dave: {currentLocation.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal({ urgency: "emergency" });
                }}
                className="w-full btn-plumco py-2.5 text-xs font-bold flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Direct / Hire Dave</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
