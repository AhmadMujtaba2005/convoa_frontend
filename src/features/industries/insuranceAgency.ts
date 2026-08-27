import { IndustryContent } from "./types";

export const insuranceAgency: IndustryContent = {
  slug: "insurance-agency",
  metaTitle: "Insurance Agency Answering Service | Convoa",
  metaDescription: "AI answering service for Insurance Agents",
  statsImage: "/images/industry-pictures/insurance-pictures/stats.png",
  faqImage: "/images/industry-pictures/insurance-pictures/faq.png",
  hero: {
    eyebrow: "AI answering service for Insurance Agents",
    heading: "Close More Policies, Miss Zero Leads",
    subheading: "AI answers every prospect call, day or night.",
    targetAudience: "For independent agents and insurance agencies",
    image: "/images/industry-pictures/insurance-pictures/hero.png",
  },
  solutions: {
    heading: "Enable 24/7 customer support for your agency.",
    subheading: "An AI solution designed for insurance agents.",
    cards: [
      { title: "Support customers all day, all night.", image: "/images/industry-pictures/insurance-pictures/solution-1.png" },
      { title: "Reach out to more prospects", image: "/images/industry-pictures/insurance-pictures/solution-2.png" },
      { title: "Automate customer intake processes", image: "/images/industry-pictures/insurance-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features that adapt to your needs.",
    image: "/images/industry-pictures/insurance-pictures/features.png",
    bullets: [
      { title: "AI that boosts customer experience:", description: "Our AI learns from your website, policies and customer queries — so every call is accurately handled like a pro." },
      { title: "Never miss a call:", description: "All your calls are answered, no matter the time or volume. Our AI assistant is the perfect partner for your frontdesk, enabling more work to get done." },
      { title: "Customizable:", description: "Your AI agent is tailored to your insurance agency needs. Engaging and multilingual voices, integration with your existing scheduling platforms, and realtime analytics." }
    ]
  },
  benefits: {
    heading: "Benefits beyond answering calls.",
    subheading: "Grow your business without worrying about the calls.",
    image: "/images/industry-pictures/insurance-pictures/benefits.png",
    bullets: [
      { title: "Enhanced customer experience:", description: "Customers are answered on the first ring, and can schedule appointments while your team rests. Convoa is available 24/7 and prioritizes emergencies." },
      { title: "Increased efficiency:", description: "With Convoa, there’s zero downtime and you’ll have increased response times and efficiency across all your communication and scheduling." },
      { title: "AI Gatekeeper:", description: "Filter unsolicited and unwanted calls, allowing real customers to receive priority service." },
      { title: "Critical business understanding:", description: "We understand the needs of insurance agents — Convoa can be setup to start answering calls today." },
      { title: "Cost savings:", description: "Provide 24/7 service without increasing operational costs, capture leads and execute outreach without any additional systems." },
      { title: "Proven results:", description: "Track every conversation, and experience an immediate increase in customer satisfaction." }
    ]
  }
};
