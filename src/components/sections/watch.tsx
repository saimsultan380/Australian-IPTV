import Image from "next/image";
import { watch, type Article } from "@/lib/content";

export function Watch() {
  return (
    <section className="section" id="watch">
      <div className="wrap">
        <div className="section-head watch-head">
          <p className="eyebrow">{watch.eyebrow}</p>
          <h2>{watch.title}</h2>
          <p className="lede">{watch.lede}</p>
        </div>
        <div className="watch-grid">
          {watch.articles.map((article) => (
            <ArticleBlock article={article} key={article.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleBlock({ article }: { article: Article }) {
  return (
    <article className="media-card">
      <div className="media-card-photo">
        <Image
          src={article.image}
          alt={article.title}
          width={900}
          height={1120}
          className="media-card-image"
          sizes="(max-width: 900px) 100vw, 560px"
        />
      </div>
      <div className="copy">
        <h3>{article.title}</h3>
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
