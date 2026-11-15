"use client";

import React from "react";

interface ApexLogoProps {
  className?: string;
  showSubtitle?: boolean;
  inverted?: boolean;
}

export function ApexLogo({
  className = "h-10",
  showSubtitle = true,
  inverted = false,
}: ApexLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Precision Master Shield Emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0052da] via-[#0047bd] to-[#002f85] text-white shadow-md shadow-[#0052da]/25 shrink-0 border border-white/20">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs"
        >
          {/* Stylized Shield Shape */}
          <path
            d="M18 3L30 7.5V17C30 24.5 24.5 30 18 33C11.5 30 6 24.5 6 17V7.5L18 3Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          {/* Water Droplet Core */}
          <path
            d="M18 9C18 9 12 17 12 21C12 24.3 14.7 27 18 27C21.3 27 24 24.3 24 21C24 17 18 9 18 9Z"
            fill="#FFFFFF"
          />
          {/* Precision Plumbing Cross / Wrench Center */}
          <path
            d="M15 21H21M18 18V24"
            stroke="#0052da"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Orange Rescue Accent Dot */}
          <circle cx="18" cy="21" r="1.5" fill="#f97316" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span
            className={`text-lg sm:text-2xl font-black tracking-tight font-sans ${
              inverted ? "text-white" : "text-[#253041]"
            }`}
          >
            APEX
          </span>
          <span className="text-lg sm:text-2xl font-black tracking-tight text-[#0052da] font-sans">
            PLUMBER
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-blue-100 text-[#0052da]">
            PRO
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5 font-mono ${
              inverted ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Licensed Master Services
          </span>
        )}
      </div>
    </div>
  );
}
