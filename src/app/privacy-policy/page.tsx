import { Metadata } from "next";
import { PrivacyPolicyTemplate } from "@/features/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Convoa",
  description: "Learn how Convoa collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyTemplate />;
}
