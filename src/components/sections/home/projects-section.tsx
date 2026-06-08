import { projects, projectsContent } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="section-padding border-y border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-soft),#ffffff)]"
    >
      <Container>
        <SectionHeading
          eyebrow={projectsContent.eyebrow}
          title={projectsContent.title}
          description={projectsContent.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="p-8">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {project.name}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {project.type}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
