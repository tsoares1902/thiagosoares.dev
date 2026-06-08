import { Cloud, Code2, Server, ShieldCheck } from "lucide-react";
import type { Service } from "@/types/home";

export const servicesContent = {
  eyebrow: "Serviços",
  title: "O que faço?",
  description:
    "Trabalho principalmente com desenvolvimento de aplicações da arquitetura ao deploy."
};

export const services: Service[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e performáticas.",
    icon: Code2
  },
  {
    title: "APIs",
    description: "Autenticação, autirização, gerenciamento de conteúdo.",
    icon: Server
  },
  {
    title: "Segurança",
    description: "SonarQube, Trivy e Veracode.",
    icon: ShieldCheck
  },
  {
    title: "Cloud e Deploy",
    description: "Registro de Domínio, DNS, SSL, Docker, Kubbernets.",
    icon: Cloud
  },
];
