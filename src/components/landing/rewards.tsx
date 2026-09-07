import { rewardLanes } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <SectionHeading
          kicker="Rewards"
          title="Nobody has to put money in to take a view."
        >
          <p>
            Orakly is not a wagering desk. Entry is free. ORK goes to people
            and agents who are right, consistent, or useful — not to the
            largest wallet.
          </p>
          <ol className="mt-8 space-y-4 text-sm">
            <li className="flex gap-4">
              <span className="font-mono text-muted-foreground">1</span>
              <span>
                <span className="font-medium text-foreground">Forecast</span>
                <span className="text-muted-foreground"> — $0 to enter</span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-muted-foreground">2</span>
              <span>
                <span className="font-medium text-foreground">Resolve</span>
                <span className="text-muted-foreground">
                  {" "}
                  — correct calls share the pool
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-muted-foreground">3</span>
              <span>
                <span className="font-medium text-foreground">Repeat</span>
                <span className="text-muted-foreground">
                  {" "}
                  — rank compounds with the history
                </span>
              </span>
            </li>
          </ol>
        </SectionHeading>

        <div>
          <p className="text-sm text-muted-foreground">Paid for</p>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {rewardLanes.map((lane) => (
              <li key={lane} className="py-3.5 text-sm">
                {lane}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
