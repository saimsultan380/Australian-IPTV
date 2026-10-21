import { plans, plansIntro } from "@/lib/content";
import { whatsapp } from "@/lib/whatsapp";

export function Plans({ hideIntro = false }: { hideIntro?: boolean } = {}) {
  return (
    <section className="section" id="plans">
      <div className="wrap">
        {hideIntro ? null : (
          <div className="section-head">
            <p className="eyebrow">{plansIntro.eyebrow}</p>
            <h2>{plansIntro.title}</h2>
            <p className="lede">{plansIntro.lede}</p>
          </div>
        )}
        <div className="plans">
          {plans.map((plan) => (
            <article className={plan.featured ? "plan is-featured" : "plan"} key={plan.name}>
              <div className="plan-top">
                <div className="plan-name-row">
                  <h3>{plan.name}</h3>
                  {plan.featured ? <span className="badge">Best value</span> : null}
                </div>
                <p className="price">
                  {plan.price}
                  <span> AUD</span>
                </p>
                <p className="duration">{plan.duration}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={plan.featured ? "btn btn-primary" : "btn btn-navy"}
                href={whatsapp.planHref(plan.name, plan.duration, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
