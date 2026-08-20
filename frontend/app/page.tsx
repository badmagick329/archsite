import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/app/content";
import { FeaturedProjects } from "@/app/_components/featured-projects";
import { PracticeAreaGrid } from "@/app/_components/practice-area-grid";
import { HomeHero } from "@/app/_components/home-hero";
import { ContactPanel } from "@/components/contact-panel";
import { NetworkStrip } from "@/components/network-strip";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { uniconImages } from "@/lib/unicon-images";

export default function Home() {
  return (
    <SiteShell currentPath="/">
      <main>
        <HomeHero
          slides={uniconImages.heroSlides}
          titleAccent={homeContent.hero.titleAccent}
          title={homeContent.hero.title}
          description={homeContent.hero.description}
          cta={homeContent.hero.cta}
        />

        <SectionShell title="Five Decades of Practice" accent>
          <div className="max-w-3xl">
            <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {homeContent.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 sm:mt-8">
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
          title="Areas of Practice"
          description={homeContent.practiceAreas.description}
          accent
          className="bg-muted/20"
        >
          <PracticeAreaGrid items={homeContent.practiceAreas.items} />
        </SectionShell>

        <SectionShell
          title="Selected Works"
          description={homeContent.featuredProjects.description}
          accent
          layout="stacked"
        >
          <div className="grid gap-8">
            <FeaturedProjects projects={homeContent.featuredProjects.items} />
            <div className="flex justify-start">
              <Button asChild size="lg">
                <Link href="/projects">
                  {homeContent.featuredProjects.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionShell>

        <SectionShell title="Clients and Collaborators" accent className="bg-muted/20">
          <NetworkStrip items={[...homeContent.collaborations.items]} />
        </SectionShell>

        <SectionShell title="Contact" accent className="border-b-0">
          <ContactPanel
            title={homeContent.contact.panel.title}
            description={homeContent.contact.panel.description}
            email={homeContent.contact.panel.email}
            phone={homeContent.contact.panel.phone}
            address={[...homeContent.contact.panel.address]}
            showDetails={false}
          />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
