export const pricingHero = {
  eyebrow: "PRICING",
  title: "Choose the plan that fits ",
  highlightedTitle: "your business",
  description: "All plans include 24 by 7 AI call handling, lead qualification and smart appointment booking."
};

export const pricingToggles = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  saveBadge: "Save 17%"
};

export const pricingPlans = [
  {
    name: "Launch",
    monthlyPrice: "299",
    annualPrice: "249",
    features: [
      "600 minutes per month",
      "3 AI Assistant personas",
      "Call recording, transcript & summaries",
      "Appointment/Calendar Scheduling",
      "Customize your AI",
      "Analytical Dashboard",
      "Minimum 2 dedicated lines"
    ],
    ctaText: "Get Started"
  },
  {
    name: "Pro",
    monthlyPrice: "699",
    annualPrice: "579",
    features: [
      "1800 minutes per month",
      "10 AI Assistant personas",
      "Call recording, transcript & summaries",
      "Appointment/Calendar Scheduling",
      "Customize your AI",
      "Analytical Dashboard",
      "Minimum 5 dedicated lines"
    ],
    ctaText: "Get Started",
    popular: true
  },
  {
    name: "Convoa Enterprise",
    contactUs: true,
    features: [
      "Unlimited concurrency",
      "Multilingual assistants",
      "Inbound and outbound automation",
      "Advanced data analytics",
      "API access",
      "Custom integrations",
      "White-glove deployment",
      "Hands on training",
      "Professional support and setup"
    ],
    ctaText: "Contact Us"
  }
];

export const pricingFaqs = [
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
  },
  {
    question: "What are dedicated lines or concurrency?",
    answer: "Concurrency allows your AI agent to handle multiple conversations in parallel – your customers receive immediate service without waiting. Each plan has a minimum number of guaranteed dedicated lines for your business, and we ensure sufficient capacity within our network to allow higher concurrency."
  },
  {
    question: "What are Assistant Personas?",
    answer: "A persona allows you to configure the voice, personality and objective of an AI assistant. You can setup multiple personas to bring variety to customer interactions, or A/B test different personas to see what works best for your callers.",
    image: "/images/app-screenshots/Screenshot 2026-08-25 131940.webp"
  }
];
