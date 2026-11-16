"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PLUMCO_BLOGS } from "@/data/plumcoData";
import { User, MessageCircle, ArrowRight, Clock } from "lucide-react";

export function ApexBlog() {
  return (
    <section id="blog" className="py-14 sm:py-20 lg:py-24 bg-[#f4f8fe] border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Plumbing Tips &amp; Advice</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight">
            Apex Plumber Practical Plumbing Advice
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600">
            Homeowner guides, diagnostic insights, and winterization advice written directly from 25 years of master plumbing experience.
          </p>
        </div>

        {/* 3 Blog Cards Grid (Stable, No Blinking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PLUMCO_BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col group border border-slate-100 hover:-translate-y-1.5"
            >
              {/* Blog Image */}
              <Link
                href={`/blog/${blog.id}`}
                className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100 block"
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={600}
                  height={380}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category & Date Badge */}
                <div className="absolute top-3 left-3 bg-[#0052da] text-white text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {blog.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#253041]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{blog.readTime}</span>
                </div>
              </Link>

              {/* Blog Content */}
              <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 font-semibold text-slate-600">
                      <User className="w-3.5 h-3.5 text-[#0052da]" />
                      <span>{blog.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-[#0052da]" />
                      <span>{blog.comments} Comments</span>
                    </span>
                  </div>

                  <Link href={`/blog/${blog.id}`}>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#253041] group-hover:text-[#0052da] transition-colors leading-snug mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0052da] group-hover:text-[#0041ae] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
