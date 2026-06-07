import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type { ArticleMetadata } from "@/types/article";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

const ArticleFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  publishedAt: z.string(),
  readingTime: z.string(),
  slug: z.string()
});

export async function getArticleSlugs() {
  const files = await fs.readdir(articlesDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const file = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(file);

  const frontmatter = ArticleFrontmatterSchema.parse(data);

  return {
    content,
    metadata: {
      ...frontmatter,
      href: `/artigos/${frontmatter.slug}`
    }
  };
}

export async function getArticles(): Promise<ArticleMetadata[]> {
  const slugs = await getArticleSlugs();

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticleBySlug(slug);

      return article.metadata;
    })
  );

  return articles.sort(
    (currentArticle, nextArticle) =>
      new Date(nextArticle.publishedAt).getTime() -
      new Date(currentArticle.publishedAt).getTime()
  );
}