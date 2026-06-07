"use client";

import Link from "next/link";
import { ChevronDown, Globe2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LanguageSwitcher() {
  const currentLanguage = siteConfig.languages[0];

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-4 text-sm font-medium text-[var(--color-foreground)] shadow-sm backdrop-blur transition hover:border-[var(--color-border-strong)] hover:bg-white"
        aria-label="Selecionar idioma"
      >
        <Globe2 className="size-4 text-[var(--color-muted)]" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <ChevronDown className="size-4 text-[var(--color-muted)] transition group-hover:rotate-180" />
      </button>

      <div className="invisible absolute right-0 top-12 z-50 w-48 translate-y-2 rounded-2xl border border-[var(--color-border)] bg-white p-2 opacity-0 shadow-xl shadow-black/10 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {siteConfig.languages.map((language) => (
          <Link
            key={language.locale}
            href={language.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-muted)]"
          >
            <span>{language.flag}</span>
            <span>{language.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}