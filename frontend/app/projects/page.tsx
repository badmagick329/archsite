import type { Metadata } from "next";

import { projectsContent } from "@/app/projects/content";
import { ProjectSections } from "@/app/projects/_components/project-sections";
import { ImageBanner } from "@/components/image-banner";
import { SiteShell } from "@/components/site-shell";
import { uniconImages } from "@/lib/unicon-images";

export const metadata: Metadata = projectsContent.meta;

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main>
        <ImageBanner
          eyebrow={projectsContent.header.eyebrow}
          title={projectsContent.header.title}
          description={projectsContent.header.description}
          image={uniconImages.delivery}
          tone="strong"
        />
        <ProjectSections projectTypes={projectsContent.projectTypes} />
      </main>
    </SiteShell>
  );
}
