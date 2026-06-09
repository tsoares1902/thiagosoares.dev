"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LanguageSwitcher() {
  const currentLanguage = siteConfig.languages[0];

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm font-medium text-[var(--color-foreground)] shadow-sm backdrop-blur transition hover:border-[var(--color-primary)] hover:bg-white group-focus-within:border-[var(--color-primary)] group-focus-within:bg-white"
        aria-label="Selecionar idioma"
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <ChevronDown className="size-4 text-[var(--color-muted)] transition group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      <div className="invisible absolute right-0 top-full z-50 w-48 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-xl shadow-[rgba(0,100,55,0.12)]">
          {siteConfig.languages.map((language) => (
            <Link
              key={language.locale}
              href={language.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-primary)] focus-visible:bg-[var(--color-surface-muted)] focus-visible:text-[var(--color-primary)]"
            >
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
