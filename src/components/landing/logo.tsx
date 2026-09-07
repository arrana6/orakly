export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex size-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
        <svg viewBox="0 0 24 24" className="size-4 text-primary" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="2.4" fill="currentColor" />
          <path
            d="M3.5 12h3.2M17.3 12h3.2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl tracking-wide text-foreground">
        Orakly
      </span>
    </a>
  );
}
