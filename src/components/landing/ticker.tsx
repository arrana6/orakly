import { tickerItems } from "@/lib/content";

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-primary/12 bg-card/40">
      <div className="animate-ticker flex w-max gap-10 py-3 pr-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-[11px] tracking-[0.16em] whitespace-nowrap text-muted-foreground uppercase"
          >
            <span className="mr-10 text-primary/70">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
