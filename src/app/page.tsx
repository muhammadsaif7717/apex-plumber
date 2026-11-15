import { LocationProvider } from "@/context/LocationContext";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexHero } from "@/components/ApexHero";
import { ApexFeatures } from "@/components/ApexFeatures";
import { ApexAbout } from "@/components/ApexAbout";
import { ApexServicesGrid } from "@/components/ApexServicesGrid";
import { ApexFunFact } from "@/components/ApexFunFact";
import { ApexWhyHireMe } from "@/components/ApexWhyHireMe";
import { ApexProjects } from "@/components/ApexProjects";
import { ApexAppointment } from "@/components/ApexAppointment";
import { ApexEstimator } from "@/components/ApexEstimator";
import { ApexCoverage } from "@/components/ApexCoverage";
import { ApexTestimonials } from "@/components/ApexTestimonials";
import { ApexBlog } from "@/components/ApexBlog";
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
          {/* 1. Personal Hero: Hi, I'm Dave Vance — Ready To Help You */}
          <ApexHero />

          {/* 2. How I Work With You: 3 Direct Steps */}
          <ApexFeatures />

          {/* 3. About Dave: 25+ Years Solo Master Craftsmanship */}
          <ApexAbout />

          {/* 4. Specialized Services Personally Handled */}
          <ApexServicesGrid />

          {/* 5. Career Milestones & 850+ 5-Star Reviews */}
          <ApexFunFact />

          {/* 6. Why Hire Me Directly vs Corporate Franchises */}
          <ApexWhyHireMe />

          {/* 7. Solved Case Studies & Project Gallery */}
          <ApexProjects />

          {/* 8. Direct Hire / Appointment Booking Intake */}
          <ApexAppointment />

          {/* 9. Upfront Pricing Estimator */}
          <ApexEstimator />

          {/* 10. Regional Coverage Areas */}
          <ApexCoverage />

          {/* 11. What Neighbors Say About Dave */}
          <ApexTestimonials />

          {/* 12. Dave's Practical Plumbing Advice & Blog */}
          <ApexBlog />
        </main>

        {/* 13. Personal Master Plumber Footer */}
        <ApexFooter />

        {/* Global Floating Modals & Mobile Emergency Dock */}
        <ApexBookingModal />
        <ApexMobileDock />
      </div>
    </LocationProvider>
  );
}
