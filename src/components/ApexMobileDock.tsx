"use client";

import React from "react";
import { PhoneCall, MapPin, Zap } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexMobileDock() {
  const { currentLocation, openBookingModal } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl p-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Direct Call Button (Dominant Emergency Action) */}
        <a
          href={`tel:${currentLocation.phoneRaw}`}
          className="col-span-1 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-xl py-2.5 px-2 flex flex-col items-center justify-center text-center shadow-md shadow-orange-600/25 active:scale-95 transition"
          aria-label={`Call local plumber at ${currentLocation.phone}`}
        >
          <PhoneCall className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[11px] font-black tracking-tight leading-none">
            Call Plumber
          </span>
          <span className="text-[9px] opacity-90 font-mono mt-0.5">
            24/7 Dispatch
          </span>
        </a>

        {/* Book Online Modal Trigger */}
        <button
          type="button"
          onClick={() => openBookingModal({ urgency: "sameday" })}
          className="col-span-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl py-2.5 px-2 flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition"
        >
          <Zap className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none">
            Book Online
          </span>
          <span className="text-[9px] opacity-90 font-mono mt-0.5">
            Free Estimate
          </span>
        </button>

        {/* Coverage Areas Scroll */}
        <a
          href="#coverage"
          className="col-span-1 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 rounded-xl py-2.5 px-2 flex flex-col items-center justify-center text-center border border-slate-200 active:scale-95 transition"
        >
          <MapPin className="w-4 h-4 text-slate-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight leading-none">
            Areas Served
          </span>
          <span className="text-[9px] text-slate-500 font-mono mt-0.5 truncate max-w-full px-1">
            {currentLocation.primaryCity}
          </span>
        </a>
      </div>
    </div>
  );
}
