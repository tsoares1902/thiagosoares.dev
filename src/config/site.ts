export const siteConfig = {
  name: "Thiago Soares",
  domain: "thiagosoares.dev",
  title: "Thiago Soares | Software Engineer",
  description:
    "Software Engineer apaixonado por Node.js (NestJS), React (Next.js), MongoDB e AWS.",
  navigation: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Artigos", href: "#artigos" },
    { label: "Contato", href: "#contato" }
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