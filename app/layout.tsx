import type { Metadata } from "next";
import { Young_Serif, Newsreader, DM_Mono } from "next/font/google";
import "./globals.css";

const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-body" });
const mono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://billylushinsurance.com"),
  title: "Billy Lush Insurance | Life Insurance in Newbury Park & the Conejo Valley",
  description:
    "Term, whole life, final expense, and IUL from a licensed agent who actually lives here. I'm Billy Lush, you may know me from Billy Bread. Straight answers, real numbers, 15-minute conversations. Serving the Conejo Valley, all of California, and Texas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Billy Lush Insurance | Life Insurance in Newbury Park & the Conejo Valley",
    description:
      "Life insurance from the guy who bakes your bread. Term, whole life, final expense & IUL, plain talk from a local agent, licensed in CA & TX.",
    url: "https://billylushinsurance.com",
    siteName: "Billy Lush Insurance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billy Lush Insurance | Life Insurance in the Conejo Valley",
    description:
      "Life insurance from the guy who bakes your bread. Term, whole life, final expense & IUL, plain talk from a local agent, licensed in CA & TX.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
