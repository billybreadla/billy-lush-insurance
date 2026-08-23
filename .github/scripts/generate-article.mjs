#!/usr/bin/env node
/*
 * Learn-article draft generator for Billy Lush Insurance.
 *
 * Picks the next uncovered question from the backlog below, asks Claude to
 * write it in Billy's first-person voice (no em-dashes), validates it, and
 * saves it as a JSON draft in content-drafts/YYYY-MM-DD-slug.json. It never
 * touches app/, so nothing publishes until a human promotes the article into
 * app/lib/articles.ts (see CLAUDE.md).
 *
 * Run by .github/workflows/weekly-learn-article.yml. Needs env
 * ANTHROPIC_API_KEY. Set DRY_RUN=1 to skip the API and save a stub (local
 * testing only).
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

const ARTICLES_PATH = "app/lib/articles.ts";
const DRAFTS_DIR = "content-drafts";
const MODEL = "claude-sonnet-4-6";

// Backlog of questions, in priority order. Every topic must intersect life
// insurance with death, probate, inheritance, or executorship. Each entry has
// a fixed slug so dedupe against published articles and saved drafts is exact.
const BACKLOG = [
  {
    slug: "what-executors-should-know-about-life-insurance",
    question: "What executors should know about the deceased's life insurance",
    angle: "Executor first steps, how to find policies, claims vs probate estate",
  },
  {
    slug: "spouse-died-first-steps",
    question: "My spouse died: what to do first about the house, accounts, and insurance",
    angle: "Surviving spouse triage, what avoids probate and what does not",
  },
  {
    slug: "life-insurance-and-a-house-in-probate",
    question: "Life insurance and a house in probate: how the pieces fit",
    angle: "Why the payout is fast while the house is stuck, using one to carry the other",
  },
  {
    slug: "beneficiary-died-before-me",
    question: "What happens if your beneficiary dies before you do",
    angle: "Contingent beneficiaries, lapse to estate, probate consequences",
  },
  {
    slug: "beneficiary-mistakes-probate",
    question: "Beneficiary mistakes that accidentally send money through probate",
    angle: "Naming the estate, minor children, outdated ex-spouse designations",
  },
  {
    slug: "blended-family-beneficiaries",
    question: "Life insurance for blended families: preventing the fight before it starts",
    angle: "Stepkids, second marriages, clear designations vs wills",
  },
  {
    slug: "inherited-house-do-i-need-insurance",
    question: "You inherited a house in probate: do you need your own life insurance now?",
    angle: "New dependents math for heirs, own-family protection",
  },
  {
    slug: "term-conversion-after-diagnosis",
    question: "Term conversion after a health diagnosis: the door that stays open",
    angle: "Conversion riders, why it matters for estate protection",
  },
  {
    slug: "annuity-or-life-insurance-for-inheritance",
    question: "Annuity or life insurance for leaving money to your kids?",
    angle: "Honest comparison, tax treatment, control tradeoffs",
  },
  {
    slug: "what-executors-wish-families-knew",
    question: "What executors wish families knew before the worst day",
    angle: "Paperwork that helps, payable-on-death gaps, conversations to have",
  },
  {
    slug: "claim-timeline-vs-probate-timeline",
    question: "Life insurance claim vs. California probate: two timelines side by side",
    angle: "Weeks vs a year or more, what each process pays for when",
  },
  {
    slug: "retirement-accounts-and-life-insurance-probate",
    question: "Do retirement accounts and life insurance avoid probate?",
    angle: "Beneficiary designations rule both, common failures",
  },
  {
    slug: "trust-as-beneficiary",
    question: "Naming a trust as life insurance beneficiary: when it helps and when it hurts",
    angle: "Minor children, special needs, spendthrift concerns, coordinate with attorney",
  },
  {
    slug: "small-business-owner-life-insurance",
    question: "Life insurance when you own the business: the basics that matter",
    angle: "Key person, buy-sell, personal guarantee exposure",
  },
  {
    slug: "payable-on-death-isnt-enough",
    question: "Why payable-on-death designations are not the whole answer",
    angle: "POD fails when the primary dies first, when kids are minors, when there is no backup plan",
  },
  {
    slug: "widow-house-mortgage",
    question: "Widowed in California: the house, the mortgage, and replacing income",
    angle: "Step-up basis mention, refinance reality, term insurance purpose",
  },
  {
    slug: "final-expense-vs-prepaid-funeral",
    question: "Final expense insurance vs. prepaying a funeral: the honest comparison",
    angle: "Portability, refundability, who each fits",
  },
  {
    slug: "iul-for-estate-planning",
    question: "IUL for estate planning: who it actually fits",
    angle: "Anti-hype, caps and floors, when term plus investing wins",
  },
  {
    slug: "out-of-state-heirs-california",
    question: "Your family lives in Texas but the house is in California: whose rules apply?",
    angle: "Multi-state estates, why he is licensed in both states",
  },
  {
    slug: "life-insurance-after-divorce",
    question: "Life insurance after divorce: the designations people forget to change",
    angle: "California rules on ex-spouse beneficiaries, revoking old choices",
  },
];

// A slug counts as covered if it is already live in articles.ts or already
// sitting in content-drafts/ waiting for review.
const src = existsSync(ARTICLES_PATH) ? readFileSync(ARTICLES_PATH, "utf8") : "";
const existing = [...src.matchAll(/slug:\s*"([^"]+)",[\s\S]*?question:\s*"([^"]+)"/g)].map((m) => ({ slug: m[1], question: m[2] }));
const covered = new Set(existing.map((e) => e.slug));
if (existsSync(DRAFTS_DIR)) {
  for (const f of readdirSync(DRAFTS_DIR)) {
    const m = f.match(/^\d{4}-\d{2}-\d{2}-(.+)\.json$/);
    if (m) covered.add(m[1]);
  }
}

const pick = BACKLOG.find((b) => !covered.has(b.slug));
if (!pick) {
  console.log("All backlog questions already drafted or covered. Nothing to do.");
  process.exit(0);
}
console.log("Writing draft:", pick.slug);

const today = new Date().toISOString().slice(0, 10);

// Strip em-dashes / en-dashes anywhere in the generated text (hard brand rule).
const DASH_RE = new RegExp("\\s*[\u2014\u2013]\\s*", "g");
const clean = (s) => String(s).replace(DASH_RE, ", ").replace(/[\u2014\u2013]/g, "-");
const deepClean = (v) =>
  typeof v === "string" ? clean(v)
  : Array.isArray(v) ? v.map(deepClean)
  : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepClean(x)]))
  : v;

let body;
if (process.env.DRY_RUN) {
  body = {
    dek: "DRY RUN stub. Replace me.",
    answer: "This is a dry-run stub answer used to test draft creation locally. It is not a real article.",
    sections: [{ h: "Stub section", p: ["First stub paragraph.", "Second stub paragraph."] }],
    related: [{ href: "/", label: "About Billy Lush: local life insurance" }],
  };
} else {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("Missing ANTHROPIC_API_KEY environment variable.");
    process.exit(1);
  }
  const system = `You are writing one educational article for the "Learn" section of Billy Lush Insurance, a licensed life-insurance agent's website. Write in the first-person voice of Billy Lush.

About Billy: a licensed life-insurance agent (California Lic. #4247326, Texas Lic. #3268220) who also runs a sourdough bakery called Billy Bread. His wife works in probate real estate, so he has seen what happens to families when money gets stuck in probate. He lives in Newbury Park and serves the Conejo Valley, all of California, and Texas.

Voice: plain-talk, warm, honest, never salesy. He tells people when they do NOT need something. Lead with a short, direct, citable answer, then explain and add nuance. First person (I, my wife). A fifteen-minute conversation is fine to reference but do not force it into every piece.

Hard rules:
- NEVER use em-dashes or en-dashes. Use periods, commas, parentheses, or the word to for ranges.
- Every article must tie back to death, probate, inheritance, or executorship, and should reference California specifics where they come up naturally (California is the home market).
- Educational, general information only. No specific premium dollar promises, no guarantees, no invented statistics, no made-up testimonials or client names. Use ranges and words like often, usually, and depends.
- Do not name specific insurance carriers.
- Accurate and broadly true for the US, with California or Texas context where natural.

Output ONLY a JSON object (no markdown, no preamble) with exactly these keys:
{"dek": string, "answer": string, "sections": [{"h": string, "p": [string, ...]}, ...], "related": [{"href": string, "label": string}, ...]}
- dek: one sentence meta description.
- answer: 2 to 4 sentence direct answer (the citable lead).
- sections: 2 to 4 sections, each a short heading h plus 1 to 2 paragraphs in p.
- related: 2 to 3 links. Use ONLY hrefs from the provided existing-article list, plus always include {"href": "/", "label": "About Billy Lush: local life insurance"}.`;

  const relatedList = existing.length
    ? `For "related", pick 2 of these existing articles (use the exact href) and always add the home link:
${existing.map((e) => `- /learn/${e.slug}  (${e.question})`).join("\n")}`
    : `For "related", only include {"href": "/", "label": "About Billy Lush: local life insurance"}.`;

  const userPrompt = `Write the article answering this question (it becomes the H1): "${pick.question}"

Angle to cover: ${pick.angle}

${relatedList}

Return ONLY the JSON object.`;

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: 2500, system, messages: [{ role: "user", content: userPrompt }] }),
  });
  if (!resp.ok) {
    console.error("Anthropic API error", resp.status, await resp.text());
    process.exit(1);
  }
  const data = await resp.json();
  const text = (data.content || []).map((b) => b.text || "").join("");
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    console.error("No JSON object found in model response:\n", text);
    process.exit(1);
  }
  body = JSON.parse(jsonMatch[0]);
}

body = deepClean(body);

const article = {
  slug: pick.slug,
  question: pick.question,
  dek: body.dek,
  updated: today,
  answer: body.answer,
  sections: Array.isArray(body.sections) ? body.sections : [],
  related: Array.isArray(body.related) && body.related.length
    ? body.related
    : [{ href: "/", label: "About Billy Lush: local life insurance" }],
};

// Same validation the site expects, applied to the draft before it is written.
if (!article.dek || !article.answer || !article.sections.length) {
  console.error("Generated article is missing required fields:", JSON.stringify(article, null, 2));
  process.exit(1);
}
const blob = JSON.stringify(article);
if (/[\u2014\u2013]/.test(blob)) {
  console.error("Em-dash or en-dash slipped through after cleaning, aborting.");
  process.exit(1);
}

mkdirSync(DRAFTS_DIR, { recursive: true });
const draftPath = `${DRAFTS_DIR}/${today}-${article.slug}.json`;
writeFileSync(draftPath, JSON.stringify(article, null, 2) + "\n");
console.log("Done. Draft saved to " + draftPath + ". Nothing publishes until it is promoted into app/lib/articles.ts.");

// Expose the slug so the workflow can use it in the commit message.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `slug=${article.slug}\n`);
}
