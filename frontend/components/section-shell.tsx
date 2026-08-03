import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("border-b border-border/70", className)}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 lg:py-16">
        <div>
          {label ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </p>
          ) : null}
          <h2 className="font-heading text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
