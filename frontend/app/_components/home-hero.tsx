"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Carousel, CarouselSlide } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { type UniconImage } from "@/lib/unicon-images";

type HomeHeroProps = {
  slides: readonly UniconImage[];
  eyebrow: string;
  title: string;
  cta: string;
};

export function HomeHero({ slides, eyebrow, title, cta }: HomeHeroProps) {
  return (
    <Carousel
      label="Featured Unicon work"
      className="border-b border-border/70"
      overlay={
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-md border border-white/25 bg-black/40 p-5 text-white backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{eyebrow}</p>
            <h1 className="mt-3 font-heading text-3xl leading-tight sm:text-4xl">{title}</h1>
            <Button asChild size="lg" className="mt-5"><Link href="/projects">{cta}<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      }
    >
      {slides.map((slide, index) => (
        <CarouselSlide key={slide.src}>
          <div className="relative min-h-[34rem] sm:min-h-[42rem] lg:min-h-[46rem]">
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} sizes="100vw" className="object-cover" style={{ objectPosition: slide.position }} />
            <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent" />
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
