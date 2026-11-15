"use client";

import React from "react";
import { Check, X, UserCheck, PhoneCall, CalendarCheck } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexWhyHireMe() {
  const { currentLocation, openBookingModal } = useLocation();

  const comparisonRows = [
    {
      feature: "Who Performs The Repair?",
      dave: "Dave Vance Personally (25-Yr Master Plumber)",
      franchise: "Entry-level junior apprentice or subcontractor",
    },
    {
      feature: "Upfront Pricing Guarantee",
      dave: "Firm flat-rate in writing before turning a wrench",
      franchise: "Hourly ticking clock + hidden travel surcharges",
    },
    {
      feature: "Sales Commission Pressure",
      dave: "Zero. I only fix what is genuinely broken",
      franchise: "High pressure quotas & aggressive upsell pitches",
    },
    {
      feature: "Communication Access",
      dave: "Direct cell phone line straight to Dave",
      franchise: "Offshore call center & robotic phone menus",
    },
    {
      feature: "Workmanship Warranty",
      dave: "Dave's 10-Year Personal Labor Guarantee",
      franchise: "30-day limited warranty with franchise fine print",
    },
    {
      feature: "Equipment On Van",
      dave: "4,000 PSI hydro-jetter, HD SeeSnake camera, ProPress",
      franchise: "Basic hand tools (must schedule 2nd trip for cameras)",
    },
  ];

  return (
    <section id="why-hire-me" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Direct Craftsman Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            Why Hire Me Directly vs Franchises
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Save thousands and avoid corporate plumbing chains that send junior helpers to guess in your home.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto -mx-1 sm:mx-0">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-extrabold text-[#253041] bg-slate-50 w-2/5">
                    Service Standard
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-black text-white bg-[#0052da] w-3/10">
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 shrink-0" />
                      <span>Dave Vance (Master)</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 w-3/10">
                    Big Corporate Franchises
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-[#253041]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 bg-blue-50/50 font-semibold text-[#0052da]">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.dave}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-500">
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

          {/* Bottom Card CTA */}
          <div className="p-5 sm:p-8 bg-[#f4f8fe] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-extrabold text-[#253041] text-sm sm:text-base">
                Ready for honest, master-level plumbing?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Speak directly with Dave. Available 24/7 across {currentLocation.primaryCity}.
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="btn-plumco-dark flex-1 sm:flex-initial text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 text-center justify-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {currentLocation.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "emergency" })}
                className="btn-plumco flex-1 sm:flex-initial text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 text-center justify-center"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Dave</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
