import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArticleHeader } from "@/components/articles/article-header";
import { Container } from "@/components/ui/container";
import { seoConfig } from "@/config/seo";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { mdxComponents } from "@/components/mdx/mdx-components";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Article = Awaited<ReturnType<typeof getArticleBySlug>>;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getArticleBySlug(slug);
    const url = `${seoConfig.siteUrl}${article.metadata.href}`;

    return {
      title: article.metadata.title,
      description: article.metadata.description,
      alternates: {
        canonical: article.metadata.href
      },
      openGraph: {
        type: "article",
        title: article.metadata.title,
        description: article.metadata.description,
        url,
        siteName: seoConfig.siteName,
        publishedTime: article.metadata.publishedAt,
        authors: [seoConfig.siteName],
        images: [
          {
            url: seoConfig.openGraphImagePath,
            width: 1200,
            height: 630,
            alt: article.metadata.title
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: article.metadata.title,
        description: article.metadata.description,
        images: [seoConfig.openGraphImagePath]
      }
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  let article: Article;

  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <ArticleHeader article={article.metadata} />

      <Container className="py-16">
        <article className="mx-auto max-w-3xl">
          <MDXRemote
            source={article.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                      keepBackground: false
                    }
                  ]
                ]
              }
            }}
          />
        </article>
      </Container>
    </>
  );
}
