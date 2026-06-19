type ContactResponseGridProps = {
  items: readonly string[];
};

export function ContactResponseGrid({ items }: ContactResponseGridProps) {
  return (
    <div className="grid gap-px bg-border/70 md:grid-cols-3">
      {items.map((copy) => (
        <div key={copy} className="bg-background p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted-foreground">{copy}</p>
        </div>
      ))}
    </div>
  );
}
