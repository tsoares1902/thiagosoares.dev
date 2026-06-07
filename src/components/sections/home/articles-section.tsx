import Link from "next/link";
import { articles, articlesContent } from "@/content/articles";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ArticlesSection() {
  return (
    <section id="artigos" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow={articlesContent.eyebrow}
          title={articlesContent.title}
          description={articlesContent.description}
        />

        <div className="mt-10 divide-y divide-[var(--color-border)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="group block p-6 transition hover:bg-[var(--color-surface-muted)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-muted)]">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-[var(--color-primary)]">
                {article.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}