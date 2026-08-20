import Image from "next/image";

import { RecognitionList } from "@/app/who-we-are/_components/recognition-list";
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

        <SectionShell
          title={whoWeAreContent.background.title}
          label={whoWeAreContent.background.label}
          layout="stacked"
          accent
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-16">
            <div>
              <p className="max-w-3xl border-l-4 border-primary pl-5 text-sm font-medium leading-7 text-foreground sm:text-base sm:leading-8">
                {whoWeAreContent.background.lead}
              </p>
              <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {whoWeAreContent.background.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[uniconImages.architecture, uniconImages.delivery].map((image) => (
                <div key={image.src} className="relative min-h-64 overflow-hidden lg:min-h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: image.position }}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-5xl bg-primary px-6 py-7 font-heading text-xl leading-relaxed text-primary-foreground sm:px-8 sm:text-2xl lg:mt-14">
            {whoWeAreContent.background.closing}
          </p>
        </SectionShell>

        <SectionShell
          title={whoWeAreContent.founder.title}
          label={whoWeAreContent.founder.label}
          layout="stacked"
          accent
          className="bg-muted/20"
        >
          <div className="flow-root text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            <ProfilePlaceholder className="mb-8 aspect-[4/5] w-full border border-border/70 bg-background md:float-left md:mb-6 md:mr-10 md:w-[38%] lg:w-[34%] xl:w-[30%]" />
            {[
              ...whoWeAreContent.founder.introduction,
              ...whoWeAreContent.founder.chapters.map((chapter) => chapter.body),
            ].map((paragraph) => (
              <p key={paragraph} className="mb-5 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          title={whoWeAreContent.team.title}
          label={whoWeAreContent.team.label}
          layout="stacked"
          accent
        >
          <div className="grid gap-px border border-border/70 bg-border/70 sm:grid-cols-2 xl:grid-cols-3">
            {whoWeAreContent.team.members.map((member) => (
              <article key={member.name} className="bg-background px-5 py-6 sm:px-6">
                <h3 className="font-heading text-lg font-medium leading-snug text-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          title={whoWeAreContent.recognition.title}
          label={whoWeAreContent.recognition.label}
          description={whoWeAreContent.recognition.description}
          layout="stacked"
          accent
          className="border-b-0"
        >
          <RecognitionList items={whoWeAreContent.recognition.items} />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
