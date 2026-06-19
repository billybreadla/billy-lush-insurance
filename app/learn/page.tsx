import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { SITE_URL, FACTS } from "../lib/site";
import { ARTICLES } from "../lib/articles";

export const metadata: Metadata = {
  title: "Life Insurance, Answered Plainly | Billy Lush",
  description:
    "Straight, plain-English answers to the real questions about life insurance and probate, from Billy Lush, a licensed local agent in the Conejo Valley.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Life Insurance, Answered Plainly | Billy Lush",
    description:
      "Straight, plain-English answers to the real questions about life insurance and probate.",
    url: `${SITE_URL}/learn`,
    siteName: "Billy Lush Insurance",
    type: "website",
  },
};

export default function LearnIndex() {
  return (
    <>
      <SiteHeader tagline="Plain-English answers" />
      <main id="top">
        <section className="loc-hero">
          <div className="wrap-narrow">
            <p className="label">Learn</p>
            <h1>
              Life insurance, <em>answered plainly</em>
            </h1>
            <p className="loc-intro">
              No jargon, no scare tactics, just straight answers to the questions families actually
              ask me. If yours isn&rsquo;t here, call and ask; it&rsquo;s free.
            </p>
          </div>
        </section>

        <section className="learn-list">
          <div className="wrap-narrow">
            <ul>
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <a href={`/learn/${a.slug}`}>
                    <h2>{a.question}</h2>
                    <p>{a.dek}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <h2>Still have a question?</h2>
            <p className="cta-sub">
              Fifteen minutes, plain English, real numbers. If you don&rsquo;t need anything,
              I&rsquo;ll tell you that too.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href={FACTS.phoneHref}>
                Call {FACTS.phone}
              </a>
              <a className="btn btn-ghost" href="/#book">
                Book a 15-min time
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
