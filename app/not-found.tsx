import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "./components/Chrome";
import { FACTS } from "./lib/site";

export const metadata: Metadata = {
  title: "Page not found | Billy Lush Insurance",
  description:
    "That page moved or never existed. Head home, see what I can set up, or read plain-English answers about life insurance and probate.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main id="top" tabIndex={-1}>
        <section className="loc-hero">
          <div className="wrap-narrow">
            <p className="label">404</p>
            <h1>This page is out of the oven.</h1>
            <p className="loc-intro">
              I looked twice. Either this page moved or it never existed, and honestly I
              can&rsquo;t tell you which. Here&rsquo;s where things actually live:
            </p>
          </div>
        </section>

        <section>
          <div className="wrap-narrow">
            <div className="related">
              <p className="label">Start here</p>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#what">What I can set up</Link>
                </li>
                <li>
                  <Link href="/learn">Plain-English answers</Link>
                </li>
              </ul>
            </div>
            <p className="loc-intro">
              If you were hunting for something specific, call or text me at{" "}
              <a href={FACTS.phoneHref}>{FACTS.phone}</a>. Questions like this are free to ask.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
