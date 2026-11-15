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
    title: "Kitchen Plumbing",
    desc: "Complete sink installations, garbage disposal repairs, high-pressure leak isolation, and dishwashing line connections.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-1.jpg",
    iconName: "UtensilsCrossed",
    startingPrice: 149,
  },
  {
    id: "gas-line-services",
    title: "Gas Line Services",
    desc: "Certified master gas fitting, flexible CSST supply lines, high-BTU kitchen stoves, and emergency methane shutoff valves.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-2.jpg",
    iconName: "Flame",
    startingPrice: 249,
  },
  {
    id: "water-line-repair",
    title: "Water Line Repair",
    desc: "Non-invasive electronic acoustic leak detection, Pro-Press copper crimping, and high-efficiency PEX-A whole-house repiping.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-3.jpg",
    iconName: "Droplets",
    startingPrice: 189,
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    desc: "Same-day toilet overflow clearance, luxury walk-in shower valves, high-pressure tub faucets, and bidet fixtures.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-4.jpg",
    iconName: "Bath",
    startingPrice: 165,
  },
  {
    id: "basement-plumbing",
    title: "Basement Plumbing",
    desc: "Heavy-duty cast-iron sump pumps, smart dual-battery backup systems, and flood protection check valves.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/service-thumb-5.jpg",
    iconName: "ShieldAlert",
    startingPrice: 220,
  },
  {
    id: "remodeling-service",
    title: "Remodeling & Repiping",
    desc: "Architectural plumbing reconfiguration, tankless water heater retrofits, and no-dig trenchless sewer epoxy pipelining.",
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
    title: "Book Online",
    desc: "Fast 60-second online intake or direct instant call to our 24/7 master plumber dispatch line.",
    iconName: "CalendarCheck",
  },
  {
    id: "we-arrive",
    step: "02",
    title: "We Arrive",
    desc: "GPS-tracked mobile service van stocked with 1,500+ OEM replacement parts arrives in under 35 mins.",
    iconName: "Truck",
  },
  {
    id: "solve-problem",
    step: "03",
    title: "Solve Problem",
    desc: "Licensed master technicians resolve leaks, clogs, and water heater failures with flat-rate quotes.",
    iconName: "CheckCircle2",
  },
];

export interface PlumcoProject {
  id: string;
  title: string;
  category: "BATHROOM" | "GAS LINE" | "KITCHEN" | "DRAIN & SEWER";
  img: string;
  client: string;
}

export const PLUMCO_PROJECTS: PlumcoProject[] = [
  {
    id: "proj-1",
    title: "Commercial Kitchen Sink & Waste Line",
    category: "KITCHEN",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-1.jpg",
    client: "Downtown Bistro",
  },
  {
    id: "proj-2",
    title: "Master Bathroom Luxury Fixtures & Drain",
    category: "BATHROOM",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-2.jpg",
    client: "Residential Estate",
  },
  {
    id: "proj-3",
    title: "High-BTU Gas Line & Valve Manifold",
    category: "GAS LINE",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-3.jpg",
    client: "Suburban Residence",
  },
  {
    id: "proj-4",
    title: "Cast Iron Sewer Pipe Video & Jetting",
    category: "DRAIN & SEWER",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-4.jpg",
    client: "Historic Brownstone",
  },
  {
    id: "proj-5",
    title: "Modern Walk-In Shower Thermostatic Valve",
    category: "BATHROOM",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-5.jpg",
    client: "Condo Tower",
  },
  {
    id: "proj-6",
    title: "Commercial Gas Meter Seismic Safety Shutoff",
    category: "GAS LINE",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/project-6.jpg",
    client: "Office Complex",
  },
];

export interface PlumcoTeam {
  name: string;
  role: string;
  license: string;
  img: string;
  phone: string;
}

export const PLUMCO_TEAM: PlumcoTeam[] = [
  {
    name: "Henry Barton",
    role: "Master Plumber & Team Leader",
    license: "Master Plumber #48920",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/team-1.jpg",
    phone: "(800) 555-0192",
  },
  {
    name: "Mattie Washington",
    role: "Commercial Systems Specialist",
    license: "Journeyman Tech #31402",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/team-2.jpg",
    phone: "(800) 555-0193",
  },
  {
    name: "Winifred Harmon",
    role: "Hydro-Jetting & Sewer Lead",
    license: "Rooter Specialist #89123",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/team-3.jpg",
    phone: "(800) 555-0194",
  },
  {
    name: "Shelia Lawrence",
    role: "Gas & Boiler Certified Inspector",
    license: "Gas Fitter Master #55201",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/team-4.jpg",
    phone: "(800) 555-0195",
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
    author: "Henry Barton",
    comments: 4,
    excerpt: "Gurgling toilets, slow draining bathtubs, and sewer odors can indicate invasive tree root blockages before disaster strikes.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-1.jpg",
  },
  {
    id: "blog-2",
    title: "Tankless vs Standard Water Heaters: Which Saves More?",
    date: "10 November, 2026",
    author: "Mattie Washington",
    comments: 7,
    excerpt: "Analyze energy efficiency ratings, gas combustion ROI, and upfront installation costs for residential homes.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-2.jpg",
  },
  {
    id: "blog-3",
    title: "How Hydro-Jetting Scours 40 Years of Grease & Scale",
    date: "06 November, 2026",
    author: "Winifred Harmon",
    comments: 2,
    excerpt: "Why 4,000 PSI high-velocity water scrubbing is 10x more effective than standard mechanical snake augers.",
    img: "https://wpocean.com/wp/plumco/wp-content/uploads/2021/11/blog-3.jpg",
  },
];
