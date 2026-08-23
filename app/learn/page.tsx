import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { SITE_URL, FACTS, SHARE_IMAGE } from "../lib/site";
import { ARTICLES } from "../lib/articles";
import { SCHEMA_IDS, serializeJsonLd } from "../lib/schema";

const url = `${SITE_URL}/learn`;

export const metadata: Metadata = {
  title: "Life Insurance, Answered Plainly | Billy Lush",
  description:
    "Straight, plain-English answers to the real questions about life insurance and probate, from Billy Lush, a licensed local agent in the Conejo Valley.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Life Insurance, Answered Plainly | Billy Lush",
    description:
      "Straight, plain-English answers to the real questions about life insurance and probate.",
    url,
    siteName: "Billy Lush Insurance",
    type: "website",
    images: [{ url: SHARE_IMAGE.url, width: SHARE_IMAGE.width, height: SHARE_IMAGE.height }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Insurance, Answered Plainly | Billy Lush",
    description:
      "Straight, plain-English answers to the real questions about life insurance and probate.",
    images: [SHARE_IMAGE.url],
  },
};

function LearnJsonLd() {
  const pageId = `${url}#webpage`;
  const listId = `${url}#articles`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": pageId,
      url,
      name: "Life Insurance, Answered Plainly",
      description:
        "Straight, plain-English answers to the real questions about life insurance and probate.",
      isPartOf: { "@id": SCHEMA_IDS.website },
      mainEntity: { "@id": listId },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": listId,
      numberOfItems: ARTICLES.length,
      itemListElement: ARTICLES.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.question,
        url: `${SITE_URL}/learn/${article.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: { "@id": SITE_URL } },
        { "@type": "ListItem", position: 2, name: "Learn", item: { "@id": url } },
      ],
    },
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
  );
}

export default function LearnIndex() {
  return (
    <>
      <LearnJsonLd />
      <SiteHeader tagline="Plain-English answers" />
      <main id="top" tabIndex={-1}>
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
