"use client";

import React from "react";
import { Star, Award, Users, CheckCircle, Wrench } from "lucide-react";

export function ApexFunFact() {
  const stats = [
    { num: "1,500+", label: "Running Projects", icon: Wrench },
    { num: "80+", label: "Team Members", icon: Users },
    { num: "98K+", label: "Happy Clients", icon: CheckCircle },
    { num: "35+", label: "Awards Winning", icon: Award },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0052da] text-white relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and 89K Review Badge */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              We Are Provide Always Different From Other Services.
            </h2>

            {/* 89K Customer Review Badge */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-4 sm:p-5">
              <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                89K+
              </div>
              <div>
                <div className="flex items-center text-amber-300 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300" />
                  ))}
                </div>
                <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">
                  Customer Reviews Verified
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Counter Boxes */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white mb-1">
                        {s.num}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-blue-100">
                        {s.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
