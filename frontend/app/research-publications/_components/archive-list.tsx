type ArchiveEntry = {
  type: string;
  title: string;
  year: string;
  summary: string;
};

type ArchiveListProps = {
  entries: readonly ArchiveEntry[];
};

export function ArchiveList({ entries }: ArchiveListProps) {
  return (
    <div className="grid gap-px bg-border/70">
      {entries.map((entry) => (
        <article
          key={`${entry.title}-${entry.year}`}
          className="grid gap-6 bg-background p-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:p-8"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <div>{entry.type}</div>
            <div className="mt-2 text-foreground">{entry.year}</div>
          </div>
          <div>
            <h2 className="font-heading text-2xl leading-tight">{entry.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {entry.summary}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
