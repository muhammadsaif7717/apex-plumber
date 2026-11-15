"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  const scrollToNext = () => {
    const el = document.getElementById("features");
    if (el) {
      const topOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:h-[100dvh] pt-20 xs:pt-22 sm:pt-26 pb-4 sm:pb-6 flex flex-col justify-between bg-gradient-to-b from-[#f4f8fe] via-[#f7faff] to-white border-b border-slate-100 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] lg:w-[600px] h-[450px] lg:h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-40" />
      <div className="absolute bottom-10 left-0 w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -ml-20" />

      {/* Main Centered Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto relative z-10 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Dave Vance's Pitch & Direct Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-5 text-center lg:text-left"
          >
            {/* Master Plumber Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-[#0052da] text-xs font-bold font-mono shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#0052da] animate-pulse" />
              <span>Dave Vance • Master Plumber {currentLocation.licenseNumber}</span>
            </motion.div>

            {/* Grand Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-[#253041] tracking-tight leading-[1.08]"
            >
              Ready To Help You.
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs xs:text-sm sm:text-base md:text-lg text-[#4c5165] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              Busted pipe, sewer backup, or cold water heater? Call me directly. No middlemen, no sales commissions, and no junior apprentices. I arrive personally in my fully-equipped mobile workshop van and fix it right the first time.
            </motion.p>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1"
            >
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="w-full sm:w-auto btn-plumco text-xs xs:text-sm sm:text-base font-extrabold py-3 sm:py-3.5 px-5 sm:px-8 text-center shadow-lg cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Hire Me / Book Direct</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[#253041] font-bold text-xs sm:text-sm shadow-xs transition hover:border-[#0052da] cursor-pointer whitespace-nowrap"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#0052da] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0052da]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-500 font-bold leading-none">
                    Direct Cell Line
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-extrabold text-[#0052da]">
                    {currentLocation.phone}
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Trust Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-3 sm:pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs font-semibold"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[#253041] font-bold text-xs sm:text-sm">
                  4.9/5 from 850+ Neighbors
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm">
                <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Solo Master Workmanship</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dave Vance's Cutout Plumber Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0"
          >
            <div className="relative w-[260px] xs:w-[290px] sm:w-[360px] lg:w-[420px] xl:w-[460px] h-[300px] xs:h-[340px] sm:h-[420px] lg:h-[480px] xl:h-[510px] flex items-center justify-center">
              {/* Circular Backdrop */}
              <div className="absolute inset-0 m-auto w-[230px] xs:w-[260px] sm:w-[330px] lg:w-[380px] h-[230px] xs:h-[260px] sm:h-[330px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#0052da]/15 via-blue-100/60 to-white border-4 sm:border-8 border-white shadow-2xl" />

              {/* Plumber Photo */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/Image-Plumber.png"
                  alt="Dave Vance - Master Plumber"
                  width={460}
                  height={510}
                  priority
                  unoptimized
                  className="max-h-[105%] w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-2 sm:top-6 left-0 sm:left-2 z-20 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0052da] text-white flex items-center justify-center font-black text-xs sm:text-base font-mono shrink-0">
                  25+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-[#253041] leading-tight text-left">
                  Years Solo Craft <br />
                  <span className="text-[8px] sm:text-[9px] font-normal text-slate-500">
                    Zero Apprentices
                  </span>
                </div>
              </motion.div>

              {/* Floating Dispatch Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-2 sm:bottom-4 right-0 sm:right-2 z-20 bg-[#253041] text-white rounded-lg sm:rounded-xl py-1 sm:py-1.5 px-2.5 sm:px-3 shadow-xl flex items-center gap-1.5"
              >
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-[10px] sm:text-[11px] font-bold">
                  On Call: <span className="text-emerald-400 font-extrabold">{currentLocation.primaryCity}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 100VH Scroll-Down Prompt (Always positioned at the bottom of the 100vh fold) */}
      <div className="w-full text-center mt-auto pb-2 sm:pb-3 z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToNext}
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-[#0052da] transition group cursor-pointer"
          aria-label="Scroll to explore features"
        >
          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Scroll To Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0052da]" />
        </button>
      </div>
    </section>
  );
}
