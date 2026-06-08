import type { Project } from "@/types/home";

export const projectsContent = {
  eyebrow: "Projetos",
  title: "O que já fiz?",
  description:
    "Alem de desenvolver novas features em projetos existentes tenho alguns que posso compartilhar."
};

export const projects: Project[] = [
  {
    name: "site",
    type: "fitematch",
    description:
      "Desenvolvida para conectar profissionais e empresas explorando a experiencia do usuário.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "SEO"]
  },
  {
    name: "app",
    type: "fitematch",
    description:
      "Aplicativo construído para candidatos e recrutadores, com foco em experiência mobile, onboarding, autenticação e integração com APIs.",
    stack: ["Node.js", "Typescript", "React Native", "Expo"]
  }
];