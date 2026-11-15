"use client";

import React, { useState } from "react";
import { REVIEWS } from "@/data/reviews";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function ApexTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            What People’s Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4c5165]">
            Real feedback from verified homeowners and property managers across the United States.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-[#f4f8fe] rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl relative">
          <Quote className="w-12 h-12 text-[#0052da]/20 absolute top-8 right-8" />

          {/* Stars */}
          <div className="flex items-center text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          {/* Quote Body */}
          <p className="text-lg sm:text-2xl text-[#253041] font-semibold italic leading-relaxed mb-8">
            &ldquo;{currentReview.comment}&rdquo;
          </p>

          {/* Author and Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div>
              <h4 className="text-lg font-black text-[#253041]">
                {currentReview.author}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {currentReview.city}, {currentReview.stateCode} • Resolved: {currentReview.serviceRendered}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-xs"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-xs"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
