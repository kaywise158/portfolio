import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobile,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazon,
  SiRedis,
  SiGraphql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
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
}

const skills: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
    description:
      "Writing efficient, modern, and optimized code for frontend and backend applications.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
    description:
      "Building scalable and type-safe applications with improved maintainability.",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: SiReact,
    color: "#61DAFB",
    description:
      "Building fast, interactive, and component-based user interfaces.",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    description:
      "Developing high-performance full-stack applications with server-side rendering.",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
    color: "#339933",
    description:
      "Creating scalable backend services and high-performance server applications.",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "#FFFFFF",
    description:
      "Building secure and efficient REST APIs with flexible backend architecture.",
  },
  {
    name: "Java",
    category: "backend",
    icon: FaJava,
    color: "#007396",
    description:
      "Developing robust enterprise-level applications with strong performance.",
  },
  {
    name: "Spring Boot",
    category: "backend",
    icon: SiSpring,
    color: "#6DB33F",
    description:
      "Creating scalable Java backend systems with clean and production-ready architecture.",
  },
  {
    name: "GraphQL",
    category: "backend",
    icon: SiGraphql,
    color: "#E10098",
    description:
      "Building flexible APIs with efficient data fetching and optimized queries.",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    icon: SiPostgresql,
    color: "#4169E1",
    description:
      "Designing reliable relational databases with secure and efficient data handling.",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "#47A248",
    description:
      "Managing flexible NoSQL databases with optimized performance and scalability.",
  },
  {
    name: "Redis",
    category: "database",
    icon: SiRedis,
    color: "#DC382D",
    description:
      "Improving application speed using in-memory caching and real-time data storage.",
  },

  // DevOps & Tools
  {
    name: "Docker",
    category: "devops",
    icon: SiDocker,
    color: "#2496ED",
    description:
      "Containerizing applications for consistent deployment and development workflows.",
  },
  {
    name: "Git",
    category: "devops",
    icon: SiGit,
    color: "#F05032",
    description:
      "Tracking code changes and managing collaborative development efficiently.",
  },
  {
    name: "AWS",
    category: "devops",
    icon: SiAmazon,
    color: "#FF9900",
    description:
      "Deploying and scaling cloud-based applications with reliable infrastructure.",
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: FaCode,
    color: "whiteAlpha.700",
    description:
      "Building responsive and interactive user interfaces with modern frameworks",
  },
  {
    title: "Backend Development",
    icon: FaServer,
    color: "whiteAlpha.700",
    description: "Creating robust server-side applications and RESTful APIs",
  },
  {
    title: "Mobile Development",
    icon: FaMobile,
    color: "whiteAlpha.700",
    description: "Developing cross-platform mobile applications",
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    color: "whiteAlpha.700",
    description: "Designing and managing efficient database solutions",
  },
  {
    title: "DevOps & Cloud",
    icon: FaCloud,
    color: "whiteAlpha.700",
    description:
      "Managing deployments, CI/CD pipelines, and cloud infrastructure",
  },
];

export { skills, skillCategories, type Skill, type SkillCategory };
