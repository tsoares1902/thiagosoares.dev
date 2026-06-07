import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container)] px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}