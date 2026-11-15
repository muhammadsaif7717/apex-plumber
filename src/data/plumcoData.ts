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
    title: "Kitchen Plumbing & Fixtures",
    desc: "I personally repair stubborn kitchen clogs, install high-end sink basins, replace failed garbage disposals, and re-pipe supply lines.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-1.jpg",
    iconName: "UtensilsCrossed",
    startingPrice: 149,
  },
  {
    id: "gas-line-services",
    title: "Gas Line Fitting & Leak Isolation",
    desc: "Certified master gas fitter. I test line pressures with digital manometers, replace CSST tubing, and install automatic seismic shutoff valves.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-2.jpg",
    iconName: "Flame",
    startingPrice: 249,
  },
  {
    id: "water-line-repair",
    title: "Water Line & Slab Leak Detection",
    desc: "Using non-invasive acoustic sensors and thermal imaging, I pinpoint hidden slab leaks without tearing up your finished floors.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-3.jpg",
    iconName: "Droplets",
    startingPrice: 189,
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing & Toilet Backups",
    desc: "From emergency toilet overflows to custom walk-in shower valves and freestanding tubs, I ensure zero leaks and flawless water pressure.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-4.jpg",
    iconName: "Bath",
    startingPrice: 165,
  },
  {
    id: "basement-plumbing",
    title: "Basement Sump Pumps & Flood Defense",
    desc: "I install commercial-grade cast-iron sump pumps equipped with smart dual-battery backup systems to protect your finished basement.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-5.jpg",
    iconName: "ShieldAlert",
    startingPrice: 220,
  },
  {
    id: "remodeling-service",
    title: "Remodeling & Trenchless Sewer Relining",
    desc: "I restore collapsed or root-infested sewer pipes with no-dig structural epoxy pipelining, preserving your lawn, driveway, and landscaping.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-6.jpg",
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
    title: "Call / Book Me Direct",
    desc: "You talk directly with me—never a third-party call center or dispatcher. I listen to your issue and give honest advice.",
    iconName: "CalendarCheck",
  },
  {
    id: "we-arrive",
    step: "02",
    title: "I Arrive In My Mobile Workshop",
    desc: "I pull up in my own service van stocked with 1,500+ OEM parts, thermal cameras, and a 4,000 PSI hydro-jetter.",
    iconName: "Truck",
  },
  {
    id: "solve-problem",
    step: "03",
    title: "I Solve It & Guarantee It",
    desc: "I fix the root issue right then and there. You get a firm flat rate in writing and my personal 10-year workmanship warranty.",
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
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-1.jpg",
    client: "Downtown Bistro (Owner: Sarah L.)",
    problem: "Grease buildup caused recurring drain backups during dinner rush.",
    outcome: "Cleaned with 4,000 PSI hydro-scrubber and upgraded trap fittings.",
  },
  {
    id: "proj-2",
    title: "Master Bathroom Luxury Fixtures & Drain",
    category: "BATHROOM",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-2.jpg",
    client: "Residential Homeowner (Miller Family)",
    problem: "Corroded copper shower valve was leaking into bedroom drywall.",
    outcome: "Replaced with thermostatic brass cartridge and ProPress fittings.",
  },
  {
    id: "proj-3",
    title: "High-BTU Gas Line & Valve Manifold",
    category: "GAS LINE",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-3.jpg",
    client: "Chef Michael (Home Kitchen)",
    problem: "New 6-burner commercial stove required upgraded 1-inch gas line.",
    outcome: "Installed CSST flexible conduit, passed city inspection in 1 day.",
  },
  {
    id: "proj-4",
    title: "Cast Iron Sewer Pipe Video & Jetting",
    category: "DRAIN & SEWER",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-4.jpg",
    client: "Oak Ridge Residence",
    problem: "Tree roots had penetrated sewer lateral under driveway.",
    outcome: "Hydro-jetted roots and installed epoxy cured-in-place sleeve.",
  },
  {
    id: "proj-5",
    title: "Modern Walk-In Shower Thermostatic Valve",
    category: "BATHROOM",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-5.jpg",
    client: "David & Elena G.",
    problem: "Low water pressure and erratic water temperature scalding.",
    outcome: "Installed pressure-balanced Hansgrohe valve and PEX-A lines.",
  },
  {
    id: "proj-6",
    title: "Commercial Gas Meter Seismic Safety Shutoff",
    category: "GAS LINE",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-6.jpg",
    client: "Westlake Office Park",
    problem: "Outdated mechanical shutoff failed municipal safety audit.",
    outcome: "Installed calibrated seismic earthquake shutoff valve.",
  },
];

export interface PlumcoBlog {
  id: string;
  title: string;
  date: string;
  author: string;
  comments: number;
  excerpt: string;
  img: string;
}

export const PLUMCO_BLOGS: PlumcoBlog[] = [
  {
    id: "blog-1",
    title: "5 Warning Signs Your Main Sewer Line Is Backing Up",
    date: "14 November, 2026",
    author: "Dave Vance",
    comments: 4,
    excerpt: "Gurgling toilets, slow draining bathtubs, and sewer odors can indicate invasive tree root blockages before disaster strikes.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-1.jpg",
  },
  {
    id: "blog-2",
    title: "Tankless vs Standard Water Heaters: Which Saves More?",
    date: "10 November, 2026",
    author: "Dave Vance",
    comments: 7,
    excerpt: "As someone who has installed over 600 water heaters, here is my honest analysis of gas combustion ROI and long-term maintenance costs.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-2.jpg",
  },
  {
    id: "blog-3",
    title: "How Hydro-Jetting Scours 40 Years of Grease & Scale",
    date: "06 November, 2026",
    author: "Dave Vance",
    comments: 2,
    excerpt: "Why 4,000 PSI high-velocity water scrubbing is 10x more effective than standard mechanical snake augers.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-3.jpg",
  },
];
