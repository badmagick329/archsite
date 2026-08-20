import { ProjectCard } from "@/components/project-card";
import { type ProjectType } from "@/lib/site-data";

type HomeProjectsPreviewProps = {
  projectTypes: ProjectType[];
};

export function HomeProjectsPreview({
  projectTypes,
}: HomeProjectsPreviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projectTypes.slice(0, 3).map((projectType) => (
        <ProjectCard
          key={projectType.slug}
          projectType={projectType}
          project={projectType.projects[0]}
          showLink
        />
      ))}
    </div>
  );
}
