import { projectsContent } from "@/app/projects/content";
import { ProjectSections } from "@/app/projects/_components/project-sections";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";

export default function ProjectsPage() {
  return (
    <SiteShell currentPath="/projects">
      <main>
        <PageHeader
          eyebrow={projectsContent.header.eyebrow}
          title={projectsContent.header.title}
          description={projectsContent.header.description}
          aside={
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {projectsContent.header.asideTitle}
              </p>
              <p className="mt-3">{projectsContent.header.asideBody}</p>
            </>
          }
        />
        <ProjectSections projectTypes={projectsContent.projectTypes} />
      </main>
    </SiteShell>
  );
}
