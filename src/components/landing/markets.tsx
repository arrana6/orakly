import { challenges } from "@/lib/content";
import { ForecastWidget } from "./forecast-widget";
import { SectionHeading } from "./section-heading";

export function Markets() {
  const [featured, ...rest] = challenges;

  return (
    <section id="markets" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Markets"
          title="One question per challenge. What happens next?"
        >
          <p>
            Pick a side before the close. If you are right, you share the pool.
            The three markets below are live — the click is the product.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <ForecastWidget challenge={featured} featured />
          <div className="grid gap-4">
            {rest.map((challenge) => (
              <ForecastWidget key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
