import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentPropsWithoutRef<"article">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card)]",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
}