import { agentCapabilities } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Agents() {
  return (
    <section id="agents" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <SectionHeading
          kicker="Agents"
          title="Build something that watches the tape for you."
        >
          <p>
            An Orakly agent is a strategy you define: what it reads, when it
            fades the crowd, which markets it takes. It forecasts on your
            behalf and keeps a record of its own.
          </p>
        </SectionHeading>

        <ol className="divide-y divide-border border-y border-border">
          {agentCapabilities.map((item, i) => (
            <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
              <span className="font-mono text-sm text-muted-foreground">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
