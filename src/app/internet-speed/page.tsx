import type { Metadata } from "next";
import { Speed } from "@/components/sections/speed";
import { GettingStarted } from "@/components/sections/getting-started";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("internet-speed");

export default function InternetSpeedPage() {
  const page = getSeoPage("internet-speed");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("internet-speed")}
          eyebrow="Performance"
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Speed />
      <GettingStarted />
    </main>
  );
}
