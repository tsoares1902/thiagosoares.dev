import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="bg-[var(--color-hero-background)] text-[var(--color-hero-foreground)]">
      <Container className="flex min-h-[calc(100vh-var(--header-height))] items-center py-24">
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
  );
}