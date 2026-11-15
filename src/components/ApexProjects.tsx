"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PLUMCO_PROJECTS } from "@/data/plumcoData";
import { CheckCircle2 } from "lucide-react";

export function ApexProjects() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const categories = ["ALL", "BATHROOM", "GAS LINE", "KITCHEN", "DRAIN & SEWER"];

  const filteredProjects =
    activeTab === "ALL"
      ? PLUMCO_PROJECTS
      : PLUMCO_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-24 bg-[#f4f8fe] border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Case Studies &amp; Solved Work</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Recent Projects We Successfully Solved
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Explore real plumbing challenges our master technicians diagnosed and resolved for local residential homeowners and commercial restaurants.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs font-extrabold tracking-wider transition cursor-pointer whitespace-nowrap ${
                activeTab === cat
                  ? "bg-[#0052da] text-white shadow-md shadow-[#0052da]/25"
                  : "bg-white hover:bg-slate-100 text-[#253041] border border-slate-200"
              }`}
            >
              {cat === "ALL" ? "ALL PROJECTS" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Stable, No Blinking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#253041]/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-xs">
                  {proj.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#253041] mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <div className="text-[11px] text-[#0052da] font-mono font-bold mb-3">
                    Client: {proj.client}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs text-[#4c5165] bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <strong className="text-slate-700">Problem:</strong> {proj.problem}
                    </div>
                    <div>
                      <strong className="text-emerald-700">Apex Plumber Solution:</strong> {proj.outcome}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    Inspected &amp; Code Passed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
