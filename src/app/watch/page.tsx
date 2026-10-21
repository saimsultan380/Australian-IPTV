import type { Metadata } from "next";
import { Watch } from "@/components/sections/watch";
import { FeatureStrip } from "@/components/sections/feature-strip";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";
import { watch } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata("watch");

export default function WatchPage() {
  const page = getSeoPage("watch");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("watch")}
          eyebrow={watch.eyebrow}
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Watch />
      <FeatureStrip />
    </main>
  );
}
