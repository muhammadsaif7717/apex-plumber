"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

interface FAQItem {
  question: string;
  answer: string;
}

export function ApexFAQ() {
  const { currentLocation } = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How quickly can you respond to an emergency plumbing issue?",
      answer:
        "For urgent situations such as burst water lines, active slab leaks, gas odor alerts, or sewer backups, my average arrival time is 30 to 45 minutes across the primary metro service radius. You can reach me 24/7 on my direct phone line.",
    },
    {
      question: "Do you charge by the hour or provide flat-rate pricing?",
      answer:
        "I provide transparent flat-rate pricing in writing before beginning any work. You will never encounter unexpected ticking-clock hourly charges, surprise travel surcharges, or hidden fees. What I quote before turning a wrench is what you pay.",
    },
    {
      question: "Will you personally perform the work, or send an apprentice?",
      answer:
        "I personally perform every single repair, inspection, and installation myself. When you hire Apex Plumber, you get 25+ years of licensed master craftsmanship on site—never an inexperienced helper or third-party subcontractor.",
    },
    {
      question: "Are you licensed and fully insured?",
      answer:
        `Yes. I hold an active Master Plumber License (${currentLocation.licenseNumber}) and carry comprehensive general liability insurance and state surety bonding for complete homeowner protection and peace of mind.`,
    },
    {
      question: "What types of plumbing warranties do you offer on parts and labor?",
      answer:
        "I stand behind my craftsmanship with a 10-Year Workmanship Warranty on major repiping and sewer relining jobs, and a minimum 1-year guarantee on standard fixture and valve installations, plus full manufacturer warranties on all OEM parts.",
    },
    {
      question: "What should I do immediately while waiting for you during an active leak?",
      answer:
        "First, locate and shut off your property's main water meter valve (usually near the street curb or in your utility garage). Turn off the power switch to your water heater to prevent dry-firing elements. If safe, clear valuables from the flooded zone, and I will be there shortly.",
    },
    {
      question: "Do you provide free estimates for major plumbing projects?",
      answer:
        "Yes! For scheduled replacements such as tankless water heaters, whole-home repiping, bathroom fixture upgrades, or trenchless sewer line repairs, I provide detailed on-site written estimates free of charge.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "I accept all major credit and debit cards (Visa, MasterCard, Amex, Discover), contactless mobile pay (Apple Pay, Google Pay), checks, Zelle, and electronic bank transfers with instant digital invoicing sent to your email.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Questions &amp; Answers</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Straightforward answers to the most common questions homeowners ask before scheduling a plumbing service call.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08, ease: "easeOut" }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-blue-50/40 border-[#0052da]/40 shadow-md"
                    : "bg-[#f8fbff] border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-[#0052da]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#253041] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0052da] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#0052da] text-white rotate-180"
                        : "bg-white text-slate-500 border border-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#4c5165] leading-relaxed border-t border-blue-100/60 mt-1 animate-in fade-in duration-200">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 sm:mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#253041]">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Call me directly or send a message for immediate answers.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center btn-plumco text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl shadow-xs whitespace-nowrap transition cursor-pointer w-full sm:w-auto"
            >
              <span>Contact Me Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
