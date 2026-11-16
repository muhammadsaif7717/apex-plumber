"use client";

import React, { useState, useEffect, useRef } from "react";
import { REVIEWS, ReviewItem } from "@/data/reviews";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export function ApexTestimonials() {

  // Desktop Page index for 3-cards pagination (0: reviews 0-2, 1: reviews 3-5)
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

  // Mobile Single-Card Auto-Playing Slider State & Touch Gestures
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number>(0);

  const nextMobileReview = () => {
    setMobileIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevMobileReview = () => {
    setMobileIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  // Auto-play timer for mobile slider (every 4.5s)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      nextMobileReview();
    } else if (diff < -40) {
      prevMobileReview();
    }
    // Resume auto-play after 2s
    setTimeout(() => setIsPaused(false), 2000);
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

  const activeMobileReview = REVIEWS[mobileIndex];
  const mobileBadge = getSourceBadge(activeMobileReview.verifiedSource);
  const MobileBadgeIcon = mobileBadge.icon;
  const mobileInitials = activeMobileReview.author
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="reviews"
      className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Verified Customer Reviews</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            What Neighbors Say About Apex Plumber
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Real feedback from verified homeowners and property managers across the United States. Over 850+ five-star ratings.
          </p>

          {/* Aggregate Rating Trust Bar */}
          <div className="mt-4 sm:mt-5 inline-flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-6 bg-[#f4f8fe] border border-blue-100 rounded-full py-1.5 xs:py-2 px-3 sm:px-6 shadow-xs text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#253041]">
              <span className="font-mono text-sm sm:text-base font-black text-[#0052da]">4.9</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">
              850+ Verified Reviews
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Certified Masters
            </span>
          </div>
        </div>

        {/* 1. MOBILE-ONLY SINGLE CARD AUTO-SLIDER & TOUCH SWIPE (Compact, No Endless Scrolling) */}
        <div className="block md:hidden">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="bg-[#f4f8fe] rounded-2xl p-4 xs:p-5 border border-slate-200/90 shadow-lg relative overflow-hidden transition-all duration-300 select-none"
          >
            {/* Watermark Quote */}
            <Quote className="w-12 h-12 text-[#0052da]/5 absolute -top-1 -right-1 pointer-events-none" />

            {/* Rating & Verified Badge */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center text-amber-400">
                {[...Array(activeMobileReview.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold border ${mobileBadge.bg}`}
              >
                <MobileBadgeIcon className="w-2.5 h-2.5 shrink-0" />
                <span>{mobileBadge.label}</span>
              </span>
            </div>

            {/* Scenario Title */}
            <h3 className="text-xs xs:text-sm font-extrabold text-[#253041] mb-1.5 leading-snug">
              &ldquo;{activeMobileReview.scenarioTitle}&rdquo;
            </h3>

            {/* Review Comment */}
            <p className="text-[11px] xs:text-xs text-[#4c5165] leading-relaxed mb-3 italic">
              {activeMobileReview.comment}
            </p>

            {/* Author Footer */}
            <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0052da] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-xs">
                  {mobileInitials}
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs font-black text-[#253041] truncate">
                    {activeMobileReview.author}
                  </h4>
                  <div className="text-[10px] text-slate-500 font-medium truncate">
                    {activeMobileReview.city}, {activeMobileReview.stateCode} • {activeMobileReview.serviceRendered}
                  </div>
                </div>
              </div>

              {/* Progress Count */}
              <span className="text-[10px] font-mono font-bold text-[#0052da] bg-white px-2 py-0.5 rounded-full border border-slate-200">
                {mobileIndex + 1}/{REVIEWS.length}
              </span>
            </div>
          </div>

          {/* Mobile Slider Controls & Dots */}
          <div className="mt-3.5 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={prevMobileReview}
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-[#253041] flex items-center justify-center border border-slate-200 shadow-xs transition"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMobileIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    mobileIndex === idx ? "w-5 bg-[#0052da]" : "w-1.5 bg-slate-300"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextMobileReview}
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-[#253041] flex items-center justify-center border border-slate-200 shadow-xs transition"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. DESKTOP 3-CARDS SHOWCASE (Hidden on Mobile) */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="bg-[#f4f8fe] rounded-2xl p-5 sm:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
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
          </div>

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

        {/* Bottom Callout / WhatsApp Prompt */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/8801319630516"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="tel:+8801319630516"
            className="btn-plumco text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
