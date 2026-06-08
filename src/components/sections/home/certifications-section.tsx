import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  certificationCategories,
  certifications,
  certificationsContent
} from "@/content/certifications";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificationsSection() {
  return (
    <section
      id="certificacoes"
      className="section-padding border-y border-[var(--color-border)] bg-[linear-gradient(180deg,#ffffff,var(--color-surface-soft))]"
    >
      <Container>
        <SectionHeading
          eyebrow={certificationsContent.eyebrow}
          title={certificationsContent.title}
          description={certificationsContent.description}
        />

        <div className="mt-10 space-y-10">
          {certificationCategories.map((category) => {
            const categoryCertifications = certifications.filter(
              (certification) => certification.category === category
            );

            return (
              <div key={category}>
                <h3 className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                  {category}
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {categoryCertifications.map((certification) => (
                    <Card key={certification.name}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold tracking-tight">
                            {certification.name}
                          </h4>
                        </div>

                        <Badge>{certification.status}</Badge>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                        {certification.reason}
                      </p>

                      <Link
                        href={certification.href}
                        target="_blank"
                        prefetch={false}
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-hover)]"
                      >
                        Ver certificação
                        <ExternalLink className="size-4" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
