import { services, servicesContent } from "@/content/services";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface-muted)]">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-base font-semibold">{service.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}