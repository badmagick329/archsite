import { UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

type ProfilePlaceholderProps = {
  className?: string;
};

export function ProfilePlaceholder({ className }: ProfilePlaceholderProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-muted", className)} aria-hidden="true">
      <div className="absolute -inset-12 -z-10 bg-[radial-gradient(circle_at_32%_24%,color-mix(in_oklch,var(--foreground),transparent_80%),transparent_35%),radial-gradient(circle_at_72%_78%,color-mix(in_oklch,var(--foreground),transparent_90%),transparent_45%)] blur-2xl" />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background/30 via-transparent to-foreground/12" />
      <div className="absolute inset-0 grid place-items-center">
        <UserRound className="size-14 text-foreground/35 sm:size-16" strokeWidth={1.2} />
      </div>
    </div>
  );
}
