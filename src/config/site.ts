import { seoConfig } from "@/config/seo";

export const siteConfig = {
  name: seoConfig.siteName,
  domain: "thiagosoares.dev",
  url: seoConfig.siteUrl,
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  ogImage: seoConfig.openGraphImagePath,
  navigation: [
    { label: "Sobre", href: "/#sobre" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Certificações", href: "/#certificacoes" },
    { label: "Blog", href: "/blog" }
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
    instagram: "https://www.instagram.com/tcsoares1914/",
    spotify: "https://spotify.com/",
    youtube: "https://www.youtube.com/@tcsoares1914",
    discord: "https://discord.com/",
    linkedin: "https://www.linkedin.com/in/tcsoares1914/"
  }
} as const;
