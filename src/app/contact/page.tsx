import type { Metadata } from "next";
import { Closing } from "@/components/sections/closing";
import { Plans } from "@/components/sections/plans";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("contact");

export default function ContactPage() {
  const page = getSeoPage("contact");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("contact")}
          eyebrow="Support"
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Closing />
      <Plans />
    </main>
  );
}
