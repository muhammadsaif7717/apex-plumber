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
      {/* Practical Plumbing Icon: Heavy-Duty Pipe Wrench & Pipe Water Flow */}
      <div className="relative flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0052da] via-[#0042b3] to-[#002e82] text-white shadow-md shadow-[#0052da]/25 shrink-0 border border-white/20">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-7 sm:h-7"
        >
          {/* Water Pipe Section (Horizontal Pipe Conduit) */}
          <rect
            x="7"
            y="18"
            width="26"
            height="5"
            rx="1.5"
            fill="#FFFFFF"
            fillOpacity="0.25"
          />
          {/* Pipe Joint / Coupler Rings */}
          <rect x="5" y="16.5" width="3" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.4" />
          <rect x="32" y="16.5" width="3" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.4" />

          {/* Heavy-Duty Pipe Wrench (Angled across the pipe) */}
          {/* Wrench Handle (Safety Orange / Rescue Amber) */}
          <path
            d="M12 32L21 21"
            stroke="#f97316"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Wrench Adjustment Nut / Knurl */}
          <circle cx="21" cy="21" r="2.2" fill="#ffb703" />

          {/* Wrench Hook Jaw (Gripping top of pipe) */}
          <path
            d="M21 20L23 14H17V17"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Wrench Heel Jaw (Gripping bottom of pipe) */}
          <path
            d="M20 22L25 24"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Pristine Droplet of Flowing Water (Top Right) */}
          <path
            d="M27 7C27 7 23 11.5 23 14.2C23 16.3 24.8 18 27 18C29.2 18 31 16.3 31 14.2C31 11.5 27 7 27 7Z"
            fill="#38bdf8"
          />
          <path
            d="M26.2 12C26.2 12 24.8 13.8 24.8 14.8C24.8 15.6 25.4 16.2 26.2 16.2"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark (Strictly "APEX PLUMBER", Zero "PRO" badge) */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span
            className={`text-base xs:text-lg sm:text-2xl font-black tracking-tight font-sans ${
              inverted ? "text-white" : "text-[#253041]"
            }`}
          >
            APEX
          </span>
          <span className="text-base xs:text-lg sm:text-2xl font-black tracking-tight text-[#0052da] font-sans">
            PLUMBER
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`hidden xs:block text-[8px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5 sm:mt-1 font-mono ${
              inverted ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Plumbing &amp; Rooter Services
          </span>
        )}
      </div>
    </div>
  );
}
