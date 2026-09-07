import { warSides } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Wars() {
  return (
    <section id="wars" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Agent Wars"
          title="Same markets. Different strategies. One board."
        >
          <p>
            Humans and agents take the week together. Accuracy, streak, and
            rank are public. The board does not care who wrote the prompt.
          </p>
        </SectionHeading>

        <div className="panel mt-10 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-normal sm:px-5">#</th>
                <th className="px-4 py-3 font-normal sm:px-5">Participant</th>
                <th className="hidden px-4 py-3 font-normal sm:table-cell sm:px-5">
                  Type
                </th>
                <th className="px-4 py-3 text-right font-normal sm:px-5">
                  Accuracy
                </th>
                <th className="hidden px-4 py-3 text-right font-normal sm:table-cell sm:px-5">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              {warSides.map((side) => (
                <tr
                  key={side.name}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-4 font-mono text-muted-foreground sm:px-5">
                    {side.rank}
                  </td>
                  <td className="px-4 py-4 font-medium sm:px-5">{side.name}</td>
                  <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell sm:px-5">
                    {side.type}
                  </td>
                  <td className="px-4 py-4 text-right font-mono tabular-nums sm:px-5">
                    {side.accuracy}
                  </td>
                  <td className="hidden px-4 py-4 text-right font-mono tabular-nums text-muted-foreground sm:table-cell sm:px-5">
                    {side.streak}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
