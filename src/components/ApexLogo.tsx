import React from "react";

interface ApexLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function ApexLogo({ className = "h-10", showSubtitle = true }: ApexLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Plumco-Style Brand Icon */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0052da] to-[#003899] text-white shadow-md shadow-[#0052da]/25 shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Stylized Droplet and Wrench Emblem */}
          <path
            d="M18 4C18 4 9 14.5 9 20.5C9 25.5 13 29.5 18 29.5C23 29.5 27 25.5 27 20.5C27 14.5 18 4 18 4Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M18 7C18 7 11.5 15.5 11.5 20.5C11.5 24.1 14.4 27 18 27C21.6 27 24.5 24.1 24.5 20.5C24.5 15.5 18 7 18 7Z"
            fill="#FFFFFF"
          />
          <path
            d="M15 15L21 21M21 15L15 21"
            stroke="#0052da"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className="text-2xl font-black tracking-tight text-[#253041] font-sans">
            Apex
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-[#0052da] font-sans">
            Plumber
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 font-mono">
            Plumbing &amp; Rooter Services
          </span>
        )}
      </div>
    </div>
  );
}
