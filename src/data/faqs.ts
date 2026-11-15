export interface FaqItem {
  id: string;
  question: string;
  category: "Pricing" | "Emergency" | "Warranties" | "Technology";
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Emergency",
    question: "How fast can an Apex emergency plumber realistically arrive at my door?",
    answer:
      "Our average nationwide dispatch arrival time is under 45 minutes (averaging 28–38 minutes across Texas, Florida, California, New York, and Ohio metro areas). We utilize real-time GPS telemetry across our fleet of over 80 fully-equipped mobile service vans. The moment your dispatch ticket is submitted, our automated dispatch algorithm sends the closest qualified master technician directly to your address.",
  },
  {
    id: "faq-2",
    category: "Pricing",
    question: "Do you charge extra overtime fees for nights, weekends, or federal holidays?",
    answer:
      "No. Plumbing emergencies do not check the calendar. Apex operates on a strict 100% Upfront Flat-Rate Pricing structure. You pay the exact same flat rate at 2:00 AM on a Sunday as you do at 10:00 AM on a Tuesday. Prior to turning a single wrench, our licensed technician inspects the issue and presents a firm, written quote for your authorization. No hidden travel surcharges or surprise billing.",
  },
  {
    id: "faq-3",
    category: "Warranties",
    question: "What warranties and guarantees back your plumbing workmanship?",
    answer:
      "All routine residential and commercial plumbing repairs carry our 1-Year Apex Workmanship Guarantee. Full water line repiping, underground sewer replacements, and cured-in-place trenchless pipelining include up to a 50-Year Structural Transferable Warranty. Furthermore, we maintain our 'Clean Home Guarantee': if our technicians leave any dust, water, or debris behind, we credit $100 toward your invoice.",
  },
  {
    id: "faq-4",
    category: "Technology",
    question: "What makes your HD sewer video camera inspection superior to standard snaking?",
    answer:
      "A mechanical drain snake can poke a temporary hole through a clog, but it cannot reveal cracked pipe walls, root infiltration, bellied dips, or collapsed joints. Our Ridgid SeeSnake TruSense systems broadcast high-definition 1080p color video with built-in self-leveling cameras and 512 Hz sonde transmitters. We pinpoint the exact depth and coordinate of the obstruction within 1 inch, saving homeowners thousands in unnecessary excavation.",
  },
  {
    id: "faq-5",
    category: "Pricing",
    question: "Do you offer consumer financing for major emergency repipes or water heaters?",
    answer:
      "Yes. We partner with premier home improvement lenders (Wisetack and GreenSky) to provide flexible financing options starting at $0 Down and 0% APR for up to 18 months, with loan terms extending up to 60 months for major sewer rehabilitation projects. Pre-qualification takes under 60 seconds with no impact on your credit score.",
  },
  {
    id: "faq-6",
    category: "Emergency",
    question: "Are all Apex Plumber technicians licensed, bonded, and insured master plumbers?",
    answer:
      "Yes, 100%. Every technician dispatched to your home or commercial facility holds state-verified master or journeyman licensure, carries a minimum of $2,000,000 in general liability and workers' compensation coverage, and passes rigorous background checks and multi-panel drug screenings. We display municipal license numbers openly on our trucks and invoices.",
  },
];
