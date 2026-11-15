"use client";

import React, { useState } from "react";
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
    subject: "Emergency Plumbing Service",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticket = `APX-${Math.floor(1000 + Math.random() * 9000)}`;
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
    <section id="contact" className="py-20 sm:py-24 bg-[#253041] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and 24/7 Dispatch Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffb600] uppercase tracking-widest font-mono">
              <span>:: BOOK ONLINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Online Booking For Appointments.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Facing an active burst pipe, clogged sewer, or cold water heater? Submit your appointment details for immediate dispatch across {currentLocation.primaryCity}. Zero overtime fees guaranteed.
            </p>

            {/* Quick Contact Card */}
            <div className="bg-[#162132] rounded-2xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0052da] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono text-slate-400 font-bold">
                    Emergency Dispatch Hotline
                  </div>
                  <a
                    href={`tel:${currentLocation.phoneRaw}`}
                    className="text-lg font-black font-mono text-white hover:text-[#ffb600] transition"
                  >
                    {currentLocation.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Avg Arrival: <strong className="text-white font-mono">{currentLocation.averageArrival}</strong>
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Plumco Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 text-[#253041] shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name Here *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Here *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#253041] font-mono focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#253041] font-semibold focus:bg-white focus:border-[#0052da] outline-none transition"
                      >
                        <option value="Kitchen plumbing">Kitchen Plumbing</option>
                        <option value="Gas Line Services">Gas Line Services</option>
                        <option value="Water Line Repair">Water Line Repair</option>
                        <option value="Bathroom Plumbing">Bathroom Plumbing</option>
                        <option value="Basement Plumbing">Basement Plumbing</option>
                        <option value="Remodeling Service">Remodeling &amp; Repiping</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Short Text / Description of Issue *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your plumbing problem or requested appointment date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-plumco py-4 text-base font-extrabold flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Now</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-500 pt-1">
                    Free diagnostic consultation • Zero dispatch fee commitment
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#253041]">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your dispatch ticket <strong className="font-mono text-[#0052da] font-black">{ticketId}</strong> has been allocated to a master technician en route to your location.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-plumco text-sm font-bold"
                    >
                      Book Another Service
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
