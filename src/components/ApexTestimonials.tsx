"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="reviews" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Testimonials</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            What Homeowners Say
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4c5165]">
            Real feedback from verified homeowners and property managers across the United States.
          </p>
        </motion.div>

        {/* Featured Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#f4f8fe] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100 shadow-xl relative"
        >
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#0052da]/20 absolute top-5 right-5 sm:top-8 sm:right-8" />

          {/* Stars */}
          <div className="flex items-center text-amber-400 mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
            ))}
          </div>

          {/* Quote Body with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm xs:text-base sm:text-xl lg:text-2xl text-[#253041] font-semibold italic leading-relaxed mb-6 sm:mb-8">
                &ldquo;{currentReview.comment}&rdquo;
              </p>

              {/* Author and Navigation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-slate-200">
                <div>
                  <h4 className="text-base sm:text-lg font-black text-[#253041]">
                    {currentReview.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {currentReview.city}, {currentReview.stateCode} • Resolved: {currentReview.serviceRendered}
                  </p>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-xs cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={nextReview}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#0052da] text-[#253041] hover:text-white flex items-center justify-center transition border border-slate-200 shadow-xs cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
