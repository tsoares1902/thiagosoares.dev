import { getArticles } from "@/lib/articles";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { ButtonLink } from "@/components/ui/button";
import { articlesContent } from "@/content/articles";

export async function ArticlesSection() {
  const articles = await getArticles();

  return (
    <section id="blog" className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow={articlesContent.eyebrow}
          title={articlesContent.title}
          description={articlesContent.description}
        />

        <div className="mt-10 grid gap-5">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <ButtonLink href="/blog" variant="secondary">
            Ver mais artigos
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
