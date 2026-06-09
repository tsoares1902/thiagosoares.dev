"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? X : Menu;

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-foreground)] shadow-sm transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      >
        <Icon className="size-5" />
      </button>

      {isOpen ? (
        <nav
          aria-label="Navegação mobile"
          className="absolute right-0 top-12 z-50 w-64 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-2 shadow-xl shadow-[rgba(0,100,55,0.12)]"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-primary)] focus-visible:bg-[var(--color-surface-muted)] focus-visible:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
