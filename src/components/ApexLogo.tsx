import React from "react";

interface ApexLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function ApexLogo({ className = "h-10", showSubtitle = true }: ApexLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Shield Icon with Droplet & Wrench */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 border border-slate-700 shadow-md shadow-slate-900/10 shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Outer Shield Outline */}
          <path
            d="M18 3L6 7.5V16.5C6 24.3 11.2 31.5 18 33C24.8 31.5 30 24.3 30 16.5V7.5L18 3Z"
            fill="#0F172A"
            stroke="#2563EB"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Safety Orange Water Droplet */}
          <path
            d="M18 10C18 10 12.5 16.8 12.5 20.2C12.5 23.3 15 25.8 18 25.8C21 25.8 23.5 23.3 23.5 20.2C23.5 16.8 18 10 18 10Z"
            fill="#F97316"
          />
          {/* Highlight Specular Glint */}
          <path
            d="M15.5 19C15.5 17.5 17 15 17.5 14"
            stroke="#FED7AA"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Precision Plumbing Wrench Accent */}
          <path
            d="M13.5 12L22.5 24"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M20.5 22L24.5 24.5L22 26.5"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
            APEX
          </span>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600 font-sans">
            PLUMBER
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 font-mono">
            Emergency & Rooter Co.
          </span>
        )}
      </div>
    </div>
  );
}
