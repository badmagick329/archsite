import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  type UniconImageKey,
  uniconImages,
} from "@/lib/unicon-images";
import { cn } from "@/lib/utils";

type PracticeArea = {
  title: string;
  disciplines: string;
  imageKey: UniconImageKey;
  href: string;
  tone:
    | "architecture"
    | "planning"
    | "engineering"
    | "conservation"
    | "environment"
    | "delivery";
};

const toneClasses = {
  architecture: "bg-[oklch(0.55_0.16_49)]",
  planning: "bg-[oklch(0.48_0.07_112)]",
  engineering: "bg-[oklch(0.43_0.07_220)]",
  conservation: "bg-[oklch(0.48_0.1_48)]",
  environment: "bg-[oklch(0.46_0.07_151)]",
  delivery: "bg-[oklch(0.4_0.045_43)]",
} as const;

export function PracticeAreaGrid({
  items,
}: {
  items: readonly PracticeArea[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const image = uniconImages[item.imageKey];

        return (
          <Link
            key={item.title}
            href={item.href}
            className="group flex min-h-full flex-col overflow-hidden border border-border/70 bg-background shadow-[0_12px_35px_rgba(34,24,18,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_18px_45px_rgba(34,24,18,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 44vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                style={{ objectPosition: image.position }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div
              className={cn(
                "flex min-h-36 flex-1 items-start justify-between gap-4 p-5 text-white sm:p-6",
                toneClasses[item.tone],
              )}
            >
              <div>
                <h3 className="font-heading text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs font-medium uppercase leading-6 tracking-[0.12em] text-white/80">
                  {item.disciplines}
                </p>
              </div>
              <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
