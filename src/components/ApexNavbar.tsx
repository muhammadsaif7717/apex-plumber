"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocation } from "@/context/LocationContext";
import { ApexLogo } from "./ApexLogo";
import {
  PhoneCall,
  MapPin,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
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
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Estimator", href: "#cost-calculator" },
    { name: "Reviews", href: "#reviews" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Plumco Topbar */}
      <div className="bg-[#162132] text-slate-300 text-xs py-2 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Left Info: Address & Email */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-[#0052da]" />
              <span className="truncate max-w-[240px] sm:max-w-none">
                {currentLocation.localAddress}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-[#0052da]" />
              <span>dispatch@apexplumber.com</span>
            </div>
          </div>

          {/* Right Info: 24/7 Hours & State Switcher */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>
                Mon - Sun: <strong className="text-white">24/7 Emergency Dispatch</strong>
              </span>
            </div>

            {/* State & City Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                className="flex items-center gap-1.5 bg-[#253041] hover:bg-slate-700 text-white px-2.5 py-1 rounded-md border border-slate-700 transition text-[11px] font-semibold"
                aria-label="Switch contractor state market"
                aria-expanded={stateDropdownOpen}
              >
                <MapPin className="w-3 h-3 text-[#0052da]" />
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
                    <div className="px-3 py-1.5 border-b border-slate-100 font-bold text-[11px] text-[#253041] uppercase tracking-wider">
                      Select Regional Market
                    </div>
                    {Object.values(allLocations).map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          setSelectedStateKey(loc.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-blue-50 transition ${
                          loc.id === selectedStateKey
                            ? "bg-blue-50 font-bold text-[#0052da] border-l-4 border-[#0052da]"
                            : "text-slate-700"
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-slate-900">
                            {loc.state} ({loc.primaryCity})
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            {loc.licenseNumber}
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-semibold font-mono">
                          {loc.averageArrival}
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

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled ? "py-2.5 bg-white/98 backdrop-blur-xs" : "py-4 bg-white"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="rounded-lg p-0.5" aria-label="Apex Plumber Home">
            <ApexLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-bold text-[#253041]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0052da] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Phone Hotline Box + Book Online Button */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            {/* Plumco Hotline Box */}
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="flex items-center gap-3 group"
              aria-label={`Call Anytime at ${currentLocation.phone}`}
            >
              <div className="w-11 h-11 rounded-full bg-blue-50 group-hover:bg-[#0052da] text-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                <PhoneCall className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-none">
                  Call Anytime
                </span>
                <span className="text-sm font-extrabold text-[#253041] group-hover:text-[#0052da] transition font-mono mt-0.5">
                  {currentLocation.phone}
                </span>
              </div>
            </a>

            {/* Book Online Primary Button */}
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "sameday" })}
              className="btn-plumco text-sm font-bold shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Online</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="sm:hidden p-2.5 rounded-lg bg-[#0052da] text-white"
              aria-label="Call Now"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slide-down */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-bold text-[#253041] hover:bg-blue-50 hover:text-[#0052da] rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal({ urgency: "sameday" });
                }}
                className="w-full btn-plumco py-3 text-sm font-bold"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full btn-plumco-dark py-3 text-sm font-bold text-center"
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
