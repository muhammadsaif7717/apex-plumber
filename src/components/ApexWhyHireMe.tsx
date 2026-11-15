"use client";

import React from "react";
import {
  MessageSquare,
  UserCheck,
  Receipt,
  Award,
  Clock,
  ShieldCheck,
  CalendarCheck,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexWhyHireMe() {
  const { currentLocation, openBookingModal } = useLocation();

  const reasons = [
    {
      id: "direct-comm",
      title: "Direct Communication",
      desc: "Speak and coordinate directly with me—the licensed master plumber who actually turns the wrench, not an outsourced call center or dispatcher.",
      icon: MessageSquare,
      badge: "No Middlemen",
    },
    {
      id: "personal-attention",
      title: "Personal Attention",
      desc: "Every home receives dedicated, unhurried focus. I take on one job at a time so your plumbing problem gets the full attention it deserves.",
      icon: UserCheck,
      badge: "1-on-1 Focus",
    },
    {
      id: "honest-estimates",
      title: "Honest Upfront Estimates",
      desc: "Firm, transparent flat-rate pricing provided in writing before turning a single bolt. No hidden truck fees, no surprises, no high-pressure upsells.",
      icon: Receipt,
      badge: "Firm Flat Rates",
    },
    {
      id: "quality-workmanship",
      title: "Quality Master Workmanship",
      desc: "Over 25 years of hands-on field experience. I utilize commercial-grade fittings, Ridgid ProPress copper systems, and precise code compliance.",
      icon: Award,
      badge: "25+ Yrs Master",
    },
    {
      id: "flexible-scheduling",
      title: "Flexible Scheduling",
      desc: "Respect for your time with punctual arrival windows, same-day emergency dispatch, and weekend availability when urgent leaks occur.",
      icon: Clock,
      badge: "Prompt Arrival",
    },
    {
      id: "personal-accountability",
      title: "Personal Accountability",
      desc: "My name and reputation ride on every repair. I personally stand behind every installation with a comprehensive 10-year workmanship warranty.",
      icon: ShieldCheck,
      badge: "10-Yr Warranty",
    },
  ];

  return (
    <section
      id="why-hire-me"
      className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: The Apex Plumber Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Why Homeowners Choose to Work With Me
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Experience the difference of partnering directly with an experienced, independent master plumber who cares about your home as much as you do.
          </p>
        </div>

        {/* 6 Icon-Based Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="bg-[#f8fbff] rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0052da]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[#0052da]">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#253041] mb-2.5">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4c5165] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-blue-100/70 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Guaranteed On Every Service Call</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Personal Reassurance */}
        <div className="mt-12 sm:mt-16 bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base sm:text-lg font-black text-[#253041]">
              Need an honest second opinion on a quote?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              I will happily review any competitor&apos;s diagnosis or invoice for free before you spend your hard-earned money.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => openBookingModal({ urgency: "sameday" })}
              className="btn-plumco text-xs sm:text-sm font-bold py-3 px-5 w-full sm:w-auto text-center cursor-pointer whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Service Call</span>
            </button>

            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0052da] text-xs sm:text-sm font-mono font-bold hover:bg-blue-50 transition shadow-xs whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{currentLocation.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
