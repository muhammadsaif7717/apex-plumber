"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  UserCheck,
  Receipt,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexWhyHireMe() {
  const { currentLocation } = useLocation();

  const reasons = [
    {
      id: "direct-comm",
      title: "Direct Contact",
      desc: "Speak and coordinate directly with me—the licensed master plumber who actually turns the wrench, not a call center.",
      icon: MessageSquare,
      badge: "No Middlemen",
    },
    {
      id: "personal-attention",
      title: "Personal Focus",
      desc: "Every home receives dedicated, unhurried focus. I take on one job at a time so your plumbing gets the attention it deserves.",
      icon: UserCheck,
      badge: "1-on-1 Care",
    },
    {
      id: "honest-estimates",
      title: "Upfront Estimates",
      desc: "Firm, transparent flat-rate pricing provided in writing before turning a single bolt. No surprises or high-pressure upsells.",
      icon: Receipt,
      badge: "Firm Flat Rates",
    },
    {
      id: "quality-workmanship",
      title: "Master Craft",
      desc: "Over 25 years of hands-on field experience. I utilize commercial-grade fittings, ProPress copper, and precise code compliance.",
      icon: Award,
      badge: "25+ Yrs Master",
    },
    {
      id: "flexible-scheduling",
      title: "Prompt Windows",
      desc: "Respect for your time with punctual arrival windows, same-day emergency dispatch, and weekend availability when urgent leaks occur.",
      icon: Clock,
      badge: "Fast Dispatch",
    },
    {
      id: "personal-accountability",
      title: "Full Warranty",
      desc: "My reputation rides on every repair. I personally stand behind every installation with a comprehensive 10-year workmanship warranty.",
      icon: ShieldCheck,
      badge: "10-Yr Guarantee",
    },
  ];

  return (
    <section
      id="why-hire-me"
      className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: The Apex Plumber Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Why Homeowners Choose to Work With Me
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600">
            Experience the difference of partnering directly with an experienced, independent master plumber who cares about your home as much as you do.
          </p>
        </div>

        {/* 6 Icon-Based Reason Cards: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3.5 sm:gap-6 lg:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
                className="bg-[#f4f8fe] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-7 border border-blue-100/80 shadow-sm hover:shadow-xl hover:border-[#0052da]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 xs:mb-3 sm:mb-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs shrink-0 border border-blue-100">
                      <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold px-1.5 xs:px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-slate-200 text-[#0052da]">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="text-xs xs:text-sm sm:text-xl font-black text-[#253041] mb-1 sm:mb-2.5 leading-snug">
                    {reason.title}
                  </h3>

                  <p className="text-[10px] xs:text-[11px] sm:text-sm text-slate-600 leading-tight sm:leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-4 border-t border-blue-100/70 flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Master Guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Personal Reassurance */}
        <div className="mt-8 sm:mt-16 bg-[#f4f8fe] border border-blue-100/80 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-sm sm:text-lg font-black text-[#253041]">
              Need an honest second opinion on a quote?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              I will happily review any competitor&apos;s diagnosis or invoice for free before you spend your hard-earned money.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 btn-plumco text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-6 rounded-xl shadow-xs whitespace-nowrap transition cursor-pointer w-full sm:w-auto"
            >
              <span>Get Free Second Opinion</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
