"use client";

import { useState } from "react";
import Link from "next/link";

/* ================================================================
   Lead-capture form → Netlify Forms.
   The form definition Netlify detects at build time lives in
   public/__forms.html (static HTML, required because the Next
   runtime serves pages through functions). This component must
   keep its field names in sync with that file, and it POSTs
   urlencoded data to that static path so the edge intercepts it.
   Field list (keep identical in public/__forms.html):
   name, phone, email, interest, besttime, note,
   consent (checkbox, always "yes"), orchard (honeypot).
   ================================================================ */

const INTERESTS = [
  "Not sure yet, that's why I'm here",
  "Term life",
  "Whole life",
  "Final expense",
  "Indexed universal life (IUL)",
];

const TIMES = ["Anytime", "Morning", "Afternoon", "Evening"];

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="qf qf-done" id="quote" role="status" aria-live="polite">
        <p className="label">Got it</p>
        <h3>Your note&rsquo;s on my desk.</h3>
        <p>
          I&rsquo;ll reach out within one business day, usually sooner. If it can&rsquo;t wait,
          call or text me at <a href={phoneHref}>{phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="qf"
      id="quote"
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      data-reveal
    >
      <input type="hidden" name="form-name" value="quote-request" />
      {/* honeypot: humans never see it, bots fill it, Netlify drops those */}
      <p className="qf-nectar" hidden>
        <label>
          Leave this field empty: <input name="orchard" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <p className="sr-only" role="status" aria-live="polite">
        {status === "sending" ? "Sending your request." : ""}
      </p>

      <div className="qf-head">
        <p className="label">Rather type than talk?</p>
        <h3>Leave your info, I&rsquo;ll do the calling.</h3>
        <p className="qf-sub">
          A name and a number is plenty. No follow-up campaign, no list, just me getting back to
          you, usually the same day.
        </p>
      </div>

      <div className="qf-grid">
        <div className="qf-field">
          <label htmlFor="qf-name">Your name</label>
          <input id="qf-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="qf-field">
          <label htmlFor="qf-phone">Phone</label>
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="qf-field">
          <label htmlFor="qf-email">Email (optional)</label>
          <input id="qf-email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="qf-field">
          <label htmlFor="qf-interest">What&rsquo;s on your mind?</label>
          <select id="qf-interest" name="interest" defaultValue={INTERESTS[0]}>
            {INTERESTS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="qf-field">
          <label htmlFor="qf-time">Best time to reach you</label>
          <select id="qf-time" name="besttime" defaultValue={TIMES[0]}>
            {TIMES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="qf-field qf-field-wide">
          <label htmlFor="qf-note">Anything I should know? (optional)</label>
          <textarea
            id="qf-note"
            name="note"
            rows={3}
            placeholder="Kids, a mortgage, a parent you're looking after, a policy you already have…"
          />
        </div>
      </div>

      <label className="qf-consent" htmlFor="qf-consent">
        <input id="qf-consent" name="consent" type="checkbox" value="yes" required />
        <span>
          I agree that Billy Lush Insurance may contact me by phone, text, or email about my
          inquiry. Consent is not a condition of purchase.
        </span>
      </label>

      <div className="qf-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send it to Billy"}
        </button>
        <div>
          <p className="qf-fine">
            Goes straight to my inbox, nowhere else. I&rsquo;m the only one who reads it.
          </p>
          <p className="qf-fine">
            Message and data rates may apply. See the{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {status === "error" && (
        <p className="qf-error" role="alert">
          Hm, that didn&rsquo;t go through. Try once more, or just text me at{" "}
          <a href={phoneHref}>{phone}</a>.
        </p>
      )}
    </form>
  );
}
