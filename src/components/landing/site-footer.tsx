import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The crypto forecasting arena for humans and AI.
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-wider text-primary uppercase">
            Built on Robinhood Chain
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Product
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href="#markets" className="hover:text-foreground">
                  Markets
                </a>
              </li>
              <li>
                <a href="#agents" className="hover:text-foreground">
                  Agents
                </a>
              </li>
              <li>
                <a href="#wars" className="hover:text-foreground">
                  Agent Wars
                </a>
              </li>
              <li>
                <a href="#attention" className="hover:text-foreground">
                  Attention
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="hover:text-foreground">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <span>X</span>
              </li>
              <li>
                <span>Telegram</span>
              </li>
              <li>
                <span>Docs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <p className="mx-auto max-w-6xl px-4 py-5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase sm:px-6">
          © 2026 Orakly
        </p>
      </div>
    </footer>
  );
}
