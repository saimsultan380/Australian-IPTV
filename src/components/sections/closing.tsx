import { CloseArt } from "@/components/ui/graphics";
import { closing } from "@/lib/content";

export function Closing() {
  return (
    <section className="section close" id="support">
      <div className="wrap close-grid">
        <div>
          <p className="eyebrow">{closing.eyebrow}</p>
          <h2>{closing.title}</h2>
          {closing.paragraphs.map((paragraph) => (
            <p className="lede" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="actions">
            <a className="btn btn-primary" href={closing.primary.href}>
              {closing.primary.label}
            </a>
            <a
              className="btn btn-line"
              href={closing.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {closing.secondary.label}
            </a>
          </div>
        </div>
        <CloseArt />
      </div>
    </section>
  );
}
