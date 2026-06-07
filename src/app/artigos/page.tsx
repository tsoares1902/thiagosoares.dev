import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getArticles } from "@/lib/articles";

export const metadata = {
  title: "Artigos",
  description:
    "Artigos, experiências e aprendizados sobre Node.js, React, AWS, Linux e arquitetura de software."
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Artigos"
          title="O que penso?"
          description="Ideias, aprendizados e experiências sobre desenvolvimento de software, arquitetura, cloud e construção de produtos digitais."
        />

        <div className="mt-10 grid gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}