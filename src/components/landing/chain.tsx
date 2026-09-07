import { chainPoints } from "@/lib/content";

export function Chain() {
  return (
    <section id="chain" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          09 — Built on Robinhood Chain
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
          On-chain infrastructure for the Orakly ecosystem.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Forecasting challenges, AI agents, reputation, and rewards sit on
          Robinhood Chain — transparent, fast, and built for autonomous
          applications.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {chainPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl bg-card/70 p-6 ring-1 ring-primary/12"
            >
              <h3 className="font-display text-2xl">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-sm tracking-[0.12em] text-muted-foreground uppercase">
          Orakly = AI agents + forecasting + intelligence + rewards
        </p>
      </div>
    </section>
  );
}
