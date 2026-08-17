"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Carousel, CarouselSlide } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { type UniconImage } from "@/lib/unicon-images";

type HomeHeroProps = {
  slides: readonly UniconImage[];
  titleAccent: string;
  title: string;
  description: string;
  cta: string;
};

export function HomeHero({ slides, titleAccent, title, description, cta }: HomeHeroProps) {
  return (
    <Carousel
      label="Featured Unicon work"
      className="border-b border-border/70"
      overlay={
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-4xl font-bold leading-[0.94] tracking-[-0.04em] text-balance drop-shadow-[0_3px_18px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              <span className="text-primary drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)]">{titleAccent}</span> {title}
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-lg">{description}</p>
            <Button asChild size="lg" className="mt-6"><Link href="/projects">{cta}<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      }
    >
      {slides.map((slide, index) => (
        <CarouselSlide key={slide.src}>
          <div className="relative min-h-[34rem] sm:min-h-[42rem] lg:min-h-[46rem]">
            <Image src={slide.src} alt={slide.alt} fill preload={index === 0} loading={index === 0 ? undefined : "eager"} sizes="100vw" className="object-cover" style={{ objectPosition: slide.position }} />
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/58 to-black/10" />
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
