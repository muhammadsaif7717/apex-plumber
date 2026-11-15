import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
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
  title: "Apex Plumber — Ready To Help You | Licensed Plumbing Services",
  description:
    "Apex Plumber provides 24/7 certified commercial & residential plumbing services. Over 25+ years experience in drain cleaning, water heaters, pipe repair & emergency dispatch with zero overtime fees.",
  keywords: [
    "Plumber",
    "Emergency Plumber",
    "Apex Plumber",
    "Drain Cleaning",
    "Water Heater Repair",
    "Gas Line Service",
    "Bathroom Plumbing",
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
  themeColor: "#0052da",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#4c5165] font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
