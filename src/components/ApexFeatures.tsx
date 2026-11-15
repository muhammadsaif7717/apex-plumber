"use client";

import React from "react";
import { PLUMCO_FEATURES } from "@/data/plumcoData";
import { CalendarCheck, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexFeatures() {
  const { openBookingModal } = useLocation();

  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    Truck,
    CheckCircle2,
  };

  return (
    <section id="features" className="relative -mt-6 sm:-mt-10 z-20 pb-12 sm:pb-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PLUMCO_FEATURES.map((feat) => {
            const IconComponent = iconMap[feat.iconName] || CheckCircle2;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-mono text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-[#0052da]/25 transition-colors">
                      {feat.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#253041] mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4c5165] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => openBookingModal({ urgency: "emergency" })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052da] group-hover:underline cursor-pointer"
                  >
                    <span>Request Service / Get Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
