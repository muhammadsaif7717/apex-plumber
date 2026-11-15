"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PLUMCO_PROJECTS } from "@/data/plumcoData";
import { ExternalLink } from "lucide-react";

export function ApexProjects() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const categories = ["ALL", "BATHROOM", "GAS LINE", "KITCHEN", "DRAIN & SEWER"];

  const filteredProjects =
    activeTab === "ALL"
      ? PLUMCO_PROJECTS
      : PLUMCO_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Our Latest Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            Our Latest Project
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4c5165]">
            Explore real-world commercial & residential plumbing engineering executed by our licensed master technicians.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-extrabold tracking-wider transition ${
                activeTab === cat
                  ? "bg-[#0052da] text-white shadow-md shadow-[#0052da]/25"
                  : "bg-slate-100 hover:bg-slate-200 text-[#253041]"
              }`}
            >
              {cat === "ALL" ? "ALL PROJECTS" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 h-80 sm:h-96"
            >
              <Image
                src={proj.img}
                alt={proj.title}
                width={600}
                height={500}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#253041] via-[#253041]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono text-[#ffb600] font-bold uppercase tracking-wider mb-1">
                  {proj.category}
                </span>
                <h3 className="text-lg font-bold leading-snug mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300">
                  Client: {proj.client}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90">
                    Master Workmanship Verified
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0052da] text-white flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
