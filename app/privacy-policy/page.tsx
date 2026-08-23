import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { SITE_URL, FACTS } from "../lib/site";

const title = "Privacy Policy | Billy Lush Insurance";
const description =
  "What I collect (only what you send me), how it gets used (to help you), and why it is never sold. Plain English, from a one person agency.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/privacy-policy`,
    siteName: "Billy Lush Insurance",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader tagline="The fine print" />

      <main id="top" tabIndex={-1}>
        <article className="article">
          <div className="wrap-narrow">
            <p className="label">Privacy Policy · Updated August 22, 2026</p>
            <h1>Privacy Policy</h1>

            <p>
              I am a one person agency, so this page is written the way I talk. Short version: I
              collect only what you send me, I use it only to help you, and I never sell it.
            </p>

            <div className="article-body">
              <section>
                <h2>Who I am</h2>
                <p>
                  William &ldquo;Billy&rdquo; Lush, doing business as Billy Lush Insurance, in Newbury
                  Park, California. I am a licensed life insurance agent in California (
                  {FACTS.caLicense}) and Texas ({FACTS.txLicense}).
                </p>
                <p>
                  Reach me at <a href={`mailto:${FACTS.email}`}>{FACTS.email}</a> or{" "}
                  <a href={FACTS.phoneHref}>{FACTS.phone}</a>.
                </p>
              </section>

              <section>
                <h2>What I collect</h2>
                <p>
                  Only what you choose to send through the contact form, email, text, or a call:
                  your name, phone number, optional email address, what you are shopping for, the
                  best time to reach you, and anything you tell me.
                </p>
                <p>This site does not run advertising trackers.</p>
              </section>

              <section>
                <h2>How it gets used</h2>
                <p>
                  To reply to you, prepare quotes, and service any policy you choose to apply for.
                  Information is shared only with insurance carriers and my general agency, and only
                  as needed to quote, apply, or service your coverage. I do not sell or rent your
                  information, ever.
                </p>
              </section>

              <section>
                <h2>Calls and texts</h2>
                <p>
                  If you share your number, I may call or text about your inquiry, evenings and
                  weekends included. Reply STOP to any text and I will stop. Giving consent is never
                  a condition of purchase.
                </p>
              </section>

              <section>
                <h2>No mailing lists</h2>
                <p>
                  Submitting the form does not sign you up for anything. There is no newsletter and
                  no follow-up campaign beyond your actual question.
                </p>
              </section>

              <section>
                <h2>Family businesses</h2>
                <p>
                  Billy Bread and Anne Clare Lush real estate are separate businesses with separate
                  websites. Information you submit here stays here and is not shared with them.
                </p>
              </section>

              <section>
                <h2>Records and retention</h2>
                <p>
                  As a licensed agent I keep business records for several years, as state law
                  requires. Inquiry information is kept no longer than needed.
                </p>
              </section>

              <section>
                <h2>Your choices</h2>
                <p>
                  Want to see what I have, correct it, or delete it? Email me and I will take care
                  of it. Same answer for California and Texas residents.
                </p>
              </section>

              <section>
                <h2>Changes</h2>
                <p>
                  If I change this policy, the change goes here with a new date. Last updated August
                  22, 2026.
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
