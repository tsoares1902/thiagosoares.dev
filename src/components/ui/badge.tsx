import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
