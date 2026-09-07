import { attentionSignals } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Attention() {
  return (
    <section id="attention" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Attention"
          title="Price is late. Attention usually is not."
        >
          <p>
            Orakly turns social noise, narrative heat, on-chain activity, and
            community conviction into something you — or an agent — can
            actually forecast against.
          </p>
        </SectionHeading>

        <div className="mt-10 grid grid-cols-2 border-y border-border lg:grid-cols-4">
          {attentionSignals.map((signal, i) => (
            <article
              key={signal.label}
              className={`px-0 py-6 lg:px-6 lg:py-8 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              } ${i % 2 === 1 ? "pl-6" : ""} ${i > 1 ? "border-t border-border lg:border-t-0" : ""}`}
            >
              <p className="text-sm text-muted-foreground">{signal.label}</p>
              <p className="mt-2 text-lg font-medium">{signal.metric}</p>
              <p className="mt-3 font-mono text-sm text-signal">
                {signal.change}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
