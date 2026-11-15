"use client";

import React from "react";
import { useLocation } from "@/context/LocationContext";
import {
  MapPin,
  PhoneCall,
  Clock,
  ShieldCheck,
  Building2,
} from "lucide-react";

export function ApexCoverage() {
  const {
    currentLocation,
    selectedStateKey,
    setSelectedStateKey,
    allLocations,
    setSelectedCity,
  } = useLocation();

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Turnkey Multi-State Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Select Your State & Metro Plumbing Market
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Switch markets to view live local dispatch hotlines, municipal master plumber licenses, and dedicated regional fleet telemetry.
          </p>
        </div>

        {/* State Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {Object.values(allLocations).map((loc) => {
            const isActive = loc.id === selectedStateKey;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedStateKey(loc.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl border text-sm font-bold transition shadow-xs ${
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100/80"
                }`}
              >
                <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800 text-orange-400">
                  {loc.stateCode}
                </span>
                <span>{loc.state}</span>
                <span className="text-xs opacity-75 font-normal">
                  ({loc.primaryCity})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active State Detail Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold uppercase tracking-wider mb-1">
                <span>Active Regional Hub</span>
                <span>•</span>
                <span>{currentLocation.activeVans} GPS-Tracked Vans</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                {currentLocation.companyName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {currentLocation.specialtyTag}
              </p>
            </div>

            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-md transition shrink-0 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{currentLocation.phone}</span>
            </a>
          </div>

          {/* Body Information */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-100">
            {/* Arrival Telemetry */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                Average Emergency Arrival
              </span>
              <div className="text-xl font-black text-slate-900 font-mono flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>{currentLocation.averageArrival}</span>
              </div>
              <p className="text-xs text-slate-500">
                Continuous 24/7 mobile readiness across municipal borders.
              </p>
            </div>

            {/* License Authority */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                Municipal Master License
              </span>
              <div className="text-base font-bold text-slate-900 font-mono flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="truncate">{currentLocation.licenseNumber}</span>
              </div>
              <p className="text-xs text-slate-500 truncate">
                {currentLocation.licenseAuthority}
              </p>
            </div>

            {/* Local Headquarters */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                Regional Dispatch Yard
              </span>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{currentLocation.localAddress}</span>
              </div>
              <p className="text-xs text-slate-500">
                Fully bonded, state-regulated commercial facility.
              </p>
            </div>
          </div>

          {/* Cities Covered in Region */}
          <div className="p-6 sm:p-8 bg-slate-50/50">
            <span className="text-xs font-bold font-mono uppercase text-slate-500 block mb-3">
              Metro Cities Served Under 45-Minute Dispatch Guarantee:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentLocation.cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className="bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow-2xs"
                >
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span>{city} Metro</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
