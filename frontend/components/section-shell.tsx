import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  accent?: boolean;
  layout?: "split" | "stacked";
};

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
  accent = false,
  layout = "split",
}: SectionShellProps) {
  return (
    <section id={id} className={cn("border-b border-border/70", className)}>
      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:px-10 lg:py-16",
          layout === "split"
            ? "lg:grid-cols-[280px_minmax(0,1fr)]"
            : "lg:gap-12",
        )}
      >
        <div>
          {label ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </p>
          ) : null}
          {accent ? <div className="mb-5 h-1.5 w-16 bg-primary" /> : null}
          <h2 className="font-heading text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
