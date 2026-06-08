import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[0_16px_40px_rgba(0,100,55,0.22)] hover:bg-[var(--color-primary-hover)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-muted)]",
  dark: "bg-white text-[var(--color-primary)] hover:bg-white/90",
  ghost:
    "border border-white/20 text-white hover:bg-white/10 hover:border-white/30"
};

const baseClassName =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition";

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClassName, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseClassName, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
