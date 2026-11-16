import { Metadata } from "next";
import { BlogListClient } from "./BlogListClient";

export const metadata: Metadata = {
  title: "Plumbing Tips & Guides — Apex Plumber Master Certified",
  description:
    "Practical plumbing advice, leak prevention, and equipment comparisons from an independent 25-year licensed master plumber.",
};

export const instant = false;

export default function BlogPage() {
  return <BlogListClient />;
}
