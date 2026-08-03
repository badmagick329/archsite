import Image from "next/image";

import { type UniconImage } from "@/lib/unicon-images";

type ImageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: UniconImage;
  tone?: "default" | "strong";
};

export function ImageBanner({ eyebrow, title, description, image, tone = "default" }: ImageBannerProps) {
  return (
    <section className="relative isolate min-h-80 overflow-hidden border-b border-border/70 sm:min-h-96">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: image.position }}
      />
      <div className={tone === "strong" ? "absolute inset-0 -z-10 bg-linear-to-r from-black/85 via-black/65 to-black/20" : "absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/45 to-black/10"} />
      <div className="mx-auto flex min-h-80 w-full max-w-7xl items-end px-6 py-10 sm:min-h-96 lg:px-10 lg:py-14">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">{eyebrow}</p>
          <h1 className="font-heading text-4xl leading-tight sm:text-5xl">{title}</h1>
          {description ? <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
