import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { ContactChannel } from "@/types/home";

export const contactContent = {
  eyebrow: "Contato",
  title: "Como me encontrar?",
  description:
    "Se quiser conversar sobre tecnologia, produtos digitais, arquitetura de software ou oportunidades profissionais, ficarei feliz em trocar ideias."
};

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "tcsoares84@gmail.com",
    href: "mailto:tcsoares84@gmail.com",
    icon: Mail
  },
  {
    label: "GitHub",
    value: "github.com/tsoares1902",
    href: "https://github.com/tsoares1902",
    icon: FaGithub
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://linkedin.com/",
    icon: FaLinkedinIn
  }
];