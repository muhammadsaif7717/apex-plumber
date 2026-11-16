"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PLUMCO_BLOGS } from "@/data/plumcoData";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexFooter } from "@/components/ApexFooter";
import { ApexWhatsAppWidget } from "@/components/ApexWhatsAppWidget";
import {
  User,
  MessageCircle,
  ArrowRight,
  Clock,
  Search,
  BookOpen,
  ArrowLeft,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function BlogListClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const set = new Set(PLUMCO_BLOGS.map((b) => b.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filteredBlogs = useMemo(() => {
    return PLUMCO_BLOGS.filter((b) => {
      const matchCat =
        selectedCategory === "ALL" || b.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery =
        !searchQuery.trim() ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Sticky Global Navigation Bar */}
      <ApexNavbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="bg-[#f4f8fe] border-b border-blue-100/80 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0052da] transition flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#0052da] font-bold">Knowledge Hub &amp; Blog</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#0052da] uppercase tracking-widest font-mono mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>:: Master Plumber Knowledge Hub</span>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#253041] tracking-tight leading-tight">
                Practical Plumbing Advice &amp; Maintenance Guides
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                25+ years of hands-on plumbing troubleshooting to help you prevent costly slab leaks, maintain your water heater, and protect your home&apos;s infrastructure.
              </p>
            </div>

            {/* Search & Category Filter Controls */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-blue-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-wide transition cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-[#0052da] text-white shadow-sm"
                        : "bg-white text-[#253041] hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat === "ALL" ? "All Guides" : cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles & tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-[#253041] placeholder:text-slate-400 focus:outline-none focus:border-[#0052da] transition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Listing Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16 bg-[#f4f8fe] rounded-2xl border border-dashed border-slate-300 p-8 max-w-lg mx-auto">
                <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#253041]">No articles found</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4">
                  We could not find any guides matching &ldquo;{searchQuery}&rdquo;. Try another search term or clear the filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("ALL");
                    setSearchQuery("");
                  }}
                  className="btn-plumco text-xs font-bold py-2 px-4 cursor-pointer"
                >
                  View All Guides
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredBlogs.map((blog, idx) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-[#0052da]/10 transition-all duration-300 flex flex-col group border border-slate-200/90 hover:border-[#0052da]/40 hover:-translate-y-1.5"
                  >
                    {/* Featured Image */}
                    <Link
                      href={`/blog/${blog.id}`}
                      className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 block"
                    >
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={600}
                        height={380}
                        priority={idx === 0}
                        unoptimized
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#0052da] text-white text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {blog.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-[#253041]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </Link>

                    {/* Blog Content */}
                    <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta row */}
                        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-slate-500 mb-2.5">
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
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
                          <h2 className="text-base sm:text-lg font-bold text-[#253041] group-hover:text-[#0052da] transition-colors leading-snug mb-2 line-clamp-2">
                            {blog.title}
                          </h2>
                        </Link>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">{blog.date}</span>
                        <Link
                          href={`/blog/${blog.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0052da] group-hover:text-[#0041ae] transition-colors"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Emergency Callout Card Banner */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          <div className="bg-[#253041] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Active 24/7 Emergency Dispatch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Facing an Active Leak or Drain Backup?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Don&apos;t wait for a tutorial while water damage escalates. Call me directly on my personal dispatch line for prompt, professional service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+8801319630516"
                className="btn-plumco text-xs sm:text-sm font-bold py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl shadow-md whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Master Plumber</span>
              </a>
              <a
                href="https://wa.me/8801319630516"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-md whitespace-nowrap"
              >
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <ApexFooter />

      {/* Floating WhatsApp Widget */}
      <ApexWhatsAppWidget />
    </div>
  );
}
