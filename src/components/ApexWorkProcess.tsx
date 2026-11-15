"use client";

import React from "react";
import { useLocation } from "@/context/LocationContext";
import {
  CalendarCheck,
  PhoneCall,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function ApexWorkProcess() {
  const { openBookingModal, currentLocation } = useLocation();

  const steps = [
    {
      step: "01",
      title: "Request a Service",
      desc: "Book online in 60 seconds or call me directly with details of your plumbing emergency or routine maintenance.",
      icon: CalendarCheck,
      highlight: "Instant Confirmation",
    },
    {
      step: "02",
      title: "Discuss the Problem",
      desc: "You talk directly with me—the master plumber. I assess the situation, offer immediate advice, and schedule an exact arrival window.",
      icon: PhoneCall,
      highlight: "Direct Master Contact",
    },
    {
      step: "03",
      title: "Inspection & Estimate",
      desc: "I arrive in my fully equipped mobile workshop, diagnose the root issue with precision cameras, and give you a firm upfront quote.",
      icon: Search,
      highlight: "No Hidden Surcharges",
    },
    {
      step: "04",
      title: "Complete the Job",
      desc: "I personally execute the repair or replacement to code, perform thorough pressure testing, and leave your home spotless.",
      icon: CheckCircle2,
      highlight: "Guaranteed Workmanship",
    },
  ];

  return (
    <section
      id="process"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#f8fbff] to-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: How I Work With You</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            My Seamless 4-Step Process
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            From your first call to the final sign-off, experience straightforward, stress-free plumbing services delivered by an independent master craftsman.
          </p>
        </div>

        {/* 4 Steps Grid with Step Indicators */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-[#0052da]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-[#0052da]/30 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Highlight Badge */}
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052da] text-[10px] sm:text-[11px] font-bold font-mono mb-2">
                      {item.highlight}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#253041] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4c5165] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono font-semibold">Phase {idx + 1} of 4</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0052da] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Banner Bottom Callout */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/30 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                Ready for Honest, Direct Plumbing Service?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                No salespeople, no hidden charges. Book your visit or call now for immediate dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "emergency" })}
              className="btn-plumco text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 w-full sm:w-auto text-center cursor-pointer whitespace-nowrap"
            >
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#ffb600] font-mono text-xs font-bold transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{currentLocation.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
