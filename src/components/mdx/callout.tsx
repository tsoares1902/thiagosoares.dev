import type { ReactNode } from "react";
import { Info } from "lucide-react";

type CalloutProps = {
  children: ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <div className="my-8 flex gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] p-5 text-[var(--color-foreground)]">
      <Info className="mt-1 size-5 shrink-0 text-[var(--color-primary)]" />
      <div className="text-sm leading-7">{children}</div>
    </div>
  );
}
