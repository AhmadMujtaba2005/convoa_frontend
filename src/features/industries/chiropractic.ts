import { IndustryContent } from "./types";

export const chiropractic: IndustryContent = {
  slug: "chiropractic",
  metaTitle: "Chiropractic Answering Service | Convoa",
  metaDescription: "AI answering service for Chiropractic clinics",
  statsImage: "/images/industry-pictures/chiropractic-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Chiropractors",
    heading: "Keep Your Schedule Aligned",
    subheading: "Never miss a new patient intake or adjustment booking.",
    targetAudience: "For independent chiropractors and multi-location clinics",
    image: "/images/industry-pictures/chiropractic-pictures/hero.png",
  },
  solutions: {
    heading: "Focus on patient care, not the phone.",
    subheading: "An AI solution built for the flow of a chiropractic clinic.",
    cards: [
      { title: "Handle Rescheduling & Cancellations", image: "/images/industry-pictures/chiropractic-pictures/solution-1.png" },
      { title: "Verify Insurance on the Spot", image: "/images/industry-pictures/chiropractic-pictures/solution-2.png" },
      { title: "Provide Post-Adjustment Instructions", image: "/images/industry-pictures/chiropractic-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for chiropractic workflows.",
    image: "/images/industry-pictures/chiropractic-pictures/features.png",
    bullets: [
      { title: "EHR Integration:", description: "Convoa integrates seamlessly with your Electronic Health Records to schedule appointments directly into your practice management software." },
      { title: "HIPAA Compliant:", description: "Ensure complete patient privacy. Our AI is designed from the ground up to handle sensitive health information securely." },
      { title: "Specialized Medical Terminology:", description: "Trained on chiropractic terms, the AI accurately understands requests for adjustments, decompression, and specific pain points." }
    ]
  },
  benefits: {
    heading: "Grow your practice effortlessly.",
    subheading: "More adjustments, fewer empty slots.",
    image: "/images/industry-pictures/chiropractic-pictures/benefits.png",
    bullets: [
      { title: "Reduce Empty Slots:", description: "Automatically fill gaps caused by last-minute cancellations by reaching out to your waitlist." },
      { title: "Automated Patient Intake:", description: "Handle new patient onboarding and gather preliminary health information before they even step into the clinic." },
      { title: "Uninterrupted Care:", description: "Keep your hands on the patient and your focus on the adjustment while Convoa handles the ringing phones." },
      { title: "After-Hours Booking:", description: "Patients often look for help when they wake up in pain. Capture those leads 24/7." },
      { title: "Fewer No-Shows:", description: "Automated, conversational SMS reminders ensure patients remember their upcoming adjustments." },
      { title: "Scale Without Overhead:", description: "Handle the call volume of a multi-doctor clinic without hiring a massive front desk staff." }
    ]
  }
};
