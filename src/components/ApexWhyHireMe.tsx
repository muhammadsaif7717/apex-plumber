"use client";

import React from "react";
import { Check, X, ShieldCheck, PhoneCall, CalendarCheck } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexWhyHireMe() {
  const { currentLocation, openBookingModal } = useLocation();

  const comparisonRows = [
    {
      feature: "Who Performs The Repair?",
      apex: "Apex Plumber Certified Master Technicians (25+ Yrs Exp)",
      franchise: "Entry-level junior apprentice or revolving subcontractor",
    },
    {
      feature: "Upfront Pricing Guarantee",
      apex: "Firm, transparent flat-rate in writing before turning a wrench",
      franchise: "Hourly ticking clock + unexpected travel & diagnostic surcharges",
    },
    {
      feature: "Sales Commission Pressure",
      apex: "Zero sales quotas. We only recommend repairs you genuinely need",
      franchise: "High-pressure sales commissions & aggressive replacement quotas",
    },
    {
      feature: "Communication Access",
      apex: "Direct priority phone dispatch with your dedicated master plumber",
      franchise: "Offshore robotic call centers & frustrating hold queues",
    },
    {
      feature: "Workmanship Warranty",
      apex: "Apex Plumber 10-Year Comprehensive Warranty Protection",
      franchise: "30-day limited warranty buried in corporate fine print",
    },
    {
      feature: "Equipment On Every Truck",
      apex: "4,000 PSI hydro-jetter, HD SeeSnake fiber cameras, ProPress copper tools",
      franchise: "Basic manual tools (requires scheduling expensive second trips)",
    },
  ];

  return (
    <section id="why-hire-me" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: The Apex Plumber Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Why Choose Apex Plumber vs Franchises
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Save thousands and eliminate guesswork. We deliver elite master plumbing services with honest flat rates and zero corporate runaround.
          </p>
        </div>

        {/* Comparison Table Card (Stable, No Blinking) */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-extrabold text-[#253041] bg-slate-50 w-2/5">
                    Service Standard
                  </th>
                  <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black text-white bg-[#0052da] w-3/10">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Apex Plumber (Masters)</span>
                    </div>
                  </th>
                  <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 w-3/10 whitespace-nowrap">
                    Big Corporate Franchises
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-3.5 sm:p-5 lg:p-6 font-bold text-[#253041]">
                      {row.feature}
                    </td>
                    <td className="p-3.5 sm:p-5 lg:p-6 bg-blue-50/50 font-semibold text-[#0052da]">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.apex}</span>
                      </div>
                    </td>
                    <td className="p-3.5 sm:p-5 lg:p-6 text-slate-500">
                      <div className="flex items-start gap-1.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.franchise}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Bar with CTA */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              <strong>Need a reliable second opinion?</strong> We will review any competitor&apos;s quote for free before you spend a dime.
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="btn-plumco text-xs font-bold py-2.5 px-4 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Apex Plumber</span>
              </button>

              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-[#0052da] text-xs font-mono font-bold hover:bg-blue-50 transition whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{currentLocation.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
