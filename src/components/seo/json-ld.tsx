import { siteConfig } from "@/config/site";

type JsonLdProps = {
  id: string;
  data: Record<string, unknown>;
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Software Engineer",
  description:
    "Software Engineer especializado em Node.js, React, MongoDB e AWS.",
  sameAs: [siteConfig.socials.github]
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Person",
    name: siteConfig.name
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
