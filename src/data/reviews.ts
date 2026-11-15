export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  stateCode: string;
  rating: number;
  date: string;
  serviceRendered: string;
  scenarioTitle: string;
  comment: string;
  verifiedSource: "Google Guaranteed" | "Angi Super Service" | "BBB A+";
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    city: "Austin",
    stateCode: "TX",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Emergency Main Water Line Burst",
    scenarioTitle: "Saved our hardwood floors at 2:00 AM on a freezing night",
    comment:
      "A supply line burst behind our master bath vanity around 1:30 AM flooding into the hallway. I called the Apex hotline and technician Dave arrived in 27 minutes flat in a fully-loaded mobile van. He shut down the main meter, extracted the broken copper segment, and replaced it with heavy-gauge Pro-Press fittings. Zero surprise fees, flat rate pricing as quoted over the phone.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    city: "Miami",
    stateCode: "FL",
    rating: 5,
    date: "October 2026",
    serviceRendered: "Trenchless Cast Iron Pipelining",
    scenarioTitle: "Fixed our entire sewer line without tearing up the travertine patio",
    comment:
      "Two other plumbing companies insisted they needed to excavate our pool patio and tear through 40 feet of custom travertine stone ($12k in landscaping damage). Apex scoped the line with their HD sewer camera, confirmed tree root intrusion, and completed an epoxy Perma-Liner pipelining in one afternoon. The sewer flows like brand new and our patio wasn't touched.",
    verifiedSource: "Angi Super Service",
  },
  {
    id: "rev-3",
    author: "David & Sarah Chen",
    city: "Los Angeles",
    stateCode: "CA",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Navien Tankless Water Heater Install",
    scenarioTitle: "From cold showers to limitless hot water in 3 hours",
    comment:
      "Our 14-year-old 50-gallon tank gave out on a Saturday morning, dumping water onto the garage floor. Apex Plumber had a technician out before noon with a brand-new Navien tankless system on the truck. By 3 PM we had endless hot water and 30% more floor space in the garage. Super courteous, wore boot covers, and filed the city permit for us.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-4",
    author: "Thomas Gallagher",
    city: "Brooklyn",
    stateCode: "NY",
    rating: 5,
    date: "October 2026",
    serviceRendered: "High-Pressure Hydro-Jetting",
    scenarioTitle: "Cleared severe grease and calcification in our brownstone",
    comment:
      "Living in a 1910 Brooklyn brownstone, our basement waste stack was backing up every heavy rain. Apex ran their 4,000 PSI hydro-jetting rig with a rotating carbide nozzle and blasted 40 years of scale and debris out to the municipal connection. They provided an HD digital video link showing the pristine pipe walls. Real master craftsmanship.",
    verifiedSource: "BBB A+",
  },
  {
    id: "rev-5",
    author: "Rachel Miller",
    city: "Columbus",
    stateCode: "OH",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Sump Pump & Dual Battery Backup",
    scenarioTitle: "Zero basement flooding during the torrential autumn downpour",
    comment:
      "After our neighborhood suffered power outages during last week's storms, Apex installed a high-capacity cast-iron primary sump pump alongside a smart dual-battery backup system. The technician tested the float switches three times in front of me and taught me how the Wi-Fi alarm operates. Total peace of mind when we travel.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-6",
    author: "Brad Sterling",
    city: "Dallas-Fort Worth",
    stateCode: "TX",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Emergency Gas Line Leak Isolation",
    scenarioTitle: "Immediate gas smell detection and same-day city inspection signoff",
    comment:
      "We smelled faint sulfur gas near our outdoor furnace unit. The local gas company locked the meter and said we needed a licensed master plumber to locate the leak. Apex arrived with calibrated digital sniffers, replaced the compromised CSST connector, pressurized the line with nitrogen, and coordinated directly with the city inspector. Heat was back on that evening.",
    verifiedSource: "BBB A+",
  },
];
