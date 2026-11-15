"use client";

import React from "react";
import Image from "next/image";
import { PLUMCO_SERVICES, PlumcoService } from "@/data/plumcoData";
import { useLocation } from "@/context/LocationContext";
import {
  UtensilsCrossed,
  Flame,
  Droplets,
  Bath,
  ShieldAlert,
  Wrench,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export function ApexServicesGrid() {
  const { currentLocation, openBookingModal } = useLocation();

  const iconMap: Record<string, React.ElementType> = {
    UtensilsCrossed,
    Flame,
    Droplets,
    Bath,
    ShieldAlert,
    Wrench,
  };

  const handleBookService = (service: PlumcoService) => {
    openBookingModal({
      serviceId: service.id,
      issueDescription: service.title,
      estimatedPriceRange: `Starting from $${service.startingPrice}`,
      urgency: "sameday",
    });
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f4f8fe] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Plumco Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Best Service We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            Best Service We Offer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4c5165] leading-relaxed">
            Professional plumbing solutions delivered by certified technicians across {currentLocation.primaryCity}. Upfront pricing and zero overtime surcharges.
          </p>
        </div>

        {/* 6 Plumco Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLUMCO_SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Wrench;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0052da]/15 transition-all duration-300 flex flex-col group border border-slate-100"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={srv.img}
                    alt={srv.title}
                    width={600}
                    height={380}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Service Icon */}
                  <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-xl bg-[#0052da] text-white flex items-center justify-center shadow-lg group-hover:bg-[#253041] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#253041] px-3 py-1 rounded-md text-xs font-mono font-bold shadow-sm">
                    From ${srv.startingPrice}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#253041] group-hover:text-[#0052da] transition-colors mb-2.5">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-[#4c5165] leading-relaxed line-clamp-3">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleBookService(srv)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0052da] group-hover:text-[#0041ae] transition-colors"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={`tel:${currentLocation.phoneRaw}`}
                      className="text-xs font-bold text-slate-500 hover:text-[#0052da] flex items-center gap-1 font-mono"
                      title="Direct Call"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#0052da]" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
