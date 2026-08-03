import { ArchiveList } from "@/app/research-publications/_components/archive-list";
import { researchPublicationsContent } from "@/app/research-publications/content";
import { ImageBanner } from "@/components/image-banner";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { uniconImages } from "@/lib/unicon-images";

export default function ResearchPublicationsPage() {
  return (
    <SiteShell currentPath="/research-publications">
      <main>
        <ImageBanner
          eyebrow={researchPublicationsContent.header.eyebrow}
          title="Research, publications, and practice notes."
          description="An evolving archive of public documentation from the practice."
          image={uniconImages.architecture}
          tone="strong"
        />

        <SectionShell
          label={researchPublicationsContent.archive.label}
          title={researchPublicationsContent.archive.title}
          description={researchPublicationsContent.archive.description}
          className="border-b-0"
        >
          <ArchiveList entries={researchPublicationsContent.archive.entries} />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
