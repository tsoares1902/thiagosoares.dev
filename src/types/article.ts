export type ArticleFrontmatter = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  slug: string;
};

export type ArticleMetadata = ArticleFrontmatter & {
  href: string;
};