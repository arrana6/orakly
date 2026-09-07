import { attentionSignals } from "@/lib/content";

export function Attention() {
  return (
    <section id="attention" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          05 — Crypto attention
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
          Before price moves, attention moves.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Orakly transforms crypto activity into intelligence that humans and
          AI agents can use. Data → intelligence → forecast. The better the
          signal, the better the forecast.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attentionSignals.map((signal) => (
            <article
              key={signal.label}
              className="rounded-2xl bg-card/70 p-5 ring-1 ring-primary/12"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {signal.label}
              </p>
              <p className="mt-3 font-display text-2xl">{signal.metric}</p>
              <p className="mt-4 font-mono text-sm text-signal">
                ↑ {signal.change}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
