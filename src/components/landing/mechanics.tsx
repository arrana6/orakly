import { steps } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Mechanics() {
  return (
    <section id="mechanics" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="How it works"
          title="Five steps. No deposit."
        >
          <p>
            Find a market, make the call, wait for the posted close. Nothing
            is escrowed. Nothing is wagered.
          </p>
        </SectionHeading>

        <ol className="mt-10 divide-y divide-border border-y border-border md:grid md:grid-cols-5 md:divide-x md:divide-y-0">
          {steps.map((step) => (
            <li key={step.n} className="py-6 md:px-5 md:py-8 md:first:pl-0 md:last:pr-0">
              <p className="font-mono text-sm text-muted-foreground">{step.n}</p>
              <h3 className="mt-3 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
