"use client";

import React from "react";
import { ApexLogo } from "./ApexLogo";
import { useLocation } from "@/context/LocationContext";
import {
  PhoneCall,
  ShieldCheck,
  CreditCard,
  MapPin,
  CheckCircle,
} from "lucide-react";

export function ApexFooter() {
  const { currentLocation, allLocations, setSelectedStateKey } = useLocation();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Pitch & Financing Strip */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-orange-400 font-bold">
              <CreditCard className="w-4 h-4" />
              <span>Consumer Repair Financing Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              $0 Down & 0% APR Financing for up to 18 Months
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Don’t let unexpected sewer pipe ruptures or water heater failures drain your savings. Partnered with Wisetack & GreenSky with 60-second soft-credit pre-approval.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${currentLocation.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-extrabold text-sm transition shadow-md shadow-orange-600/30"
            >
              <PhoneCall className="w-4 h-4 fill-white" />
              <span>{currentLocation.phone}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <ApexLogo />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              America&apos;s premier 24/7 residential and commercial plumbing contractor network. Delivering high-definition camera diagnostics, heavy-duty hydro-jetting, and upfront flat-rate transparency.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2 font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLocation.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{currentLocation.localAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Trade Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
              Emergency Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Burst Pipe Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  4,000 PSI Hydro-Jetting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Tankless Water Heaters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Trenchless Sewer Pipelining
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  HD Video Sewer Scopes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Gas Line Leak Detection
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Switcher */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
              Switch Contractor Market
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {Object.values(allLocations).map((loc) => (
                <li key={loc.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedStateKey(loc.id)}
                    className={`hover:text-white transition text-left flex items-center gap-1.5 ${
                      loc.id === currentLocation.id
                        ? "text-orange-400 font-bold"
                        : "text-slate-400"
                    }`}
                  >
                    <span>•</span>
                    <span>
                      {loc.state} ({loc.primaryCity})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Warranties & Accreditations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
              Guarantees & Standards
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero Overtime Night Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Clean Home $100 Pledge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>50-Year Pipe Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Google Guaranteed Pro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimers */}
        <div className="pt-8 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong>State Licensing Notice:</strong> All emergency plumbing, drain cleaning, water heating, and gas fitting services performed by Apex Plumber are executed exclusively by state-licensed, insured, and background-vetted master and journeyman plumbing technicians. Work complies strictly with the Uniform Plumbing Code (UPC), International Plumbing Code (IPC), NFPA fuel codes, and local municipal regulations.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-500">
            <div>
              © 2026 Apex Plumber Network, LLC. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-400 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition">
                Terms of Emergency Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition">
                License Directory
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
