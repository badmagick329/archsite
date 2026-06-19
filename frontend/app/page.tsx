import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/app/content";
import { HomeProjectsPreview } from "@/app/_components/home-projects-preview";
import { ContactPanel } from "@/components/contact-panel";
import { NetworkStrip } from "@/components/network-strip";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projectsContent } from "@/app/projects/content";

export default function Home() {
  return (
    <SiteShell currentPath="/">
      <main>
        <section className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:px-10 lg:py-24">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {homeContent.hero.eyebrow}
              </p>
              <h1 className="max-w-5xl font-heading text-5xl leading-none sm:text-6xl lg:text-7xl">
                {homeContent.hero.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {homeContent.hero.description}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact the Studio</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-px bg-border/70 self-start">
              {homeContent.hero.facts.map((fact) => (
                <div key={fact.title} className="bg-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {fact.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionShell
          label={homeContent.intro.label}
          title={homeContent.intro.title}
          description={homeContent.intro.description}
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
          label={homeContent.projects.label}
          title={homeContent.projects.title}
          description={homeContent.projects.description}
        >
          <div className="grid gap-8">
            <HomeProjectsPreview projectTypes={projectsContent.projectTypes} />
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
          label={homeContent.collaborations.label}
          title={homeContent.collaborations.title}
          description={homeContent.collaborations.description}
        >
          <NetworkStrip items={[...homeContent.collaborations.items]} />
        </SectionShell>

        <SectionShell
          label={homeContent.contact.label}
          title={homeContent.contact.title}
          description={homeContent.contact.description}
          className="border-b-0"
        >
          <ContactPanel
            title={homeContent.contact.panel.title}
            description={homeContent.contact.panel.description}
            email={homeContent.contact.panel.email}
            phone={homeContent.contact.panel.phone}
            address={[...homeContent.contact.panel.address]}
          />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
