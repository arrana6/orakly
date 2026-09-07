import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { challenges } from "@/lib/content";
import { ForecastWidget } from "./forecast-widget";

export function Markets() {
  return (
    <section id="markets" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          02 — The arena
        </p>
        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-balance sm:text-5xl">
              Forecasting challenges. One question: what happens next?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Choose a challenge. Make your forecast. Wait for the outcome. If
              you are right, you can earn rewards. Try a live market below —
              the click is the product.
            </p>
          </div>
          <Button
            variant="outline"
            render={<a href="#close" />}
            className="h-11 rounded-full border-primary/25 px-5"
          >
            Explore all challenges
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <ForecastWidget key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}
