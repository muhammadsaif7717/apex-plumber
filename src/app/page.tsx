import { LocationProvider } from "@/context/LocationContext";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexHero } from "@/components/ApexHero";
import { ApexFeatures } from "@/components/ApexFeatures";
import { ApexAbout } from "@/components/ApexAbout";
import { ApexServicesGrid } from "@/components/ApexServicesGrid";
import { ApexFunFact } from "@/components/ApexFunFact";
import { ApexProjects } from "@/components/ApexProjects";
import { ApexTeam } from "@/components/ApexTeam";
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
        {/* Plumco Header & Sticky Navigation */}
        <ApexNavbar />

        <main className="flex-1">
          {/* 1. Plumco Hero: Ready To Help You */}
          <ApexHero />

          {/* 2. Plumco 3 Features: Book Online, We Arrive, Solve Problem */}
          <ApexFeatures />

          {/* 3. Plumco About Us: 25+ Years Experience */}
          <ApexAbout />

          {/* 4. Plumco Services Grid: Best Service We Offer */}
          <ApexServicesGrid />

          {/* 5. Plumco Fun Fact / Counter Band */}
          <ApexFunFact />

          {/* 6. Plumco Latest Projects Gallery */}
          <ApexProjects />

          {/* 7. Plumco Dedicated Team Members */}
          <ApexTeam />

          {/* 8. Plumco Appointment Booking Intake */}
          <ApexAppointment />

          {/* 9. Upfront Pricing Estimator */}
          <ApexEstimator />

          {/* 10. Multi-State Coverage Directory */}
          <ApexCoverage />

          {/* 11. Plumco Testimonials: What People's Say */}
          <ApexTestimonials />

          {/* 12. Plumco Latest News & Blog */}
          <ApexBlog />
        </main>

        {/* 13. Plumco Signature Footer */}
        <ApexFooter />

        {/* Global Floating Modals & Mobile Emergency Dock */}
        <ApexBookingModal />
        <ApexMobileDock />
      </div>
    </LocationProvider>
  );
}
