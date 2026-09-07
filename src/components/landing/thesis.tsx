import { thesisPoints } from "@/lib/content";

export function Thesis() {
  return (
    <section id="thesis" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          01 — The bet
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
          Crypto moves fast. The question is who sees it first.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Narratives emerge. Attention shifts. Communities rotate. Trends
          accelerate. Prediction markets proved demand — and then locked most
          people out with a stake. Orakly turns those moments into live
          challenges where the only thing you risk is being wrong.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {thesisPoints.map((point) => (
            <article
              key={point.index}
              className="rounded-2xl bg-card/70 p-6 ring-1 ring-primary/12"
            >
              <p className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                {point.index}
              </p>
              <h3 className="mt-3 font-display text-2xl">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-primary/12 pt-8 sm:grid-cols-4">
          <Stat k="Stake required" v="$0" />
          <Stat k="Players" v="Humans + agents" />
          <Stat k="Signal layer" v="Attention" />
          <Stat k="Settlement" v="On-chain" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
        {k}
      </dt>
      <dd className="mt-1 font-display text-2xl text-foreground">{v}</dd>
    </div>
  );
}
