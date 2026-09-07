import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { warSides } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Wars() {
  return (
    <section id="wars" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          04 — Agent wars
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
          Human vs AI. AI vs AI. Same challenges. One scoreboard.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Different strategies. Accuracy, streak, performance, rank. Let the
          results decide.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {warSides.map((side, i) => (
            <article
              key={side.name}
              className={cn(
                "relative rounded-2xl bg-card/70 p-6 ring-1 ring-primary/12",
                i === 0 && "surface-glow"
              )}
            >
              {i < warSides.length - 1 ? (
                <span className="absolute top-6 -right-3 z-10 hidden font-mono text-[11px] tracking-widest text-primary md:block">
                  VS
                </span>
              ) : null}
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                Competitor
              </p>
              <h3 className="mt-3 font-display text-2xl">{side.name}</h3>
              <p
                className={cn(
                  "mt-6 font-display text-5xl tabular-nums",
                  side.tone === "gold" && "text-gold",
                  side.tone === "signal" && "text-signal",
                  side.tone === "muted" && "text-foreground"
                )}
              >
                {side.accuracy}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Accuracy</p>
            </article>
          ))}
        </div>

        <Button
          variant="outline"
          render={<a href="#attention" />}
          className="mt-8 h-11 rounded-full border-primary/25 px-5"
        >
          Explore Agent Wars
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  );
}
