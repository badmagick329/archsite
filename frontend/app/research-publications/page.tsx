import { ArchiveList } from "@/app/research-publications/_components/archive-list";
import { researchPublicationsContent } from "@/app/research-publications/content";
import { PageHeader } from "@/components/page-header";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";

export default function ResearchPublicationsPage() {
  return (
    <SiteShell currentPath="/research-publications">
      <main>
        <PageHeader
          eyebrow={researchPublicationsContent.header.eyebrow}
          title={researchPublicationsContent.header.title}
          description={researchPublicationsContent.header.description}
          aside={
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {researchPublicationsContent.header.asideTitle}
              </p>
              <p className="mt-3">{researchPublicationsContent.header.asideBody}</p>
            </>
          }
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
