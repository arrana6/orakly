"use client";

import { useState } from "react";

type Props = {
  children: string;
  className?: string;
};

export function LaunchButton({ children, className }: Props) {
  const [soon, setSoon] = useState(false);

  return (
    <button type="button" className={className} onClick={() => setSoon(true)}>
      {soon ? "Coming soon" : children}
    </button>
  );
}
