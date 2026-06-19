import { ProjectCard } from "@/components/project-card";
import { type ProjectType } from "@/lib/site-data";

type HomeProjectsPreviewProps = {
  projectTypes: ProjectType[];
};

export function HomeProjectsPreview({
  projectTypes,
}: HomeProjectsPreviewProps) {
  return (
    <div className="grid gap-8">
      {projectTypes.slice(0, 3).map((projectType) => (
        <ProjectCard key={projectType.slug} projectType={projectType} compact />
      ))}
    </div>
  );
}
