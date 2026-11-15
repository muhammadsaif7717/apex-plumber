"use client";

import React, { useState } from "react";
import { useLocation } from "@/context/LocationContext";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ApexHero() {
  const { currentLocation, openBookingModal } = useLocation();

  const [selectedIssue, setSelectedIssue] = useState<string>("burst-pipe");
  const [zipCode, setZipCode] = useState<string>("");
  const [urgency, setUrgency] = useState<"emergency" | "sameday">("emergency");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const issueOptions = [
    { id: "burst-pipe", label: "🚨 Busted / Leaking Pipe", priceEst: "$189+" },
    { id: "drain-clog", label: "🚿 Severe Drain / Main Sewer Clog", priceEst: "$149+" },
    { id: "water-heater", label: "🔥 Water Heater Leak / No Hot Water", priceEst: "$299+" },
    { id: "toilet-overflow", label: "🚽 Toilet Overflow / Sewage Backup", priceEst: "$165+" },
    { id: "gas-smell", label: "⚠️ Gas Odor / Gas Line Shutoff", priceEst: "$249+" },
  ];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode.trim() || zipCode.trim().length < 5) {
      setErrorMsg("Please enter a valid 5-digit ZIP code.");
      return;
    }
    setErrorMsg("");

    const issueObj = issueOptions.find((i) => i.id === selectedIssue);
    openBookingModal({
      serviceId: selectedIssue,
      issueDescription: issueObj?.label || "Emergency Plumbing Service",
      urgency: urgency === "emergency" ? "emergency" : "sameday",
      estimatedPriceRange: issueObj?.priceEst,
      zipCode: zipCode.trim(),
    });
  };

  return (
    <section
      id="emergency-dispatch"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle blueprint grid overlay for precision tradesman aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Trust & Direct Call Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* High-visibility pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/90 border border-orange-300 text-orange-900 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>24/7 Emergency Plumbing & Rooter Specialists</span>
              <span className="text-orange-400 font-bold">•</span>
              <span className="font-mono text-orange-950 font-bold">
                {currentLocation.primaryCity}, {currentLocation.stateCode}
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Busted Pipe? Clogged Drain?{" "}
              <span className="text-blue-600 underline decoration-orange-500/80 decoration-wavy decoration-2 underline-offset-8">
                Fast, Flat-Rate
              </span>{" "}
              Plumbers at Your Door.
            </h1>

            {/* Technical Sub-copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Licensed, bonded, and insured master technicians equipped with
              Spartan hydro-jetters, SeeSnake HD video scopes, and trenchless
              repair kits. Serving{" "}
              <strong className="text-slate-900 font-semibold">
                {currentLocation.companyName}
              </strong>{" "}
              with <span className="text-orange-700 font-bold">zero overtime fees</span> on nights, weekends, and holidays.
            </p>

            {/* Fleet & Arrival Telemetry Banner */}
            <div className="flex flex-wrap items-center gap-4 py-2.5 px-4 bg-slate-100/80 border border-slate-200/90 rounded-xl text-xs sm:text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>
                  Average Arrival:{" "}
                  <strong className="text-slate-900 font-mono font-bold">
                    {currentLocation.averageArrival}
                  </strong>
                </span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>
                  <strong className="text-slate-900 font-mono font-bold">
                    {currentLocation.activeVans} Vans
                  </strong>{" "}
                  Patrolling {currentLocation.primaryCity} Metro
                </span>
              </div>
            </div>

            {/* Direct Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`tel:${currentLocation.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-4 focus-visible:ring-orange-300"
                aria-label={`Immediate Dispatch call to ${currentLocation.phone}`}
              >
                <PhoneCall className="w-5 h-5 fill-white" />
                <span>Call Dispatch: {currentLocation.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openBookingModal({ urgency: "sameday" })}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Book Scheduled Inspection</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>A+ BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0" />
                <span>$2M Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                <span>100% Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 60-Second Fast Intake Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-7 relative">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-orange-600 font-bold font-mono">
                    Fast Online Intake
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Request Immediate Dispatch
                  </h3>
                </div>
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Live Queue</span>
                </div>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                {/* Select Plumbing Issue */}
                <div>
                  <label
                    htmlFor="hero-issue"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    1. Select Plumbing Issue:
                  </label>
                  <select
                    id="hero-issue"
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  >
                    {issueOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label} ({opt.priceEst})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Urgency Selector */}
                <div>
                  <span className="block text-xs font-bold text-slate-800 mb-1.5">
                    2. Service Urgency:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency("emergency")}
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg border text-xs font-bold transition ${
                        urgency === "emergency"
                          ? "bg-orange-50 border-orange-500 text-orange-900 ring-1 ring-orange-500"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="flex items-center gap-1 text-orange-600 font-extrabold">
                        <Zap className="w-3.5 h-3.5 fill-orange-500" />
                        Immediate Emergency
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                        Under 45 Mins Arrival
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUrgency("sameday")}
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg border text-xs font-bold transition ${
                        urgency === "sameday"
                          ? "bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-blue-700 font-extrabold">
                        Same-Day Scheduled
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                        Standard Window
                      </span>
                    </button>
                  </div>
                </div>

                {/* Service Zip Code */}
                <div>
                  <label
                    htmlFor="hero-zip"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    3. Service ZIP Code ({currentLocation.primaryCity} Metro):
                  </label>
                  <input
                    type="text"
                    id="hero-zip"
                    maxLength={5}
                    placeholder="e.g. 78701 or 33101"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value.replace(/\D/g, ""));
                      if (errorMsg) setErrorMsg("");
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 font-mono focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-600 font-medium mt-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errorMsg}
                    </p>
                  )}
                </div>

                {/* Submit Intake */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  <span>Dispatch Available Plumber</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Security and Transparency Micro-copy */}
                <div className="pt-2 text-center text-[11px] text-slate-500 space-y-1">
                  <p>
                    🔒 No credit card required. Free diagnostic estimate.
                  </p>
                  <p className="font-mono text-slate-600">
                    Authority: {currentLocation.licenseAuthority}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
