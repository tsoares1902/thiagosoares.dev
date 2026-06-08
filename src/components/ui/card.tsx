import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentPropsWithoutRef<"article">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white/90 p-6 shadow-[0_1px_0_rgba(0,100,55,0.04)] transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-white hover:shadow-[var(--shadow-card)]",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
}
