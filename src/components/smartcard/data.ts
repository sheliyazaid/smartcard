import productAi from "@/assets/product-ai.jpg";
import productBusiness from "@/assets/product-business.jpg";
import productMarketing from "@/assets/product-marketing.jpg";
import productProductivity from "@/assets/product-productivity.jpg";
import productEducation from "@/assets/product-education.jpg";
import productFinance from "@/assets/product-finance.jpg";
import productHealth from "@/assets/product-health.jpg";

export type Product = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  benefits: string[];
  affiliateUrl: string;
  badge?: "Editor's Choice" | "Trending" | "Best Seller" | "New";
};

const DIGISTORE = "https://www.digistore24.com/redir/000000/smartcard/";

export const products: Product[] = [
  {
    id: "neural-write",
    title: "NeuralWrite Pro",
    tagline: "AI writing that sounds like you.",
    description: "Long-form AI writing assistant tuned for marketers, founders, and creators. Trained on conversion-grade copy.",
    category: "AI Tools",
    rating: 4.9,
    reviews: 2843,
    price: "$49 / mo",
    image: productAi,
    benefits: ["Brand voice training", "100+ templates", "SEO-ready drafts"],
    affiliateUrl: DIGISTORE,
    badge: "Editor's Choice",
  },
  {
    id: "founder-os",
    title: "Founder OS",
    tagline: "The operating system for solo founders.",
    description: "A complete Notion-style toolkit covering CRM, finance, hiring, and weekly planning for early-stage founders.",
    category: "Business",
    rating: 4.8,
    reviews: 1611,
    price: "$79 once",
    image: productBusiness,
    benefits: ["CRM + pipeline", "Investor updates", "Hiring templates"],
    affiliateUrl: DIGISTORE,
    badge: "Best Seller",
  },
  {
    id: "growth-loop",
    title: "Growth Loop",
    tagline: "Compounding marketing playbooks.",
    description: "Battle-tested SEO, paid, and lifecycle playbooks distilled from 80+ scale-ups. Updated quarterly.",
    category: "Marketing",
    rating: 4.7,
    reviews: 932,
    price: "$129 once",
    image: productMarketing,
    benefits: ["Channel playbooks", "Funnel teardowns", "Lifetime updates"],
    affiliateUrl: DIGISTORE,
    badge: "Trending",
  },
  {
    id: "deepwork",
    title: "DeepWork Method",
    tagline: "Reclaim 20 hours of focus a week.",
    description: "A guided 30-day productivity system with daily rituals, focus blocks, and a companion mobile workspace.",
    category: "Productivity",
    rating: 4.9,
    reviews: 4120,
    price: "$39 once",
    image: productProductivity,
    benefits: ["Daily rituals", "Focus tracker", "Mobile companion"],
    affiliateUrl: DIGISTORE,
  },
  {
    id: "skillforge",
    title: "SkillForge Academy",
    tagline: "Master a new skill in 90 days.",
    description: "Live cohort-based courses in design, AI, copywriting and code — with mentors who actually reply.",
    category: "Education",
    rating: 4.8,
    reviews: 2204,
    price: "from $199",
    image: productEducation,
    benefits: ["Live cohorts", "1:1 mentor calls", "Portfolio projects"],
    affiliateUrl: DIGISTORE,
    badge: "New",
  },
  {
    id: "ledger-zen",
    title: "Ledger Zen",
    tagline: "Personal finance, beautifully simple.",
    description: "Track net worth, automate budgets, and visualise your runway with a private, end-to-end encrypted ledger.",
    category: "Finance",
    rating: 4.7,
    reviews: 1183,
    price: "$9 / mo",
    image: productFinance,
    benefits: ["Net worth tracking", "Auto-categorise", "Private by design"],
    affiliateUrl: DIGISTORE,
  },
  {
    id: "vital-routine",
    title: "Vital Routine",
    tagline: "Wellness for high performers.",
    description: "Personalised training, recovery, and nutrition plans built around your schedule and biomarkers.",
    category: "Health & Fitness",
    rating: 4.8,
    reviews: 1762,
    price: "$19 / mo",
    image: productHealth,
    benefits: ["Adaptive plans", "Sleep coaching", "HRV insights"],
    affiliateUrl: DIGISTORE,
  },
];

export const categories = [
  { name: "AI Tools", count: 24, gradient: "from-[oklch(0.92_0.08_275)] to-[oklch(0.95_0.04_220)]" },
  { name: "Business", count: 18, gradient: "from-[oklch(0.94_0.07_50)] to-[oklch(0.96_0.04_90)]" },
  { name: "Marketing", count: 21, gradient: "from-[oklch(0.92_0.08_310)] to-[oklch(0.94_0.05_275)]" },
  { name: "Productivity", count: 16, gradient: "from-[oklch(0.93_0.06_220)] to-[oklch(0.95_0.04_180)]" },
  { name: "Education", count: 27, gradient: "from-[oklch(0.94_0.06_70)] to-[oklch(0.96_0.04_40)]" },
  { name: "Finance", count: 12, gradient: "from-[oklch(0.93_0.06_160)] to-[oklch(0.95_0.04_200)]" },
  { name: "Health & Fitness", count: 15, gradient: "from-[oklch(0.93_0.08_20)] to-[oklch(0.95_0.05_340)]" },
];
