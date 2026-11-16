"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocation } from "@/context/LocationContext";
import {
  CalendarCheck,
  PhoneCall,
  Star,
  UserCheck,
  ChevronDown,
} from "lucide-react";

export function ApexHero() {
  const { currentLocation, openBookingModal } = useLocation();

  const scrollToNext = () => {
    const el = document.getElementById("features");
    if (el) {
      const topOffset = 68;
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
      className="relative min-h-[100dvh] lg:h-[100dvh] pt-16 xs:pt-18 sm:pt-20 pb-4 sm:pb-6 flex flex-col justify-between bg-gradient-to-b from-[#f4f8fe] via-[#f7faff] to-white border-b border-slate-100 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 lg:-mr-40" />
      <div className="absolute bottom-10 left-0 w-[240px] sm:w-[350px] lg:w-[500px] h-[240px] sm:h-[350px] lg:h-[500px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -ml-10 lg:-ml-20" />

      {/* Main Centered Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto relative z-10 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          {/* Left Column: Apex Plumber Value & Direct CTAs (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 space-y-3 sm:space-y-5 text-center lg:text-left"
          >
            {/* Grand Headline (Elegantly proportioned across mobile to 4K) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#253041] tracking-tight leading-[1.12]"
            >
              Reliable Plumbing Services, Delivered Personally.
            </motion.h1>

            {/* Bio (Comfortable readable scale) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs xs:text-sm sm:text-base md:text-lg text-[#4c5165] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              From everyday plumbing repairs to complex installations, I provide dependable workmanship, honest communication, and personalized service for every customer. No middlemen, no sales commissions, and no junior apprentices.
            </motion.p>

            {/* Direct Action Buttons (Comfortable ergonomic touch targets) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 xs:gap-2.5 sm:gap-4 pt-0.5 sm:pt-1"
            >
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="w-full sm:w-auto btn-plumco text-xs xs:text-sm sm:text-base font-extrabold py-2.5 xs:py-3 sm:py-3.5 px-4 xs:px-6 sm:px-8 text-center shadow-md cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Book a Service</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-6 py-2 xs:py-2.5 sm:py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[#253041] font-bold text-xs sm:text-sm shadow-xs transition hover:border-[#0052da] cursor-pointer whitespace-nowrap"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#0052da] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 fill-[#0052da]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] uppercase font-mono text-slate-500 font-bold leading-none">
                    Direct Line • Call Me Now
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
              className="pt-2 sm:pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-6 text-[11px] sm:text-xs font-semibold"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[#253041] font-bold">
                  4.9/5 from 850+ Neighbors
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>100% Solo Master Workmanship</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Master Plumber Hero Image (Order 1 on mobile, Order 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center mt-1 lg:mt-0"
          >
            <div className="relative w-[210px] xs:w-[240px] sm:w-[320px] lg:w-[420px] xl:w-[460px] h-[230px] xs:h-[270px] sm:h-[370px] lg:h-[480px] xl:h-[510px] flex items-center justify-center">
              {/* Circular Backdrop */}
              <div className="absolute inset-0 m-auto w-[180px] xs:w-[210px] sm:w-[290px] lg:w-[380px] h-[180px] xs:h-[210px] sm:h-[290px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#0052da]/15 via-blue-100/60 to-white border-4 sm:border-8 border-white shadow-xl" />

              {/* Plumber Photo (Unobscured face) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/Image-Plumber.png"
                  alt="Apex Plumber - Master Certified Technician"
                  width={460}
                  height={510}
                  priority
                  unoptimized
                  className="max-h-[105%] w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2 sm:bottom-auto sm:top-6 left-0 sm:left-2 z-20 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-lg sm:rounded-2xl p-1.5 xs:p-2 sm:p-3.5 shadow-lg flex items-center gap-1.5 sm:gap-3"
              >
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl bg-[#0052da] text-white flex items-center justify-center font-black text-[10px] xs:text-xs sm:text-base font-mono shrink-0">
                  25+
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#253041] leading-tight text-left">
                  Years Master Craft <br />
                  <span className="hidden xs:inline text-[8px] sm:text-[9px] font-normal text-slate-500">
                    Zero Subcontractors
                  </span>
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
          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity">
            Scroll To Explore
          </span>
          <ChevronDown className="w-4 h-4 text-[#0052da] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
