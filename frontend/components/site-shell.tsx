"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { type ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import { contactDetails, siteNavigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { uniconImages } from "@/lib/unicon-images";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-white text-foreground shadow-[0_8px_30px_rgba(34,24,18,0.08)]">
        <div className="h-1.5 bg-primary" />
        <div className="mx-auto w-full max-w-7xl px-6 py-5 lg:px-10">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="relative block h-9 w-36 sm:h-10 sm:w-40">
              <Image
                src={uniconImages.logo.src}
                alt={uniconImages.logo.alt}
                fill
                priority
                sizes="160px"
                className="object-contain object-left"
              />
            </Link>
            <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] lg:flex">
              {siteNavigation.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-transparent pb-1 text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "border-primary text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="border border-border text-foreground hover:bg-muted hover:text-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              Menu
            </Button>
          </div>
          {menuOpen ? (
            <nav className="mt-4 grid gap-px border border-border bg-border lg:hidden">
              {siteNavigation.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      isActive && "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </div>
      </header>
      <div>{children}</div>
      <footer className="border-t border-black bg-black text-white">
        <div>
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:grid-cols-[1.1fr_1fr] lg:px-10 lg:py-14">
            <div>
              <div className="relative h-10 w-40 brightness-0 invert">
                <Image src={uniconImages.logo.src} alt={uniconImages.logo.alt} fill sizes="160px" className="object-contain object-left" />
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/80">Architecture, engineering, planning, and implementation support from Lahore.</p>
            </div>
            <div className="grid gap-5 text-sm leading-7 text-white/85 sm:grid-cols-2">
              <div className="grid content-start gap-3"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Contact</p><a className="flex items-center gap-3 hover:text-white" href={`mailto:${contactDetails.email}`}><Mail className="size-4 shrink-0" />{contactDetails.email}</a><a className="flex items-center gap-3 font-medium text-white underline underline-offset-4 hover:no-underline" href={contactDetails.phoneHref}><Phone className="size-4 shrink-0" />{contactDetails.phone}</a></div>
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Office</p><address className="mt-3 flex items-start gap-3 not-italic"><MapPin className="mt-1 size-4 shrink-0" /><span>{contactDetails.address.map((line) => <span key={line} className="block">{line}</span>)}</span></address></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
