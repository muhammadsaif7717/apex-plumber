export interface PlumcoService {
  id: string;
  title: string;
  desc: string;
  img: string;
  iconName: string;
  startingPrice: number;
}

export const PLUMCO_SERVICES: PlumcoService[] = [
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing & Disposals",
    desc: "I personally repair stubborn kitchen clogs, install high-end sink basins, replace failed garbage disposals, and re-pipe supply lines.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    iconName: "UtensilsCrossed",
    startingPrice: 149,
  },
  {
    id: "gas-line-services",
    title: "Gas Line Fitting & Leak Isolation",
    desc: "Certified master gas fitter. I test line pressures with digital manometers, replace CSST tubing, and install automatic seismic shutoff valves.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    iconName: "Flame",
    startingPrice: 249,
  },
  {
    id: "water-line-repair",
    title: "Water Line & Slab Leak Detection",
    desc: "Using non-invasive acoustic ground sensors and FLIR thermal imaging, I pinpoint hidden slab leaks without tearing up your finished floors.",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    iconName: "Droplets",
    startingPrice: 189,
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing & Toilets",
    desc: "From emergency toilet overflows to custom walk-in shower valves and freestanding tubs, I ensure zero leaks and flawless water pressure.",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    iconName: "Bath",
    startingPrice: 165,
  },
  {
    id: "basement-plumbing",
    title: "Basement Sump Pumps & Defense",
    desc: "I install commercial-grade cast-iron sump pumps equipped with smart dual-battery backup systems to protect your finished basement.",
    img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80",
    iconName: "ShieldAlert",
    startingPrice: 220,
  },
  {
    id: "remodeling-service",
    title: "Trenchless Sewer & Relining",
    desc: "I restore collapsed or root-infested sewer pipes with no-dig structural epoxy pipelining, preserving your lawn, driveway, and landscaping.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    iconName: "Wrench",
    startingPrice: 350,
  },
];

export interface PlumcoFeature {
  id: string;
  step: string;
  title: string;
  desc: string;
  iconName: string;
}

export const PLUMCO_FEATURES: PlumcoFeature[] = [
  {
    id: "book-online",
    step: "01",
    title: "Call / Book Direct",
    desc: "You talk directly with me—never a third-party call center. I listen to your issue and give honest advice.",
    iconName: "CalendarCheck",
  },
  {
    id: "we-arrive",
    step: "02",
    title: "I Arrive Promptly",
    desc: "I pull up in my mobile workshop stocked with 1,500+ OEM parts, thermal cameras, and a hydro-jetter.",
    iconName: "Truck",
  },
  {
    id: "solve-problem",
    step: "03",
    title: "I Solve & Guarantee It",
    desc: "I fix the root issue on the spot. You get a firm flat rate in writing and my personal 10-year warranty.",
    iconName: "CheckCircle2",
  },
];

export interface PlumcoProject {
  id: string;
  title: string;
  category: "BATHROOM" | "GAS LINE" | "KITCHEN" | "DRAIN & SEWER";
  img: string;
  client: string;
  problem: string;
  outcome: string;
}

export const PLUMCO_PROJECTS: PlumcoProject[] = [
  {
    id: "proj-1",
    title: "Commercial Kitchen Sink & Waste Line",
    category: "KITCHEN",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    client: "Downtown Bistro (Owner: Sarah L.)",
    problem: "Grease buildup caused recurring drain backups during dinner rush.",
    outcome: "Cleaned with 4,000 PSI hydro-scrubber and upgraded trap fittings.",
  },
  {
    id: "proj-2",
    title: "Master Bathroom Luxury Fixtures & Drain",
    category: "BATHROOM",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    client: "Residential Homeowner (Miller Family)",
    problem: "Corroded copper shower valve was leaking into bedroom drywall.",
    outcome: "Replaced with thermostatic brass cartridge and ProPress fittings.",
  },
  {
    id: "proj-3",
    title: "High-BTU Gas Line & Valve Manifold",
    category: "GAS LINE",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    client: "Chef Michael (Home Kitchen)",
    problem: "New 6-burner commercial stove required upgraded 1-inch gas line.",
    outcome: "Installed CSST flexible conduit, passed city inspection in 1 day.",
  },
  {
    id: "proj-4",
    title: "Cast Iron Sewer Pipe Video & Jetting",
    category: "DRAIN & SEWER",
    img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    client: "Oak Ridge Residence",
    problem: "Tree roots had penetrated sewer lateral under driveway.",
    outcome: "Hydro-jetted roots and installed epoxy cured-in-place sleeve.",
  },
  {
    id: "proj-5",
    title: "Modern Walk-In Shower Thermostatic Valve",
    category: "BATHROOM",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    client: "David & Elena G.",
    problem: "Low water pressure and erratic water temperature scalding.",
    outcome: "Installed pressure-balanced Hansgrohe valve and PEX-A lines.",
  },
  {
    id: "proj-6",
    title: "Commercial Gas Meter Seismic Safety Shutoff",
    category: "GAS LINE",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    client: "Westlake Office Park",
    problem: "Outdated mechanical shutoff failed municipal safety audit.",
    outcome: "Installed calibrated seismic earthquake shutoff valve.",
  },
];

