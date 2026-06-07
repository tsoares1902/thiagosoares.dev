import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ArticleMetadata } from "@/types/article";
import { Container } from "@/components/ui/container";

type ArticleHeaderProps = {
  article: ArticleMetadata;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface-soft)]">
      <Container className="py-16">
        <Link
          href="/artigos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
        >
          <ArrowLeft className="size-4" />
          Voltar para artigos
        </Link>

        <div className="mt-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--color-muted)]">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
            <span>•</span>
            <time dateTime={article.publishedAt}>
              {new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              }).format(new Date(article.publishedAt))}
            </time>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            {article.description}
          </p>
        </div>
      </Container>
    </header>
  );
}