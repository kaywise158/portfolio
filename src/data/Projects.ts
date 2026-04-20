import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Multivendor E-commerce Platform",
    description:
      "A full-stack multi-vendor marketplace with product management, secure payments via Stripe and Paystack, and role-based authentication. Built for scalability and a seamless shopping experience.",
    images: ["/ecommerce/mv11.png"],
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
    description:
      "A progressive web app for large-scale computer-based testing with real-time monitoring, live analytics, and automated reporting. Engineered to handle concurrent test sessions with reliable performance.",
    images: ["testwise/testwise001.png"],
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
    description:
      "An adventure tour booking platform where users can discover, plan, and book curated travel experiences. Features tour listings, itinerary management, and a clean booking flow built for travelers and tour operators alike.",
    images: ["/roamify/roamify.png"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Chakra UI",
    ],
    githubUrl: "",
    liveUrl: "https://roamify-tours.netlify.app",
    featured: true,
    category: "fullstack",
  },

  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "A installable PWA delivering real-time weather forecasts with geolocation, interactive maps, and a responsive UI optimized for both mobile and desktop.",
    images: ["/weather/weather_01.png"],
    technologies: [
      "React",
      "TypeScript",
      "OpenWeather API",
      "Chakra UI",
      "Mapbox",
    ],
    githubUrl: "https://github.com/abdulazeez9/meteometric-dashboard",
    liveUrl: "https://meteometric.netlify.app",
    featured: false,
    category: "web",
  },
  {
    id: 5,
    name: "Enterprise Suite",
    description:
      "A modern enterprise management application with real-time communication, calendar scheduling, and an analytics dashboard. Built with Next.js and Firebase for fast, scalable performance.",
    images: ["enterprise/ent001.png"],
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
  {
    id: 6,
    name: "Nexus HR",
    description:
      "An upcoming full-stack HR management system for handling employee records, payroll, leave requests, and performance tracking. Currently under active development with a Vue.js frontend and a Java Spring Boot backend — watch this space.",
    images: ["/nexus-hr/nexus-hr001.png"],
    technologies: ["Vue.js", "Java", "Spring Boot", "TypeScript"],
    githubUrl: "",
    liveUrl: "",
    featured: false,
    category: "fullstack",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  category: Project["category"],
): Project[] => {
  return projects.filter((project) => project.category === category);
};
