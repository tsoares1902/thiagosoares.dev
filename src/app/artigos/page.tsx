import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { getArticles } from "@/lib/articles";

const title = "Artigos";
const description =
  "Artigos, experiências e aprendizados sobre Node.js, React, AWS, Linux e arquitetura de software.";

export const metadata: Metadata = {
  title: "Artigos",
  description,
  alternates: {
    canonical: "/artigos"
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: `${siteConfig.url}/artigos`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | Artigos`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage]
  }
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className="section-padding bg-white">
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
