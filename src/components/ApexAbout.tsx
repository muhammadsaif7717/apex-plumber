"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import { CheckCircle2, PhoneCall, Award, CalendarCheck } from "lucide-react";

export function ApexAbout() {
  const { currentLocation, openBookingModal } = useLocation();

  const personalGuarantees = [
    "I personally perform 100% of the work — no apprentices, no strangers.",
    "Guaranteed flat-rate quote in writing before I turn a single wrench.",
    "Non-destructive acoustic & HD video scopes save thousands in unnecessary demolition.",
    "Clean Home Pledge: Shoe booties, drop cloths, and 100% sanitized workspaces.",
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dave's Work Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/about-img-2.jpg"
                  alt="Dave Vance - Master Plumber Workmanship"
                  width={600}
                  height={500}
                  unoptimized
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0052da] text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-4 max-w-[240px] border-4 border-white">
                <div className="text-3xl sm:text-4xl font-black font-mono">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-extrabold leading-tight">
                  Years Solo Master Experience
                </div>
              </div>

              {/* License Badge */}
              <div className="absolute -top-4 -left-2 sm:-left-4 bg-[#253041] text-white py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 border border-slate-700">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold font-mono">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dave's Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono">
              <span>:: Meet Your Personal Plumber</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight leading-tight">
              Over 25+ Years of Dedicated Master Craftsmanship
            </h2>

            <p className="text-base text-[#4c5165] leading-relaxed">
              Hi, I&apos;m Dave Vance. After watching corporate plumbing franchises bill homeowners inflated prices while sending junior trainees who guess their way through repairs, I chose to stay 100% independent. When you call me, you get my undivided attention, my commercial-grade tools, and my personal guarantee.
            </p>

            {/* Guarantees Checklist */}
            <div className="space-y-3 pt-2">
              {personalGuarantees.map((g, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052da] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#253041]">
                    {g}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Action & Cell Phone */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="btn-plumco text-sm font-bold"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Schedule With Dave</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Call Dave Directly
                  </div>
                  <div className="text-sm font-black text-[#253041] font-mono group-hover:text-[#0052da] transition">
                    {currentLocation.phone}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
