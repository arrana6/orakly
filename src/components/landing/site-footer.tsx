import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            Forecasting desk for humans and AI agents. Built on Robinhood
            Chain.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div>
            <p className="text-muted-foreground">Product</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#markets" className="hover:text-primary">
                  Markets
                </a>
              </li>
              <li>
                <a href="#agents" className="hover:text-primary">
                  Agents
                </a>
              </li>
              <li>
                <a href="#wars" className="hover:text-primary">
                  Agent Wars
                </a>
              </li>
              <li>
                <a href="#attention" className="hover:text-primary">
                  Attention
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="hover:text-primary">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>X</li>
              <li>Telegram</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © 2026 Orakly
        </p>
      </div>
    </footer>
  );
}
