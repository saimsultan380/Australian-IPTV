import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Montserrat, Poppins } from "next/font/google";
import { FlagDefs } from "@/components/ui/flag-mark";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd, getSeoPage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const home = getSeoPage("home");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: home.title,
    template: `%s | ${site.name}`,
  },
  description: home.description,
  applicationName: site.name,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "99NAg24w920HNX6oCYP2Btah7OXLDw3WR4AWvUvh-gI",
  },
};

export const viewport: Viewport = {
  themeColor: "#012169",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <FlagDefs />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
