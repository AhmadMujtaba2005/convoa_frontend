import { IndustryContent } from "./types";

export const injuryLawyers: IndustryContent = {
  slug: "injury-lawyers",
  metaTitle: "Personal Injury Answering Service | Convoa",
  metaDescription: "AI answering service for Personal Injury Law Firms",
  statsImage: "/images/industry-pictures/injury-lawyer-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Law Firms",
    heading: "Capture Every High-Value Case",
    subheading: "Be the first to respond when it matters most.",
    targetAudience: "For personal injury attorneys and law firms",
    image: "/images/industry-pictures/injury-lawyer-pictures/hero.png",
  },
  solutions: {
    heading: "Intake processes that never sleep.",
    subheading: "An AI solution built for legal lead qualification.",
    cards: [
      { title: "Conduct Initial Intake", image: "/images/industry-pictures/injury-lawyer-pictures/solution-1.png" },
      { title: "Schedule Consultations", image: "/images/industry-pictures/injury-lawyer-pictures/solution-2.png" },
      { title: "Gather Preliminary Facts", image: "/images/industry-pictures/injury-lawyer-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for legal compliance.",
    image: "/images/industry-pictures/injury-lawyer-pictures/features.png",
    bullets: [
      { title: "Practice Management Sync:", description: "Integrates with Clio, MyCase, and Filevine to log intake details directly into a new matter." },
      { title: "Empathetic Response Engine:", description: "Trained to handle distressed callers with care, professionalism, and appropriate tone." },
      { title: "Conflict Check Data:", description: "Gathers names and incident dates to help your team run preliminary conflict checks faster." }
    ]
  },
  benefits: {
    heading: "Maximize your marketing ROI.",
    subheading: "Stop letting expensive leads go to voicemail.",
    image: "/images/industry-pictures/injury-lawyer-pictures/benefits.png",
    bullets: [
      { title: "Win the Race to Answer:", description: "Accident victims often call the first firm they find. Convoa ensures you always pick up instantly." },
      { title: "Filter Non-Viable Claims:", description: "Ask qualifying questions (e.g., date of injury, fault) to weed out cases that don't fit your criteria." },
      { title: "24/7 Availability:", description: "Accidents don't just happen during business hours. Secure leads on nights, weekends, and holidays." },
      { title: "Ensure Accuracy:", description: "Transcribe intake details precisely, eliminating the errors that happen during manual note-taking." },
      { title: "Reduce Intake Costs:", description: "Handle high call volumes without staffing a massive 24/7 intake department." },
      { title: "Focus on Litigation:", description: "Let your attorneys focus on winning cases rather than answering the phone to pre-screen leads." }
    ]
  }
};
