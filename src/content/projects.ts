import type { Project } from "@/types/home";

export const projectsContent = {
  eyebrow: "Projetos",
  title: "O que já fiz?",
  description:
    "Durante minha carreira participei da construção de aplicações web, APIs, integrações e produtos digitais para diferentes segmentos. Alguns projetos nasceram em empresas, outros em startups e alguns surgiram por iniciativa própria para explorar novas tecnologias e validar ideias."
};

export const projects: Project[] = [
  {
    name: "fitematch site",
    type: "Plataforma Web",
    description:
      "Plataforma desenvolvida para conectar profissionais e empresas, explorando conceitos modernos de produto digital, experiência do usuário, SEO e escalabilidade.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "SEO"]
  },
  {
    name: "fitematch app",
    type: "Aplicativo Mobile",
    description:
      "Aplicativo construído para candidatos e recrutadores, com foco em experiência mobile, onboarding, autenticação e integração com APIs.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js"]
  }
];