import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcornMark, SiteHeader, SiteFooter } from "../../components/Chrome";
import {
  FACTS,
  SITE_URL,
  CARRIERS,
  TOWNS,
  TOWN_BY_SLUG,
  PRODUCTS,
  FAQS,
  SHARE_IMAGE,
} from "../../lib/site";
import { insuranceAgency, SCHEMA_IDS, serializeJsonLd } from "../../lib/schema";

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const t = TOWN_BY_SLUG[town];
  if (!t) return {};
  const title = `Life Insurance in ${t.name}, CA | Billy Lush`;
  const description = t.meta;
  const url = `${SITE_URL}/life-insurance/${t.slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/life-insurance/${t.slug}` },
    openGraph: {
      title,
      description,
      url,
      siteName: "Billy Lush Insurance",
      type: "website",
      images: [{ url: SHARE_IMAGE.url, width: SHARE_IMAGE.width, height: SHARE_IMAGE.height }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

function TownJsonLd({ name, slug }: { name: string; slug: string }) {
  const url = `${SITE_URL}/life-insurance/${slug}`;
  const pageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const areaServed = { "@type": "City", name: `${name}, CA` };
  /* The agency node is the same canonical object as on the homepage
     (same @id), scoped here with this town. No FAQPage here: the FAQ
     content lives (with its schema) on the homepage only. */
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: `Life Insurance in ${name}, CA`,
      isPartOf: { "@id": SCHEMA_IDS.website },
      about: { "@id": SCHEMA_IDS.agency },
      mainEntity: { "@id": serviceId },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      ...insuranceAgency(areaServed),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: `Life insurance in ${name}`,
      serviceType: PRODUCTS.map((product) => product.title),
      provider: { "@id": SCHEMA_IDS.agency },
      areaServed,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: { "@id": SITE_URL } },
        { "@type": "ListItem", position: 2, name: `Life Insurance in ${name}`, item: { "@id": url } },
      ],
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
  );
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params;
  const t = TOWN_BY_SLUG[town];
  if (!t) notFound();

  const nearby = TOWNS.filter((x) => x.slug !== t.slug).slice(0, 5);

  return (
    <>
      <TownJsonLd name={t.name} slug={t.slug} />
      <SiteHeader tagline={`Life insurance · ${t.name}`} />

      <main id="top" tabIndex={-1}>
        <section className="loc-hero">
          <div className="wrap">
            <p className="label">{t.county} · California</p>
            <h1>
              Life insurance in <em>{t.name}</em>
            </h1>
            <p className="loc-intro">{t.blurb}</p>
            <p className="loc-intro">
              I&rsquo;m Billy Lush, a licensed life insurance agent who actually lives in the
              Conejo Valley (you may know me as the Billy behind{" "}
              <a href="https://billybread.com">Billy Bread</a>). I help {t.name} families set up
              term, whole life, final expense, and indexed universal life, in plain English, with
              no pressure and nothing owed for the conversation.
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
              {FACTS.caLicense} ·{" "}
              <a href={FACTS.caLicenseVerifyUrl} target="_blank" rel="noopener noreferrer">
                verify on the CA Dept. of Insurance
              </a>
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
              <h2>What I can set up for {t.name} families</h2>
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

        <section className="local">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 03</span>
              <h2>Also serving the rest of the valley</h2>
            </div>
            <div className="towns">
              {nearby.map((x) => (
                <a key={x.slug} href={`/life-insurance/${x.slug}`} className="town">
                  {x.name}
                </a>
              ))}
              <span className="town">All of California</span>
              <a className="town" href="/texas-life-insurance">
                Texas statewide
              </a>
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
