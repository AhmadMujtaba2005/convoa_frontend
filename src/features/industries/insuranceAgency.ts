import { IndustryContent } from "./types";

export const insuranceAgency: IndustryContent = {
  slug: "insurance-agency",
  metaTitle: "Insurance Agency Answering Service | Convoa",
  metaDescription: "AI answering service for Insurance Agencies",
  statsImage: "/images/industry-pictures/insurance-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Insurance Agents",
    heading: "Always There When Disaster Strikes",
    subheading: "Handle claims and policy questions while your producers sell.",
    targetAudience: "For independent agencies and regional brokerages",
    image: "/images/industry-pictures/insurance-pictures/hero.png",
  },
  solutions: {
    heading: "Provide reassurance, instantly.",
    subheading: "An AI solution built for the insurance industry.",
    cards: [
      { title: "Start the Claims Process", image: "/images/industry-pictures/insurance-pictures/solution-1.png" },
      { title: "Handle Policy Change Requests", image: "/images/industry-pictures/insurance-pictures/solution-2.png" },
      { title: "Gather Quote Information", image: "/images/industry-pictures/insurance-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for agencies.",
    image: "/images/industry-pictures/insurance-pictures/features.png",
    bullets: [
      { title: "Agency Management Sync:", description: "Integrates with AMS360, QQCatalyst, and EZLynx to log calls directly into client files." },
      { title: "Secure Document Handling:", description: "Instructs callers on where to securely upload photos of damage or required trailing documents." },
      { title: "Localized Agent Routing:", description: "Intelligently routes complex calls to the specific producer assigned to that client's account." }
    ]
  },
  benefits: {
    heading: "Protect your book of business.",
    subheading: "Keep retention high and producers focused on selling.",
    image: "/images/industry-pictures/insurance-pictures/benefits.png",
    bullets: [
      { title: "Never Miss a Claim:", description: "Be the first to answer when a client is standing on the side of the road after an accident." },
      { title: "Free Up Producers:", description: "Stop letting your top salespeople waste time answering 'Can I get a copy of my ID card?'" },
      { title: "Survive Storm Season:", description: "Instantly handle massive call spikes when extreme weather hits your region." },
      { title: "Filter Bad Leads:", description: "Pre-qualify inbound quote requests so your producers only talk to ideal prospects." },
      { title: "Consistent Brand Voice:", description: "Ensure every caller receives a calm, professional, and empathetic response." },
      { title: "Reduce Overhead:", description: "Manage high call volumes without needing to hire seasonal or part-time CSRs." }
    ]
  }
};
