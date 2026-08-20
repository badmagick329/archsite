import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ProjectType } from "@/lib/site-data";
import Image from "next/image";
import { uniconImages } from "@/lib/unicon-images";

type ProjectCardProps = {
  projectType: ProjectType;
  project: ProjectType["projects"][number];
  showLink?: boolean;
};

const projectSurfaceClasses = {
  architecture: "bg-surface-architecture/25",
  "urban-planning": "bg-surface-planning/25",
  "engineering-design": "bg-surface-engineering/25",
  conservation: "bg-surface-conservation/25",
  "interior-design": "bg-surface-interiors/25",
  "project-management": "bg-surface-delivery/25",
} as const;

export function ProjectCard({
  projectType,
  project,
  showLink = false,
}: ProjectCardProps) {
  const image = uniconImages[projectType.imageKey];
  const surfaceClass =
    projectSurfaceClasses[projectType.slug as keyof typeof projectSurfaceClasses] ??
    "bg-card";

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
          className="object-cover"
          style={{ objectPosition: image.position }}
        />
      </div>
      <div className="flex min-h-72 flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {projectType.title}
        </p>
        <h3 className="mt-3 font-heading text-2xl leading-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.location}
        </p>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>
        {showLink ? (
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
            Explore {projectType.title}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <article
      className={`overflow-hidden border border-border/70 ${surfaceClass} text-card-foreground ${showLink ? "group shadow-[0_12px_35px_rgba(34,24,18,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(34,24,18,0.13)] motion-reduce:transform-none motion-reduce:transition-none" : ""}`}
    >
      {showLink ? (
        <Link
          href={`/projects#${projectType.slug}`}
          className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
