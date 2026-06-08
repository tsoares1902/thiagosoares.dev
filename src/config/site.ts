export const siteConfig = {
  name: "Thiago Soares",
  domain: "thiagosoares.dev",
  url: "https://thiagosoares.dev",
  title: "Thiago Soares | Software Engineer",
  description:
    "Tecnologia para resolver seus problemas.",
  keywords: [
    "Thiago Soares",
    "Software Engineer",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "MongoDB",
    "AWS",
    "Backend Engineer",
    "Full Stack Developer",
    "TypeScript",
    "JavaScript",
    "Cloud Engineer",
    "Arquitetura de Software"
  ],
  ogImage: "/opengraph-image",
  navigation: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Artigos", href: "#artigos" },
    { label: "Canais", href: "#canais" }
  ],
  languages: [
    {
      label: "Português",
      locale: "pt-BR",
      href: "/",
      flag: "🇧🇷"
    },
    {
      label: "English",
      locale: "en-US",
      href: "/en",
      flag: "🇺🇸"
    },
    {
      label: "Español",
      locale: "es-ES",
      href: "/es",
      flag: "🇪🇸"
    }
  ],
  socials: {
    email: "mailto:tcsoares84@gmail.com",
    whatsapp: "https://wa.me/",
    telegram: "https://t.me/",
    github: "https://github.com/tsoares1902",
    x: "https://x.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    spotify: "https://spotify.com/",
    youtube: "https://youtube.com/",
    discord: "https://discord.com/",
    linkedin: "https://linkedin.com/"
  }
} as const;
