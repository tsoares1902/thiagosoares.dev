import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArticleHeader } from "@/components/articles/article-header";
import { Container } from "@/components/ui/container";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { mdxComponents } from "@/components/mdx/mdx-components";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;

  try {
    const article = await getArticleBySlug(slug);

    return {
      title: article.metadata.title,
      description: article.metadata.description
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  try {
    const article = await getArticleBySlug(slug);

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
  } catch {
    notFound();
  }
}