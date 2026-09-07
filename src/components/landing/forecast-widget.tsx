"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Challenge } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  challenge: Challenge;
  featured?: boolean;
};

export function ForecastWidget({ challenge, featured = false }: Props) {
  const [pick, setPick] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl bg-card/80 p-5 ring-1 ring-primary/15 backdrop-blur-sm",
        featured && "surface-glow p-6 sm:p-7"
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-live rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
            Live forecast
          </span>
        </div>
        <Badge
          variant="outline"
          className="border-primary/25 bg-primary/8 font-mono text-[10px] tracking-wider text-primary uppercase"
        >
          {challenge.emoji} {challenge.tag}
        </Badge>
      </div>

      <h3
        className={cn(
          "mt-4 font-display text-xl leading-snug text-balance text-foreground",
          featured && "text-2xl sm:text-[1.7rem]"
        )}
      >
        {challenge.question}
      </h3>

      <div className="mt-6 space-y-3">
        <OddsRow
          label={challenge.left.label}
          icon={challenge.left.icon}
          pct={challenge.left.pct}
          tone="gold"
        />
        <OddsRow
          label={challenge.right.label}
          icon={challenge.right.icon}
          pct={challenge.right.pct}
          tone="signal"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 text-xs">
        <span className="font-mono tracking-wider text-muted-foreground uppercase">
          Participation · Free
        </span>
        <span className="font-mono text-primary">
          Reward pool {challenge.pool}
        </span>
      </div>

      <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
        Your forecast
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <PickButton
          selected={pick === challenge.left.label}
          onClick={() => setPick(challenge.left.label)}
        >
          {challenge.left.icon} {challenge.left.label}
        </PickButton>
        <PickButton
          selected={pick === challenge.right.label}
          onClick={() => setPick(challenge.right.label)}
        >
          {challenge.right.icon} {challenge.right.label}
        </PickButton>
      </div>

      {pick ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-signal">
          <Check className="size-4" />
          Forecast locked on {pick}. No capital. Outcome resolves on-chain.
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Choose a side. $0 to enter. Skill is the only stake.
        </p>
      )}
    </div>
  );
}

function OddsRow({
  label,
  icon,
  pct,
  tone,
}: {
  label: string;
  icon: string;
  pct: number;
  tone: "gold" | "signal";
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span>
          {icon} {label}
        </span>
        <span
          className={cn(
            "font-mono tabular-nums",
            tone === "gold" ? "text-gold" : "text-signal"
          )}
        >
          {pct}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "animate-bar h-full rounded-full",
            tone === "gold" ? "bg-gold" : "bg-signal"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function PickButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      type="button"
      variant={selected ? "default" : "outline"}
      onClick={onClick}
      className={cn(
        "h-11 rounded-xl text-[13px]",
        selected
          ? "bg-primary text-primary-foreground"
          : "border-primary/20 bg-background/40 hover:bg-primary/10"
      )}
    >
      {children}
    </Button>
  );
}