export interface PlumcoBlog {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  comments: number;
  excerpt: string;
  img: string;
  category: string;
  content: string[];
  keyTakeaways: string[];
}

export const PLUMCO_BLOGS: PlumcoBlog[] = [
  {
    id: "blog-1",
    slug: "warning-signs-main-sewer-line-backing-up",
    title: "5 Warning Signs Your Main Sewer Line Is Backing Up",
    date: "14 November, 2026",
    readTime: "4 min read",
    author: "Apex Plumber Certified Master",
    comments: 4,
    category: "Drain & Sewer",
    excerpt: "Gurgling toilets, slow draining bathtubs, and sewer gas odors can indicate invasive tree roots or grease scale before a catastrophic basement flood.",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    content: [
      "In my 25 years of field plumbing, I have saved hundreds of basements from sewage flooding by catching the subtle warning signs early. A sewer line rarely fails overnight without giving warning signals first.",
      "1. Multiple Drains Backing Up Simultaneously: If flushing the toilet causes water to bubble up in your shower stall or kitchen sink, the clog is located inside the main stack, not an individual fixture.",
      "2. Gurgling Sounds From Unused Fixtures: When air is trapped inside a restricted sewer pipe by root intrusion, it is forced backward through P-traps, creating loud bubbling or gurgling sounds.",
      "3. Foul Sewer Gas Smell: A cracked underground lateral pipe allows sewer gas to seep upward through the soil and enter home crawlspaces or foundation vents.",
      "4. Unusually Lush Patches of Lawn: If an area of grass in your front yard is suddenly greener or soggy despite dry weather, raw wastewater is likely escaping from a fractured sewer lateral underground.",
      "What To Do: Stop running water, avoid caustic chemical drain openers which eat away old cast iron, and request an HD video camera scope immediately to pinpoint the obstruction without digging."
    ],
    keyTakeaways: [
      "Never use harsh chemical drain cleaners on main sewer backups",
      "An HD video camera inspection is the only 100% accurate diagnosis",
      "Tree roots can be cleared with 4,000 PSI hydro-jetting without excavating"
    ]
  },
  {
    id: "blog-2",
    slug: "tankless-vs-standard-water-heaters",
    title: "Tankless vs Standard Water Heaters: An Honest Comparison",
    date: "10 November, 2026",
    readTime: "5 min read",
    author: "Apex Plumber Certified Master",
    comments: 7,
    category: "Water Heating",
    excerpt: "Having installed over 600 tankless and conventional water heaters, here is my honest analysis of gas combustion ROI, lifespan, and real savings.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Homeowners constantly ask us: 'Is a tankless water heater truly worth the extra investment?' The answer depends on your home's gas line size, hot water consumption, and how long you plan to stay in the property.",
      "Standard Tank Heaters (Pros & Cons): Lower upfront equipment cost ($1,200 - $1,800 installed), but they continuously reheat 50 gallons of water 24/7 even while you sleep or vacation. Average lifespan is 8 to 12 years before tank corrosion causes catastrophic leaks.",
      "Tankless On-Demand Heaters (Pros & Cons): Higher upfront investment, but they only consume fuel when a hot water tap is opened. You get endless hot water, a 20+ year expected lifespan, and reclaim 12 square feet of floor space.",
      "The Gas Line Factor: Many older homes have 1/2-inch gas lines, whereas high-output tankless units (199,000 BTU) require a dedicated 3/4-inch or 1-inch line. A master plumber must calculate total house gas demand before installing."
    ],
    keyTakeaways: [
      "Tankless units last 20+ years compared to 10 years for standard tanks",
      "Saves up to 30% on monthly natural gas or propane bills",
      "Requires annual vinegar descaling to maintain high heat exchanger efficiency"
    ]
  },
  {
    id: "blog-3",
    slug: "how-hydro-jetting-cleans-grease-scale",
    title: "How 4,000 PSI Hydro-Jetting Scours 40 Years of Scale",
    date: "06 November, 2026",
    readTime: "4 min read",
    author: "Apex Plumber Certified Master",
    comments: 2,
    category: "Rooter Technology",
    excerpt: "Why high-velocity hydro-jetting with rotating carbide nozzles is 10 times more effective than mechanical snake cables for long-term sewer health.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A traditional mechanical drain snake is a valuable emergency tool, but it only punches a temporary hole through the center of a clog. Grease, soap scum, and calcium deposits remain stuck to the pipe walls, causing a re-clog weeks later.",
      "How Hydro-Jetting Works: My Spartan 4,000 PSI hydro-jetting unit pumps 12 gallons of water per minute through specialized reverse-thruster nozzles. The water pressure scrubs the entire 360-degree circumference of the pipe bore back to factory clean condition.",
      "Root Cutting Power: Rotating Warthog carbide cutters spin at thousands of RPM, shearing invasive tree roots flush against the pipe wall without cracking old clay or cast iron conduits.",
      "Environmental & Safe: Hydro-jetting uses pure, pressurized tap water—zero hazardous chemicals or corrosive acids that pollute groundwater or harm municipal sewer treatment plants."
    ],
    keyTakeaways: [
      "Restores internal pipe diameter to 100% original capacity",
      "100% chemical-free and safe for municipal drainage systems",
      "Includes complimentary before-and-after HD camera video verification"
    ]
  },
];
