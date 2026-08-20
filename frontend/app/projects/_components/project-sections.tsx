import { ProjectCard } from "@/components/project-card";
import { type ProjectType } from "@/lib/site-data";

type ProjectSectionsProps = {
  projectTypes: readonly ProjectType[];
};

export function ProjectSections({ projectTypes }: ProjectSectionsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-14 px-6 py-12 lg:px-10 lg:py-16">
      {projectTypes.map((projectType) => (
        <section key={projectType.slug} id={projectType.slug} className="scroll-mt-8">
          <div className="mb-6 max-w-2xl border-l-4 border-primary pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {projectType.label}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-medium leading-tight sm:text-4xl">
              {projectType.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {projectType.summary}
            </p>
          </div>
          <div
            className={
              projectType.projects.length === 1
                ? "max-w-2xl"
                : "grid gap-6 lg:grid-cols-2"
            }
          >
            {projectType.projects.map((project) => (
              <ProjectCard
                key={project.name}
                projectType={projectType}
                project={project}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
