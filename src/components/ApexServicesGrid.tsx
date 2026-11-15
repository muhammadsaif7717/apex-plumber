"use client";

import React from "react";
import Image from "next/image";
import { SERVICES, ServiceItem } from "@/data/services";
import { useLocation } from "@/context/LocationContext";
import {
  Wrench,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  PhoneCall,
} from "lucide-react";

export function ApexServicesGrid() {
  const { currentLocation, openBookingModal } = useLocation();

  const handleBookService = (service: ServiceItem) => {
    openBookingModal({
      serviceId: service.id,
      issueDescription: service.title,
      estimatedPriceRange: `Starting at $${service.startingPrice}`,
      urgency: "sameday",
    });
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Master Trade Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Commercial & Residential Plumbing Services in {currentLocation.primaryCity}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every technician arrives in a mobile workshop van stocked with over 1,500 OEM replacement parts, industrial hydro-jetters, and digital sewer cameras. Firm flat rates quoted prior to work commencing.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-200 flex flex-col overflow-hidden"
            >
              {/* Service Visual Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={350}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Response Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-orange-400" />
                  <span>{service.turnaround}</span>
                </div>

                {/* Starting Price Tag */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 border border-slate-200 px-3 py-1 rounded-lg shadow-md">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase leading-none">
                    Starting From
                  </div>
                  <div className="text-lg font-black text-blue-700 font-mono leading-tight">
                    ${service.startingPrice}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider mb-1">
                  {service.badge}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Equipment Used Tags */}
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider block mb-1.5">
                    Equipment Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.equipment.map((eq, i) => (
                      <span
                        key={i}
                        className="bg-white border border-slate-200 text-slate-700 text-[11px] px-2 py-0.5 rounded font-mono"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  {service.bullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Warranty Note */}
                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{service.warranty}</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleBookService(service)}
                    className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition active:scale-[0.98] shadow-xs flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${currentLocation.phoneRaw}`}
                    className="py-2.5 px-3 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1"
                    title={`Call for ${service.title}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
