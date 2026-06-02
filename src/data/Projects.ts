import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Multivendor E-commerce Platform",
    year: 2025,
    description:
      "A full-stack multi-vendor marketplace with product management, secure payments via Stripe and Paystack, and role-based authentication. Built for scalability and a seamless shopping experience.",
    images: ["/project-image.webp"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "PayStack",
      "Chakra UI",
      "Recharts",
    ],
    githubUrl:
      "https://github.com/abdulazeez9/Multi-vendor-E-commerce-Platform",
    liveUrl: "https://multivendor.site",
    featured: true,
    category: "fullstack",
  },
  {
    id: 2,
    name: "Testwise CBT Platform",
    year: 2025,
    description:
      "A progressive web app for large-scale computer-based testing with real-time monitoring, live analytics, and automated reporting. Engineered to handle concurrent test sessions with reliable performance.",
    images: ["/project-image.webp"],
    technologies: [
      "TypeScript",
      "React",
      "PostgreSQL",
      "Chakra UI",
      "Express",
      "Socket.io",
      "Recharts",
    ],
    githubUrl: "https://github.com/abdulazeez9/testwise",
    liveUrl: "https://testwise-cbt.netlify.app",
    featured: true,
    category: "fullstack",
  },
  {
    id: 3,
    name: "Roamify",
    year: 2026,
    description:
      "An adventure tour booking platform where users can discover, plan, and book curated travel experiences. Features tour listings, itinerary management, and a clean booking flow built for travelers and tour operators alike.",
    images: ["/project-image.webp"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Chakra UI",
    ],
    githubUrl: "https://github.com/abdulazeez9/roamify",
    liveUrl: "https://roamify-tours.netlify.app",
    featured: true,
    category: "fullstack",
  },

  {
    id: 4,
    name: "MarketGO",
    year: 2026,
    description:
      "A full-stack marketplace platform connecting buyers, sellers, and runners for seamless on-demand delivery. Buyers browse and order from local vendors, while runners handle last-mile delivery straight to the doorstep — think Glovo or Jumia, built from scratch.",
    images: ["/project-image.webp"],
    technologies: [
      "Spring Boot",
      "Vue.js",
      "REST API",
      "PostgreSQL",
      "WebSocket",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    category: "web",
  },
  {
    id: 5,
    name: "Enterprise Suite",
    year: 2025,
    description:
      "A modern enterprise management application with real-time communication, calendar scheduling, and an analytics dashboard. Built with Next.js and Firebase for fast, scalable performance.",
    images: ["/project-image.webp"],
    technologies: [
      "Next.js",
      "Firebase",
      "Chakra UI",
      "TypeScript",
      "Recharts",
    ],
    githubUrl: "https://github.com/abdulazeez9/enterprise-suite",
    liveUrl: "https://muritador-enterprise-suite.vercel.app",
    featured: false,
    category: "web",
  },
  // {
  //   id: 6,
  //   name: "Nexus HR",
  //   year: 2025,
  //   description:
  //     "An upcoming full-stack HR management system for handling employee records, payroll, leave requests, and performance tracking. Currently under active development with a Vue.js frontend and a Java Spring Boot backend — watch this space.",
  //   images: ["/project-image.webp"],
  //   technologies: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
  //   githubUrl: "",
  //   liveUrl: "",
  //   featured: true,
  //   category: "fullstack",
  // },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  category: Project["category"],
): Project[] => {
  return projects.filter((project) => project.category === category);
};
