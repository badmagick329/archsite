"use client";

type NetworkStripProps = {
  items: string[];
};

export function NetworkStrip({ items }: NetworkStripProps) {
  return (
    <div className="overflow-hidden border border-border/70" aria-label="Client sectors and collaborations">
      <div className="flex w-max animate-[unicon-ticker_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} aria-hidden={index >= items.length} className="flex items-center gap-5 border-r border-border/70 px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-1.5 bg-primary" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
