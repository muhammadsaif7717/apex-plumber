"use client";

import React from "react";
import Image from "next/image";
import { PLUMCO_BLOGS } from "@/data/plumcoData";
import { User, MessageCircle, ArrowRight } from "lucide-react";

export function ApexBlog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#f4f8fe] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-2">
            <span>:: Latest News &amp; Blog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#253041] tracking-tight">
            Latest News &amp; Blog
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4c5165]">
            Essential plumbing guides, diagnostic insights, and winterization advice from master technicians.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLUMCO_BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col group border border-slate-100"
            >
              {/* Blog Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={600}
                  height={380}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date Tag */}
                <div className="absolute top-4 left-4 bg-[#0052da] text-white text-xs font-mono font-bold px-3 py-1 rounded-md shadow-sm">
                  {blog.date}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#0052da]" />
                      <span>{blog.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-[#0052da]" />
                      <span>{blog.comments} Comments</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#253041] group-hover:text-[#0052da] transition-colors leading-snug mb-2.5">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-[#4c5165] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0052da] group-hover:text-[#0041ae] transition-colors cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
