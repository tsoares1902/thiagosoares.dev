import { aboutContent, organizations, skillCards } from "@/content/about";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[var(--color-muted)]">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface-soft),var(--color-surface-warm))] p-6 shadow-[0_20px_60px_rgba(0,100,55,0.05)]">
          <p className="text-sm font-semibold text-[var(--color-foreground)]">
            <span className="mr-2 inline-flex h-2 w-6 rounded-full bg-[var(--color-palestra-red)] align-middle" />
            {aboutContent.organizationsTitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {organizations.map((organization) => (
              <Badge key={organization.name}>{organization.name}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCards.map((skill) => {
            const Icon = skill.icon;

            return (
              <Card key={skill.title}>
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface-muted)] text-[var(--color-primary)]">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-base font-semibold">{skill.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
