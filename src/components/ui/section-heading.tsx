import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-balance text-2xl font-semibold uppercase tracking-normal text-[var(--color-foreground)] sm:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
