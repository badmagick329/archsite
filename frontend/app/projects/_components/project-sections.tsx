import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { type ProjectType } from "@/lib/site-data";

type ProjectSectionsProps = {
  projectTypes: readonly ProjectType[];
};

export function ProjectSections({ projectTypes }: ProjectSectionsProps) {
  return (
    <>
      {projectTypes.map((projectType) => (
        <SectionShell
          key={projectType.slug}
          id={projectType.slug}
          label={projectType.label}
          title={projectType.title}
          description={projectType.summary}
        >
          <ProjectCard projectType={projectType} />
        </SectionShell>
      ))}
    </>
  );
}
