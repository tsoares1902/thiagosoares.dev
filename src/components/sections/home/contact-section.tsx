import Link from "next/link";
import { contactChannels, contactContent } from "@/content/contact";
import { Container } from "@/components/ui/container";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-padding bg-[var(--color-foreground)] text-white"
    >
      <Container>
        <p className="text-sm font-semibold text-white/60">
          {contactContent.eyebrow}
        </p>

        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {contactContent.title}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
          {contactContent.description}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactChannels.map((contact) => {
            const Icon = contact.icon;

            return (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http") ? "noreferrer" : undefined
                }
                className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <Icon className="size-5 text-white" />

                <p className="mt-5 text-sm font-semibold text-white">
                  {contact.label}
                </p>

                <p className="mt-2 text-sm text-white/60">{contact.value}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}