"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CarouselProps = {
  children: ReactNode[];
  className?: string;
  label: string;
  interval?: number;
  overlay?: ReactNode;
};

export function Carousel({
  children,
  className,
  label,
  interval = 5000,
  overlay,
}: CarouselProps) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const paused = useRef(false);

  const selectSlide = useCallback(() => {
    if (api) setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", selectSlide);
    api.on("reInit", selectSlide);
    return () => {
      api.off("select", selectSlide);
      api.off("reInit", selectSlide);
    };
  }, [api, selectSlide]);

  useEffect(() => {
    if (!api || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!paused.current) api.scrollNext();
    }, interval);
    return () => window.clearInterval(timer);
  }, [api, interval, reducedMotion]);

  const goPrevious = () => api?.scrollPrev();
  const goNext = () => api?.scrollNext();

  return (
    <section
      aria-label={label}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) paused.current = false;
      }}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>
      {overlay ? <div className="absolute inset-x-0 bottom-24 z-10 px-6 sm:bottom-28 lg:px-10">{overlay}</div> : null}
      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-between px-5 sm:bottom-7 sm:px-8 lg:px-10">
        <div className="flex gap-2" aria-label="Select slide">
          {children.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-8 border border-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                selectedIndex === index ? "bg-white" : "bg-transparent hover:bg-white/40",
              )}
            />
          ))}
        </div>
        <div className="flex gap-px bg-white/25">
          <button type="button" onClick={goPrevious} className="bg-black/55 p-3 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous slide">
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" onClick={goNext} className="bg-black/55 p-3 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next slide">
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function CarouselSlide({ children }: { children: ReactNode }) {
  return <div className="min-w-0 shrink-0 grow-0 basis-full">{children}</div>;
}
