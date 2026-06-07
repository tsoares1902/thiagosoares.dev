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
      <p className="text-sm font-semibold text-[var(--color-primary)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
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