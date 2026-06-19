import { FACTS, CARRIERS } from "../lib/site";

export function AcornMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* cap */}
      <path
        d="M10 21c0-8 6.5-13 14-13s14 5 14 13c0 1.5-1 2.5-2.5 2.5h-23C11 23.5 10 22.5 10 21Z"
        fill="#1f3b2c"
      />
      {/* stem */}
      <path d="M24 8c0-3 1.6-4.6 4-5" stroke="#1f3b2c" strokeWidth="2.4" strokeLinecap="round" />
      {/* nut */}
      <path d="M13 26.5h22c0 9-5 14.5-11 17.5-6-3-11-8.5-11-17.5Z" fill="#b9852f" />
      <path d="M24 27v15" stroke="#8a5a2b" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}

export function SiteHeader({ tagline = "Life insurance · Conejo Valley" }: { tagline?: string }) {
  return (
    <header className="topbar">
      <div className="topbar-in">
        <a className="wordmark" href="/">
          <AcornMark />
          <span className="wordmark-text">
            Billy Lush Insurance
            <small>{tagline}</small>
          </span>
        </a>
        <div className="topbar-cta">
          <span className="topbar-lic">Licensed in CA &amp; TX</span>
          <a className="topbar-phone" href={FACTS.phoneHref}>
            {FACTS.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h3>Billy Lush Insurance</h3>
            <p>
              Life insurance for Conejo Valley families: term, whole life, final expense, and
              indexed universal life. Licensed in California and Texas.
            </p>
          </div>
          <div>
            <h3>The Lush family of local businesses</h3>
            <p>
              <a href="https://billybread.com">Billy Bread</a>, hand-baked sourdough &amp; milk
              bread in Newbury Park
            </p>
            <p>
            <a href="https://anneclarelush.com">Anne Clare Lush</a>, probate &amp; real estate
          </p>
          </div>
        </div>
        <p className="fine">
          William &ldquo;Billy&rdquo; Lush is a licensed life insurance agent in California (
          {FACTS.caLicense}, licensed since 2022) and Texas ({FACTS.txLicense}). Appointed with{" "}
          {CARRIERS.join(", ")}, among others. Insurance products are offered through licensed
          insurance carriers; product availability, features, and terms vary by state and are
          subject to underwriting. This website is for general information only and is not financial,
          tax, or legal advice. &copy; {new Date().getFullYear()} Billy Lush Insurance, Newbury Park,
          CA.
        </p>
      </div>
    </footer>
  );
}
