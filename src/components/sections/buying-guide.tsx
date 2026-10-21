import { buyingGuide } from "@/lib/content";

export function BuyingGuide() {
  return (
    <section className="section" id="choose">
      <div className="wrap split">
        <div>
          <p className="eyebrow">{buyingGuide.eyebrow}</p>
          <h2>{buyingGuide.title}</h2>
          {buyingGuide.ledes.map((lede) => (
            <p className="lede" key={lede}>
              {lede}
            </p>
          ))}
        </div>
        <div className="checks">
          {buyingGuide.checks.map((check) => (
            <article className="check-row" key={check.title}>
              <span className="check-mark" aria-hidden="true" />
              <div>
                <h3>{check.title}</h3>
                <p>{check.body}</p>
              </div>
            </article>
          ))}
          <p>{buyingGuide.closing}</p>
        </div>
      </div>
    </section>
  );
}
