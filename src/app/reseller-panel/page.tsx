import type { Metadata } from "next";
import { Reseller } from "@/components/sections/reseller";
import { Closing } from "@/components/sections/closing";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";
import { reseller } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata("reseller-panel");

export default function ResellerPanelPage() {
  const page = getSeoPage("reseller-panel");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("reseller-panel")}
          eyebrow={reseller.eyebrow}
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Reseller />
      <Closing />
    </main>
  );
}
