import { FlagMark } from "@/components/ui/flag-mark";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            <FlagMark width={24} height={12} className="flag-mark" />
            {hero.eyebrow}
          </p>
          <h1>
            {hero.titleLead}
            <em>{hero.titleAccent}</em>
            {hero.titleTail}
          </h1>
          <div className="intro">
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a
              className="btn btn-ghost"
              href={hero.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-flag">
            <FlagMark
              width={640}
              height={420}
              className="hero-flag-mark"
              label="Australian flag"
              preserveAspectRatio="xMidYMid slice"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
