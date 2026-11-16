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
  Calendar,
  MapPin,
  Camera,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

export function ApexAppointment() {
  const { currentLocation } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "Kitchen Plumbing & Disposals",
    urgency: "sameday",
    preferredDate: "",
    preferredTime: "morning",
    message: "",
    hasImage: false,
    fileName: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        hasImage: true,
        fileName: e.target.files[0].name,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticket = `APEX-${Math.floor(1000 + Math.random() * 9000)}`;
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
    <section
      id="contact"
      className="py-14 sm:py-20 lg:py-24 bg-[#253041] text-white relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Access to Apex Plumber */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffb600] uppercase tracking-widest font-mono">
              <span>:: Book a Master Plumber</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Let&apos;s Get Your Plumbing Problem Solved.
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Have an urgent leak, broken heater, or backed-up drain? Submit your request details below. Your submission routes straight to my phone, and I will confirm your appointment promptly.
            </p>

            {/* Direct Contact Card */}
            <div className="bg-[#162132] rounded-2xl p-4 sm:p-6 border border-slate-700 space-y-3 sm:space-y-4 text-left shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0052da] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase font-mono text-slate-400 font-bold">
                    Direct Phone Line (24/7 Urgencies)
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
                  <span>
                    Avg Arrival:{" "}
                    <strong className="text-white font-mono">
                      {currentLocation.averageArrival}
                    </strong>
                  </span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {currentLocation.licenseNumber}
                </span>
              </div>
            </div>

            {/* Personal Commitments */}
            <div className="space-y-2 text-left pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% direct workmanship by a 25-year master plumber</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Firm flat rate in writing before work begins</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero sales pressure or unneeded replacements</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 lg:p-10 text-[#253041] shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Michael Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (512) 555-0199"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-mono focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email & Street Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. michael@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0052da]" />
                        <span>Property Address / ZIP *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 842 S Olive St, Los Angeles 90014"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Service Category & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-semibold focus:bg-white focus:border-[#0052da] outline-none transition cursor-pointer"
                      >
                        <option value="Kitchen Plumbing & Disposals">Kitchen Plumbing &amp; Disposals</option>
                        <option value="Gas Line Fitting & Leak Isolation">Gas Line Fitting &amp; Leak Isolation</option>
                        <option value="Water Line & Slab Leak Detection">Water Line &amp; Slab Leak Detection</option>
                        <option value="Bathroom Plumbing & Toilets">Bathroom Plumbing &amp; Toilets</option>
                        <option value="Basement Sump Pumps & Defense">Basement Sump Pumps &amp; Defense</option>
                        <option value="Trenchless Sewer & Relining">Trenchless Sewer &amp; Relining</option>
                        <option value="Water Heater Repair / Replace">Water Heater Repair / Replace</option>
                        <option value="Other Plumbing Repair">Other Plumbing Inspection / Repair</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Urgency Level *
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) =>
                          setFormData({ ...formData, urgency: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-semibold focus:bg-white focus:border-[#0052da] outline-none transition cursor-pointer"
                      >
                        <option value="emergency">Emergency (Active Leak / ASAP)</option>
                        <option value="sameday">Same-Day Service</option>
                        <option value="scheduled">Scheduled Routine Visit</option>
                        <option value="consultation">Estimate / Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0052da]" />
                        <span>Preferred Service Date *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#253041] font-medium focus:bg-white focus:border-[#0052da] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Arrival Window *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] font-semibold focus:bg-white focus:border-[#0052da] outline-none transition cursor-pointer"
                      >
                        <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="evening">Late Afternoon (4:00 PM – 7:00 PM)</option>
                        <option value="first-available">First Available Window</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Describe the Plumbing Problem / Symptoms *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Water heater pilot went out, kitchen sink gurgling, or water pooling near baseboard..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#f4f8fe] border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#253041] focus:bg-white focus:border-[#0052da] outline-none transition resize-none"
                    />
                  </div>

                  {/* Optional Photo Upload */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-slate-500" />
                        <span>Upload Photo of Issue (Optional)</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        Helps bring exact parts on first trip
                      </span>
                    </label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-[#0052da] rounded-xl p-3 sm:p-4 text-center transition cursor-pointer bg-slate-50/50">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Camera className="w-4 h-4 text-[#0052da]" />
                        <span>
                          {formData.hasImage
                            ? `Selected: ${formData.fileName}`
                            : "Click or drag to attach a photo of pipe, leak, or fixture"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submission Disclaimer Note */}
                  <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-100 flex items-start gap-2 text-[11px] text-[#0052da]">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <strong>Confirmation Guarantee:</strong> I will personally call or text your phone number to confirm the exact arrival window prior to dispatch.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-plumco py-3.5 text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Schedule With Apex Plumber</span>
                  </button>

                  <div className="text-center text-[10px] sm:text-[11px] text-slate-500 pt-0.5 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct master plumber response • No spam • Transparent flat-rate quote</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 sm:py-8 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#253041]">
                    Appointment Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Your request ticket{" "}
                    <strong className="font-mono text-[#0052da] font-black">
                      {ticketId}
                    </strong>{" "}
                    has been delivered straight to my mobile dispatch. I will call or text your phone shortly to confirm arrival.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-plumco text-xs sm:text-sm font-bold py-2.5 px-4 cursor-pointer"
                    >
                      Book Another Service
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
