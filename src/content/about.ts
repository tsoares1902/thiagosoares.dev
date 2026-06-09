import { Blocks, Cloud, Code2, Server } from "lucide-react";
import type { Organization, SkillCard } from "@/types/home";

export const aboutContent = {
  eyebrow: "Sobre",
  title: "Quem sou eu?",
  paragraphs: [
    "Sou um desenvolvedor, que ama arquitetura de software, qualidade de código e o universo cloud.",
    "Ao longo da minha jornada profissional,tive a oportunidade de atuar em empresas de diferentes segmentos e desafios, participando da construção de produtos digitais que vão de plataformas web, modernização de sistmas legados a apps."
  ],
  organizationsTitle: "Algumas empresas que ja desenvolvi soluções"
};

export const organizations: Organization[] = [
  { name: "Finnet" },
  { name: "Dr. Consulta" },
  { name: "Via Varejo" },
  { name: "ClickBus" },
  { name: "Cury Construtora" }
];

export const skillCards: SkillCard[] = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Interfaces modernas, performáticas e orientadas à experiência do usuário.",
    icon: Code2
  },
  {
    title: "Backend",
    technologies: ["NestJS", "REST", "GraphQL"],
    description:
      "APIs, integrações e regras de negócio para aplicações escaláveis.",
    icon: Server
  },
  {
    title: "Arquitetura",
    technologies: ["Microservices", "Clean Architecture"],
    description:
      "Soluções distribuídas, evolução de sistemas e boas práticas de engenharia.",
    icon: Blocks
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "CI/CD", "Docker/Kubbernetes"],
    description: "Da configuração do domínio ao deploy automatizado em produção.",
    icon: Cloud
  }
];