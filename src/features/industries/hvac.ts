import { IndustryContent } from "./types";

export const hvac: IndustryContent = {
  slug: "hvac",
  metaTitle: "HVAC Answering Service | Convoa",
  metaDescription: "AI answering service for HVAC businesses",
  statsImage: "/images/industry-pictures/hvac-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for HVAC",
    heading: "Turn Up the Heat on Your Sales",
    subheading: "Capture every emergency repair call, day or night.",
    targetAudience: "For local HVAC technicians and large fleets",
    image: "/images/industry-pictures/hvac-pictures/hero.png",
  },
  solutions: {
    heading: "Dispatch smarter, answer faster.",
    subheading: "An AI solution built for the demands of the trades.",
    cards: [
      { title: "Dispatch Emergency Calls", image: "/images/industry-pictures/hvac-pictures/solution-1.png" },
      { title: "Schedule Routine Maintenance", image: "/images/industry-pictures/hvac-pictures/solution-2.png" },
      { title: "Provide Basic Troubleshooting", image: "/images/industry-pictures/hvac-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for field services.",
    image: "/images/industry-pictures/hvac-pictures/features.png",
    bullets: [
      { title: "Field Service Integration:", description: "Directly syncs with ServiceTitan, Housecall Pro, and other dispatch software to update your board." },
      { title: "Seasonal Volume Handling:", description: "Instantly scale up to handle hundreds of simultaneous calls during the first heatwave of summer." },
      { title: "Zip Code Routing:", description: "Automatically qualify and route jobs based on the caller's location and your service territory." }
    ]
  },
  benefits: {
    heading: "Grow your fleet.",
    subheading: "Stop letting jobs go to the competition's voicemail.",
    image: "/images/industry-pictures/hvac-pictures/benefits.png",
    bullets: [
      { title: "Capture Midnight Emergencies:", description: "When a furnace breaks at 2 AM, the customer calls until someone answers. Be that someone." },
      { title: "Free Up Dispatchers:", description: "Let your dispatchers focus on complex logistics while the AI handles routine tune-up scheduling." },
      { title: "Deflect Nuisance Calls:", description: "Provide basic instructions (like checking the filter or breaker) before rolling a truck unnecessarily." },
      { title: "Prevent Double Booking:", description: "Real-time calendar syncing ensures technicians aren't double-booked during rush periods." },
      { title: "Reduce Overhead:", description: "Avoid hiring expensive temporary staff to man the phones during your busiest seasons." },
      { title: "Boost Customer Loyalty:", description: "Provide immediate, reassuring responses when customers are dealing with uncomfortable temperatures." }
    ]
  }
};
