import type { Metadata } from "next";
import { BuyingGuide } from "@/components/sections/buying-guide";
import { WhyClients } from "@/components/sections/reasons";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("buying-guide");

export default function BuyingGuidePage() {
  const page = getSeoPage("buying-guide");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("buying-guide")}
          eyebrow="Guide"
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <BuyingGuide />
      <WhyClients />
    </main>
  );
}
