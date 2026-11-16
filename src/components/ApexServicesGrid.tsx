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
  MessageCircle,
} from "lucide-react";

export function ApexServicesGrid() {
  const { currentLocation } = useLocation();

  const iconMap: Record<string, React.ElementType> = {
    UtensilsCrossed,
    Flame,
    Droplets,
    Bath,
    ShieldAlert,
    Wrench,
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#f4f8fe] border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Master Trade Services</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Specialized Services Handled by Certified Masters
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165] leading-relaxed">
            Every service call is handled by certified master plumbers equipped with Spartan 4,000 PSI hydro-jetters, SeeSnake HD video inspection scopes, and ProPress precision copper tools.
          </p>
        </div>

        {/* 6 Specialized Services Grid (Stable, No Blinking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PLUMCO_SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Wrench;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0052da]/15 transition-all duration-300 flex flex-col group border border-slate-100 hover:-translate-y-1.5"
              >
                {/* Image Header with cleanly contained zoom and unclipped floating icon */}
                <div className="relative h-48 sm:h-56 w-full bg-slate-100">
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={srv.img}
                      alt={srv.title}
                      width={600}
                      height={380}
                      unoptimized
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-xs text-[#253041] px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold shadow-sm z-10">
                    Starting from ${srv.startingPrice}
                  </div>

                  {/* Floating Icon Overlapping Card Border (100% Fully Visible) */}
                  <div className="absolute -bottom-5 sm:-bottom-6 right-5 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0052da] text-white flex items-center justify-center shadow-lg group-hover:bg-[#253041] transition-colors z-20 border-2 border-white">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 pt-7 sm:pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-[#253041] group-hover:text-[#0052da] transition-colors mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4c5165] leading-relaxed mb-4">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`https://wa.me/8801319630516?text=${encodeURIComponent(
                        `Hi Apex Plumber, I need help with ${srv.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#075E54] hover:text-[#25D366] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                      <span>WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="tel:+8801319630516"
                      className="text-slate-500 hover:text-[#0052da] transition p-1.5 rounded-lg hover:bg-blue-50 flex items-center gap-1 text-xs font-bold"
                      title="Call Now"
                      aria-label={`Call Apex Plumber about ${srv.title}`}
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span className="hidden sm:inline">Call</span>
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
