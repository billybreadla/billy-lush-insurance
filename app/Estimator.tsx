"use client";

import { useState } from "react";

/* ————————————————————————————————————————————————
   Ballpark term-life estimator.
   Rough monthly premium for a healthy non-smoker, 20-year level term.
   Numbers are intentionally a RANGE and clearly non-binding; the real
   number comes from the 15-minute conversation. Rates are illustrative
   industry ballparks per $100k of coverage by age band.
   ———————————————————————————————————————————————— */
function monthlyPer100k(age: number): number {
  // illustrative 20-yr level term, healthy non-smoker
  const bands: [number, number][] = [
    [29, 6],
    [34, 7],
    [39, 9],
    [44, 13],
    [49, 19],
    [54, 30],
    [59, 48],
    [64, 80],
    [120, 130],
  ];
  for (const [maxAge, rate] of bands) if (age <= maxAge) return rate;
  return 130;
}

const COVERAGES = [
  { label: "$100k", value: 100_000 },
  { label: "$250k", value: 250_000 },
  { label: "$500k", value: 500_000 },
  { label: "$1M", value: 1_000_000 },
];

function fmt(n: number) {
  return n >= 1000 ? "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k" : "$" + n;
}

export default function Estimator({ phoneHref }: { phoneHref: string }) {
  const [age, setAge] = useState(42);
  const [coverage, setCoverage] = useState(250_000);

  const base = monthlyPer100k(age) * (coverage / 100_000);
  const low = Math.max(8, Math.round((base * 0.85) / 1) );
  const high = Math.round(base * 1.25);

  return (
    <div className="est" data-reveal>
      <div className="est-head">
        <span className="label">The 30-second number</span>
        <p className="est-kicker">
          A real ballpark before you ever pick up the phone. Slide your age, pick a coverage
          amount.
        </p>
      </div>

      <div className="est-controls">
        <div className="est-field">
          <div className="est-field-top">
            <label htmlFor="est-age">Your age</label>
            <span className="est-val">{age}</span>
          </div>
          <input
            id="est-age"
            type="range"
            min={25}
            max={70}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="est-field">
          <div className="est-field-top">
            <label>Coverage</label>
          </div>
          <div className="est-cov">
            {COVERAGES.map((c) => (
              <button
                key={c.value}
                type="button"
                className={c.value === coverage ? "on" : ""}
                onClick={() => setCoverage(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="est-out">
        <div className="est-figure">
          <span className="est-range">
            {fmt(low)} to {fmt(high)}
          </span>
          <span className="est-per">/ month, roughly</span>
        </div>
        <p className="est-note">
          Illustrative range for a healthy non-smoker on a 20-year term policy. Your real number
          depends on your health and the term you choose, that&rsquo;s the 15 minutes.
        </p>
        <a className="btn btn-primary est-cta" href={phoneHref}>
          Get my actual number
        </a>
      </div>
    </div>
  );
}
