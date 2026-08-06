"use client";

import Image from "next/image";

type NetworkItem = {
  label: string;
  logo?: string;
};

type NetworkStripProps = {
  items: readonly NetworkItem[];
};

export function NetworkStrip({ items }: NetworkStripProps) {
  return (
    <div className="overflow-hidden border border-border/70" aria-label="Client sectors and collaborations">
      <div className="flex w-max animate-[unicon-ticker_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, index) => (
          <div key={`${item.label}-${index}`} aria-hidden={index >= items.length} className="flex items-center gap-5 border-r border-border/70 px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {item.logo ? (
              <div className="relative h-8 w-28 shrink-0">
                <Image src={item.logo} alt={item.label} fill unoptimized sizes="112px" className="object-contain object-center" />
              </div>
            ) : <><span className="size-1.5 shrink-0 bg-primary" />{item.label}</>}
          </div>
        ))}
      </div>
    </div>
  );
}
