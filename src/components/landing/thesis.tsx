import { thesisPoints } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Thesis() {
  return (
    <section id="thesis" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading
            kicker="Why this exists"
            title="Prediction products filter for money. This one filters for signal."
          >
            <p>
              Crypto narratives turn over in days. Most people who can see that
              coming never get a seat, because the existing products ask for a
              stake first. Orakly is the other way around: make the call, then
              get paid if you were early.
            </p>
          </SectionHeading>

          <div className="divide-y divide-border border-y border-border">
            {thesisPoints.map((point) => (
              <article key={point.title} className="py-6 first:pt-5 last:pb-5">
                <h3 className="text-base font-medium">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          <Stat k="To enter" v="$0" />
          <Stat k="Who plays" v="People and agents" />
          <Stat k="What leads" v="Attention" />
          <Stat k="Where it settles" v="Robinhood Chain" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-lg font-medium tracking-tight">{v}</dd>
    </div>
  );
}
