import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ kicker, title, children, className }: Props) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm text-primary">{kicker}</p>
      <h2 className="mt-2 text-3xl font-medium tracking-tight text-pretty sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-7 text-muted-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
