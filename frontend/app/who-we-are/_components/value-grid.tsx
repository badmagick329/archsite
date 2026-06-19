type ValueGridItem = {
  title: string;
  body: string;
};

type ValueGridProps = {
  items: readonly ValueGridItem[];
};

export function ValueGrid({ items }: ValueGridProps) {
  return (
    <div className="grid gap-px bg-border/70 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="bg-background p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
