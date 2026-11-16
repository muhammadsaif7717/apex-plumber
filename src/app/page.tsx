import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexHero } from "@/components/ApexHero";
import { ApexFeatures } from "@/components/ApexFeatures";
import { ApexAbout } from "@/components/ApexAbout";
import { ApexServicesGrid } from "@/components/ApexServicesGrid";
import { ApexFunFact } from "@/components/ApexFunFact";
import { ApexWhyHireMe } from "@/components/ApexWhyHireMe";
import { ApexWorkProcess } from "@/components/ApexWorkProcess";
import { ApexProjects } from "@/components/ApexProjects";
import { ApexTestimonials } from "@/components/ApexTestimonials";
import { ApexEstimator } from "@/components/ApexEstimator";
import { ApexCoverage } from "@/components/ApexCoverage";
import { ApexFAQ } from "@/components/ApexFAQ";
import { ApexAppointment } from "@/components/ApexAppointment";
import { ApexFooter } from "@/components/ApexFooter";
import { ApexWhatsAppWidget } from "@/components/ApexWhatsAppWidget";

export default function Home() {
  return (
    <SmoothScrollProvider>
        <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
        {/* Personal Topbar & Navigation */}
        <ApexNavbar />

        <main className="flex-1">
          {/* 1. Hero: Reliable Plumbing Services, Delivered Personally */}
          <ApexHero />

          {/* 2. Direct Advantages: 3 Fast Steps */}
          <ApexFeatures />

          {/* 3. About Apex Plumber: 25+ Years Solo Master Craftsmanship */}
          <ApexAbout />

          {/* 4. Specialized Services Handled Personally */}
          <ApexServicesGrid />

          {/* 5. Career Milestones & 850+ 5-Star Reviews */}
          <ApexFunFact />

          {/* 6. Why Homeowners Choose to Work With Me (6 Core Values) */}
          <ApexWhyHireMe />

          {/* 7. My Work Process: 4-Step Seamless Workflow */}
          <ApexWorkProcess />

          {/* 8. Solved Case Studies & Project Gallery */}
          <ApexProjects />

          {/* 9. Customer Reviews & Testimonials */}
          <ApexTestimonials />

          {/* 10. Upfront Pricing Estimator */}
          <ApexEstimator />

          {/* 11. Areas I Personally Serve */}
          <ApexCoverage />

          {/* 12. Frequently Asked Questions (FAQ Accordion) */}
          <ApexFAQ />

          {/* 14. Direct Hire / Appointment Booking Intake (Contact Form) */}
          <ApexAppointment />
        </main>

        {/* Global Footer */}
        <ApexFooter />

        {/* Floating WhatsApp Interactive Chat Widget */}
        <ApexWhatsAppWidget />
      </div>
    </SmoothScrollProvider>
  );
}
