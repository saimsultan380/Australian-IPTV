import { StepIcon } from "@/components/ui/graphics";
import { steps } from "@/lib/content";

export function GettingStarted() {
  return (
    <section className="section" id="start">
      <div className="wrap">
        <p className="eyebrow">{steps.eyebrow}</p>
        <h2>{steps.title}</h2>
        <div className="steps">
          {steps.items.map((item, index) => (
            <article key={item.title}>
              <StepIcon index={index} />
              <p className="num">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
