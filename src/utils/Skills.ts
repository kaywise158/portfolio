
import {
  FaCode, FaServer, FaDatabase, FaCloud, FaMobile, FaSearch, FaStore,
} from "react-icons/fa";
import {
 SiShopify, SiGoogleanalytics, Si1Panel, SiCanva, SiTiktok, SiMeta,
} from "react-icons/si";
import { type IconType } from "react-icons";

interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  description: string;
  items: string[];
}




interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  description: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Shopify Store Design & Redesign",
    icon: FaCode,
    color: "whiteAlpha.700",
    description: "Professional, mobile-responsive Shopify stores built to convert.",
    items: [
      "Professional Shopify store setup",
      "Premium, mobile-responsive design",
      "Homepage and landing page optimization",
      "Store branding and customization",
    ],
  },
  {
    title: "Shopify SEO Optimization",
    icon: FaServer,
    color: "whiteAlpha.700",
    description: "On-page and technical SEO to help your store rank and get found.",
    items: [
      "Product SEO",
      "Collection SEO",
      "Meta titles and descriptions",
      "Image optimization",
      "Google Search Console setup",
      "Sitemap submission",
      "Technical SEO improvements",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: FaMobile,
    color: "whiteAlpha.700",
    description: "Turning more visitors into paying customers.",
    items: [
      "Product page optimization",
      "Trust badges",
      "Upsell and cross-sell setup",
      "Cart optimization",
      "Speed optimization",
      "Customer journey improvements",
    ],
  },
  {
    title: "Email Marketing",
    icon: FaDatabase,
    color: "whiteAlpha.700",
    description: "Automated flows and campaigns that recover revenue and retain customers.",
    items: [
      "Welcome email automation",
      "Abandoned cart recovery",
      "Browse abandonment emails",
      "Customer win-back campaigns",
      "Newsletter campaigns",
    ],
  },
  {
    title: "Digital Marketing",
    icon: FaCloud,
    color: "whiteAlpha.700",
    description: "Paid and organic growth across the platforms your customers use.",
    items: [
      "Facebook & Instagram Ads",
      "Google Ads",
      "TikTok Ads",
      "Pinterest Marketing",
      "Social media growth strategies",
    ],
  },
  {
    title: "Store Performance Optimization",
    icon: FaServer,
    color: "whiteAlpha.700",
    description: "Faster, smoother stores that keep visitors from bouncing.",
    items: [
      "Website speed optimization",
      "Core Web Vitals improvements",
      "Mobile optimization",
      "User experience enhancements",
    ],
  },
];

const tools: Skill[] = [
  {
    name: "Shopify",
    category: "tools",
    icon: SiShopify,
    color: "#95BF47",
    description: "Building and managing full Shopify store setups.",
  },
  {
    name: "Google Analytics",
    category: "tools",
    icon: SiGoogleanalytics,
    color: "#E37400",
    description: "Tracking traffic, behavior, and conversion performance.",
  },
  {
    name: "Google Search Console",
    category: "tools",
    icon: FaSearch, // no dedicated SI brand icon exists for this yet
    color: "#4285F4",
    description: "Monitoring search performance and indexing health.",
  },
  {
    name: "Google Merchant Center",
    category: "tools",
    icon: FaStore, 
    color: "#4285F4",
    description: "Managing product listings for Shopping ads.",
  },
  {
    name: "Klaviyo",
    category: "tools",
    icon: Si1Panel,
    color: "#000000",
    description: "Building email automation flows and campaigns.",
  },
  {
    name: "Meta Ads Manager",
    category: "tools",
    icon: SiMeta,
    color: "#0668E1",
    description: "Running Facebook & Instagram ad campaigns.",
  },
  {
    name: "TikTok Ads Manager",
    category: "tools",
    icon: SiTiktok,
    color: "#000000",
    description: "Launching and optimizing TikTok ad campaigns.",
  },
  {
    name: "Canva",
    category: "tools",
    icon: SiCanva,
    color: "#00C4CC",
    description: "Designing store graphics and marketing creatives.",
  },
];

export {  tools, type Skill, skillCategories, type SkillCategory };






