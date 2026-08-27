import { IndustryContent } from "./types";

export const hvac: IndustryContent = {
  slug: "hvac",
  metaTitle: "HVAC Services | Convoa",
  metaDescription: "Professional solutions for the HVAC industry.",
  statsImage: "/images/industry-pictures/hvac-pictures/stats.png",
  faqImage: "/images/industry-pictures/hvac-pictures/faq.png",
  hero: {
    eyebrow: "AI answering service for HVAC businesses",
    heading: "Never Miss an HVAC Service Call",
    subheading: "Dispatch faster, book more, handle emergencies 24/7.",
    targetAudience: "For independent contractors and HVAC businesses",
    image: "/images/industry-pictures/hvac-pictures/hero.png",
  },
  solutions: {
    heading: "Enable real-time dispatching with 24/7 customer service.",
    subheading: "An AI solution tailored to the HVAC industry.",
    cards: [
      { title: "Manage peak season stress", image: "/images/industry-pictures/hvac-pictures/solution-1.png" },
      { title: "Avoid schedule disruption due to emergencies", image: "/images/industry-pictures/hvac-pictures/solution-2.png" },
      { title: "Eliminate customer service issues", image: "/images/industry-pictures/hvac-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features that adapt to your needs.",
    image: "/images/industry-pictures/hvac-pictures/features.png",
    bullets: [
      { title: "AI that boosts customer experience:", description: "Our AI learns from your website, policies and customer queries — so every call is handled accurately like a pro." },
      { title: "Never miss a call:", description: "All your calls are answered, no matter the time or volume. Our AI assistant is the perfect partner for your frontdesk, enabling more work to get done." },
      { title: "Customizable:", description: "Your AI agent is tailored to your HVAC business needs. Engaging and multilingual voices, integrate with your existing CRM and scheduling platforms, and view realtime analytics." }
    ]
  },
  benefits: {
    heading: "Benefits beyond answering calls.",
    subheading: "Grow your business without worrying about the calls.",
    image: "/images/industry-pictures/hvac-pictures/benefits.png",
    bullets: [
      { title: "Enhanced customer experience:", description: "Customers are answered on the first ring, and can schedule appointments while your team rests. Convoa is available 24/7 and prioritizes emergencies." },
      { title: "Increased efficiency:", description: "With Convoa, there’s zero downtime and you’ll have increased response times and efficiency across all your communication and scheduling." },
      { title: "Optimized appointment scheduling:", description: "Schedule appointments based on location, time, urgency and technician specialization." },
      { title: "Critical business understanding:", description: "We understand the HVAC industry and your business — Convoa can be setup and start answering calls today." },
      { title: "Cost savings:", description: "Provide 24/7 service without increasing operational costs, capture leads and execute outreach without any additional systems." },
      { title: "Proven results:", description: "Track every conversation, and experience an immediate increase in customer satisfaction." }
    ]
  }
};
