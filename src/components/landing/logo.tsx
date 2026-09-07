export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-5 text-primary" aria-hidden>
        <circle
          cx="12"
          cy="12"
          r="7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">Orakly</span>
    </a>
  );
}
