"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useLocation } from "@/context/LocationContext";
import {
  PhoneCall,
  CheckCircle2,
  Clock,
  Send,
} from "lucide-react";

export function ApexAppointment() {
  const { currentLocation } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Kitchen plumbing",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticket = `DAVE-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(ticket);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0052da", "#ffb600", "#10B981", "#ffffff"],
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#253041] text-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Access to Dave */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffb600] uppercase tracking-widest font-mono">
              <span>:: Direct Booking With Dave</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Hire Me Directly For Your Plumbing Need.
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Have a burst pipe, broken heater, or backed up sewer? Send your info below and it goes straight to my mobile phone. I reply within 10 minutes during active service hours.
            </p>

            {/* Direct Contact Card */}
            <div className="bg-[#162132] rounded-2xl p-4 sm:p-6 border border-slate-700 space-y-3 sm:space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0052da] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase font-mono text-slate-400 font-bold">
                    Dave Vance&apos;s Direct Cell Phone
                  </div>
                  <a
                    href={`tel:${currentLocation.phoneRaw}`}
                    className="text-base sm:text-lg font-black font-mono text-white hover:text-[#ffb600] transition whitespace-nowrap"
                  >
                    {currentLocation.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Avg Arrival: <strong className="text-white font-mono">{currentLocation.averageArrival}</strong></span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 text-[#253041] shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-mono focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select What You Need Done *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-semibold focus:bg-white focus:border-[#0052da] outline-none transition"
                      >
                        <option value="Kitchen plumbing">Kitchen Plumbing &amp; Disposal</option>
                        <option value="Gas Line Services">Gas Line Fitting &amp; Leak Check</option>
                        <option value="Water Line Repair">Water Line &amp; Slab Leak</option>
                        <option value="Bathroom Plumbing">Bathroom Plumbing &amp; Toilet</option>
                        <option value="Basement Plumbing">Basement Sump Pump Installation</option>
                        <option value="Remodeling Service">Remodeling &amp; Trenchless Sewer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Describe the Problem / Symptoms *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Water heater pilot went out, or kitchen drain gurgling..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-plumco py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Directly To Dave</span>
                  </button>

                  <div className="text-center text-[10px] sm:text-[11px] text-slate-500 pt-1">
                    🔒 No sales pitch • Dave personally reads every single message
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#253041]">
                    Message Sent Directly to Dave!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Your request ticket <strong className="font-mono text-[#0052da] font-black">{ticketId}</strong> has been received by Master Plumber Dave Vance. Dave will call you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-plumco text-xs sm:text-sm font-bold py-2.5 px-4 cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
