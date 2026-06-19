import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ContactPanelProps = {
  title: string;
  description: string;
  address: string[];
  email: string;
  phone: string;
};

export function ContactPanel({
  title,
  description,
  address,
  email,
  phone,
}: ContactPanelProps) {
  return (
    <div className="grid gap-px bg-border/70 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div className="bg-background p-6 sm:p-8">
        <h3 className="font-heading text-2xl">{title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={`mailto:${email}`}>
              Start an Inquiry
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-background p-6 sm:p-8">
        <div className="grid gap-6 text-sm leading-7 text-muted-foreground">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Email
            </p>
            <Link href={`mailto:${email}`} className="text-foreground">
              {email}
            </Link>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Phone
            </p>
            <Link href={`tel:${phone}`} className="text-foreground">
              {phone}
            </Link>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Office
            </p>
            <address className="not-italic">
              {address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
