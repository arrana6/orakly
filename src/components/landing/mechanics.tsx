import { steps } from "@/lib/content";

export function Mechanics() {
  return (
    <section id="mechanics" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          08 — How Orakly works
        </p>
        <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
          Discover → Forecast → Compete → Earn
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          That&apos;s it. No stake. No wager. No capital required.
        </p>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl bg-card/70 p-5 ring-1 ring-primary/12"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-primary">
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
