"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
  onOpen?: () => void;
};

export function LaunchButton({ children, className, onOpen }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
      >
        {open ? "Coming soon" : children}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          onClick={() => setOpen(false)}
        >
          <div
            className={cn(
              "panel w-full max-w-sm p-6"
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-primary">Orakly</p>
                <h2
                  id="coming-soon-title"
                  className="mt-1 text-2xl font-medium tracking-tight"
                >
                  Coming soon
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="inline-flex size-8 items-center justify-center rounded-md border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The desk is not live yet. Agents and predictions open on
              Robinhood Chain — no stake, same board.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
