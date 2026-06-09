import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";

type JsonLdProps = {
  id: string;
  data: Record<string, unknown>;
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  jobTitle: "Software Engineer",
  description: seoConfig.description,
  sameAs: [siteConfig.socials.github]
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  description: seoConfig.description,
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Person",
    name: seoConfig.siteName
  }
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
