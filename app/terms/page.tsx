import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { SITE_URL, FACTS } from "../lib/site";

const title = "Terms | Billy Lush Insurance";
const description =
  "The ground rules for this website: information, not advice. Estimates, not promises. And an easy email if anything needs sorting out.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/terms`,
    siteName: "Billy Lush Insurance",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader tagline="The fine print" />

      <main id="top" tabIndex={-1}>
        <article className="article">
          <div className="wrap-narrow">
            <p className="label">Terms of Use · Updated August 22, 2026</p>
            <h1>Terms</h1>

            <div className="article-body">
              <section>
                <h2>Not advice</h2>
                <p>
                  This website is general information, not financial, tax, or legal advice. Talk to
                  the right professional for your situation.
                </p>
              </section>

              <section>
                <h2>Quotes and illustrations</h2>
                <p>
                  Numbers shown are illustrative estimates. Real premiums depend on age, health,
                  underwriting, and the carrier. Carriers make the final decision.
                </p>
              </section>

              <section>
                <h2>Products and availability</h2>
                <p>
                  Products vary by carrier and state. I am licensed in California and Texas only.
                  The appointment list is in the footer.
                </p>
              </section>

              <section>
                <h2>No warranties</h2>
                <p>
                  The site is provided as-is. I work to keep it accurate and current but cannot
                  promise every detail is complete or up to date.
                </p>
              </section>

              <section>
                <h2>Links to other sites</h2>
                <p>
                  Links to places like Billy Bread, IMDb, or the California Department of Insurance
                  are provided for convenience. Their content is their own.
                </p>
              </section>

              <section>
                <h2>Carrier names</h2>
                <p>
                  Carrier names belong to their owners. Naming appointed carriers describes my
                  shelf, and is not an endorsement of this site by them.
                </p>
              </section>

              <section>
                <h2>Questions or disputes</h2>
                <p>
                  Email me first and we will almost certainly sort it out. Otherwise these terms are
                  governed by California law. Last updated August 22, 2026.
                </p>
                <p>
                  <a href={`mailto:${FACTS.email}`}>{FACTS.email}</a>
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
