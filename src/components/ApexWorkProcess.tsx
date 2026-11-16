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
  MessageCircle,
} from "lucide-react";

export function ApexWorkProcess() {
  const { currentLocation } = useLocation();

  const steps = [
    {
      step: "01",
      title: "Request a Service",
      desc: "Book online in 60 seconds or call me directly with details of your plumbing emergency or routine maintenance.",
      icon: CalendarCheck,
      highlight: "Instant Booking",
    },
    {
      step: "02",
      title: "Discuss Problem",
      desc: "You talk directly with me—the master plumber. I assess the situation, offer immediate advice, and schedule an arrival window.",
      icon: PhoneCall,
      highlight: "Direct Contact",
    },
    {
      step: "03",
      title: "Inspection & Quote",
      desc: "I arrive in my fully equipped mobile workshop, diagnose the root issue with precision cameras, and give you a firm upfront quote.",
      icon: Search,
      highlight: "No Surcharges",
    },
    {
      step: "04",
      title: "Complete the Job",
      desc: "I personally execute the repair or replacement to code, perform thorough pressure testing, and leave your home spotless.",
      icon: CheckCircle2,
      highlight: "100% Guaranteed",
    },
  ];

  return (
    <section
      id="process"
      className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#f8fbff] to-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: How I Work With You</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            My Seamless 4-Step Process
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            From your first call to the final sign-off, experience straightforward, stress-free plumbing services delivered by an independent master craftsman.
          </p>
        </div>

        {/* 4 Steps Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 border border-slate-200 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-[#0052da]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-2.5 xs:mb-3 sm:mb-4">
                      <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                        <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-mono text-base xs:text-xl sm:text-3xl font-black text-slate-200 group-hover:text-[#0052da]/30 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Highlight Badge */}
                    <div className="inline-block px-1.5 xs:px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052da] text-[9px] xs:text-[10px] sm:text-[11px] font-bold font-mono mb-1.5 sm:mb-2">
                      {item.highlight}
                    </div>

                    <h3 className="text-xs xs:text-sm sm:text-lg font-black text-[#253041] mb-1 sm:mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[10px] xs:text-[11px] sm:text-sm text-[#4c5165] leading-tight sm:leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] xs:text-[10px] sm:text-xs text-slate-400">
                    <span className="font-mono font-semibold">Phase {idx + 1} of 4</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0052da] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Banner Bottom Callout */}
        <div className="mt-8 sm:mt-14 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-600/30 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-extrabold text-white">
                Ready for Honest, Direct Plumbing Service?
              </h4>
              <p className="text-[11px] xs:text-xs sm:text-sm text-slate-300 mt-0.5">
                No salespeople, no hidden charges. Book your visit or call now for immediate dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/8801319630516"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 w-full sm:w-auto text-center rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+8801319630516"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0052da] hover:bg-[#0042b3] text-white text-xs font-bold transition whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
