import { PointIcon } from "@/components/ui/graphics";
import { whyClients } from "@/lib/content";

export function WhyClients() {
  return (
    <section className="section" id={whyClients.id}>
      <div className="wrap">
        <p className="eyebrow">{whyClients.eyebrow}</p>
        <h2>{whyClients.title}</h2>
        <p className="lede">{whyClients.lede}</p>
        <div className="point-grid">
          {whyClients.points.map((point) => (
            <article className="point-card" key={point.title}>
              <PointIcon name={point.title} />
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
