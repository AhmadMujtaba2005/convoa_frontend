import { IndustryContent } from "./types";

export const pestControl: IndustryContent = {
  slug: "pest-control",
  metaTitle: "Pest Control Answering Service | Convoa",
  metaDescription: "AI answering service for Pest Control Companies",
  statsImage: "/images/industry-pictures/pestcontrol-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Pest Control",
    heading: "Exterminate Missed Calls",
    subheading: "Capture panicked callers and schedule recurring treatments.",
    targetAudience: "For local exterminators and regional pest control brands",
    image: "/images/industry-pictures/pestcontrol-pictures/hero.png",
  },
  solutions: {
    heading: "Fast responses for urgent pests.",
    subheading: "An AI solution built to handle seasonal swarms.",
    cards: [
      { title: "Handle Emergency Infestations", image: "/images/industry-pictures/pestcontrol-pictures/solution-1.png" },
      { title: "Schedule Recurring Treatments", image: "/images/industry-pictures/pestcontrol-pictures/solution-2.png" },
      { title: "Identify Pests via Questions", image: "/images/industry-pictures/pestcontrol-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for exterminators.",
    image: "/images/industry-pictures/pestcontrol-pictures/features.png",
    bullets: [
      { title: "Field Software Integration:", description: "Syncs directly with PestPac, GorillaDesk, and FieldRoutes to keep your schedule accurate." },
      { title: "Seasonal Knowledge Base:", description: "Understands the difference between spring termites and fall rodents to give accurate advice." },
      { title: "Territory Mapping:", description: "Ensures appointments are booked intelligently based on your technicians' specific zones." }
    ]
  },
  benefits: {
    heading: "Grow your recurring revenue.",
    subheading: "Win the frantic call and keep them for life.",
    image: "/images/industry-pictures/pestcontrol-pictures/benefits.png",
    bullets: [
      { title: "Win the Panicked Caller:", description: "When someone finds a wasp nest, they call until someone answers. Convoa ensures you get the job." },
      { title: "Boost Recurring Plans:", description: "Seamlessly upsell one-time callers into quarterly maintenance plans during the booking process." },
      { title: "Optimize Routing:", description: "Reduce windshield time by grouping appointments geographically without manual dispatch intervention." },
      { title: "Handle Summer Spikes:", description: "Easily manage the massive influx of calls during peak mosquito and ant seasons." },
      { title: "Free Up Your Techs:", description: "Stop forcing your technicians to pull over and answer the phone while driving between stops." },
      { title: "Improve Cash Flow:", description: "Automatically remind customers of upcoming services and past-due invoices." }
    ]
  }
};
