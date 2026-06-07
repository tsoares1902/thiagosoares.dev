import { Blocks, Cloud, Code2, Server } from "lucide-react";
import type { Organization, SkillCard } from "@/types/home";

export const aboutContent = {
  eyebrow: "Sobre",
  title: "Quem sou eu?",
  paragraphs: [
    "Sou Software Engineer com experiência em desenvolvimento frontend e backend, arquitetura de software e infraestrutura cloud.",
    "Ao longo da minha carreira tive a oportunidade de atuar em empresas de diferentes segmentos e desafios, participando da construção de produtos digitais, plataformas web, integrações e iniciativas de modernização tecnológica.",
    "Hoje concentro minha atuação principalmente em Node.js (NestJS), React (Next.js), MongoDB e AWS, sempre buscando equilibrar arquitetura, qualidade de software e experiência do usuário.",
    "Gosto de participar de todo o ciclo de desenvolvimento, desde a concepção técnica até o deploy, ajudando a transformar ideias em soluções que geram valor para pessoas e negócios."
  ],
  organizationsTitle: "Algumas organizações para as quais desenvolvi soluções"
};

export const organizations: Organization[] = [
  { name: "Finnet" },
  { name: "Dr. Consulta" },
  { name: "Via Varejo" },
  { name: "ClickBus" },
  { name: "StudioWOX" },
  { name: "IT4D" }
];

export const skillCards: SkillCard[] = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript"],
    description:
      "Interfaces modernas, performáticas e orientadas à experiência do usuário.",
    icon: Code2
  },
  {
    title: "Backend",
    technologies: ["Node.js", "NestJS", "GraphQL"],
    description:
      "APIs, integrações e regras de negócio para aplicações escaláveis.",
    icon: Server
  },
  {
    title: "Arquitetura",
    technologies: ["Microservices", "Design Patterns", "Docker"],
    description:
      "Soluções distribuídas, evolução de sistemas e boas práticas de engenharia.",
    icon: Blocks
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "CI/CD", "Docker"],
    description: "Da configuração do domínio ao deploy automatizado em produção.",
    icon: Cloud
  }
];