import Estimator from "./Estimator";
import Reveal from "./Reveal";
import { AcornMark, SiteHeader, SiteFooter } from "./components/Chrome";
import {
  SITE_URL,
  FACTS,
  BOOKING_URL,
  SHOWS,
  IMDB_URL,
  WIKIPEDIA_URL,
  BAKERY,
  CARRIERS,
  TOWNS,
  PRODUCTS,
  FAQS,
} from "./lib/site";

/* Testimonials start EMPTY on purpose: drop in real, attributable
   quotes only (no invented reviews on a trust business). */
const TESTIMONIALS: { quote: string; who: string }[] = [
  // { quote: "…", who: "First name, Town" },
];

function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: "Billy Lush Insurance",
      url: SITE_URL,
      image: `${SITE_URL}/images/billy-conejo-hills.jpg`,
      telephone: "+1-323-580-9137",
      email: FACTS.email,
      sameAs: [BAKERY.site, IMDB_URL, WIKIPEDIA_URL],
      founder: {
        "@type": "Person",
        name: "Billy Lush",
        jobTitle: "Licensed Life Insurance Agent",
        sameAs: [BAKERY.site, IMDB_URL, WIKIPEDIA_URL],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "California Life Insurance Agent License",
            identifier: FACTS.caLicenseNo,
            recognizedBy: { "@type": "Organization", name: "California Department of Insurance" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "Texas Life Insurance Agent License",
            identifier: FACTS.txLicenseNo,
            recognizedBy: { "@type": "Organization", name: "Texas Department of Insurance" },
          },
        ],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Newbury Park",
        addressRegion: "CA",
        postalCode: "91320",
        addressCountry: "US",
      },
      areaServed: [
        ...TOWNS.map((t) => ({ "@type": "City", name: `${t.name}, CA` })),
        { "@type": "State", name: "California" },
        { "@type": "State", name: "Texas" },
      ],
      knowsAbout: [
        "Term life insurance",
        "Whole life insurance",
        "Final expense insurance",
        "Indexed universal life insurance",
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

export default function Home() {
  return (
    <>
      <JsonLd />
      <Reveal />

      <SiteHeader />

      <main id="top">
        <section className="hero" style={{ padding: 0 }}>
          <div className="hero-grid">
            <div>
              <p className="label hero-eyebrow">Newbury Park, California · right down the street</p>
              <h1>
                A <em>lush</em> life for the people you love.
              </h1>
              <p className="hero-sub">
                I&rsquo;m Billy Lush: neighbor, baker, and licensed life insurance agent. My wife
                helps families settle estates after a loss; I make sure the money is there when it
                happens. Between us, we&rsquo;ve seen what <strong>prepared</strong> looks like,
                and what unprepared costs.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#book">
                  Book a 15-min time
                </a>
                <a className="btn btn-ghost" href="#what">
                  What I can set up
                </a>
              </div>
            </div>
            <figure className="hero-photo">
              <img
                src="/images/billy-conejo-hills.jpg"
                alt="Billy Lush, licensed life insurance agent, in the hills of the Conejo Valley near Newbury Park"
              />
              <figcaption>Billy: agent, baker, actor, neighbor</figcaption>
            </figure>
          </div>
        </section>

        <div className="acorn-rule">
          <span>Term · Whole Life · Final Expense · IUL · plain talk, no pressure</span>
        </div>

        <section className="estimate" id="estimate">
          <div className="wrap">
            <Estimator phoneHref={FACTS.phoneHref} />
          </div>
        </section>

        <section className="story" id="why">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 01</span>
              <h2>The other family business</h2>
            </div>
            <div className="story-grid">
              <p className="story-pull">
                Every other agent will quote you a policy. I&rsquo;ve sat with what happens when
                there isn&rsquo;t one.
              </p>
              <div className="story-body">
                <p>
                  My wife, Anne Clare, works in probate real estate. She helps families sell a home
                  after someone dies. The calls she gets are from people discovering, mid-grief,
                  what unprepared costs: frozen accounts, court timelines, a funeral on a credit
                  card, siblings fronting a mortgage out of pocket.
                </p>
                <p>
                  I&rsquo;ve been a licensed life insurance agent since 2022, and nearly all of my
                  work comes the old-fashioned way: family, friends, and neighbors who pass my
                  name along. I&rsquo;d rather be the person a town trusts
                  than a stranger with a quote engine, which is also why you may already know me as
                  the Billy behind <a href="https://billybread.com">Billy Bread</a>. (Or from
                  television: I&rsquo;ve spent twenty years as a working actor, in shows like
                  HBO&rsquo;s <em>Generation Kill</em> and Apple&rsquo;s <em>For All Mankind</em>.
                  Around here, though, I&rsquo;m mostly known for the sourdough.)
                </p>
                <p>
                  So this is the other family business: making sure that when the worst day comes,
                  and it comes for every family, yours gets grief <em>without</em> a financial
                  emergency stapled to it.
                </p>
                <p className="sign">Billy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof" id="proof">
          <div className="wrap">
            <div className="proof-grid" data-reveal>
              <div className="proof-item">
                <span className="label">Licensed &amp; verifiable</span>
                <p>
                  {FACTS.caLicense}, in good standing since 2022. Don&rsquo;t take my word for it,{" "}
                  <a href={FACTS.caLicenseVerifyUrl} target="_blank" rel="noopener noreferrer">
                    look me up on the CA Department of Insurance
                  </a>
                  . Also licensed in Texas ({FACTS.txLicense}).
                </p>
              </div>
              <div className="proof-item">
                <span className="label">You may know the face</span>
                <p>
                  Twenty years as a working actor:{" "}
                  {SHOWS.map((s, i) => (
                    <span key={s.name}>
                      <em>{s.name}</em> ({s.network}){i < SHOWS.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  .{" "}
                  <a href={IMDB_URL} target="_blank" rel="noopener noreferrer">
                    The full list&rsquo;s on IMDb
                  </a>
                  .
                </p>
              </div>
              <div className="proof-item">
                <span className="label">Known around town</span>
                <p>
                  Most weeks you&rsquo;ll find me at{" "}
                  <a href={BAKERY.site}>Billy Bread</a>, the sourdough bakery I run here in Newbury
                  Park, and I&rsquo;ve been featured in{" "}
                  <a
                    href="https://www.bestversionmedia.com/ca/dosvientosliving/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dos Vientos Living
                  </a>
                  , our neighborhood magazine. Hard to disappear when you&rsquo;re the guy holding
                  the loaves.
                </p>
              </div>
            </div>

            {TESTIMONIALS.length > 0 && (
              <div className="quotes" data-reveal>
                {TESTIMONIALS.map((t) => (
                  <figure key={t.who} className="quote">
                    <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption>{t.who}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="products" id="what">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 02</span>
              <h2>What I can set up for you</h2>
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

        <section className="faq" id="answers">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 03</span>
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
            <p className="faq-more">
              More plain-English answers: <a href="/learn">does life insurance go through probate?</a>,{" "}
              <a href="/learn/how-much-does-life-insurance-cost">what it really costs</a>, and{" "}
              <a href="/learn/term-life-vs-whole-life-insurance">term vs. whole life</a>.
            </p>
          </div>
        </section>

        <section className="local" id="local">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">No. 04</span>
              <h2>I work where I live</h2>
            </div>
            <div className="local-grid">
              <div>
                <p>
                  The Conejo Valley is named for its oaks, trees that start as something you can
                  hold in one hand and end up sheltering everything under them. That&rsquo;s the
                  business I&rsquo;m in. I meet people at kitchen tables, at the bakery, over the
                  phone, whatever&rsquo;s easiest.
                </p>
                <p className="tx-note">
                  Also licensed in <strong>Texas</strong>, so if your mom&rsquo;s in Houston or
                  your brother&rsquo;s in Austin, the same conversation works there too.
                </p>
              </div>
              <div>
                <p className="label">Serving</p>
                <div className="towns">
                  {TOWNS.map((t) => (
                    <a
                      key={t.slug}
                      href={`/life-insurance/${t.slug}`}
                      className={t.hq ? "town hq" : "town"}
                    >
                      {t.name}
                      {t.hq ? " (home base)" : ""}
                    </a>
                  ))}
                  <span className="town">…and all of California &amp; Texas</span>
                </div>
              </div>
            </div>

            <div className="friday" data-reveal>
              <div className="friday-text">
                <span className="label">No pressure, no phone call</span>
                <h3>Come find me Friday.</h3>
                <p>
                  Not ready to talk insurance with a stranger? Fair. Most Fridays I&rsquo;m at the
                  bakery with flour on my hands. Come buy a loaf, look me in the eye, and decide for
                  yourself whether I&rsquo;m someone you&rsquo;d trust with this. The bread&rsquo;s
                  good either way.
                </p>
                <div className="friday-actions">
                  <a className="btn btn-ghost" href={BAKERY.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Find the bakery
                  </a>
                  <a className="btn btn-ghost" href={BAKERY.site}>
                    See bake days &amp; menu
                  </a>
                </div>
              </div>
              <figure className="friday-photo">
                <img src="/images/billy-holding-loaves.jpg" alt="Billy Lush holding fresh-baked sourdough loaves at Billy Bread in Newbury Park" />
              </figure>
            </div>
          </div>
        </section>

        <section className="cta" id="talk">
          <div className="wrap">
            <AcornMark size={44} />
            <h2 style={{ marginTop: 18 }}>The 15-minute conversation</h2>
            <p className="cta-sub">
              You talk, I listen, and you leave with real numbers: what protection would actually
              cost for your family, in plain English. No homework, no pressure, no follow-up
              campaign. If you don&rsquo;t need anything, I&rsquo;ll tell you that too.
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

            {BOOKING_URL && (
              <div className="booking" id="book" data-reveal>
                <p className="booking-or">or grab a time that works for you</p>
                <div className="booking-frame">
                  <iframe
                    src={BOOKING_URL}
                    title="Book a 15-minute conversation with Billy Lush"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            <p className="cta-fine">Evenings &amp; weekends welcome. I&rsquo;m a baker, I&rsquo;m up anyway.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
