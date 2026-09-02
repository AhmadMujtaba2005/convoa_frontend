import { IndustryContent } from "./types";

export const dental: IndustryContent = {
  slug: "dental",
  metaTitle: "Dental Answering Service | Convoa",
  metaDescription: "AI answering service for Dental clinics",
  statsImage: "/images/industry-pictures/dental-pictures/stats.png",
  
  hero: {
    eyebrow: "AI answering service for Dentists",
    heading: "Fill Your Chairs, Not Your Voicemail",
    subheading: "Handle emergencies and routine cleanings automatically.",
    targetAudience: "For family practices and specialized dental surgeons",
    image: "/images/industry-pictures/dental-pictures/hero.png",
  },
  solutions: {
    heading: "A seamless experience from the first ring.",
    subheading: "An AI solution built for modern dental practices.",
    cards: [
      { title: "Triage Dental Emergencies", image: "/images/industry-pictures/dental-pictures/solution-1.png" },
      { title: "Schedule Routine Cleanings", image: "/images/industry-pictures/dental-pictures/solution-2.png" },
      { title: "Pre-Screen Insurance Queries", image: "/images/industry-pictures/dental-pictures/solution-3.png" }
    ]
  },
  features: {
    heading: "Features built for the front desk.",
    image: "/images/industry-pictures/dental-pictures/features.png",
    bullets: [
      { title: "Practice Management Integration:", description: "Directly reads and writes to popular dental software like Dentrix and Eaglesoft to keep your schedule accurate." },
      { title: "After-Hours Escalation:", description: "Identifies true emergencies (e.g., knocked-out tooth) and patches them through to the on-call dentist immediately." },
      { title: "Procedure-Specific Logic:", description: "Understands the difference in booking length between a simple checkup and a root canal." }
    ]
  },
  benefits: {
    heading: "More smiles, less stress.",
    subheading: "Transform how your clinic handles patient flow.",
    image: "/images/industry-pictures/dental-pictures/benefits.png",
    bullets: [
      { title: "Focus on the Patient:", description: "Keep your front desk focused on the patients physically in the clinic, rather than constantly jumping to the ringing phone." },
      { title: "Capture After-Hours Leads:", description: "Toothaches happen at 2 AM. Convoa ensures you capture those patients for your morning schedule." },
      { title: "Reduce Hygiene No-Shows:", description: "Proactively reach out to patients overdue for their 6-month cleanings and get them booked." },
      { title: "Streamline New Patient Intake:", description: "Collect necessary preliminary information before they arrive, speeding up the waiting room experience." },
      { title: "Ensure Privacy:", description: "Maintain strict HIPAA compliance across all recorded interactions and transcriptions." },
      { title: "Lower Staff Burnout:", description: "Relieve your receptionists from the repetitive task of answering routine questions like 'Are you taking new patients?'" }
    ]
  }
};
