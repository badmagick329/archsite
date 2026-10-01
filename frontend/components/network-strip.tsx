"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type NetworkItem = {
  label: string;
  logo?: string;
};

type NetworkStripProps = {
  items: readonly NetworkItem[];
};

export function NetworkStrip({ items }: NetworkStripProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex border border-border/70" aria-label="Client sectors and collaborations">
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className={cn("flex w-max animate-[unicon-ticker_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none", paused && "[animation-play-state:paused]")}>
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
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        className="shrink-0 border-l border-border/70 px-4 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:hidden"
        aria-label={paused ? "Play client logos" : "Pause client logos"}
      >
        {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
      </button>
    </div>
  );
}
