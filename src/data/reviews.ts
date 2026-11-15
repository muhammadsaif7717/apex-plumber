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
    author: "Marcus Vance (Homeowner)",
    city: "Austin",
    stateCode: "TX",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Emergency Main Water Line Burst",
    scenarioTitle: "Apex Plumber saved our hardwood floors at 2:00 AM on a freezing night",
    comment:
      "A supply line burst behind our master vanity around 1:30 AM. I called Apex Plumber directly on their 24/7 hotline. The dispatcher connected me immediately to their on-call master technician, gave me instructions to shut the street meter while driving over, and arrived in 24 minutes flat. Replaced the split copper with heavy-duty ProPress fittings. Pure master-level work.",
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
    scenarioTitle: "Fixed our sewer line without digging up my custom patio",
    comment:
      "Two big plumbing franchises told me they had to dig a massive trench through my pool travertine ($12k in landscaping ruin). Apex Plumber came out personally, showed me the live HD video scope on their monitor, and lined the pipe with cured-in-place epoxy in one afternoon. Honest, clean, and saved me over $8,000.",
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
      "Our old 50-gallon tank broke on a Saturday. Apex Plumber arrived in their mobile workshop with a brand new Navien tankless system right on their truck. By 3 PM we had endless hot water. The technicians wore boot covers the entire time, cleaned every speck of dust, and filed the city permit for us. Apex Plumber is our company for life.",
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
    scenarioTitle: "Cleared 40 years of brownstone sewer buildup",
    comment:
      "Living in an older brownstone, our waste line kept backing up during rains. Apex Plumber brought their Spartan 4,000 PSI hydro-jetter and cleared 40 years of grease and scale out to the street main. They showed me the before and after video footage. Outstanding service.",
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
      "After our power flickered during heavy storms, Apex Plumber installed a heavy cast-iron sump pump with a smart dual-battery backup. They tested the float switches three times in front of me and walked me through the alarm setup. Total peace of mind when we travel.",
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
    scenarioTitle: "Pinpointed the gas smell and got our heat back on same day",
    comment:
      "We smelled gas near our furnace. The utility company locked our meter and said we needed a licensed master plumber. Apex Plumber arrived with calibrated digital sniffers, replaced the compromised connector, pressure-tested with nitrogen, and signed off on the city tag. Heat was restored by evening.",
    verifiedSource: "BBB A+",
  },
];
