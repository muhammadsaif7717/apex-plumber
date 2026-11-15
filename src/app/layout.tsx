import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Plumber — 24/7 Emergency Plumbing & Licensed Rooter Specialists",
  description:
    "America's top-rated 24/7 emergency plumbers. Licensed master technicians ready for burst pipes, drain cleaning, water heater failure & sewer repair with zero overtime fees.",
  keywords: [
    "emergency plumber",
    "24/7 plumbing service",
    "drain cleaning",
    "burst pipe repair",
    "water heater repair",
    "trenchless sewer repair",
    "licensed master plumber",
  ],
  authors: [{ name: "Apex Plumber Network" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
