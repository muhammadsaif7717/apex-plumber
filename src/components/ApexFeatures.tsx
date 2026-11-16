"use client";

import React from "react";
import { PLUMCO_FEATURES } from "@/data/plumcoData";
import { CalendarCheck, Truck, CheckCircle2 } from "lucide-react";

export function ApexFeatures() {

  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    Truck,
    CheckCircle2,
  };

  return (
    <section id="features" className="relative -mt-6 sm:-mt-10 z-20 pb-10 sm:pb-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 xs:gap-3.5 sm:gap-6">
          {PLUMCO_FEATURES.map((feat, idx) => {
            const IconComponent = iconMap[feat.iconName] || CheckCircle2;
            const isLast = idx === 2;
            return (
              <div
                key={feat.id}
                className={`bg-white rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-7 border border-slate-100 shadow-md sm:shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isLast ? "col-span-2 md:col-span-1" : "col-span-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 xs:mb-3 sm:mb-5">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                      <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-mono text-base xs:text-xl sm:text-3xl font-black text-slate-200 group-hover:text-[#0052da]/25 transition-colors">
                      {feat.step}
                    </span>
                  </div>

                  <h3 className="text-xs xs:text-sm sm:text-xl font-extrabold text-[#253041] mb-1 sm:mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-[10px] xs:text-[11px] sm:text-sm text-[#4c5165] leading-tight sm:leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
