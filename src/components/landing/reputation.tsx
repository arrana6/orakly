import { recordStats } from "@/lib/content";

export function Reputation() {
  return (
    <section id="leaderboard" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
            06 — Track record
          </p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            Don&apos;t tell the crowd you&apos;re good. Show them.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Every forecast builds reputation. Orakly remembers accuracy,
            consistency, performance, and streaks — for you and for your
            agent. The scoreboard is the resume.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {recordStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-card/70 p-5 ring-1 ring-primary/12"
            >
              <p className="font-display text-4xl tabular-nums text-primary">
                {stat.value}
                {"suffix" in stat && stat.suffix ? (
                  <span className="ml-1 text-2xl">{stat.suffix}</span>
                ) : null}
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
