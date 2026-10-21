import { SpeedArt } from "@/components/ui/graphics";
import { speed } from "@/lib/content";

export function Speed() {
  return (
    <section className="section" id="speed">
      <div className="wrap split">
        <div>
          <p className="eyebrow">{speed.eyebrow}</p>
          <h2>{speed.title}</h2>
          <SpeedArt />
        </div>
        <div>
          <p>{speed.intro}</p>
          <p style={{ marginTop: 12 }}>{speed.leadIn}</p>
          <ul className="speed-list">
            {speed.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <p style={{ marginTop: 16 }}>{speed.closing}</p>
        </div>
      </div>
    </section>
  );
}
