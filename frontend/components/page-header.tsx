import { type ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  aside,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)] lg:px-10 lg:py-20">
        <div>
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
        {aside ? (
          <div className="border border-border/70 p-5 text-sm leading-7 text-muted-foreground">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
