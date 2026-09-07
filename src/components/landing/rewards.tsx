import { rewardLanes } from "@/lib/content";

export function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
              07 — Economics
            </p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              No money required. Just your forecast.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Orakly isn&apos;t about who can risk the most. It&apos;s about
              who can predict the best. Accurate forecasting should be
              valuable — participants earn through performance and
              contribution, not through bankroll.
            </p>

            <ol className="mt-8 space-y-4">
              <FlowStep n="01" title="Make a forecast" detail="$0 to enter" />
              <FlowStep n="02" title="Get it right" detail="Earn rewards" />
              <FlowStep
                n="03"
                title="Keep performing"
                detail="Build reputation"
              />
            </ol>
          </div>

          <div className="rounded-2xl bg-card/70 p-6 ring-1 ring-primary/12 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
              Earn through
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {rewardLanes.map((lane) => (
                <li
                  key={lane.title}
                  className="flex items-center gap-3 rounded-xl bg-background/50 px-4 py-3 ring-1 ring-primary/10"
                >
                  <span aria-hidden>{lane.icon}</span>
                  <span className="text-sm">{lane.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-xl text-primary">
              Predict better. Perform better. Earn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  n,
  title,
  detail,
}: {
  n: string;
  title: string;
  detail: string;
}) {
  return (
    <li className="flex items-baseline gap-4">
      <span className="font-mono text-[11px] text-primary">{n}</span>
      <div>
        <p className="font-display text-xl">{title}</p>
        <p className="text-sm text-muted-foreground">{detail}</p>
      </div>
    </li>
  );
}
