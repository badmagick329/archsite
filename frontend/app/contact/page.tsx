import type { Metadata } from "next";

import { contactContent } from "@/app/contact/content";
import { ContactResponseGrid } from "@/app/contact/_components/contact-response-grid";
import { ContactPanel } from "@/components/contact-panel";
import { ImageBanner } from "@/components/image-banner";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";
import { uniconImages } from "@/lib/unicon-images";

export const metadata: Metadata = contactContent.meta;

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <ImageBanner
          eyebrow={contactContent.header.eyebrow}
          title="Start a conversation."
          description="For new commissions, planning studies, and collaborations."
          image={uniconImages.engineering}
        />

        <SectionShell
          label={contactContent.contactSection.label}
          title={contactContent.contactSection.title}
          description={contactContent.contactSection.description}
        >
          <ContactPanel
            title={contactContent.contactSection.panel.title}
            description={contactContent.contactSection.panel.description}
          />
        </SectionShell>

        <SectionShell
          label={contactContent.responseSection.label}
          title={contactContent.responseSection.title}
          description={contactContent.responseSection.description}
          className="border-b-0"
        >
          <ContactResponseGrid items={contactContent.responseSection.items} />
        </SectionShell>
      </main>
    </SiteShell>
  );
}
