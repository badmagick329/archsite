import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  type UniconImageKey,
  uniconImages,
} from "@/lib/unicon-images";

type FeaturedProject = {
  name: string;
  location: string;
  disciplines: string;
  recognition: string;
  imageKey: UniconImageKey;
  href: string;
};

export function FeaturedProjects({
  projects,
}: {
  projects: readonly FeaturedProject[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => {
        const image = uniconImages[project.imageKey];

        return (
          <article
            key={project.name}
            className="group min-w-0 overflow-hidden border border-border/70 bg-background shadow-[0_12px_35px_rgba(34,24,18,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(34,24,18,0.13)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <Link
              href={project.href}
              className="flex min-h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 580px, (min-width: 768px) 46vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                  style={{ objectPosition: image.position }}
                />
              </div>
              <div className="flex min-h-72 flex-1 flex-col bg-card p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.location} · {project.disciplines}
                </p>
                <h3 className="mt-4 max-w-xl font-heading text-2xl font-semibold leading-tight sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                  {project.recognition}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  View Project
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
