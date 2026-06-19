import { TextPanelGrid } from "@/app/who-we-are/_components/text-panel-grid";
import { ValueGrid } from "@/app/who-we-are/_components/value-grid";
import { whoWeAreContent } from "@/app/who-we-are/content";
import { PageHeader } from "@/components/page-header";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { NetworkStrip } from "@/components/network-strip";

export default function WhoWeArePage() {
  return (
    <SiteShell currentPath="/who-we-are">
      <main>
        <PageHeader
          eyebrow={whoWeAreContent.header.eyebrow}
          title={whoWeAreContent.header.title}
          description={whoWeAreContent.header.description}
          aside={
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {whoWeAreContent.header.asideTitle}
              </p>
              <p className="mt-3">{whoWeAreContent.header.asideBody}</p>
            </>
          }
        />

        <SectionShell
          label={whoWeAreContent.overview.label}
          title={whoWeAreContent.overview.title}
          description={whoWeAreContent.overview.description}
        >
          <TextPanelGrid items={whoWeAreContent.overview.items} />
        </SectionShell>

        <SectionShell
          label={whoWeAreContent.approach.label}
          title={whoWeAreContent.approach.title}
          description={whoWeAreContent.approach.description}
        >
          <ValueGrid items={whoWeAreContent.approach.items} />
        </SectionShell>

        <SectionShell
          label={whoWeAreContent.people.label}
          title={whoWeAreContent.people.title}
          description={whoWeAreContent.people.description}
        >
          <ValueGrid items={whoWeAreContent.people.items} />
        </SectionShell>

        <SectionShell
          label={whoWeAreContent.collaborators.label}
          title={whoWeAreContent.collaborators.title}
          description={whoWeAreContent.collaborators.description}
          className="border-b-0"
        >
          <NetworkStrip items={[...whoWeAreContent.collaborators.items]} />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
