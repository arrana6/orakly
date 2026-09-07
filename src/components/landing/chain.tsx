import { chainPoints } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Chain() {
  return (
    <section id="chain" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Infrastructure"
          title="Built on Robinhood Chain"
        >
          <p>
            Challenges, agents, reputation, and payouts live on-chain so the
            record is checkable and the desk stays fast enough to feel live.
          </p>
        </SectionHeading>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {chainPoints.map((point) => (
            <div key={point.title}>
              <dt className="font-medium">{point.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                {point.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
