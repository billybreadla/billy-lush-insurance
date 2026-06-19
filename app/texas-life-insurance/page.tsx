import type { Metadata } from "next";
import { AcornMark, SiteHeader, SiteFooter } from "../components/Chrome";
import { SITE_URL, FACTS, CARRIERS, PRODUCTS, FAQS } from "../lib/site";

const url = `${SITE_URL}/texas-life-insurance`;

export const metadata: Metadata = {
  title: "Texas Life Insurance | Billy Lush, Licensed Agent in TX",
  description:
    "Licensed Texas life insurance agent Billy Lush: term, whole life, final expense & IUL for families in Houston, Austin, Dallas, San Antonio and across Texas. Plain talk, real numbers, a free 15-minute call. TX Lic. #3268220.",
  alternates: { canonical: "/texas-life-insurance" },
  openGraph: {
    title: "Texas Life Insurance | Billy Lush, Licensed Agent in TX",
    description:
      "Term, whole life, final expense & IUL for Texas families, from a licensed agent who keeps it plain and honest. TX Lic. #3268220.",
    url,
    siteName: "Billy Lush Insurance",
    type: "website",
  },
};

function TexasJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: "Billy Lush Insurance, Texas",
      url,
      telephone: "+1-323-580-9137",
      email: FACTS.email,
      areaServed: { "@type": "State", name: "Texas" },
      knowsAbout: [
        "Term life insurance",
        "Whole life insurance",
        "Final expense insurance",
        "Indexed universal life insurance",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Texas Life Insurance", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
      })),
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function TexasPage() {
  return (
    <>
      <TexasJsonLd />
      <SiteHeader tagline="Life insurance · Texas" />

      <main id="top">
        <section className="loc-hero">
          <div className="wrap">
            <p className="label">Licensed across the state of Texas</p>
            <h1>
              Texas <em>life insurance</em>, done plain and honest
            </h1>
            <p className="loc-intro">
              I&rsquo;m Billy Lush, a licensed life insurance agent in both California and Texas.
              Plenty of my California families have a parent in Houston, a brother in Austin, or
              roots back in Dallas, and the same straight-talk conversation works just as well there.
              Term, whole life, final expense, and indexed universal life, with no pressure and
              nothing owed for the conversation.
            </p>
            <p className="loc-intro">
              Whether you&rsquo;re in <strong>Houston, San Antonio, Dallas, Austin, Fort Worth</strong>,
              or a small town in between, we can do the whole thing by phone or video, and you&rsquo;ll
              leave with a real number instead of an internet guess.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={FACTS.phoneHref}>
                Call {FACTS.phone}
              </a>
              <a className="btn btn-ghost" href="/#book">
                Book a 15-min time
              </a>
            </div>
            <p className="loc-lic">
              {FACTS.txLicense} (Texas Dept. of Insurance) · {FACTS.caLicense}
            </p>
          </div>
        </section>

        <div className="acorn-rule">
          <span>Term · Whole Life · Final Expense · IUL · plain talk, no pressure</span>
        </div>

        <section className="products">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 01</span>
              <h2>What I can set up for Texas families</h2>
            </div>
            <div className="prod-grid">
              {PRODUCTS.map((p) => (
                <article className="prod" key={p.title}>
                  <span className="nick">{p.nick}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className="fit">
                    <b>Fits</b> {p.fit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="acorn-rule">
          <span>Appointed with {CARRIERS.slice(0, 4).join(" · ")} &amp; more</span>
        </div>

        <section className="faq">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 02</span>
              <h2>Straight answers to the awkward questions</h2>
            </div>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="a">
                    {f.a.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <AcornMark size={44} />
            <h2 style={{ marginTop: 18 }}>The 15-minute conversation</h2>
            <p className="cta-sub">
              You talk, I listen, and you leave with real numbers: what protection would actually
              cost for your family, in plain English. No homework, no pressure. If you don&rsquo;t
              need anything, I&rsquo;ll tell you that too.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href={FACTS.phoneHref}>
                Call {FACTS.phone}
              </a>
              <a className="btn btn-ghost" href={FACTS.smsHref}>
                Text me
              </a>
              <a className="btn btn-ghost" href={`mailto:${FACTS.email}`}>
                {FACTS.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
