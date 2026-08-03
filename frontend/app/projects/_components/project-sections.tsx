import { ProjectCard } from "@/components/project-card";
import { type ProjectType } from "@/lib/site-data";

type ProjectSectionsProps = {
  projectTypes: readonly ProjectType[];
};

export function ProjectSections({ projectTypes }: ProjectSectionsProps) {
  return <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16"><div className="grid gap-6 lg:grid-cols-2">{projectTypes.map((projectType) => <ProjectCard key={projectType.slug} projectType={projectType} />)}</div></section>;
}
