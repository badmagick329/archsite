import Image from "next/image";

import { ValueGrid } from "@/app/who-we-are/_components/value-grid";
import { whoWeAreContent } from "@/app/who-we-are/content";
import { ImageBanner } from "@/components/image-banner";
import { ProfilePlaceholder } from "@/components/profile-placeholder";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { uniconImages } from "@/lib/unicon-images";

export default function WhoWeArePage() {
  return (
    <SiteShell currentPath="/who-we-are">
      <main>
        <ImageBanner
          eyebrow={whoWeAreContent.header.eyebrow}
          title={whoWeAreContent.header.title}
          description={whoWeAreContent.header.description}
          image={uniconImages.conservation}
        />

        <section className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-10 lg:py-16">
            <div className="relative min-h-72 overflow-hidden sm:min-h-96">
              <Image src={uniconImages.architecture.src} alt={uniconImages.architecture.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" style={{ objectPosition: uniconImages.architecture.position }} />
            </div>
            <div className="flex flex-col justify-center py-2 lg:px-6">
              <h2 className="max-w-xl font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{whoWeAreContent.overview.title}</h2>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {whoWeAreContent.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <SectionShell title={whoWeAreContent.capabilities.title}>
          <ValueGrid items={whoWeAreContent.capabilities.items} />
        </SectionShell>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
            <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{whoWeAreContent.leadership.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{whoWeAreContent.leadership.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {whoWeAreContent.leadership.items.map((person) => (
                  <article key={person.title} className="grid overflow-hidden border border-border/70 bg-background sm:grid-cols-[minmax(11rem,0.34fr)_minmax(0,1fr)]">
                    <ProfilePlaceholder className="min-h-48 sm:min-h-full" />
                    <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{person.role}</p>
                    <h3 className="mt-3 font-heading text-2xl">{person.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{person.body}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
