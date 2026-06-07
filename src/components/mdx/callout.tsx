import type { ReactNode } from "react";
import { Info } from "lucide-react";

type CalloutProps = {
  children: ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <div className="my-8 flex gap-4 rounded-[var(--radius-xl)] border border-blue-200 bg-blue-50 p-5 text-blue-950">
      <Info className="mt-1 size-5 shrink-0 text-blue-600" />
      <div className="text-sm leading-7">{children}</div>
    </div>
  );
}