import { LocationProvider } from "@/context/LocationContext";
import { ApexNavbar } from "@/components/ApexNavbar";
import { ApexHero } from "@/components/ApexHero";
import { ApexServicesGrid } from "@/components/ApexServicesGrid";
import { ApexEstimator } from "@/components/ApexEstimator";
import { ApexWorkflow } from "@/components/ApexWorkflow";
import { ApexCoverage } from "@/components/ApexCoverage";
import { ApexReviews } from "@/components/ApexReviews";
import { ApexFAQ } from "@/components/ApexFAQ";
import { ApexFooter } from "@/components/ApexFooter";
import { ApexBookingModal } from "@/components/ApexBookingModal";
import { ApexMobileDock } from "@/components/ApexMobileDock";

export default function Home() {
  return (
    <LocationProvider>
      <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
        {/* Top Emergency Strip & Frosted Sticky Navbar */}
        <ApexNavbar />

        <main className="flex-1">
          {/* Section 1: Emergency Hero & Instant Intake Widget */}
          <ApexHero />

          {/* Section 2: Core Trade Services Grid */}
          <ApexServicesGrid />

          {/* Section 3: Interactive Plumbing Cost Estimator */}
          <ApexEstimator />

          {/* Section 4: High-Tech Diagnostic Process */}
          <ApexWorkflow />

          {/* Section 5: State & Service Area Directory */}
          <ApexCoverage />

          {/* Section 6: Verified Customer Reviews */}
          <ApexReviews />

          {/* Section 7: FAQ Accordion */}
          <ApexFAQ />
        </main>

        {/* Section 8: Comprehensive Licensing & Trade Footer */}
        <ApexFooter />

        {/* Global Floating Modals & Mobile Emergency Dock */}
        <ApexBookingModal />
        <ApexMobileDock />
      </div>
    </LocationProvider>
  );
}
