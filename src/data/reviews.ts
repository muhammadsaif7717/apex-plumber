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
    city: "Los Angeles",
    stateCode: "CA",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Emergency Main Water Line Burst",
    scenarioTitle: "Apex Plumber saved our hardwood floors at 2:00 AM in Silver Lake",
    comment:
      "A supply line burst behind our master vanity around 1:30 AM. I called Apex Plumber directly on their 24/7 line. He answered immediately, gave me instructions to shut off the main valve while driving over, and arrived in 25 minutes flat. Replaced the split copper with heavy-duty ProPress fittings. Pure master-level work.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    city: "Pasadena",
    stateCode: "CA",
    rating: 5,
    date: "October 2026",
    serviceRendered: "Trenchless Cast Iron Pipelining",
    scenarioTitle: "Fixed our sewer line without tearing up my custom brick patio",
    comment:
      "Two big plumbing franchises told me they had to dig a massive trench through my historic Pasadena brick patio ($12k in landscape ruin). Apex Plumber came out personally, showed me the live HD video scope, and lined the pipe with cured-in-place epoxy in one afternoon. Honest, clean, and saved me over $8,000.",
    verifiedSource: "Angi Super Service",
  },
  {
    id: "rev-3",
    author: "David & Sarah Chen",
    city: "Santa Monica",
    stateCode: "CA",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Navien Tankless Water Heater Install",
    scenarioTitle: "From cold showers to limitless hot water in 3 hours",
    comment:
      "Our old 50-gallon tank broke on a Saturday. Apex Plumber arrived in his mobile workshop with a brand new Navien tankless system right on his truck. By 3 PM we had endless hot water. He wore boot covers the entire time, cleaned every speck of dust, and filed the city permit for us. Apex Plumber is our guy for life.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-4",
    author: "Thomas Gallagher",
    city: "Beverly Hills",
    stateCode: "CA",
    rating: 5,
    date: "October 2026",
    serviceRendered: "High-Pressure Hydro-Jetting",
    scenarioTitle: "Cleared years of stubborn kitchen waste buildup",
    comment:
      "Our estate's main waste line kept backing up during dinner parties. Apex Plumber brought his Spartan 4,000 PSI hydro-jetter and cleared years of grease and scale out to the street main. He showed me the before and after video footage on his monitor. Outstanding, courteous service.",
    verifiedSource: "BBB A+",
  },
  {
    id: "rev-5",
    author: "Rachel Miller",
    city: "Glendale",
    stateCode: "CA",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Earthquake Gas Valve & Line Check",
    scenarioTitle: "Installed automatic seismic shutoff valve and inspected all gas lines",
    comment:
      "Living in a seismic zone, we wanted an automatic seismic gas shutoff valve installed before buying homeowner's insurance. Apex Plumber tested line pressures with digital manometers, installed the valve to code, and provided state certification tags. Total peace of mind.",
    verifiedSource: "Google Guaranteed",
  },
  {
    id: "rev-6",
    author: "Brad Sterling",
    city: "Culver City",
    stateCode: "CA",
    rating: 5,
    date: "November 2026",
    serviceRendered: "Emergency Gas Line Leak Isolation",
    scenarioTitle: "Pinpointed the gas smell and got our stove back on same day",
    comment:
      "We smelled gas near our kitchen range. SoCalGas tagged the meter and said we needed a licensed master plumber. Apex Plumber arrived with calibrated digital sniffers, replaced the compromised CSST connector, pressure-tested, and signed off on the tag. Cooking was back by evening.",
    verifiedSource: "BBB A+",
  },
];
