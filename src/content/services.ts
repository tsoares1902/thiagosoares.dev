import { Briefcase, Cloud, Code2, Rocket, Server } from "lucide-react";
import type { Service } from "@/types/home";

export const servicesContent = {
  eyebrow: "Serviços",
  title: "O que faço?",
  description:
    "Hoje trabalho principalmente com desenvolvimento de aplicações web, APIs e arquitetura de software. Gosto de atuar desde a definição técnica até a publicação em produção, conectando frontend, backend, banco de dados, infraestrutura cloud e experiência do usuário."
};

export const services: Service[] = [
  {
    title: "Desenvolvimento SaaS",
    description: "Da ideia ao deploy com visão técnica e produto.",
    icon: Rocket
  },
  {
    title: "APIs Node.js",
    description: "Backend com NestJS, autenticação, integrações e bancos de dados.",
    icon: Server
  },
  {
    title: "Frontend React",
    description: "Interfaces modernas, responsivas e performáticas.",
    icon: Code2
  },
  {
    title: "Cloud e Deploy",
    description: "Domínio, DNS, SSL, AWS, Docker e publicação.",
    icon: Cloud
  },
  {
    title: "Consultoria Técnica",
    description: "Arquitetura, revisão técnica e evolução de sistemas.",
    icon: Briefcase
  }
];