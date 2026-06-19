import { contactContent } from "@/app/contact/content";
import { ContactResponseGrid } from "@/app/contact/_components/contact-response-grid";
import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";
import { SectionShell } from "@/components/section-shell";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <main>
        <PageHeader
          eyebrow={contactContent.header.eyebrow}
          title={contactContent.header.title}
          description={contactContent.header.description}
          aside={
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {contactContent.header.asideTitle}
              </p>
              <p className="mt-3">{contactContent.header.asideBody}</p>
            </>
          }
        />

        <SectionShell
          label={contactContent.contactSection.label}
          title={contactContent.contactSection.title}
          description={contactContent.contactSection.description}
        >
          <ContactPanel
            title={contactContent.contactSection.panel.title}
            description={contactContent.contactSection.panel.description}
            email={contactContent.contactSection.panel.email}
            phone={contactContent.contactSection.panel.phone}
            address={[...contactContent.contactSection.panel.address]}
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
