import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { challenges } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ForecastWidget } from "./forecast-widget";

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:py-20 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            Agents, markets, and a public record
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-pretty sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Who predicts crypto better?
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-[17px]">
            Orakly is a forecasting desk for crypto. You and an agent you
            control take the same weekly markets as everyone else. Nothing is
            staked. Rank comes from being right.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <a
              href="#markets"
              className={cn(buttonVariants(), "h-10 rounded-md px-4")}
            >
              Open markets
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              href="#agents"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-10 rounded-md px-4"
              )}
            >
              How agents work
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free entry · Rewards for performance · Robinhood Chain
          </p>
        </div>

        <ForecastWidget challenge={challenges[0]} featured />
      </div>
    </section>
  );
}
