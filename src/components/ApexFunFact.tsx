"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Award, CheckCircle, Wrench, ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function ApexFunFact() {
  const stats = [
    { target: 25, suffix: "+", label: "Years Master Field Experience", icon: ShieldCheck },
    { target: 3800, suffix: "+", label: "Jobs Successfully Completed", icon: Wrench },
    { target: 100, suffix: "%", label: "Certified Master Workmanship", icon: CheckCircle },
    { target: 35, suffix: "+", label: "Municipal Safety Accreditations", icon: Award },
  ];

  return (
    <section className="py-16 sm:py-22 lg:py-24 bg-[#0052da] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Why 850+ Local Homeowners Call Me First.
            </h2>

            <p className="text-blue-100 text-xs xs:text-sm sm:text-base leading-relaxed">
              When plumbing emergencies strike, you need a dedicated master craftsman who diagnoses accurately and solves it right the first time. I deliver rapid response, commercial-grade equipment, and upfront transparent flat-rate pricing.
            </p>

            <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-3.5 sm:p-5 text-left">
              <div className="text-2xl sm:text-4xl font-black font-mono text-white">
                4.9★
              </div>
              <div>
                <div className="flex items-center text-amber-300 mb-0.5 sm:mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300" />
                  ))}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-blue-100 uppercase tracking-wider">
                  850+ Verified 5-Star Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Boxes (No Blinking) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-xs rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl xs:text-3xl sm:text-5xl font-black font-mono tracking-tight text-white mb-1">
                        <AnimatedCounter
                          value={s.target}
                          suffix={s.suffix}
                          duration={1.8}
                        />
                      </div>
                      <div className="text-[11px] sm:text-sm font-semibold text-blue-100 leading-snug">
                        {s.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
