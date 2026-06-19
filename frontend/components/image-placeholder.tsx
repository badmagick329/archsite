type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden border border-border/70 bg-muted/40 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_46%,color-mix(in_oklch,var(--border),transparent_20%)_46%,color-mix(in_oklch,var(--border),transparent_20%)_54%,transparent_54%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,transparent_76%,color-mix(in_oklch,var(--border),transparent_35%)_76%,color-mix(in_oklch,var(--border),transparent_35%)_77%,transparent_77%,transparent_100%)]" />
      <div className="relative flex h-full min-h-48 items-end justify-between p-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span>{label}</span>
        <span>Image Placeholder</span>
      </div>
    </div>
  );
}
