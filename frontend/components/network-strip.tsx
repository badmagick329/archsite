type NetworkStripProps = {
  items: string[];
};

export function NetworkStrip({ items }: NetworkStripProps) {
  return (
    <div className="grid gap-px bg-border/70 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="bg-background px-5 py-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
