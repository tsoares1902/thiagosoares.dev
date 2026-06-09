import { seoConfig, seoUrls } from "@/config/seo";
import { getArticles } from "@/lib/articles";

export const revalidate = 3600;

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toRssDate = (value: string) => new Date(value).toUTCString();

export async function GET() {
  const articles = await getArticles();
  const lastBuildDate = articles[0]?.publishedAt
    ? toRssDate(articles[0].publishedAt)
    : new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = `${seoConfig.siteUrl}${article.href}`;

      return [
        "    <item>",
        `      <title>${xmlEscape(article.title)}</title>`,
        `      <description>${xmlEscape(article.description)}</description>`,
        `      <link>${xmlEscape(url)}</link>`,
        `      <guid isPermaLink="true">${xmlEscape(url)}</guid>`,
        `      <category>${xmlEscape(article.category)}</category>`,
        `      <pubDate>${toRssDate(article.publishedAt)}</pubDate>`,
        "    </item>"
      ].join("\n");
    })
    .join("\n");

  const rss = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${xmlEscape(seoConfig.title)}</title>`,
    `    <description>${xmlEscape(seoConfig.description)}</description>`,
    `    <link>${xmlEscape(seoConfig.siteUrl)}</link>`,
    `    <atom:link href="${xmlEscape(seoUrls.rss)}" rel="self" type="application/rss+xml" />`,
    "    <language>pt-BR</language>",
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    `    <generator>${xmlEscape(seoConfig.siteName)}</generator>`,
    items,
    "  </channel>",
    "</rss>"
  ].join("\n");

  return new Response(rss, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
