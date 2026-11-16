"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import { CheckCircle2, PhoneCall, Award, MessageCircle } from "lucide-react";

export function ApexAbout() {
  const { currentLocation } = useLocation();

  const personalGuarantees = [
    "Every job handled personally by me—a licensed master plumber, never apprentices.",
    "Guaranteed flat-rate quote in writing before I turn a single wrench.",
    "Non-destructive acoustic & HD video scopes save thousands in unnecessary demolition.",
    "Clean Home Pledge: Shoe booties, drop cloths, and 100% sanitized workspaces.",
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Apex Work Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/about-img-2.jpg"
                  alt="Apex Plumber - Master Certified Workmanship"
                  width={600}
                  height={500}
                  unoptimized
                  className="w-full h-[320px] xs:h-[360px] sm:h-[440px] object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 bg-[#0052da] text-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-2.5 sm:gap-4 max-w-[200px] sm:max-w-[240px] border-4 border-white">
                <div className="text-2xl sm:text-4xl font-black font-mono">
                  25+
                </div>
                <div className="text-[11px] sm:text-xs font-extrabold leading-tight">
                  Years Master Field Experience
                </div>
              </div>

              {/* License Badge */}
              <div className="absolute -top-3 sm:-top-4 -left-1 sm:-left-3 bg-[#253041] text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl shadow-lg flex items-center gap-1.5 border border-slate-700">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-[11px] sm:text-xs font-bold font-mono">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Apex Plumber Story */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono">
              <span>:: About Apex Plumber</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight leading-tight">
              Meet Your Local Independent Master Plumber
            </h2>

            <p className="text-xs xs:text-sm sm:text-base text-[#4c5165] leading-relaxed">
              Hi, I&apos;m your dedicated Master Plumber at <strong className="text-[#253041] font-bold">Apex Plumber</strong>. For over 25 years, I&apos;ve built my reputation on personal craftsmanship, transparent flat-rate pricing, and honest advice. When you call Apex Plumber, you deal directly with me—never a revolving door of junior apprentices or subcontracted laborers. I arrive fully equipped in my mobile workshop and solve your plumbing problems right the first time.
            </p>

            {/* Guarantees Checklist */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {personalGuarantees.map((g, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0052da] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#253041]">
                    {g}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Action & WhatsApp / Phone */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <a
                href="https://wa.me/8801319630516"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-xs flex items-center justify-center gap-2 whitespace-nowrap transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+8801319630516"
                className="flex items-center gap-3 group p-2 rounded-xl hover:bg-slate-50 transition"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-50 text-[#0052da] group-hover:bg-[#0052da] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Line
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#253041] group-hover:text-[#0052da] transition whitespace-nowrap">
                    Call Now
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
