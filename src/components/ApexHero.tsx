"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import {
  CalendarCheck,
  PhoneCall,
  Star,
  ShieldCheck,
  Clock,
} from "lucide-react";

export function ApexHero() {
  const { currentLocation, openBookingModal } = useLocation();

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#f4f8fe] via-[#f7faff] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100 overflow-hidden"
    >
      {/* Decorative subtle water flow background rings */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Plumco Text & Headings */}
          <div className="lg:col-span-7 space-y-6">
            {/* Plumco Subtitle Tag */}
            <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0052da] tracking-wide font-sans">
              <span className="text-[#0052da] font-black tracking-widest text-base">
                ::
              </span>
              <span>Highly Trained Staff In {currentLocation.primaryCity}</span>
            </div>

            {/* Plumco Grand Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#253041] tracking-tight leading-[1.08]">
              Ready To Help You.
            </h1>

            {/* Plumco Description */}
            <p className="text-base sm:text-lg text-[#4c5165] leading-relaxed max-w-xl font-normal">
              We are certified licensed company. We provide best residential & commercial plumbing services for you & your company with zero overtime fees.
            </p>

            {/* Direct Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="btn-plumco text-base font-extrabold py-4 px-8 text-center"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Online</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[#253041] font-bold text-sm sm:text-base shadow-xs transition hover:border-[#0052da]"
              >
                <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0052da] flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 fill-[#0052da]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold leading-none">
                    Emergency Dispatch
                  </span>
                  <span className="font-mono text-sm font-extrabold text-[#0052da]">
                    {currentLocation.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Plumco Rating & Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#253041]">
                  4.9/5 (2,400+ Reviews)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{currentLocation.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Plumco Cutout Plumber Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Graphic Circle */}
            <div className="relative w-[320px] sm:w-[420px] lg:w-[460px] h-[380px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
              <div className="absolute inset-0 m-auto w-[290px] sm:w-[390px] h-[290px] sm:h-[390px] rounded-full bg-gradient-to-tr from-[#0052da]/15 via-blue-100/60 to-white border-8 border-white shadow-2xl" />

              {/* Plumber Cutout Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/Image-Plumber.png"
                  alt="Apex Master Plumber"
                  width={460}
                  height={520}
                  priority
                  unoptimized
                  className="max-h-[105%] w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-8 left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 animate-in fade-in duration-500">
                <div className="w-11 h-11 rounded-xl bg-[#0052da] text-white flex items-center justify-center font-black text-lg">
                  25+
                </div>
                <div className="text-xs font-bold text-[#253041] leading-tight">
                  Years Experience <br />
                  <span className="text-[11px] font-normal text-slate-500">
                    Certified Service
                  </span>
                </div>
              </div>

              {/* Floating Dispatch Telemetry Pill */}
              <div className="absolute bottom-6 right-2 sm:right-4 z-20 bg-[#253041] text-white rounded-xl py-2 px-3.5 shadow-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-[11px] font-bold">
                  Avg Arrival: <span className="font-mono text-emerald-400 font-extrabold">{currentLocation.averageArrival}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
