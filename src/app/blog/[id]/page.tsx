import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PLUMCO_BLOGS } from "@/data/plumcoData";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return PLUMCO_BLOGS.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = PLUMCO_BLOGS.find((b) => b.id === id);
  if (!blog) return { title: "Blog Post Not Found" };
  return {
    title: `${blog.title} — Apex Plumber Master Certified`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = PLUMCO_BLOGS.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  const otherBlogs = PLUMCO_BLOGS.filter((b) => b.id !== id);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#253041] hover:text-[#0052da] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tips &amp; Home</span>
          </Link>

          <a
            href="tel:+8801319630516"
            className="btn-plumco text-xs font-bold py-2 px-3.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Apex Plumber</span>
          </a>
        </div>
      </header>

      {/* Article Hero */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Category & Metadata */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052da] text-xs font-extrabold uppercase tracking-wider font-mono">
            <span>{blog.category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#253041] tracking-tight leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-2 border-b border-slate-100 pb-4">
            <span className="flex items-center gap-1.5 text-slate-700 font-bold">
              <User className="w-3.5 h-3.5 text-[#0052da]" />
              <span>{blog.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.readTime}</span>
            </span>
          </div>
        </div>

        {/* Featured Unsplash Image */}
        <div className="relative h-[260px] sm:h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-10 bg-slate-100">
          <Image
            src={blog.img}
            alt={blog.title}
            width={1200}
            height={600}
            priority
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#f4f8fe] border border-blue-200/70 rounded-2xl p-6 sm:p-8 mb-10">
          <h3 className="text-sm font-black text-[#0052da] uppercase tracking-wider font-mono mb-3">
            Key Master Plumber Takeaways:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#253041]">
            {blog.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0052da] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          {blog.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-[#0052da]">
            <Image
              src="https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/Image-Plumber.png"
              alt="Apex Plumber - Master Certified Plumber"
              width={160}
              height={160}
              unoptimized
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h4 className="text-base font-black text-[#253041]">
                Apex Plumber Master Team
              </h4>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0052da]">
                Licensed &amp; Certified
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              25+ years of hands-on residential and commercial plumbing troubleshooting. We publish these homeowner guides to help families protect their foundations, prevent leaks, and make informed choices.
            </p>
          </div>

          <a
            href="tel:+8801319630516"
            className="btn-plumco text-xs font-bold py-3 px-5 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Apex Plumber</span>
          </a>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-xl font-black text-[#253041] mb-6">
            More Practical Plumbing Tips from Apex Plumber:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link
                key={b.id}
                href={`/blog/${b.id}`}
                className="group p-5 rounded-2xl border border-slate-200 hover:border-[#0052da] hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#0052da] block mb-1">
                    {b.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#253041] group-hover:text-[#0052da] transition line-clamp-2">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {b.excerpt}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0052da] mt-4 flex items-center gap-1">
                  Read Article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
