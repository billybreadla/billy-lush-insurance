import type { Metadata } from "next";
import { Young_Serif, Newsreader, DM_Mono } from "next/font/google";
import { SCHEMA_IDS, serializeJsonLd } from "./lib/schema";
import { SITE_URL } from "./lib/site";
import "./globals.css";

const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Newsreader({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billylushinsurance.com"),
  title: "Newbury Park Life Insurance Agent | Billy Lush Insurance",
  description:
    "Term, whole life, and IUL for Conejo Valley families, set up so money reaches your people fast and never sits in probate. Licensed in CA and TX. No pressure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Newbury Park Life Insurance Agent | Billy Lush Insurance",
    description:
      "Life insurance from the guy who bakes your bread, set up so money reaches your people fast and never sits in probate. Licensed in CA & TX. No pressure.",
    url: "https://billylushinsurance.com",
    siteName: "Billy Lush Insurance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newbury Park Life Insurance Agent | Billy Lush Insurance",
    description:
      "Life insurance from the guy who bakes your bread, set up so money reaches your people fast and never sits in probate. Licensed in CA & TX. No pressure.",
  },
};

function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: "Billy Lush Insurance",
    inLanguage: "en-US",
    publisher: {
      "@type": "InsuranceAgency",
      "@id": SCHEMA_IDS.agency,
      name: "Billy Lush Insurance",
      url: SITE_URL,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
