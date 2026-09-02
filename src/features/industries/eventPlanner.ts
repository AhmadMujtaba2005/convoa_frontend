import { IndustryContent } from "./types";

export const eventPlanner: IndustryContent = {
  slug: "event-planner",
  metaTitle: "Event Planner Answering Service | Convoa",
  metaDescription: "AI answering service for Event Planners",
  statsImage: "/images/industry-pictures/event-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Event Planners",
    heading: "Flawless Execution, Starting with the First Call",
    subheading: "Qualify leads and handle vendors while you are on-site.",
    targetAudience: "For wedding planners and corporate event coordinators",
    image: "/images/industry-pictures/event-pictures/hero.png",
  },
  solutions: {
    heading: "Keep the planning moving forward 24/7.",
    subheading: "An AI solution built for the fast-paced event industry.",
    cards: [
      { title: "Qualify Inbound Leads", image: "/images/industry-pictures/event-pictures/solution-1.png" },
      { title: "Manage Vendor Inquiries", image: "/images/industry-pictures/event-pictures/solution-2.png" },
      { title: "Handle Last-Minute RSVPs", image: "/images/industry-pictures/event-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for coordinators.",
    image: "/images/industry-pictures/event-pictures/features.png",
    bullets: [
      { title: "Intelligent Lead Routing:", description: "Gather dates, budgets, and guest counts to ensure only qualified clients make it to your calendar." },
      { title: "Custom Knowledge Base:", description: "Train the AI on your preferred vendors, venues, and packages so it can answer specific questions accurately." },
      { title: "CRM Integration:", description: "Automatically log all caller details into your CRM (like HoneyBook or Dubsado) so nothing slips through the cracks." }
    ]
  },
  benefits: {
    heading: "Be present at your events.",
    subheading: "Never miss an inquiry because you were busy coordinating.",
    image: "/images/industry-pictures/event-pictures/benefits.png",
    bullets: [
      { title: "Filter Tire-Kickers:", description: "Stop wasting time on calls with budgets that don't match your minimums." },
      { title: "Maintain Professionalism:", description: "Provide a polished, branded answering experience instead of sending high-end clients to voicemail." },
      { title: "Focus on the Day-Of:", description: "Keep your phone in your pocket on event days, knowing inquiries are being handled expertly." },
      { title: "Capture Frantic Callers:", description: "Be the first to answer when someone urgently needs a planner and is calling down a Google list." },
      { title: "Streamline Vendor Comms:", description: "Direct caterers, florists, and DJs to the right loading dock instructions without taking a call." },
      { title: "Scale Your Agency:", description: "Handle a higher volume of inquiries without needing to hire a full-time administrative assistant." }
    ]
  }
};
