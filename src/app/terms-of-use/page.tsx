import { Metadata } from "next";
import { TermsOfUseTemplate } from "@/features/legal/TermsOfUsePage";

export const metadata: Metadata = {
  title: "Terms of Service | Convoa",
  description: "The rules and guidelines that govern your use of Convoa's platform and services.",
};

export default function TermsOfUsePage() {
  return <TermsOfUseTemplate />;
}
