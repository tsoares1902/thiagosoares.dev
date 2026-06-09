export const seoConfig = {
  siteUrl: "https://thiagosoares.dev",
  siteName: "Thiago Soares",
  title: "Thiago Soares | Software Engineer",
  description:
    "Desenvolvimento de software com foco em Node.js, React, MongoDB e AWS.",
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
  rssPath: "/rss.xml",
  openGraphImagePath: "/opengraph-image",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined
  }
} as const;

export type SeoConfig = typeof seoConfig;

export const seoUrls = {
  home: seoConfig.siteUrl,
  rss: `${seoConfig.siteUrl}${seoConfig.rssPath}`,
  sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  openGraphImage: `${seoConfig.siteUrl}${seoConfig.openGraphImagePath}`
} as const;
