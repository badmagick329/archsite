import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { type ProjectType } from "@/lib/site-data";

import { ImagePlaceholder } from "./image-placeholder";

type ProjectCardProps = {
  projectType: ProjectType;
  compact?: boolean;
};

export function ProjectCard({ projectType, compact = false }: ProjectCardProps) {
  return (
    <article className="grid border border-border/70 bg-card text-card-foreground md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <ImagePlaceholder
        label={projectType.title}
        className={compact ? "min-h-56" : "min-h-72"}
      />
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span>{projectType.label}</span>
            <span>{projectType.project.year}</span>
            <span>{projectType.project.status}</span>
          </div>
          <h3 className="mt-5 font-heading text-2xl leading-tight sm:text-3xl">
            {projectType.project.name}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted-foreground">
            {projectType.project.location}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {projectType.project.description}
          </p>
        </div>
        <div className="border-t border-border/70 pt-5">
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            {projectType.summary}
          </p>
          <Button asChild variant="outline" className="mt-5 w-full justify-center sm:w-auto">
            <Link href={`/projects#${projectType.slug}`}>
              View {projectType.title}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
