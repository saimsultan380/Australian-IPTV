import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Montserrat, Poppins } from "next/font/google";
import { FlagDefs } from "@/components/ui/flag-mark";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { metadataCopy } from "@/lib/content";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: metadataCopy.title,
  description: metadataCopy.description,
  applicationName: site.name,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: metadataCopy.title,
    description: metadataCopy.description,
    locale: "en_AU",
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/images/og-au-flag.png",
        width: 1200,
        height: 630,
        alt: "Australian flag — Australians IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataCopy.title,
    description: metadataCopy.description,
    images: ["/images/og-au-flag.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#012169",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <FlagDefs />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
