import type { Metadata } from "next";
import { Devices } from "@/components/sections/devices";
import { GettingStarted } from "@/components/sections/getting-started";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";
import { devicesIntro } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata("devices");

export default function DevicesPage() {
  const page = getSeoPage("devices");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("devices")}
          eyebrow={devicesIntro.eyebrow}
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Devices />
      <GettingStarted />
    </main>
  );
}
