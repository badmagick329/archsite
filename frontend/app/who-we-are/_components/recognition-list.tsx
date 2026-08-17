type RecognitionItem = {
  readonly year: string;
  readonly award: string;
  readonly project: string;
};

export function RecognitionList({ items }: { items: readonly RecognitionItem[] }) {
  return (
    <div className="border-t border-border/70">
      {items.map((item) => (
        <article
          key={`${item.award}-${item.project}`}
          className="grid gap-4 border-b border-border/70 py-7 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:py-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {item.year}
          </p>
          <div>
            <h3 className="font-heading text-xl font-medium leading-snug sm:text-2xl">
              {item.award}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
              {item.project}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
