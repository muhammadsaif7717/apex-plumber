"use client";

import React, { useState } from "react";
import { REVIEWS } from "@/data/reviews";
import { useLocation } from "@/context/LocationContext";
import { Star, CheckCircle2, MessageSquare } from "lucide-react";

export function ApexReviews() {
  const { currentLocation } = useLocation();
  const [filterStateOnly, setFilterStateOnly] = useState(false);

  const displayedReviews = filterStateOnly
    ? REVIEWS.filter((r) => r.stateCode === currentLocation.stateCode)
    : REVIEWS;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Trust Header Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-orange-400 font-bold mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Homeowner Trust Scores</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                4.9 / 5.0 Rating Across 2,400+ Verified Emergency Calls
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Independent reviews collected via Google Local Services, Angi, and the Better Business Bureau.
              </p>
            </div>

            {/* Stars & Rating Summary */}
            <div className="flex items-center gap-4 bg-slate-800/80 border border-slate-700 p-4 rounded-xl shrink-0">
              <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                4.9
              </div>
              <div>
                <div className="flex items-center text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Google Guaranteed Badge
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Recent Emergency Plumbing Dispatch Logs
            </h3>
            <span className="text-xs text-slate-500">
              Real-world scenarios resolved by our licensed technicians.
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setFilterStateOnly(false)}
              className={`px-3 py-1.5 rounded-md transition ${
                !filterStateOnly
                  ? "bg-white text-slate-900 font-bold shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All National Reviews (6)
            </button>
            <button
              type="button"
              onClick={() => setFilterStateOnly(true)}
              className={`px-3 py-1.5 rounded-md transition ${
                filterStateOnly
                  ? "bg-white text-slate-900 font-bold shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {currentLocation.state} Only
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.length > 0 ? (
            displayedReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50/60 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition shadow-2xs"
              >
                <div>
                  {/* Rating Stars & Source */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {rev.verifiedSource}
                    </span>
                  </div>

                  {/* Scenario Title */}
                  <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                    &ldquo;{rev.scenarioTitle}&rdquo;
                  </h4>

                  {/* Comment */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {rev.comment}
                  </p>
                </div>

                {/* Author & Service Info */}
                <div className="pt-3 border-t border-slate-200/80 text-[11px]">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{rev.author}</span>
                    <span className="text-slate-500 font-normal">
                      {rev.city}, {rev.stateCode}
                    </span>
                  </div>
                  <div className="text-blue-700 font-mono text-[10px] mt-0.5 truncate">
                    Resolved: {rev.serviceRendered}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <MessageSquare className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 font-medium">
                No state-specific reviews filtered right now.
              </p>
              <button
                type="button"
                onClick={() => setFilterStateOnly(false)}
                className="mt-3 text-xs font-bold text-blue-600 underline"
              >
                Show All National Reviews
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
