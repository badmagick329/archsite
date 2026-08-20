import Image from "next/image";

type RecognitionItem = {
  readonly year: string;
  readonly award: string;
  readonly project: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
};

export function RecognitionList({ items }: { items: readonly RecognitionItem[] }) {
  const illustratedItems = items.filter((item) => item.image);
  const textItems = items.filter((item) => !item.image);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {illustratedItems.map((item) => (
          <article
            key={`${item.award}-${item.project}`}
            className="overflow-hidden border border-border/70 bg-background shadow-[0_12px_35px_rgba(34,24,18,0.06)]"
          >
            <div className="relative aspect-[4/3] border-b border-border/70 bg-muted/45 p-4 sm:p-5">
              <Image
                src={item.image!.src}
                alt={item.image!.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                className="object-contain p-4 sm:p-5"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {item.year}
              </p>
              <h3 className="mt-3 font-heading text-xl font-medium leading-snug sm:text-2xl">
                {item.award}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.project}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="border-t border-border/70">
      {textItems.map((item) => (
        <article
          key={`${item.award}-${item.project}`}
          className="grid gap-4 border-b border-border/70 py-7 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:py-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {item.year}
          </p>
          <div>
            <h3 className="font-heading text-xl font-medium leading-snug sm:text-2xl">
              {item.award}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
              {item.project}
            </p>
          </div>
        </article>
      ))}
      </div>
    </div>
  );
}
