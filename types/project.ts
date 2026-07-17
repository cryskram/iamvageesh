export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  category?: ProjectCategory;
  featured?: boolean;
}

export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "ML/AI"
  | "DevOps"
  | "Open Source"
  | "Other";

export interface TechStackItem {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "mobile" | "other";
  icon?: string;
}