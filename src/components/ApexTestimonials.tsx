"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS, ReviewItem } from "@/data/reviews";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
} from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export function ApexTestimonials() {
  const { openBookingModal } = useLocation();

  // Page index for 3-cards pagination (0: reviews 0-2, 1: reviews 3-5)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(REVIEWS.length / cardsPerPage);

  const displayedReviews = REVIEWS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getSourceBadge = (source: ReviewItem["verifiedSource"]) => {
    switch (source) {
      case "Google Guaranteed":
        return {
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: ShieldCheck,
          label: "Google Guaranteed",
        };
      case "Angi Super Service":
        return {
          bg: "bg-blue-50 text-blue-700 border-blue-200",
          icon: Award,
          label: "Angi Super Service",
        };
      case "BBB A+":
        return {
          bg: "bg-amber-50 text-amber-800 border-amber-200",
          icon: CheckCircle2,
          label: "BBB A+ Accredited",
        };
      default:
        return {
          bg: "bg-slate-50 text-slate-700 border-slate-200",
          icon: CheckCircle2,
          label: "Verified Customer",
        };
    }
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Verified Customer Reviews</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            What Neighbors Say About Dave
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Real feedback from verified homeowners and property managers across the United States. Over 850+ five-star ratings.
          </p>

          {/* Aggregate Rating Trust Bar */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-[#f4f8fe] border border-blue-100 rounded-full py-2 px-4 sm:px-6 shadow-xs text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#253041]">
              <span className="font-mono text-base font-black text-[#0052da]">4.9</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="font-semibold text-slate-700">850+ Verified Reviews</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Solo Craftsmanship
            </span>
          </div>
        </motion.div>

        {/* 3 Review Cards Showcase (Side-by-Side) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {displayedReviews.map((rev) => {
                const badge = getSourceBadge(rev.verifiedSource);
                const BadgeIcon = badge.icon;
                const initials = rev.author
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("");

                return (
                  <div
                    key={rev.id}
                    className="bg-[#f4f8fe] rounded-2xl p-5 sm:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Ambient subtle quote watermark */}
                    <Quote className="w-16 h-16 text-[#0052da]/5 absolute -top-2 -right-2 pointer-events-none" />

                    <div>
                      {/* Rating & Verified Source Row */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="flex items-center text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badge.bg}`}
                        >
                          <BadgeIcon className="w-3 h-3 shrink-0" />
                          <span>{badge.label}</span>
                        </span>
                      </div>

                      {/* Scenario Title */}
                      <h3 className="text-sm sm:text-base font-extrabold text-[#253041] mb-2 leading-snug group-hover:text-[#0052da] transition-colors">
                        &ldquo;{rev.scenarioTitle}&rdquo;
                      </h3>

                      {/* Comment text */}
                      <p className="text-xs sm:text-sm text-[#4c5165] leading-relaxed mb-4 italic line-clamp-4">
                        {rev.comment}
                      </p>
                    </div>

                    {/* Author & Service Footer */}
                    <div className="pt-3.5 border-t border-slate-200/80 flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0052da] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-xs">
                        {initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-black text-[#253041] truncate">
                          {rev.author}
                        </h4>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                          {rev.city}, {rev.stateCode} • {rev.serviceRendered}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Carousel & Pagination Navigation Controls */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-sm cursor-pointer"
              aria-label="Previous 3 reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentPage === idx
                      ? "w-6 bg-[#0052da]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to reviews page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-sm cursor-pointer"
              aria-label="Next 3 reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Callout / Hire Dave Prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openBookingModal({ urgency: "emergency" })}
            className="btn-plumco text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-5 sm:px-6 cursor-pointer"
          >
            <span>Experience Dave&apos;s 5-Star Craftsmanship</span>
          </button>
        </div>
      </div>
    </section>
  );
}
