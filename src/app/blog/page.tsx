import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { seoConfig } from "@/config/seo";
import { cn } from "@/lib/cn";
import { getArticles } from "@/lib/articles";

const title = "Blog";
const description =
  "Artigos, experiências e aprendizados sobre Node.js, React, AWS, Linux e arquitetura de software.";
const articlesPerPage = 5;

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
    page?: string | string[];
  }>;
};

const getSearchParam = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] : value;

const buildBlogHref = ({
  category,
  page
}: {
  category?: string;
  page?: number;
}) => {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (page && page > 1) {
    params.set("page", String(page));
  }

  const queryString = params.toString();

  return queryString ? `/blog?${queryString}` : "/blog";
};

export const metadata: Metadata = {
  title: "Artigos",
  description,
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: `${seoConfig.siteUrl}/blog`,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.openGraphImagePath,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} | Blog`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [seoConfig.openGraphImagePath]
  }
};

export default async function ArticlesPage({ searchParams }: BlogPageProps) {
  const articles = await getArticles();
  const resolvedSearchParams = await searchParams;
  const requestedCategory = getSearchParam(resolvedSearchParams?.category);
  const currentPageParam = Number(getSearchParam(resolvedSearchParams?.page));
  const currentPage = Number.isInteger(currentPageParam)
    ? Math.max(currentPageParam, 1)
    : 1;
  const categories = Array.from(
    new Set(articles.map((article) => article.category))
  ).sort((currentCategory, nextCategory) =>
    currentCategory.localeCompare(nextCategory, "pt-BR")
  );
  const selectedCategory = categories.includes(requestedCategory ?? "")
    ? requestedCategory
    : undefined;
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;
  const totalPages = Math.max(
    Math.ceil(filteredArticles.length / articlesPerPage),
    1
  );
  const page = Math.min(currentPage, totalPages);
  const paginatedArticles = filteredArticles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Artigos"
          title="O que penso?"
          description="Ideias, aprendizados e experiências sobre desenvolvimento de software, arquitetura, cloud e construção de produtos digitais."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className={cn(
              "inline-flex h-10 items-center rounded-full border px-4 text-sm font-semibold transition",
              !selectedCategory
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] !text-white shadow-sm"
                : "border-[var(--color-border)] bg-white text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            )}
          >
            Todas
          </Link>

          {categories.map((category) => (
            <Link
              key={category}
              href={buildBlogHref({ category })}
              className={cn(
                "inline-flex h-10 items-center rounded-full border px-4 text-sm font-semibold transition",
                selectedCategory === category
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] !text-white shadow-sm"
                  : "border-[var(--color-border)] bg-white text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              )}
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-5">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {totalPages > 1 ? (
          <nav
            aria-label="Paginação de artigos"
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;

              return (
                <Link
                  key={pageNumber}
                  href={buildBlogHref({
                    category: selectedCategory,
                    page: pageNumber
                  })}
                  aria-current={pageNumber === page ? "page" : undefined}
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition",
                    pageNumber === page
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] !text-white shadow-sm"
                      : "border-[var(--color-border)] bg-white text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  )}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
