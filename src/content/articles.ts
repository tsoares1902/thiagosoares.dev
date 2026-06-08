import type { Article } from "@/types/home";

export const articlesContent = {
  eyebrow: "Artigos",
  title: "O que penso?",
  description:
    "Este espaço é onde compartilho experiências e reflexões sobre tecnologia."
};

export const articles: Article[] = [
  {
    title: "Como instalar o NVM no Ubuntu",
    description:
      "Um guia prático para configurar Node.js com NVM em um ambiente Linux moderno.",
    category: "Linux",
    readTime: "5 min",
    slug: "como-instalar-nvm-no-ubuntu"
  },
  {
    title: "O que é a Call Stack no Node.js",
    description:
      "Entenda como a pilha de chamadas funciona e por que ela importa para quem escreve JavaScript.",
    category: "Node.js",
    readTime: "8 min",
    slug: "call-stack-nodejs"
  },
  {
    title: "A história do Node.js e por que ele surgiu",
    description:
      "Uma visão sobre o contexto, os problemas e as decisões que levaram ao surgimento do Node.js.",
    category: "Node.js",
    readTime: "9 min",
    slug: "historia-do-nodejs"
  },
  {
    title: "Montando um ambiente profissional Node.js no Ubuntu",
    description:
      "Ferramentas, terminal, Docker, Git, VS Code e boas práticas para desenvolver melhor.",
    category: "Ambiente",
    readTime: "10 min",
    slug: "ambiente-nodejs-ubuntu"
  }
];