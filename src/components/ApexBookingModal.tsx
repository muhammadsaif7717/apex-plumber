"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useLocation } from "@/context/LocationContext";
import {
  X,
  PhoneCall,
  CheckCircle2,
  Clock,
  Zap,
  AlertCircle,
  Truck,
  Copy,
  Check,
} from "lucide-react";

export function ApexBookingModal() {
  const {
    isBookingModalOpen,
    closeBookingModal,
    bookingPrefill,
    currentLocation,
  } = useLocation();

  if (!isBookingModalOpen) return null;

  return (
    <ApexBookingModalContent
      key={
        bookingPrefill
          ? `${bookingPrefill.serviceId || "custom"}-${bookingPrefill.urgency || "emergency"}-${bookingPrefill.zipCode || "zip"}`
          : "default"
      }
      closeBookingModal={closeBookingModal}
      bookingPrefill={bookingPrefill}
      currentLocation={currentLocation}
    />
  );
}

interface ContentProps {
  closeBookingModal: () => void;
  bookingPrefill: ReturnType<typeof useLocation>["bookingPrefill"];
  currentLocation: ReturnType<typeof useLocation>["currentLocation"];
}

function ApexBookingModalContent({
  closeBookingModal,
  bookingPrefill,
  currentLocation,
}: ContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    zip: bookingPrefill?.zipCode || "",
    issue: bookingPrefill?.issueDescription || "",
    urgency: (bookingPrefill?.urgency === "emergency" ? "emergency" : "sameday") as
      | "emergency"
      | "sameday",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.street.trim()) {
      setErrorMsg("Please complete all required dispatch fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = `DAVE-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setIsSuccess(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0052da", "#ffb600", "#10B981", "#162132"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }
    }, 600);
  };

  const copyTicket = () => {
    if (ticketId) {
      navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="bg-[#253041] text-white p-5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0052da] text-white flex items-center justify-center font-bold">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">
                {isSuccess ? "Service Dispatched" : "Apex Plumber Priority Request"}
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                Licensed Master Plumber • {currentLocation.licenseNumber}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeBookingModal}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1.5">
                  Required Response Speed:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: "emergency" })}
                    className={`p-2.5 rounded-lg border text-xs font-bold text-left transition flex items-center justify-between ${
                      formData.urgency === "emergency"
                        ? "bg-blue-50 border-[#0052da] text-[#0052da] ring-1 ring-[#0052da]"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    <span>🚨 Immediate Emergency</span>
                    <span className="text-[10px] font-mono text-[#0052da] font-extrabold">
                      &lt; 35 Mins
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: "sameday" })}
                    className={`p-2.5 rounded-lg border text-xs font-bold text-left transition flex items-center justify-between ${
                      formData.urgency === "sameday"
                        ? "bg-blue-50 border-[#0052da] text-[#0052da] ring-1 ring-[#0052da]"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    <span>📅 Scheduled Same-Day</span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">
                      2-Hr Window
                    </span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-slate-800 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-[#0052da] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-800 mb-1">
                    Your Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="e.g. (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono focus:bg-white focus:border-[#0052da] outline-none"
                  />
                </div>
              </div>

              {/* Street & ZIP */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="modal-street" className="block text-xs font-bold text-slate-800 mb-1">
                    Street Address *
                  </label>
                  <input
                    id="modal-street"
                    type="text"
                    required
                    placeholder="e.g. 1204 Oak Ridge Dr"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-[#0052da] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-zip" className="block text-xs font-bold text-slate-800 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    id="modal-zip"
                    type="text"
                    required
                    maxLength={5}
                    placeholder="e.g. 78701"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, "") })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono focus:bg-white focus:border-[#0052da] outline-none"
                  />
                </div>
              </div>

              {/* Issue Description */}
              <div>
                <label htmlFor="modal-issue" className="block text-xs font-bold text-slate-800 mb-1">
                  Describe What Happened
                </label>
                <textarea
                  id="modal-issue"
                  rows={2}
                  placeholder="e.g. Water heater leaking from base, or kitchen drain bubbling up into dishwasher."
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:border-[#0052da] outline-none resize-none"
                />
              </div>

              {bookingPrefill?.estimatedPriceRange && (
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs flex items-center justify-between text-blue-900">
                  <span>Locked In Estimated Price:</span>
                  <span className="font-mono font-bold">{bookingPrefill.estimatedPriceRange}</span>
                </div>
              )}

              {errorMsg && (
                <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errorMsg}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-plumco py-3.5 px-4 text-sm font-extrabold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching Apex Plumber Van...</span>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-white" />
                      <span>Confirm &amp; Alert Dispatch Unit</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                Zero dispatch commitment • Certified master plumbers assigned to your call
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-mono font-bold text-emerald-600 tracking-wider">
                  Apex Plumber Dispatched
                </span>
                <h4 className="text-xl font-black text-slate-900 mt-1">
                  Master Technician En Route In Mobile Van
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Your request has reached our active emergency unit. Our master technician is loading tools and will call your phone prior to arrival.
                </p>
              </div>

              {/* Ticket ID */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-xs mx-auto text-left">
                <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
                  Direct Dispatch Ticket
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-2xl font-black font-mono text-slate-900 tracking-wider">
                    {ticketId}
                  </span>
                  <button
                    type="button"
                    onClick={copyTicket}
                    className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition"
                    title="Copy Ticket ID"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Estimated Arrival: ~{currentLocation.averageArrival}</span>
                </div>
              </div>

              {/* Apex Profile Badge */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3.5 text-left text-xs max-w-sm mx-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0052da] text-white flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Apex Plumber Emergency Unit
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono">
                    Mobile Workshop • {currentLocation.licenseNumber}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${currentLocation.phoneRaw}`}
                  className="w-full btn-plumco py-3 text-sm font-extrabold flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Dispatch Hotline: {currentLocation.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="w-full py-2.5 text-slate-600 hover:text-slate-800 text-xs font-semibold"
                >
                  Done &amp; Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
