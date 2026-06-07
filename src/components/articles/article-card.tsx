import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ArticleMetadata } from "@/types/article";

type ArticleCardProps = {
  article: ArticleMetadata;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={article.href}
      className="group block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card)]"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-muted)]">
        <span>{article.category}</span>
        <span>•</span>
        <span>{article.readingTime}</span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)] group-hover:text-[var(--color-primary)]">
          {article.title}
        </h2>

        <ArrowUpRight className="mt-1 size-5 shrink-0 text-[var(--color-muted)] transition group-hover:text-[var(--color-primary)]" />
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
        {article.description}
      </p>
    </Link>
  );
}