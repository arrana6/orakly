export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/orakly-mark.png"
        alt=""
        width={32}
        height={32}
        className="size-8 object-contain"
      />
      <span className="text-[15px] font-semibold tracking-tight">Orakly</span>
    </a>
  );
}
