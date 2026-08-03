import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/app/content";
import { HomeProjectsPreview } from "@/app/_components/home-projects-preview";
import { NetworkStrip } from "@/components/network-strip";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projectsContent } from "@/app/projects/content";
import { HomeHero } from "@/app/_components/home-hero";
import { uniconImages } from "@/lib/unicon-images";

export default function Home() {
  return (
    <SiteShell currentPath="/">
      <main>
        <HomeHero slides={uniconImages.heroSlides} eyebrow={homeContent.hero.eyebrow} title={homeContent.hero.title} cta={homeContent.hero.cta} />

        <SectionShell
          title="Five Decades of Practice"
        >
          <div className="grid gap-px bg-border/70 md:grid-cols-2">
            <div className="bg-background p-6 sm:p-8">
              <p className="text-sm leading-7 text-muted-foreground">
                {homeContent.intro.body}
              </p>
            </div>
            <div className="bg-background p-6 sm:p-8">
              <Button asChild variant="outline">
                <Link href="/who-we-are">
                  {homeContent.intro.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          title="Featured Projects"
        >
          <div className="grid gap-8">
            <HomeProjectsPreview projectTypes={projectsContent.projectTypes.slice(0, 3)} />
            <div className="flex justify-start">
              <Button asChild variant="outline">
                <Link href="/projects">
                  {homeContent.projects.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          title="Clients and Collaborators"
        >
          <div>
            <NetworkStrip items={[...homeContent.collaborations.items]} />
            <Button disabled variant="outline" className="mt-6" title="Client details will be added here">
              Learn More
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </SectionShell>

      </main>
    </SiteShell>
  );
}
