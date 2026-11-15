"use client";

import React from "react";
import { Truck, Video, FileCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexWorkflow() {
  const { currentLocation } = useLocation();

  const steps = [
    {
      num: "01",
      icon: Truck,
      title: "Rapid GPS Mobile Dispatch",
      desc: "Within seconds of receiving your emergency call, our algorithm routes the nearest service van stocked with 1,500+ OEM parts directly to your address.",
      details: [
        "Real-time SMS technician tracking link",
        "Direct master plumber communication",
        `Under 45-min arrival in ${currentLocation.primaryCity}`,
      ],
    },
    {
      num: "02",
      icon: Video,
      title: "HD Video & Acoustic Metrology",
      desc: "We deploy Ridgid SeeSnake 1080p sewer cameras and FLIR thermal imagers to pinpoint the exact failure depth without breaking floors or digging up lawns.",
      details: [
        "Non-destructive subsurface diagnostic",
        "Recorded video documentation for homeowner",
        "512 Hz precision underground sondes",
      ],
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Firm Upfront Flat-Rate Quote",
      desc: "No ticking hourly clocks or post-job surprise fees. You receive a guaranteed flat-rate price in writing that requires your signed authorization before work begins.",
      details: [
        "Guaranteed flat-rate quote in writing",
        "Zero night or weekend overtime upcharges",
        "Transparent component cost breakdown",
      ],
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Clean Home & Lifetime Guarantee",
      desc: "Our technicians wear sanitizing shoe booties, lay surface tarps, and leave your property cleaner than they found it, backed by ironclad warranties.",
      details: [
        "Clean Home $100 cleanliness pledge",
        "Up to 50-year structural pipe warranty",
        "Direct insurance claim documentation",
      ],
    },
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 border border-orange-300 text-orange-900 text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <span>The Apex Master Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Apex Outperforms Fly-By-Night Handymen
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Engineered precision, surgical diagnostic scopes, and total pricing accountability from initial dispatch to final water pressure test.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-blue-600/30">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-1.5 text-[11px] text-slate-700">
                  {st.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
