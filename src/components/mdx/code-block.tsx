import type { ComponentPropsWithoutRef } from "react";
import { CopyCodeButton } from "./copy-code-button";

type CodeBlockProps = ComponentPropsWithoutRef<"pre">;

function extractTextFromNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromNode).join("");
  }

  if (
    node &&
    typeof node === "object" &&
    "props" in node &&
    node.props &&
    typeof node.props === "object" &&
    "children" in node.props
  ) {
    return extractTextFromNode(node.props.children as React.ReactNode);
  }

  return "";
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const code = extractTextFromNode(children).trim();

  return (
    <div className="group relative my-8 overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[#0d1117] shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold text-white/40">code</span>
        <CopyCodeButton code={code} />
      </div>

      <pre
        {...props}
        className="overflow-x-auto p-4 text-sm leading-7 text-white"
      >
        {children}
      </pre>
    </div>
  );
}