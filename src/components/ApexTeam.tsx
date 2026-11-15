"use client";

import React from "react";
import Image from "next/image";
import { PLUMCO_TEAM } from "@/data/plumcoData";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexTeam() {
  const { currentLocation } = useLocation();

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#f4f8fe] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Dedicated Member</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            Dedicated Member
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4c5165]">
            Licensed master tradesmen on duty across {currentLocation.primaryCity}. Background-checked, drug-screened, and state certified.
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {PLUMCO_TEAM.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col group border border-slate-100"
            >
              {/* Member Portrait */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={450}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#253041]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{member.license}</span>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#253041] group-hover:text-[#0052da] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={`tel:${currentLocation.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0052da] hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct Dispatch Line</span>
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
