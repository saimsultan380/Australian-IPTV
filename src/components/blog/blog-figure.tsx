"use client";

type BlogFigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

/** Image slot — replace files under /public/images/blog/ when ready. */
export function BlogFigure({ src, alt, caption }: BlogFigureProps) {
  return (
    <figure className="blog-figure">
      <div className="blog-figure-frame" data-label="Image coming soon">
        {/* Native img so missing files fall back cleanly until assets are added */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add("is-missing");
          }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
