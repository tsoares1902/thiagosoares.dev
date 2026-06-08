import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/artigos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}${article.href}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...articleRoutes];
}
