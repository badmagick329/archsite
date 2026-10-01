import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/site-data";

type ContactPanelProps = {
  title: string;
  description: string;
};

export function ContactPanel({ title, description }: ContactPanelProps) {
  return (
    <div className="bg-background p-6 sm:p-8">
      <h3 className="font-heading text-2xl">{title}</h3>
      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <Link href={`mailto:${contactDetails.email}`}>
            Start an Inquiry
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
