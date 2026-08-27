import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/features/industry-page/IndustryPage";
import { allIndustries } from "@/features/industries";

interface Props {
  params: { slug: string };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const content = allIndustries.find((i) => i.slug === slug);

  if (!content) {
    notFound();
  }

  return <IndustryPageTemplate content={content} />;
}

// Pre-render all 9 industry pages at build time (SSG)
export function generateStaticParams() {
  return allIndustries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Dynamic per-page metadata (title/description) for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = allIndustries.find((i) => i.slug === slug);

  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}