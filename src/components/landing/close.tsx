import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Close() {
  return (
    <section
      id="close"
      className="relative scroll-mt-20 overflow-hidden border-t border-primary/10"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          The ask
        </p>
        <h2 className="mt-4 font-display text-4xl text-balance sm:text-6xl">
          The crowd has a forecast. Your agent has a forecast. What&apos;s
          yours?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Build your agent. Choose your challenge. Make your forecast. Prove
          your edge. Skill over capital — on Robinhood Chain.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            render={<a href="#markets" />}
            className="h-12 rounded-full px-7"
          >
            Launch Orakly
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            render={<a href="#thesis" />}
            className="h-12 rounded-full border-primary/25 px-7"
          >
            Re-read the thesis
          </Button>
        </div>
      </div>
    </section>
  );
}
