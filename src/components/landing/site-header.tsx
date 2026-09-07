"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { LaunchButton } from "./launch-button";
import { Logo } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LaunchButton className="hidden h-8 items-center rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground sm:inline-flex">
            Launch
          </LaunchButton>

          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-background"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base text-foreground"
              >
                {link.label}
              </a>
            ))}
            <LaunchButton
              onOpen={() => setOpen(false)}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground"
            >
              Launch
            </LaunchButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
