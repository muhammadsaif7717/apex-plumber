"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocation } from "@/context/LocationContext";
import { ApexLogo } from "./ApexLogo";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Calculator,
  Zap,
} from "lucide-react";

export function ApexNavbar() {
  const {
    currentLocation,
    selectedStateKey,
    setSelectedStateKey,
    allLocations,
    openBookingModal,
  } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Emergency", href: "#emergency-dispatch" },
    { name: "Services", href: "#services" },
    { name: "Repair Calculator", href: "#cost-calculator" },
    { name: "HD Video Scope", href: "#services" },
    { name: "Process", href: "#workflow" },
    { name: "Reviews", href: "#reviews" },
    { name: "Service Areas", href: "#coverage" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Emergency Utility Strip */}
      <div className="bg-slate-950 text-slate-200 border-b border-slate-800 text-xs py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Left: 24/7 Arrival & Fleet Telemetry */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                24/7 Live Dispatch
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>
                Avg Arrival:{" "}
                <strong className="text-white font-mono">
                  {currentLocation.averageArrival}
                </strong>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentLocation.licenseNumber}</span>
            </div>
          </div>

          {/* Right: State Switcher & Direct Click-to-Call Hotline */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            {/* Real-time State & City Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1 rounded border border-slate-700 transition focus-visible:ring-2 focus-visible:ring-orange-500 text-[11px] font-medium"
                aria-label="Switch service state and metro area"
                aria-expanded={stateDropdownOpen}
              >
                <MapPin className="w-3 h-3 text-orange-400" />
                <span>
                  {currentLocation.state} ({currentLocation.primaryCity})
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {stateDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setStateDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 text-slate-800 text-xs">
                    <div className="px-3 py-1.5 border-b border-slate-100 font-semibold text-[11px] text-slate-500 uppercase tracking-wider">
                      Select Service Market
                    </div>
                    {Object.values(allLocations).map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          setSelectedStateKey(loc.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 transition ${
                          loc.id === selectedStateKey
                            ? "bg-blue-50/70 font-semibold text-blue-900 border-l-2 border-blue-600"
                            : "text-slate-700"
                        }`}
                      >
                        <div>
                          <div className="font-medium text-slate-900">
                            {loc.state} ({loc.primaryCity})
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            {loc.licenseNumber}
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-medium">
                          {loc.averageArrival}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Emergency Phone Hotline */}
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition group focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
              aria-label={`Call local emergency plumber at ${currentLocation.phone}`}
            >
              <div className="p-1 rounded bg-orange-500 text-white group-hover:scale-105 transition shadow-sm">
                <PhoneCall className="w-3 h-3" />
              </div>
              <span className="font-mono text-xs sm:text-sm tracking-tight text-white font-extrabold">
                {currentLocation.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Translucent Frosted Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5"
            : "bg-white border-b border-slate-200 py-3.5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-0.5"
            aria-label="Apex Plumber Home"
          >
            <ApexLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "sameday" })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-600" />
              <span>Instant Estimate</span>
            </button>

            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm shadow-orange-600/20 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Dispatch Plumber</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="sm:hidden p-2 rounded-lg bg-orange-500 text-white font-bold"
              aria-label="Call Dispatch"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            {/* Metro Alert Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4 text-xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-slate-900">
                  {currentLocation.companyName}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">
                  {currentLocation.activeVans} Vans On Duty
                </span>
              </div>
              <div className="text-slate-600 text-[11px]">
                {currentLocation.specialtyTag}
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal({ urgency: "sameday" });
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300"
              >
                <Calculator className="w-4 h-4 text-slate-600" />
                <span>Calculate Repair Cost</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-md shadow-orange-600/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {currentLocation.phone} (24/7)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
