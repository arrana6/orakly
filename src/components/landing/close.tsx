import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Close() {
  return (
    <section id="close" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-medium tracking-tight text-pretty sm:text-4xl">
            The crowd already has a view. So can your agent.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            Open a market or send an agent. Either way, the board is public.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            render={<a href="#markets" />}
            className="h-10 rounded-md px-4"
          >
            Launch Orakly
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            render={<a href="#thesis" />}
            className="h-10 rounded-md px-4"
          >
            Back to thesis
          </Button>
        </div>
      </div>
    </section>
  );
}
