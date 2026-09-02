import { IndustryContent } from "./types";

export const cleaningServices: IndustryContent = {
  slug: "cleaning-services",
  metaTitle: "Cleaning Services Answering Service | Convoa",
  metaDescription: "AI answering service for Cleaning Services",
  statsImage: "/images/industry-pictures/cleaning-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Cleaning Services",
    heading: "AI That Keeps Your Schedule Spotless",
    subheading: "Book more jobs, miss zero calls while your hands are busy.",
    targetAudience: "For independent cleaners and cleaning agencies",
    image: "/images/industry-pictures/cleaning-pictures/hero.png",
  },
  solutions: {
    heading: "Focus on the shine with 24/7 booking.",
    subheading: "An AI solution built for residential and commercial cleaning.",
    cards: [
      { title: "Book Deep Cleans vs. Standard", image: "/images/industry-pictures/cleaning-pictures/solution-1.png" },
      { title: "Handle Emergency Spill Requests", image: "/images/industry-pictures/cleaning-pictures/solution-2.png" },
      { title: "Coordinate Key Drops & Access", image: "/images/industry-pictures/cleaning-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features that adapt to your routes.",
    image: "/images/industry-pictures/cleaning-pictures/features.png",
    bullets: [
      { title: "Smart Quote Generation:", description: "Provide instant, accurate quotes based on square footage, number of rooms, and cleaning type." },
      { title: "Geographic Routing:", description: "Schedule appointments intelligently based on technician locations to minimize drive time between jobs." },
      { title: "Multilingual Support:", description: "Communicate seamlessly with both your diverse client base and your field staff in their preferred languages." }
    ]
  },
  benefits: {
    heading: "Grow your cleaning business.",
    subheading: "More booked homes, less time on the phone.",
    image: "/images/industry-pictures/cleaning-pictures/benefits.png",
    bullets: [
      { title: "Win Last-Minute Jobs:", description: "Be the first to answer when someone urgently needs a move-out clean, even if you are currently on a job." },
      { title: "Keep Vans Moving:", description: "Eliminate the need to pull over and park just to answer a booking inquiry." },
      { title: "Eliminate Scheduling Conflicts:", description: "Convoa cross-references your availability in real-time, preventing double bookings." },
      { title: "Automate Reminders:", description: "Send automated prep instructions to clients (e.g., 'Please clear the counters') before you arrive." },
      { title: "Filter Out Spam:", description: "Keep your line clear for actual paying customers while the AI handles solicitors." },
      { title: "Predictable Growth:", description: "Scale your advertising confidently, knowing every incoming lead will be greeted instantly." }
    ]
  }
};
