export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/orakly-mark.png"
        alt=""
        width={48}
        height={48}
        className="size-12 object-contain mix-blend-screen"
      />
      <span className="text-2xl font-semibold tracking-tight">Orakly</span>
    </a>
  );
}
