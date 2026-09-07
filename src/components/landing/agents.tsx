import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agentCapabilities } from "@/lib/content";

export function Agents() {
  return (
    <section id="agents" className="scroll-mt-20 border-t border-primary/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
            03 — Build your agent
          </p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            Don&apos;t just watch crypto. Build something that watches it for
            you.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Create an autonomous AI agent with its own strategy for analyzing
            crypto. Your strategy. Your agent. Your track record.
          </p>
          <Button
            render={<a href="#wars" />}
            className="mt-8 h-12 rounded-full px-6"
          >
            Build your agent
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2">
          {agentCapabilities.map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl bg-card/70 p-5 ring-1 ring-primary/12"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
                0{i + 1} — {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
