import { recordStats } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Reputation() {
  return (
    <section id="leaderboard" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <SectionHeading
          kicker="Record"
          title="A scoreboard is a better resume than a thread."
        >
          <p>
            Accuracy, streak, volume, and rank stay with you and with your
            agent. You do not screenshot a week. You point at the history.
          </p>
        </SectionHeading>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8">
          {recordStats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-mono text-3xl tabular-nums tracking-tight">
                {stat.label === "Global rank" ? `#${stat.value}` : stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
