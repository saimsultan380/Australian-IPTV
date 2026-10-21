"use client";

import Image from "next/image";
import { features, featuresTitle } from "@/lib/content";

export function FeatureStrip() {
  const track = [...features, ...features];

  return (
    <section className="section feature-strip" aria-labelledby="features-title">
      <div className="wrap">
        <div className="section-head feature-head">
          <p className="eyebrow">Features</p>
          <h2 id="features-title">{featuresTitle}</h2>
        </div>
      </div>

      <div className="feature-slider" aria-label="Core features carousel">
        <div className="feature-track">
          {track.map((feature, index) => (
            <article className="feature-card" key={`${feature.name}-${index}`} aria-hidden={index >= features.length}>
              <Image
                src={feature.image}
                alt=""
                fill
                className="feature-card-image"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <div className="feature-copy">
                <h3>{feature.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
