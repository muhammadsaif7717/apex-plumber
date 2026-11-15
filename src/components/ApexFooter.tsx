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
  const { currentLocation, allLocations, setSelectedStateKey } = useLocation();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-[#253041] text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-700">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <ApexLogo className="text-white" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Management Plumbing includes a broad range of activities, and the many firms and their members often define these practices with master precision.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0052da] shrink-0" />
                <span>{currentLocation.localAddress}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <PhoneCall className="w-4 h-4 text-[#0052da] shrink-0" />
                <a
                  href={`tel:${currentLocation.phoneRaw}`}
                  className="font-mono font-bold hover:text-white transition"
                >
                  {currentLocation.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#0052da] shrink-0" />
                <span>dispatch@apexplumber.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 font-mono text-[11px] pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLocation.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              QUICK LINK
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#cost-calculator" className="hover:text-white transition">
                  Cost Estimator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Kitchen Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Gas Line Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Water Line Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Bathroom Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Basement Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Remodeling &amp; Repiping
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              NEWSLETTER
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              You will be notified when something new appears or emergency winterization alerts are issued.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#162132] border border-slate-700 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#0052da] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-plumco py-3 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Send Now</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              {newsletterSubscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>

            {/* Regional Market Switcher Quick Pills */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block mb-1.5">
                Active Markets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(allLocations).map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedStateKey(loc.id)}
                    className={`text-[10px] px-2 py-0.5 rounded font-mono transition ${
                      loc.id === currentLocation.id
                        ? "bg-[#0052da] text-white font-bold"
                        : "bg-[#162132] text-slate-400 hover:text-white"
                    }`}
                  >
                    {loc.stateCode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Apex Plumber Network, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">
              License Directory
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
