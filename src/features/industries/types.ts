export interface IndustryContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    heading: string;
    subheading: string;
    ctaLabel: string;
  };
  serviceSection: {
    heading: string;
    painPoints: string[];
  };
}
