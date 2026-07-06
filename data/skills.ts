import type { LucideIcon } from "lucide-react";
import {
  Atom,
  CheckCircle,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Shield,
  Terminal,
  Workflow,
} from "lucide-react";

export interface Skill {
  readonly name: string;
  readonly icon: LucideIcon;
  readonly brandColor: string;
}

export const skills: readonly Skill[] = [
  {
    name: "React",
    icon: Atom,
    brandColor: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: Globe,
    brandColor: "#000000",
  },
  {
    name: "TypeScript",
    icon: Code2,
    brandColor: "#3178C6",
  },
  {
    name: "Node.js",
    icon: Cpu,
    brandColor: "#339933",
  },
  {
    name: "Express",
    icon: Terminal,
    brandColor: "#A9A9A9",
  },
  {
    name: "NestJS",
    icon: Layers,
    brandColor: "#E0234E",
  },
  {
    name: "MongoDB",
    icon: Database,
    brandColor: "#47A248",
  },
  {
    name: "Redis",
    icon: Cpu,
    brandColor: "#DC382D",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    brandColor: "#4169E1",
  },
  {
    name: "Docker",
    icon: Shield,
    brandColor: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: Cloud,
    brandColor: "#326CE5",
  },
  {
    name: "AWS",
    icon: Cloud,
    brandColor: "#FF9900",
  },
  {
    name: "Terraform",
    icon: Workflow,
    brandColor: "#7B42BC",
  },
  {
    name: "Java",
    icon: Code2,
    brandColor: "#F8981D",
  },
  {
    name: "Spring Boot",
    icon: Layers,
    brandColor: "#6DB33F",
  },
  {
    name: "Python",
    icon: Code2,
    brandColor: "#3776AB",
  },
  {
    name: "Tailwind CSS",
    icon: Atom,
    brandColor: "#38BDF8",
  },
  {
    name: "Playwright",
    icon: CheckCircle,
    brandColor: "#2EAD33",
  },
  {
    name: "Selenium",
    icon: CheckCircle,
    brandColor: "#43B02A",
  },
  {
    name: "GitHub Actions",
    icon: GitBranch,
    brandColor: "#2088FF",
  },
] as const;
