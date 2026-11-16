export interface LocationData {
  id: string;
  state: string;
  stateCode: string;
  primaryCity: string;
  cities: string[];
  companyName: string;
  phone: string;
  phoneRaw: string;
  licenseNumber: string;
  licenseAuthority: string;
  averageArrival: string;
  activeVans: number;
  coverageCounties: string[];
  specialtyTag: string;
  localAddress: string;
}

export const LOCATIONS: Record<string, LocationData> = {
  texas: {
    id: "texas",
    state: "Texas",
    stateCode: "TX",
    primaryCity: "Austin",
    cities: ["Austin", "Houston", "Dallas-Fort Worth", "San Antonio", "Round Rock", "Plano"],
    companyName: "Apex Plumber of Austin & Central TX",
    phone: "(512) 886-APEX",
    phoneRaw: "+15128862739",
    licenseNumber: "TX RMP #42891",
    licenseAuthority: "Texas State Board of Plumbing Examiners (TSBPE)",
    averageArrival: "32 Minutes",
    activeVans: 14,
    coverageCounties: ["Travis", "Williamson", "Hays", "Harris", "Dallas", "Bexar"],
    specialtyTag: "Rapid Freeze & Limestone Hard Water Defense",
    localAddress: "7801 N Lamar Blvd, Ste E-210, Austin, TX 78752",
  },
  florida: {
    id: "florida",
    state: "Florida",
    stateCode: "FL",
    primaryCity: "Miami",
    cities: ["Miami", "Fort Lauderdale", "Tampa", "Orlando", "Boca Raton", "St. Petersburg"],
    companyName: "Apex Plumber of South Florida",
    phone: "(305) 749-APEX",
    phoneRaw: "+13057492739",
    licenseNumber: "FL CFC #1429810",
    licenseAuthority: "Florida DBPR Certified Plumbing Contractor",
    averageArrival: "36 Minutes",
    activeVans: 18,
    coverageCounties: ["Miami-Dade", "Broward", "Palm Beach", "Hillsborough", "Orange"],
    specialtyTag: "Cast Iron Pipe Remediation & High Water Table Solutions",
    localAddress: "1101 Brickell Ave, South Tower #1400, Miami, FL 33131",
  },
  california: {
    id: "california",
    state: "California",
    stateCode: "CA",
    primaryCity: "Los Angeles",
    cities: ["Los Angeles", "Pasadena", "Santa Monica", "Beverly Hills", "Glendale", "Burbank", "Culver City", "Long Beach"],
    companyName: "Apex Plumber of Greater Los Angeles",
    phone: "(213) 640-APEX",
    phoneRaw: "+12136402739",
    licenseNumber: "CA C-36 #1094321",
    licenseAuthority: "California Contractors State License Board (CSLB)",
    averageArrival: "35 Minutes",
    activeVans: 1,
    coverageCounties: ["Los Angeles County"],
    specialtyTag: "Earthquake Gas Valves, Copper Repiping & Trenchless Sewer",
    localAddress: "1920 E 7th St, Arts District, Los Angeles, CA 90021",
  },
  newyork: {
    id: "newyork",
    state: "New York",
    stateCode: "NY",
    primaryCity: "New York City",
    cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Long Island"],
    companyName: "Apex Plumber of New York Metro",
    phone: "(718) 925-APEX",
    phoneRaw: "+17189252739",
    licenseNumber: "NYC DOB LMP #2419",
    licenseAuthority: "NYC Department of Buildings Master Plumber",
    averageArrival: "28 Minutes",
    activeVans: 16,
    coverageCounties: ["Kings (Brooklyn)", "New York (Manhattan)", "Queens", "Nassau", "Suffolk"],
    specialtyTag: "Brownstone Riser Upgrades & High-Pressure Steam Boilers",
    localAddress: "325 5th Ave, Midtown South, New York, NY 10016",
  },
  ohio: {
    id: "ohio",
    state: "Ohio",
    stateCode: "OH",
    primaryCity: "Columbus",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Dublin", "Akron", "Dayton"],
    companyName: "Apex Plumber of Central Ohio",
    phone: "(614) 831-APEX",
    phoneRaw: "+16148312739",
    licenseNumber: "OH OCILB #48932",
    licenseAuthority: "Ohio Construction Industry Licensing Board",
    averageArrival: "34 Minutes",
    activeVans: 12,
    coverageCounties: ["Franklin", "Delaware", "Cuyahoga", "Hamilton", "Summit"],
    specialtyTag: "Sump Pump Battery Backup & Freeze-Thaw Burst Prevention",
    localAddress: "400 W Nationwide Blvd, Columbus, OH 43215",
  },
};

export const DEFAULT_LOCATION_KEY = "california";
