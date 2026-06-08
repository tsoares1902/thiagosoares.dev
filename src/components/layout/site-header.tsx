import Link from "next/link";
import { Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/75 backdrop-blur-xl">
      <Container className="flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-sm">
            <Code2 className="size-5" />
          </span>

          <span className="text-sm font-semibold tracking-tight text-[var(--color-foreground)]">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-primary)] focus-visible:bg-[var(--color-surface-muted)] focus-visible:text-[var(--color-primary)] active:bg-[var(--color-primary)] active:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher />
      </Container>
    </header>
  );
}
