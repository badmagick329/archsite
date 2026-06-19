import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-foreground">
      <section className="w-full max-w-2xl">
        <div className="border border-border/70 bg-card/80 p-8 shadow-sm backdrop-blur sm:p-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Archsite
          </p>
          <h1 className="font-heading text-4xl leading-tight sm:text-5xl">
            A minimal Next.js starter with shadcn and room for a future backend.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            The frontend lives here in its own workspace, with a separate backend
            folder ready whenever you need it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
                Open shadcn docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                Read Next.js docs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
