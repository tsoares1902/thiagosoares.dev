import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type SkillCard = {
  title: string;
  technologies: string[];
  description: string;
  icon: LucideIcon;
};

export type Organization = {
  name: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Certification = {
  name: string;
  category: "Cloud" | "Database" | "Linux & Containers" | "Security";
  price: string;
  reason: string;
  status: "Planejada" | "Em andamento" | "Concluída";
  href: string;
};

export type Article = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | IconType;
};