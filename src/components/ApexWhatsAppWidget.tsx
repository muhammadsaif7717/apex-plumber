"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, CheckCheck } from "lucide-react";

const WHATSAPP_NUMBER = "8801319630516";
const DISPLAY_PHONE = "+880 1319-630516";

const QUICK_PROMPTS = [
  "🚨 I have an emergency leak right now!",
  "🔧 Need a drain / toilet repair.",
  "💧 Water heater issue / replacement.",
  "💬 How much would a service estimate cost?",
];

// Official Authentic WhatsApp Vector Icon
export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Brand Logo Badge for Header
function ApexBrandBadge() {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0052da] via-[#0042b3] to-[#002e82] text-white shadow-md border-2 border-white/60 shrink-0 overflow-hidden">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <rect x="7" y="18" width="26" height="5" rx="1.5" fill="#FFFFFF" fillOpacity="0.3" />
        <rect x="5" y="16.5" width="3" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.5" />
        <rect x="32" y="16.5" width="3" height="8" rx="1" fill="#FFFFFF" fillOpacity="0.5" />
        <path d="M12 32L21 21" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="21" cy="21" r="2.2" fill="#ffb703" />
        <path
          d="M19 19L27 11C28.5 9.5 31 10.5 31 12.5V15L23 23"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 16L27 19"
          stroke="#ffb703"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="28" cy="28" r="1.5" fill="#38bdf8" />
        <circle cx="32" cy="24" r="2" fill="#60a5fa" />
      </svg>
      {/* Active Online Ping */}
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full" />
    </div>
  );
}

export function ApexWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Auto-hide floating button on scroll down, show on scroll up (Facebook mobile style)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always visible near top of page
          if (currentScrollY < 60) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current + 8) {
            // Scrolling down -> hide
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY.current - 8) {
            // Scrolling up -> show
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || message || "Hi Apex Plumber, I need plumbing service.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {/* Mobile Backdrop Blur Overlay */}
        {isOpen && (
          <motion.div
            key="whatsapp-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            id="whatsapp-mobile-backdrop"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 sm:hidden"
            aria-hidden="true"
          />
        )}

        {/* WhatsApp Chat Popup Window (Smooth Spring Entrance) */}
        {isOpen && (
          <motion.aside
            key="whatsapp-chat-popup"
            role="dialog"
            aria-label="WhatsApp Chat Window"
            initial={{ y: 50, scale: 0.9, opacity: 0, originX: 1, originY: 1 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 380,
                damping: 25,
                mass: 0.8,
              },
            }}
            exit={{
              y: 40,
              scale: 0.85,
              opacity: 0,
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
            }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <ApexBrandBadge />
                <div>
                  <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                    <span>Apex Plumber</span>
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  </h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online • Typically replies instantly
                  </p>
                </div>
              </div>

              {/* Header Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Background & Messages */}
            <div className="p-4 bg-[#E5DDD5]/50 flex-1 space-y-3 max-h-[340px] overflow-y-auto">
              {/* Timestamp */}
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-white/80 backdrop-blur-xs text-slate-500 px-2.5 py-0.5 rounded-full shadow-xs">
                  Today
                </span>
              </div>

              {/* Inbound Message */}
              <div className="flex items-start gap-2 max-w-[88%]">
                <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-xs border border-slate-100 text-xs text-slate-800 leading-relaxed">
                  <p className="font-semibold text-[#075E54] mb-0.5">Apex Plumber</p>
                  <p>
                    Hello! 👋 I am your master plumber. How can I help you today? Need fast emergency service or a quick repair?
                  </p>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-end gap-1">
                    <span>Just now</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                  </div>
                </div>
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="pt-2">
                <p className="text-[11px] text-slate-500 font-medium mb-1.5 px-1">
                  Tap a topic to chat on WhatsApp:
                </p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs bg-white/95 hover:bg-white text-slate-700 hover:text-[#075E54] font-medium p-2 rounded-xl border border-slate-200/80 shadow-xs hover:border-[#25D366] transition flex items-center justify-between group cursor-pointer"
                    >
                      <span>{prompt}</span>
                      <WhatsAppIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] shrink-0 ml-1.5 transition" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input & Direct Send */}
            <div className="p-3 bg-white border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 rounded-full px-3.5 py-2 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#25D366]/40 focus:outline-none transition border border-transparent focus:border-[#25D366]"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-sm transition shrink-0 cursor-pointer"
                  aria-label="Send message on WhatsApp"
                >
                  <Send className="w-3.5 h-3.5 fill-white" />
                </button>
              </div>

              {/* Direct Call Alternative */}
              <div className="pt-1 flex items-center justify-between text-[11px] px-1 text-slate-500 border-t border-slate-100">
                <span>Direct Call:</span>
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="font-bold text-[#0052da] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>
          </motion.aside>
        )}

        {/* Floating Action Button (Beautiful Spring Bounce Animation on entrance and exit) */}
        {!isOpen && isVisible && (
          <motion.aside
            key="whatsapp-floating-action"
            initial={{ y: 80, scale: 0.5, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 22,
                mass: 0.8,
              },
            }}
            exit={{
              y: 80,
              scale: 0.6,
              opacity: 0,
              transition: {
                duration: 0.22,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            aria-label="WhatsApp Contact Button"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(true)}
              className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Open WhatsApp Chat"
            >
              {/* Subtle Ping Ring */}
              <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

              {/* Authentic WhatsApp Vector Icon */}
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />

              {/* Tooltip on desktop hover */}
              <span className="hidden sm:group-hover:block absolute right-16 bg-[#253041] text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition">
                Chat on WhatsApp
              </span>
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
