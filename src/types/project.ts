export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year?: number;
  featured?: boolean;
  category?: "web" | "mobile" | "fullstack" | "other";
}
