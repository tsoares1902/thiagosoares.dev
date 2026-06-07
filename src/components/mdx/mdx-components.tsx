import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";

export const mdxComponents: MDXComponents = {
  Callout,
  a: ({ href = "", children }) => {
    const isExternal = href.startsWith("http");

    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
      >
        {children}
      </Link>
    );
  },
  h2: ({ children }) => (
    <h2 className="mt-12 text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-[var(--color-muted)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-8 text-[var(--color-muted)]">
      {children}
    </ol>
  ),
  pre: CodeBlock
};