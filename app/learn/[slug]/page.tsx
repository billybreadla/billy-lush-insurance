import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcornMark, SiteHeader, SiteFooter } from "../../components/Chrome";
import { SITE_URL, FACTS, IMDB_URL, WIKIPEDIA_URL, BAKERY } from "../../lib/site";
import { ARTICLES, ARTICLE_BY_SLUG } from "../../lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return {};
  const title = `${a.question} | Billy Lush Insurance`;
  const url = `${SITE_URL}/learn/${a.slug}`;
  return {
    title,
    description: a.dek,
    alternates: { canonical: `/learn/${a.slug}` },
    openGraph: {
      title,
      description: a.dek,
      url,
      siteName: "Billy Lush Insurance",
      type: "article",
    },
  };
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const a = ARTICLE_BY_SLUG[slug];
  const url = `${SITE_URL}/learn/${a.slug}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.question,
      description: a.dek,
      datePublished: a.updated,
      dateModified: a.updated,
      mainEntityOfPage: url,
      author: {
        "@type": "Person",
        name: "Billy Lush",
        jobTitle: "Licensed Life Insurance Agent",
        sameAs: [BAKERY.site, IMDB_URL, WIKIPEDIA_URL],
      },
      publisher: { "@type": "Organization", name: "Billy Lush Insurance", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: a.question, acceptedAnswer: { "@type": "Answer", text: a.answer } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
        { "@type": "ListItem", position: 3, name: a.question, item: url },
      ],
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) notFound();

  const updatedLabel = new Date(a.updated + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ArticleJsonLd slug={a.slug} />
      <SiteHeader tagline="Plain-English answers" />

      <main id="top">
        <article className="article">
          <div className="wrap-narrow">
            <p className="label">
              <a href="/learn">Learn</a> · Updated {updatedLabel}
            </p>
            <h1>{a.question}</h1>

            <div className="answer-box">
              <span className="answer-tag">Short answer</span>
              <p>{a.answer}</p>
            </div>

            <div className="article-body">
              {a.sections.map((s) => (
                <section key={s.h}>
                  <h2>{s.h}</h2>
                  {s.p.map((para) => (
                    <p key={para.slice(0, 28)}>{para}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="author-box">
              <AcornMark size={30} />
              <p>
                <strong>Billy Lush</strong> is a licensed life insurance agent ({FACTS.caLicense},
                also licensed in Texas) serving the Conejo Valley, and the baker behind{" "}
                <a href={BAKERY.site}>Billy Bread</a>. Questions like this are free to ask.
              </p>
            </div>

            <div className="article-cta">
              <h2>Want this answered for your family?</h2>
              <p>
                Fifteen minutes, plain English, real numbers, and if you don&rsquo;t need anything,
                I&rsquo;ll say so.
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

            <div className="related">
              <p className="label">Keep reading</p>
              <ul>
                {a.related.map((r) => (
                  <li key={r.href}>
                    <a href={r.href}>{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
