import { getArticles } from "@/lib/articles";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { articlesContent } from "@/content/articles";

export async function ArticlesSection() {
  const articles = await getArticles();

  return (
    <section id="artigos" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow={articlesContent.eyebrow}
          title={articlesContent.title}
          description={articlesContent.description}
        />

        <div className="mt-10 grid gap-5">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}