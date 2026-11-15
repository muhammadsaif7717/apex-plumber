"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import {
  CalendarCheck,
  PhoneCall,
  Star,
  Clock,
  UserCheck,
  ChevronDown,
} from "lucide-react";

export function ApexHero() {
  const { currentLocation, openBookingModal } = useLocation();

  const scrollToAbout = () => {
    const el = document.getElementById("features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-28 pb-12 flex flex-col justify-center bg-gradient-to-b from-[#f4f8fe] via-[#f7faff] to-white border-b border-slate-100 overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-40" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Dave's Value Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Master Plumber Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0052da] text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#0052da] animate-pulse" />
              <span>Dave Vance • Master Plumber {currentLocation.licenseNumber}</span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-[#253041] tracking-tight leading-[1.08]">
              Ready To Help You.
            </h1>

            {/* Clean, Non-slop Bio */}
            <p className="text-sm sm:text-base md:text-lg text-[#4c5165] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Busted pipe, sewer backup, or cold water heater? Call me directly. No middlemen, no sales commissions, and no junior apprentices. I arrive personally in my fully-equipped mobile workshop van and fix it right the first time.
            </p>

            {/* Responsive Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="w-full sm:w-auto btn-plumco text-sm sm:text-base font-extrabold py-3.5 px-6 sm:px-8 text-center shadow-lg"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Hire Me / Book Direct</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[#253041] font-bold text-xs sm:text-sm shadow-xs transition hover:border-[#0052da]"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052da] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 fill-[#0052da]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold leading-none">
                    Call Direct Cell
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-extrabold text-[#0052da]">
                    {currentLocation.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[#253041] font-bold">
                  4.9/5 from 850+ Neighbors
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Solo Master Workmanship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dave Vance's Cutout Plumber Image */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-[280px] xs:w-[320px] sm:w-[400px] lg:w-[460px] h-[340px] xs:h-[390px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
              {/* Circular Backdrop */}
              <div className="absolute inset-0 m-auto w-[250px] xs:w-[290px] sm:w-[370px] h-[250px] xs:h-[290px] sm:h-[370px] rounded-full bg-gradient-to-tr from-[#0052da]/15 via-blue-100/60 to-white border-6 sm:border-8 border-white shadow-2xl" />

              {/* Plumber Photo */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/Image-Plumber.png"
                  alt="Dave Vance - Master Plumber"
                  width={460}
                  height={520}
                  priority
                  unoptimized
                  className="max-h-[105%] w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-4 sm:top-8 left-1 sm:left-4 z-20 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0052da] text-white flex items-center justify-center font-black text-sm sm:text-lg font-mono">
                  25+
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#253041] leading-tight text-left">
                  Years Solo Craft <br />
                  <span className="text-[9px] sm:text-[10px] font-normal text-slate-500">
                    Zero Apprentices
                  </span>
                </div>
              </div>

              {/* Floating Dispatch Status */}
              <div className="absolute bottom-4 sm:bottom-6 right-1 sm:right-4 z-20 bg-[#253041] text-white rounded-lg sm:rounded-xl py-1.5 sm:py-2 px-2.5 sm:px-3.5 shadow-xl flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-[10px] sm:text-[11px] font-bold">
                  On Call: <span className="text-emerald-400 font-extrabold">{currentLocation.primaryCity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 100VH Scroll-Down Prompt */}
      <div className="w-full text-center mt-auto pt-6 pb-2 z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToAbout}
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-[#0052da] transition group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Scroll To Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0052da]" />
        </button>
      </div>
    </section>
  );
}
