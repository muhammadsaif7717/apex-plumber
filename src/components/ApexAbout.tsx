"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import { CheckCircle2, PhoneCall, Award, CalendarCheck } from "lucide-react";

export function ApexAbout() {
  const { currentLocation, openBookingModal } = useLocation();

  const benefits = [
    "If we're not on time, you don't pay a dime! (Guaranteed Arrival)",
    "Upfront flat-rate pricing authorized in writing before work begins",
    "Complete insurance carrier documentation and non-invasive leak scopes",
    "Zero overtime surcharges on emergency night, weekend & holiday calls",
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Plumco Dual Image & Badge Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/about-img-2.jpg"
                  alt="Apex Plumber Master Workmanship"
                  width={600}
                  height={500}
                  unoptimized
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Floating Plumco Circular Experience Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0052da] text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-4 max-w-[240px] border-4 border-white animate-in zoom-in-95 duration-300">
                <div className="text-3xl sm:text-4xl font-black font-mono">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-extrabold leading-tight">
                  Years Experience In Plumbing Service
                </div>
              </div>

              {/* Secondary Floating Trust Pill */}
              <div className="absolute -top-4 -left-2 sm:-left-4 bg-[#253041] text-white py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 border border-slate-700">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold font-mono">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Plumco Text & Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono">
              <span>:: About Us</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight leading-tight">
              Over 25+ Years Experience In Plumbing Service
            </h2>

            {/* Paragraph */}
            <p className="text-base text-[#4c5165] leading-relaxed">
              Apex Plumber service professionals are ready for all the plumbing needs you may have. If we&apos;re not on time, you don&apos;t pay a dime! Save on water heaters, sewer lines, and drain cleaning with transparent flat-rate quotes.
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-3 pt-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052da] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#253041]">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Actions & Author Hotline Box */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "sameday" })}
                className="btn-plumco text-sm font-bold"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Schedule An Appt Now</span>
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
                    Call For Emergency
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
