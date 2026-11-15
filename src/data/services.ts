export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  startingPrice: number;
  priceNote: string;
  turnaround: string;
  equipment: string[];
  description: string;
  bullets: string[];
  warranty: string;
  imageUrl: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "burst-pipe-leak",
    title: "Emergency Burst Pipe & Water Leak Detection",
    badge: "Immediate 24/7 Response",
    startingPrice: 189,
    priceNote: "Includes pinpoint diagnostic",
    turnaround: "< 45 Min Mobile Dispatch",
    equipment: [
      "FLIR® Infrared Thermal Imaging",
      "Sewerin Electro-Acoustic Ground Mics",
      "Pro-Press Hydraulic Copper Crimpers",
    ],
    description:
      "Rapid non-destructive acoustic and thermal detection to locate concealed pipe ruptures inside walls, subfloors, and foundations before severe flood damage ruins structural framing.",
    bullets: [
      "Non-invasive thermal imaging prevents unnecessary drywall destruction",
      "Pro-Press mechanical fittings with 50-year joint integrity",
      "Direct water main shutoff and flood mitigation assistance",
      "Complete insurance carrier documentation and moisture mapping",
    ],
    warranty: "10-Year Workmanship Guarantee on All Pipe Replacements",
    imageUrl:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hydro-jetting",
    title: "Hydro-Jetting & Severe Drain Cleaning",
    badge: "Heavy Duty Cleansing",
    startingPrice: 149,
    priceNote: "Flat rate sewer clearing",
    turnaround: "Same-Day Service",
    equipment: [
      "4,000 PSI / 12 GPM Spartan Hydro-Jet Unit",
      "Warthog® Root-Cutting Rotating Nozzles",
      "Spartan 1065 Electric Drum Cables",
    ],
    description:
      "Commercial-grade high-velocity water scrubbing that pulverizes invasive tree roots, rock-hard calcified scale, and grease blockages to restore pipe bore to 100% factory capacity.",
    bullets: [
      "Rotary carbide cutters eliminate aggressive root intrusions",
      "Safe for PVC, cast iron, copper, and clay vitrified conduits",
      "Scours internal pipe walls clean—preventing recurrences for years",
      "Includes complimentary before-and-after digital camera inspection",
    ],
    warranty: "1-Year No-Clog Guarantee on Main Sewer Lines",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "water-heater",
    title: "Tankless & Standard Water Heater Repair / Install",
    badge: "Same-Day Hot Water",
    startingPrice: 299,
    priceNote: "Repairs from $299 / Installs from $1,250",
    turnaround: "2 – 4 Hour Installation",
    equipment: [
      "Digital Manometers & Combustion Analyzers",
      "Certified Navien, Rheem & Bradford White Toolkits",
      "Expansion Tanks & Brass Thermal Relief Valves",
    ],
    description:
      "Fast emergency diagnosis and replacement of blown heating elements, corroded tanks, faulty thermocouples, and pilot assemblies. Authorized dealer for top North American manufacturers.",
    bullets: [
      "Energy Star® certified high-efficiency tankless models saving up to 40% on gas",
      "Emergency leak drain-down and safe haul-away of old water heater units",
      "Upgraded heavy-duty brass drain valves and thermal expansion chambers",
      "Code-compliant gas venting and pressure-relief piping installations",
    ],
    warranty: "12-Year Tank Warranty + 3-Year In-House Labor Guarantee",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "trenchless-sewer",
    title: "Trenchless Sewer Line Repair & Pipelining",
    badge: "Zero-Dig Technology",
    startingPrice: 1499,
    priceNote: "Epoxy sectional spot repair",
    turnaround: "1-Day Turnaround",
    equipment: [
      "Perma-Liner™ Ambient-Cure Inversion Drums",
      "Pull-In-Place Structural Epoxy Impregnation",
      "High-Output Picote Miller High-Speed Scrubbers",
    ],
    description:
      "Structural cured-in-place pipe (CIPP) lining restores cracked, collapsed, or offset underground sewer pipes without excavating yards, stone patios, or driveway pavers.",
    bullets: [
      "Seamless epoxy sleeve forms an impenetrable joint-free pipe inside your old pipe",
      "Zero destruction to expensive landscaping, interlocking pavers, or indoor flooring",
      "Completely seals out root penetration and ground water infiltration",
      "Meets ASTM F1216 specifications with 50+ year structural rating",
    ],
    warranty: "50-Year Manufacturer Transferable Pipe Warranty",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "video-inspection",
    title: "High-Definition Video Pipe Camera Inspection",
    badge: "Free With Any Repair",
    startingPrice: 99,
    priceNote: "Waived with qualifying service",
    turnaround: "30-Minute Inspection",
    equipment: [
      "Ridgid SeeSnake® TruSense HDR Cameras",
      "Digital Sonde 512 Hz Underground Transmitters",
      "NaviTrack Scout Precision Depth Locators",
    ],
    description:
      "Crystal-clear full-color diagnostic camera scopes sent through your drainage system to reveal the exact GPS coordinates and depth of bellied pipes, cracks, foreign debris, and root ingress.",
    bullets: [
      "Color HDR video recorded directly to flash drive and email link for client records",
      "Pinpoint depth and position transmitter accurate to within 1 inch underground",
      "Detailed written engineering condition report for home buyers & insurers",
      "Transparent proof of problem prior to signing flat-rate work authorization",
    ],
    warranty: "Certified Master Diagnostic Inspection Report Guarantee",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gas-lines",
    title: "Gas Line Installation & Emergency Shutoff",
    badge: "Master Certified Gas Fitter",
    startingPrice: 249,
    priceNote: "Emergency test & isolation",
    turnaround: "< 45 Min Emergency Arrival",
    equipment: [
      "Sensit® HXG-3 Combustible Gas Sniffers",
      "CSST TracPipe Flexible Tubing Crimpers",
      "Calibrated 15-Minute Nitrogen Manometer Gauges",
    ],
    description:
      "Licensed master gas technicians specializing in emergency methane/propane leak detection, automated earthquake seismic shutoff valves, and high-BTU lines for stoves and backup generators.",
    bullets: [
      "Electronic sniffing devices detect micro-ppm fugitive hydrocarbon vapors",
      "Safe pressure testing complying with NFPA 54 National Fuel Gas Code",
      "Automatic seismic shutoff valves to prevent post-tremor catastrophic fires",
      "Direct coordination with local gas utilities for swift meter unlock & safety tag signoff",
    ],
    warranty: "Lifetime Fitting Guarantee on CSST & Black Iron Lines",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
];
