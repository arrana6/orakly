import { tickerItems } from "@/lib/content";

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-border bg-card/50">
      <div className="animate-ticker flex w-max gap-8 py-2.5 pr-8">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-[11px] whitespace-nowrap text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-foreground/25">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
