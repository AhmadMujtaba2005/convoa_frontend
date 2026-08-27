export interface IndustryContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  statsImage?: string;
  faqImage?: string;
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    targetAudience?: string;
    image?: string;
  };
  solutions: {
    heading: string;
    subheading: string;
    cards: {
      title: string;
      image: string;
    }[];
  };
  features: {
    heading: string;
    image: string;
    bullets: {
      title: string;
      description: string;
    }[];
  };
  benefits: {
    heading: string;
    subheading: string;
    image: string;
    bullets: {
      title: string;
      description: string;
    }[];
  };
}

export const globalIndustryFaq = [
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely. If you’re not satisfied with the 24/7 customer engagement provided by Convoa, you can cancel anytime in your first 60 days to receive your money back. Simply cancel your service within Convoa and send an email to imnothappy@convoa.com with your feedback and we’ll issue a full refund."
  },
  {
    question: "Is there a minimum commitment or contract period?",
    answer: "No, our service does not have a contract or long term commitment. We are confident once you setup your AI assistant at Convoa, you’ll never look back."
  },
  {
    question: "Do I have to change my phone number?",
    answer: "No, you will receive a new phone number from Convoa. You can forward calls from your existing phone system or cell phone to this number so the AI assistant answers calls only when you want."
  },
  {
    question: "How many minutes do I need?",
    answer: "Minutes are assigned on each billing cycle, and can be used at any time. Our plans start with 600 minutes (10 hours) of talktime per month, minutes are consumed on actual usage and there is no charge for 24/7 availability. If your minutes are consumed prior to month-end, you can upgrade your plan or purchase a voice pack for additional minutes."
  }
];
