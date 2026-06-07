import type { Certification } from "@/types/home";

export const certificationsContent = {
  eyebrow: "Certificações",
  title: "Como me preparei?",
  description:
    "Acredito que aprender continuamente faz parte da profissão. As certificações abaixo representam conhecimentos que considero importantes para construir aplicações modernas, escaláveis e seguras."
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    category: "Cloud",
    reason:
      "Validar fundamentos oficiais da AWS e criar base para certificações mais avançadas.",
    status: "Planejada",
    href: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    name: "AWS Certified Developer – Associate",
    category: "Cloud",
    reason:
      "Alinhar AWS ao meu trabalho diário com Node.js, APIs, integrações e desenvolvimento cloud.",
    status: "Planejada",
    href: "https://aws.amazon.com/certification/certified-developer-associate/"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    category: "Cloud",
    reason:
      "Validar conhecimentos em arquitetura, escalabilidade, segurança e desenho de soluções distribuídas.",
    status: "Planejada",
    href: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    category: "Cloud",
    reason:
      "Aprofundar conhecimentos em CI/CD, observabilidade, automação e operações em cloud.",
    status: "Planejada",
    href: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
  },
  {
    name: "MongoDB Associate Developer",
    category: "Database",
    reason:
      "Validar modelagem, agregações, índices e boas práticas em um banco que uso e gosto bastante.",
    status: "Planejada",
    href: "https://learn.mongodb.com/pages/certification-program"
  },
  {
    name: "Linux Foundation Certified IT Associate (LFCA)",
    category: "Linux & Containers",
    reason:
      "Formalizar conhecimentos de Linux, cloud, redes, DevOps e operações modernas.",
    status: "Planejada",
    href: "https://training.linuxfoundation.org/certification/certified-it-associate/"
  },
  {
    name: "Linux Foundation Certified System Administrator (LFCS)",
    category: "Linux & Containers",
    reason:
      "Validar habilidades práticas de administração Linux usadas em servidores, deploys e troubleshooting.",
    status: "Planejada",
    href: "https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    category: "Linux & Containers",
    reason:
      "Dominar Kubernetes e ampliar conhecimentos em ambientes cloud-native e containers.",
    status: "Planejada",
    href: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    category: "Security",
    reason:
      "Complementar minha experiência prática com fundamentos oficiais de segurança, riscos e proteção de sistemas.",
    status: "Planejada",
    href: "https://www.isc2.org/certifications/cc"
  }
];

export const certificationCategories = [
  "Cloud",
  "Database",
  "Linux & Containers",
  "Security"
] as const;
