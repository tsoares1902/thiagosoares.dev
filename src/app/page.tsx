import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AboutSection } from "@/components/sections/home/about-section";
import { ArticlesSection } from "@/components/sections/home/articles-section";
import { CertificationsSection } from "@/components/sections/home/certifications-section";
import { ContactSection } from "@/components/sections/home/contact-section";
import { ProjectsSection } from "@/components/sections/home/projects-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { MatrixRainCanvas } from "@/features/matrix-rain/hooks/components/matrix-rain-canvas";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-hero-background)] text-[var(--color-hero-foreground)]">
        <MatrixRainCanvas />

        <Container className="relative z-10 flex min-h-[calc(100vh-var(--header-height))] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              Software Engineer · Node.js · React · MongoDB · AWS
            </p>

            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Da arquitetura ao deploy.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Software Engineer especializado em Node.js (NestJS), React
              (Next.js), MongoDB e AWS.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projetos" variant="dark">
                Ver projetos
              </ButtonLink>

              <ButtonLink href="#contato" variant="ghost">
                Entrar em contato
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificationsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
