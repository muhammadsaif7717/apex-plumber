import { LocationProvider } from "@/context/LocationContext";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexHero } from "@/components/ApexHero";
import { ApexFeatures } from "@/components/ApexFeatures";
import { ApexAbout } from "@/components/ApexAbout";
import { ApexServicesGrid } from "@/components/ApexServicesGrid";
import { ApexFunFact } from "@/components/ApexFunFact";
import { ApexWhyHireMe } from "@/components/ApexWhyHireMe";
import { ApexProjects } from "@/components/ApexProjects";
import { ApexTestimonials } from "@/components/ApexTestimonials";
import { ApexEstimator } from "@/components/ApexEstimator";
import { ApexBlog } from "@/components/ApexBlog";
import { ApexCoverage } from "@/components/ApexCoverage";
import { ApexAppointment } from "@/components/ApexAppointment";
import { ApexFooter } from "@/components/ApexFooter";
import { ApexBookingModal } from "@/components/ApexBookingModal";
import { ApexMobileDock } from "@/components/ApexMobileDock";

export default function Home() {
  return (
    <LocationProvider>
      <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
        {/* Personal Topbar & Navigation */}
        <ApexNavbar />

        <main className="flex-1">
          {/* 1. Hero: Apex Plumber — Ready To Help You (100vh banner) */}
          <ApexHero />

          {/* 2. How We Work: 3 Direct Steps */}
          <ApexFeatures />

          {/* 3. About Apex Plumber: 25+ Years Master Craftsmanship */}
          <ApexAbout />

          {/* 4. Specialized Services Handled by Certified Masters */}
          <ApexServicesGrid />

          {/* 5. Career Milestones & 850+ 5-Star Reviews */}
          <ApexFunFact />

          {/* 6. Why Choose Apex Plumber vs Corporate Franchises */}
          <ApexWhyHireMe />

          {/* 7. Solved Case Studies & Project Gallery */}
          <ApexProjects />

          {/* 8. What Neighbors Say About Apex Plumber (5-Star Reviews) */}
          <ApexTestimonials />

          {/* 9. Upfront Pricing Estimator */}
          <ApexEstimator />

          {/* 10. Apex Plumber Practical Plumbing Advice & Blog */}
          <ApexBlog />

          {/* 11. Regional Coverage Areas */}
          <ApexCoverage />

          {/* 12. Direct Hire / Appointment Booking Intake (Contact Form) */}
          <ApexAppointment />
        </main>

        {/* Global Footer */}
        <ApexFooter />

        {/* Floating Interactive Modal */}
        <ApexBookingModal />

        {/* Sticky Mobile Bottom Dock (Hidden on Large Screens) */}
        <ApexMobileDock />
      </div>
    </LocationProvider>
  );
}
