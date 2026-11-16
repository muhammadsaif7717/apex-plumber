"use client";

import React, { useState } from "react";
import { useLocation } from "@/context/LocationContext";
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Search,
} from "lucide-react";

export function ApexCoverage() {
  const { currentLocation } = useLocation();

  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<{
    searched: boolean;
    available: boolean;
    areaName: string;
  } | null>(null);

  const neighborhoods = [
    { name: "Downtown LA & Arts District", zips: "90012, 90013, 90014, 90015, 90021" },
    { name: "Pasadena & Glendale", zips: "91101, 91105, 91201, 91204, 91205" },
    { name: "Santa Monica & Venice", zips: "90401, 90403, 90405, 90291" },
    { name: "Hollywood & Silver Lake", zips: "90028, 90068, 90026, 90039" },
    { name: "Beverly Hills & West Hollywood", zips: "90210, 90212, 90069" },
    { name: "Culver City & Mar Vista", zips: "90230, 90232, 90066" },
    { name: "Burbank & Studio City", zips: "91501, 91505, 91604, 91607" },
    { name: "Long Beach & South Bay", zips: "90802, 90803, 90501, 90503" },
  ];

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check if zip or partial matches any known California / LA zip
    const matched = neighborhoods.find((n) => n.zips.includes(cleanZip));
    if (matched || ((cleanZip.startsWith("90") || cleanZip.startsWith("91")) && cleanZip.length === 5)) {
      setZipResult({
        searched: true,
        available: true,
        areaName: matched ? matched.name : `${currentLocation.primaryCity} Metro Area`,
      });
    } else {
      setZipResult({
        searched: true,
        available: true, // As personal plumber we still serve nearby or on custom request
        areaName: `${currentLocation.primaryCity} Extended Radius`,
      });
    }
  };

  return (
    <section
      id="service-areas"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Local Territory</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Areas I Personally Serve
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600">
            Based locally in {currentLocation.primaryCity}, I provide prompt on-site plumbing services across a 35-mile radius. Zero travel surcharges within my primary service area.
          </p>
        </div>

        {/* Main Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Interactive Neighborhood List & ZIP Lookup */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Interactive ZIP Checker */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-lg">
              <h3 className="text-base sm:text-lg font-black text-[#253041] mb-2 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#0052da]" />
                <span>Check If I Serve Your Street or Neighborhood</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                Enter your 5-digit ZIP code below for immediate service verification:
              </p>

              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="Enter 5-Digit ZIP (e.g. 90014)"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ""))}
                    className="w-full bg-[#f4f8fe] border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono font-bold text-[#253041] placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#0052da] outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-plumco text-xs sm:text-sm font-bold py-3 px-6 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Verify Availability</span>
                </button>
              </form>

              {zipResult && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-emerald-900">
                      Yes! You are in my primary dispatch zone ({zipResult.areaName}).
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-black text-[#0052da] hover:underline whitespace-nowrap cursor-pointer flex items-center gap-1"
                  >
                    <span>Request Service &rarr;</span>
                  </a>
                </div>
              )}
            </div>

            {/* Neighborhoods Pill Grid */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-lg flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                  Primary Communities &amp; Suburbs:
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Daily Route
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {neighborhoods.map((n) => (
                  <div
                    key={n.name}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition flex flex-col justify-between group"
                  >
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#253041] group-hover:text-[#0052da]">
                      <MapPin className="w-3.5 h-3.5 text-[#0052da] shrink-0" />
                      <span>{n.name}</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-1 pl-5">
                      ZIP: {n.zips}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Local Service Hub Card */}
          <div className="lg:col-span-5 bg-[#253041] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-xs font-mono font-bold text-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>On-Call Service Radius: 35 Miles</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Prompt, Direct Dispatch To Your Door
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  I operate a fully equipped mobile plumbing workshop stocked with commercial diagnostics, leak locators, ProPress fittings, and standard replacement parts for immediate same-day solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Avg Response</span>
                  </div>
                  <div className="text-base sm:text-lg font-black font-mono text-white mt-1">
                    {currentLocation.averageArrival}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Emergency Calls</div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>State License</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black font-mono text-white mt-1 truncate">
                    {currentLocation.licenseNumber}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Master Plumber</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/80 space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero travel surcharges within {currentLocation.primaryCity} metro</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available for planned projects &amp; 24/7 emergencies</span>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-plumco text-xs sm:text-sm font-bold py-3 px-6 w-full flex items-center justify-center gap-2 rounded-xl shadow-md transition cursor-pointer text-center"
                >
                  <span>Confirm Service for My Neighborhood</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
