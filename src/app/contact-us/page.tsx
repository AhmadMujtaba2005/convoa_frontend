import { Metadata } from "next";
import { ContactUsTemplate } from "@/features/contact-page/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Convoa",
  description: "Get in touch with the Convoa team to see how our AI voice assistant can transform your business.",
};

export default function ContactUsPage() {
  return <ContactUsTemplate />;
}
