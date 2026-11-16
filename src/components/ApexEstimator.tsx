"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLocation } from "@/context/LocationContext";
import {
  CheckCircle,
  Zap,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";

interface RepairOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  timeHours: string;
  desc: string;
}

const REPAIR_TYPES: RepairOption[] = [
  {
    id: "drain-sewer",
    name: "Clogged Drain or Sewer Line",
    baseMin: 149,
    baseMax: 295,
    timeHours: "1 – 2 Hours",
    desc: "Includes snake / hydro-scrubbing & camera diagnostic check.",
  },
  {
    id: "water-heater",
    name: "Water Heater Breakdown / Replacement",
    baseMin: 299,
    baseMax: 750,
    timeHours: "2 – 4 Hours",
    desc: "Includes diagnostic testing, thermal valves & element restoration.",
  },
  {
    id: "pipe-leak",
    name: "Active Pipe Rupture or Slab Leak",
    baseMin: 189,
    baseMax: 490,
    timeHours: "1.5 – 3 Hours",
    desc: "Non-destructive acoustic pinpointing & Pro-Press copper repair.",
  },
  {
    id: "fixture-install",
    name: "Fixture Replacement (Toilet/Faucet/Disposal)",
    baseMin: 135,
    baseMax: 250,
    timeHours: "1 – 2 Hours",
    desc: "Complete shutoff valve renewal, supply lines & wax ring seal.",
  },
  {
    id: "repipe",
    name: "Whole-House Repipe or Sewer Relining",
    baseMin: 2200,
    baseMax: 4900,
    timeHours: "1 – 2 Days",
    desc: "Grade-A PEX-a barrier piping or no-dig epoxy sewer lining.",
  },
];

const PROPERTY_TYPES = [
  { id: "single-family", label: "Single Family Home", multiplier: 1.0 },
  { id: "townhouse", label: "Multi-Story Townhouse", multiplier: 1.15 },
  { id: "commercial", label: "Commercial / Restaurant", multiplier: 1.35 },
];

const URGENCY_OPTIONS = [
  {
    id: "immediate",
    label: "Immediate Emergency (<45 Mins)",
    fee: 0,
    note: "$0 Overtime — Fee waived with repair",
  },
  {
    id: "same-day",
    label: "Same-Day Scheduled",
    fee: 0,
    note: "Guaranteed arrival in selected 2-hr window",
  },
  {
    id: "standard",
    label: "Standard Business Hours",
    fee: 0,
    note: "Flexible scheduling with priority booking",
  },
];

export function ApexEstimator() {
  const { currentLocation } = useLocation();

  const [selectedRepairId, setSelectedRepairId] = useState<string>("pipe-leak");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("single-family");
  const [selectedUrgencyId, setSelectedUrgencyId] = useState<string>("immediate");

  const currentRepair = useMemo(
    () => REPAIR_TYPES.find((r) => r.id === selectedRepairId) || REPAIR_TYPES[0],
    [selectedRepairId]
  );

  const currentProperty = useMemo(
    () =>
      PROPERTY_TYPES.find((p) => p.id === selectedPropertyId) ||
      PROPERTY_TYPES[0],
    [selectedPropertyId]
  );

  const calculation = useMemo(() => {
    const min = Math.round(currentRepair.baseMin * currentProperty.multiplier);
    const max = Math.round(currentRepair.baseMax * currentProperty.multiplier);
    return {
      priceRange: `$${min} – $${max}`,
      duration: currentRepair.timeHours,
    };
  }, [currentRepair, currentProperty]);

  const handleLockInPrice = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cost-calculator" className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Upfront Pricing Engine</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Plumbing Repair Cost Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base">
            No guessing games or surprise fees. Calculate an instant flat-rate estimate tailored to your property in {currentLocation.primaryCity}.
          </p>
        </motion.div>

        {/* 3-Step Interactive Container (Stable, No Blinking) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 sm:p-8 lg:p-10 max-w-5xl mx-auto"
        >
          {/* Step 1: Repair Type */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Select Your Plumbing Issue
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {REPAIR_TYPES.map((repair) => (
                <button
                  key={repair.id}
                  type="button"
                  onClick={() => setSelectedRepairId(repair.id)}
                  className={`text-left p-3.5 rounded-xl border transition flex flex-col justify-between ${
                    selectedRepairId === repair.id
                      ? "bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20"
                      : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/70"
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    {repair.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mb-2 leading-relaxed">
                    {repair.desc}
                  </div>
                  <div className="text-xs font-mono font-bold text-blue-700 mt-auto">
                    Base: ${repair.baseMin} – ${repair.baseMax}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Property Structure */}
          <div className="mb-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Property Architecture
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROPERTY_TYPES.map((prop) => (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => setSelectedPropertyId(prop.id)}
                  className={`p-3.5 rounded-xl border text-center font-bold text-sm transition ${
                    selectedPropertyId === prop.id
                      ? "bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 text-blue-900"
                      : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/70 text-slate-700"
                  }`}
                >
                  <div>{prop.label}</div>
                  <span className="text-[11px] font-mono font-normal text-slate-500 block mt-0.5">
                    {prop.multiplier === 1 ? "Standard Rates" : "Structural Complexity Adj."}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Dispatch Urgency */}
          <div className="mb-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Service Urgency
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {URGENCY_OPTIONS.map((urg) => (
                <button
                  key={urg.id}
                  type="button"
                  onClick={() => setSelectedUrgencyId(urg.id)}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    selectedUrgencyId === urg.id
                      ? "bg-orange-50/70 border-orange-500 ring-2 ring-orange-500/20 text-orange-950"
                      : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/70 text-slate-700"
                  }`}
                >
                  <div className="font-bold text-sm flex items-center gap-1.5">
                    {urg.id === "immediate" && (
                      <Zap className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    )}
                    <span>{urg.label}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">
                    {urg.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Calculation Output Bar */}
          <div className="bg-slate-950 text-white rounded-xl p-6 sm:p-7 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Estimated Range */}
              <div className="lg:col-span-5 space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-orange-400 font-semibold">
                  Estimated Flat-Rate Cost
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                  {calculation.priceRange}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-300" />
                  <span>Est. Duration: {calculation.duration}</span>
                </div>
              </div>

              {/* What is Included */}
              <div className="lg:col-span-4 text-xs text-slate-300 space-y-1.5 border-y lg:border-y-0 lg:border-l lg:border-r border-slate-800 py-3 lg:py-0 lg:px-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full HD Camera / Acoustic Scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>OEM Parts & Factory Warranties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero Overtime Night/Weekend Fees</span>
                </div>
              </div>

              {/* Lock In Estimated Price Button */}
              <div className="lg:col-span-3">
                <button
                  type="button"
                  onClick={handleLockInPrice}
                  className="w-full py-3.5 px-4 bg-[#0052da] hover:bg-[#0042b3] active:bg-[#003699] text-white font-extrabold rounded-lg text-sm transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Lock In Estimated Price</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-center lg:text-left text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-orange-400" />
                Final price confirmed in writing before technician begins work.
              </span>
              <span className="font-mono text-slate-300">
                {currentLocation.licenseAuthority}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
