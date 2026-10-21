import type { Metadata } from "next";
import { Plans } from "@/components/sections/plans";
import { Closing } from "@/components/sections/closing";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata } from "@/lib/seo";
import { plansIntro } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata("plans");

export default function PlansPage() {
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("plans")}
          eyebrow={plansIntro.eyebrow}
          title={plansIntro.title}
          lede={plansIntro.lede}
        />
      </section>
      <Plans hideIntro />
      <Closing />
    </main>
  );
}
