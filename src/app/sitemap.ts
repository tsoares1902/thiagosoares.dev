import type { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { getArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: seoConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${seoConfig.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${seoConfig.siteUrl}${seoConfig.rssPath}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.4
    }
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${seoConfig.siteUrl}${article.href}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...articleRoutes];
}
