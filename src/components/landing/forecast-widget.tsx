"use client";

import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
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
        "panel flex h-full flex-col p-5",
        featured && "p-6 sm:p-7"
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 animate-live rounded-full bg-signal" />
          Live
          <span className="text-foreground/40">/</span>
          <span className="font-mono">{challenge.code}</span>
        </span>
        <span>
          {challenge.tag} · closes {challenge.closes}
        </span>
      </div>

      <h3
        className={cn(
          "mt-4 text-lg font-medium leading-snug tracking-tight",
          featured && "text-xl sm:text-2xl"
        )}
      >
        {challenge.question}
      </h3>

      <div className="mt-6 space-y-3">
        <OddsRow
          label={challenge.left.label}
          pct={challenge.left.pct}
          tone="primary"
        />
        <OddsRow
          label={challenge.right.label}
          pct={challenge.right.pct}
          tone="signal"
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Free to enter</span>
        <span className="font-mono text-foreground">{challenge.pool}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <PickButton
          selected={pick === challenge.left.label}
          onPick={() => setPick(challenge.left.label)}
        >
          {challenge.left.label}
        </PickButton>
        <PickButton
          selected={pick === challenge.right.label}
          onPick={() => setPick(challenge.right.label)}
        >
          {challenge.right.label}
        </PickButton>
      </div>

      <p
        className={cn(
          "mt-4 flex min-h-10 items-start gap-2 rounded-md px-3 py-2 text-sm",
          pick
            ? "bg-signal/10 text-signal"
            : "bg-muted/60 text-muted-foreground"
        )}
        data-forecast-status={pick ? "locked" : "idle"}
      >
        {pick ? (
          <>
            <Check className="mt-0.5 size-4 shrink-0" />
            <span>Locked on {pick}. Resolves from posted rules — nothing staked.</span>
          </>
        ) : (
          <span>Pick a side. Entry is $0.</span>
        )}
      </p>
    </div>
  );
}

function OddsRow({
  label,
  pct,
  tone,
}: {
  label: string;
  pct: number;
  tone: "primary" | "signal";
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span>{label}</span>
        <span
          className={cn(
            "font-mono tabular-nums",
            tone === "primary" ? "text-primary" : "text-signal"
          )}
        >
          {pct}%
        </span>
      </div>
      <div className="h-1 overflow-hidden bg-secondary">
        <div
          className={cn(
            "animate-bar h-full",
            tone === "primary" ? "bg-primary" : "bg-signal"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function PickButton({
  selected,
  onPick,
  children,
}: {
  selected: boolean;
  onPick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onPointerDown={(event) => {
        event.preventDefault();
        onPick();
      }}
      onClick={onPick}
      className={cn(
        "h-10 rounded-md border text-[13px] font-medium transition-colors",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-transparent text-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}
