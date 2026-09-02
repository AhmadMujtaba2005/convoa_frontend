import { IndustryContent } from "./types";

export const taxAccountants: IndustryContent = {
  slug: "tax-accountants",
  metaTitle: "Tax Accountant Answering Service | Convoa",
  metaDescription: "AI answering service for Tax Accountants and CPAs",
  statsImage: "/images/industry-pictures/tax-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for CPAs",
    heading: "Survive Tax Season Uninterrupted",
    subheading: "Filter leads and chase documents while you focus on returns.",
    targetAudience: "For independent CPAs and accounting firms",
    image: "/images/industry-pictures/tax-pictures/hero.png",
  },
  solutions: {
    heading: "Focus on billable hours.",
    subheading: "An AI solution built for the April crunch.",
    cards: [
      { title: "Schedule Prep Appointments", image: "/images/industry-pictures/tax-pictures/solution-1.png" },
      { title: "Answer Deadline Questions", image: "/images/industry-pictures/tax-pictures/solution-2.png" },
      { title: "Chase Missing Documents", image: "/images/industry-pictures/tax-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for accounting workflows.",
    image: "/images/industry-pictures/tax-pictures/features.png",
    bullets: [
      { title: "Secure Portal Guidance:", description: "Guides clients on exactly how and where to securely upload their W-2s and 1099s." },
      { title: "Peak Season Scaling:", description: "Automatically handles massive call volume spikes as filing deadlines approach." },
      { title: "CRM Integration:", description: "Syncs with Canopy, Karbon, or your preferred CRM to log calls and update client status." }
    ]
  },
  benefits: {
    heading: "Keep your sanity intact.",
    subheading: "Protect your time when it's most valuable.",
    image: "/images/industry-pictures/tax-pictures/benefits.png",
    bullets: [
      { title: "Stop the 'Is it done yet?' Calls:", description: "Automatically provide status updates to clients without pulling you out of deep work." },
      { title: "Filter Non-Ideal Clients:", description: "Qualify inbound leads to ensure you only take on returns that match your firm's profitability goals." },
      { title: "Extend Office Hours:", description: "Allow clients to book appointments and get answers late at night, even when your office is closed." },
      { title: "Reduce Admin Overhead:", description: "Eliminate the need to hire temporary front desk staff just for tax season." },
      { title: "Professional Presentation:", description: "Maintain a calm, organized front even when the office is chaotic." },
      { title: "Focus on Advisory:", description: "Reclaim hours spent on routine phone calls and redirect them to high-value advisory services." }
    ]
  }
};
