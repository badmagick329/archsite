"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { type ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteNavigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  currentPath?: string;
};

export function SiteShell({ children, currentPath }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-5 lg:px-10">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-heading text-xl uppercase tracking-[0.28em]"
            >
              Unicon Consulting
            </Link>
            <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] xl:flex">
              {siteNavigation.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-transparent pb-1 text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "border-foreground text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="xl:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              Menu
            </Button>
          </div>
          {menuOpen ? (
            <nav className="mt-4 grid gap-px border border-border/70 bg-border/70 xl:hidden">
              {siteNavigation.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "bg-background px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
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
      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>Unicon Consulting Pvt. Ltd. | Lahore, Pakistan</p>
          <p>
            Architecture, engineering, planning, and research inquiries welcome.
          </p>
        </div>
      </footer>
    </div>
  );
}
