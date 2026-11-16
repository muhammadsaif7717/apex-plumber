"use client";

import React, { useState } from "react";
import { ApexLogo } from "./ApexLogo";
import { useLocation } from "@/context/LocationContext";
import {
  PhoneCall,
  MapPin,
  Mail,
  Send,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export function ApexFooter() {
  const { currentLocation } = useLocation();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-[#253041] text-slate-300 pt-16 pb-16 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-700">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <ApexLogo inverted showSubtitle />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Apex Plumber delivers elite residential and commercial plumbing services with 24/7 rapid dispatch, precision camera diagnostics, and guaranteed upfront flat-rate pricing.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0052da] shrink-0" />
                <span>Service Hub: {currentLocation.localAddress}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <PhoneCall className="w-4 h-4 text-[#0052da] shrink-0" />
                <a
                  href={`tel:${currentLocation.phoneRaw}`}
                  className="font-mono font-bold hover:text-white transition"
                >
                  Dispatch: {currentLocation.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#0052da] shrink-0" />
                <span>dispatch@apexplumber.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 font-mono text-[11px] pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLocation.licenseNumber} ({currentLocation.licenseAuthority})</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Apex Plumber
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-hire-me" className="hover:text-white transition">
                  Why Apex Plumber
                </a>
              </li>
              <li>
                <a href="#cost-calculator" className="hover:text-white transition">
                  Pricing Estimator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition">
                  Plumbing Tips &amp; Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Book Service
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              MY SPECIALTIES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Emergency Burst Pipes
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
                  Gas Line Fitting &amp; Leaks
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Bathroom Fixture Installations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Trenchless Sewer Relining
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Advice */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              SEASONAL ADVICE
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get seasonal winter freeze alerts, water heater maintenance tips, and exclusive specials from Apex Plumber.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Your Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-[#162132] border border-slate-700 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#0052da] outline-none"
              />
              <button
                type="submit"
                className="w-full btn-plumco py-3 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Subscribe For Tips</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              {newsletterSubscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  <span>Subscribed! Apex Plumber will send seasonal alerts.</span>
                </div>
              )}
            </form>

            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block mb-1.5">
                California Licensing:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#162132] border border-slate-700 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CSLB C-36 Master License #1094321 (CA)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Apex Plumber. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Certified Master Services</span>
            <span>•</span>
            <span>$2M Fully Insured</span>
            <span>•</span>
            <span>Zero Overtime Surcharges</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
