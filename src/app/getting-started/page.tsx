import type { Metadata } from "next";
import { GettingStarted } from "@/components/sections/getting-started";
import { Devices } from "@/components/sections/devices";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("getting-started");

export default function GettingStartedPage() {
  const page = getSeoPage("getting-started");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("getting-started")}
          eyebrow="Setup"
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <GettingStarted />
      <Devices />
    </main>
  );
}
