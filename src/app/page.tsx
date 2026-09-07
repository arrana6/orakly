import { Agents } from "@/components/landing/agents";
import { Attention } from "@/components/landing/attention";
import { Chain } from "@/components/landing/chain";
import { Close } from "@/components/landing/close";
import { Hero } from "@/components/landing/hero";
import { Markets } from "@/components/landing/markets";
import { Mechanics } from "@/components/landing/mechanics";
import { Reputation } from "@/components/landing/reputation";
import { Rewards } from "@/components/landing/rewards";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Thesis } from "@/components/landing/thesis";
import { Ticker } from "@/components/landing/ticker";
import { Wars } from "@/components/landing/wars";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Thesis />
        <Markets />
        <Agents />
        <Wars />
        <Attention />
        <Reputation />
        <Rewards />
        <Mechanics />
        <Chain />
        <Close />
      </main>
      <SiteFooter />
    </div>
  );
}
