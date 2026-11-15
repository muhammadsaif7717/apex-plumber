"use client";

import React from "react";
import { PhoneCall, MapPin, CalendarCheck } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexMobileDock() {
  const { currentLocation, openBookingModal } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 pb-[calc(0.6rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1.5 xs:gap-2">
        {/* Direct Call Button (Apex Hotline) */}
        <a
          href={`tel:${currentLocation.phoneRaw}`}
          className="col-span-1 bg-[#0052da] hover:bg-[#0041ae] active:bg-[#00348c] text-white rounded-xl py-2 px-1 flex flex-col items-center justify-center text-center shadow-md shadow-[#0052da]/25 active:scale-95 transition cursor-pointer"
          aria-label={`Call Apex Plumber at ${currentLocation.phone}`}
        >
          <PhoneCall className="w-3.5 h-3.5 fill-white mb-0.5" />
          <span className="text-[11px] font-black tracking-tight leading-none whitespace-nowrap">
            Call Apex
          </span>
          <span className="text-[8px] xs:text-[9px] opacity-90 font-mono mt-0.5 whitespace-nowrap">
            24/7 Hotline
          </span>
        </a>

        {/* Book Apex Service Trigger */}
        <button
          type="button"
          onClick={() => openBookingModal({ urgency: "emergency" })}
          className="col-span-1 bg-[#253041] hover:bg-[#162132] text-white rounded-xl py-2 px-1 flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition cursor-pointer"
        >
          <CalendarCheck className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none whitespace-nowrap">
            Book Online
          </span>
          <span className="text-[8px] xs:text-[9px] text-amber-300 font-mono mt-0.5 whitespace-nowrap">
            Free Estimate
          </span>
        </button>

        {/* Location Served Scroll */}
        <a
          href="#coverage"
          className="col-span-1 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 rounded-xl py-2 px-1 flex flex-col items-center justify-center text-center border border-slate-200 active:scale-95 transition cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-[#0052da] mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none whitespace-nowrap">
            Service Area
          </span>
          <span className="text-[8px] xs:text-[9px] text-slate-500 font-mono mt-0.5 truncate max-w-full px-1">
            {currentLocation.primaryCity}
          </span>
        </a>
      </div>
    </div>
  );
}
