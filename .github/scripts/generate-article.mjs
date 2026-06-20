#!/usr/bin/env node
/*
 * Weekly Learn-article generator for Billy Lush Insurance.
 *
 * Reads the existing articles, picks the next uncovered question from the
 * backlog, asks Claude to write it in Billy's first-person voice (no em-dashes),
 * and appends a new Article object to app/lib/articles.ts. The site auto-builds
 * the page, schema, and sitemap entry from that array.
 *
 * Run by .github/workflows/weekly-learn-article.yml. Needs env ANTHROPIC_API_KEY.
 * Set DRY_RUN=1 to skip the API and insert a stub (for local testing only).
 */
import { readFileSync, writeFileSync } from "node:fs";

const ARTICLES_PATH = "app/lib/articles.ts";
const MODEL = "claude-sonnet-4-6";

// Backlog of questions, in priority order. Each has a fixed slug so dedupe is exact.
const BACKLOG = [
  { slug: "how-much-life-insurance-do-i-need", question: "How much life insurance do I actually need?" },
  { slug: "do-i-need-a-medical-exam-for-life-insurance", question: "Do I need a medical exam to get life insurance?" },
  { slug: "life-insurance-with-a-pre-existing-condition", question: "Can I get life insurance with a pre-existing health condition?" },
  { slug: "is-life-insurance-through-work-enough", question: "Is the life insurance from my job enough?" },
  { slug: "who-should-i-name-as-beneficiary", question: "Who should I name as my life insurance beneficiary?" },
  { slug: "what-is-a-contingent-beneficiary", question: "What is a contingent beneficiary, and why does it matter?" },
  { slug: "is-a-life-insurance-payout-taxable", question: "Is a life insurance payout taxable?" },
  { slug: "how-long-does-life-insurance-take-to-pay-out", question: "How long does life insurance take to pay out?" },
  { slug: "what-is-indexed-universal-life-insurance", question: "What is indexed universal life (IUL) insurance?" },
  { slug: "what-is-cash-value-life-insurance", question: "What is cash value, and can I borrow against my policy?" },
  { slug: "when-is-the-best-age-to-buy-life-insurance", question: "When is the best age to buy life insurance?" },
  { slug: "what-happens-when-my-term-policy-ends", question: "What happens to my term policy when the term ends?" },
  { slug: "life-insurance-for-stay-at-home-parents", question: "Should a stay-at-home parent have life insurance?" },
  { slug: "what-is-guaranteed-issue-life-insurance", question: "What is guaranteed issue life insurance, and who is it for?" },
  { slug: "does-life-insurance-cover-natural-causes", question: "Does life insurance cover death from illness or natural causes?" },
  { slug: "what-is-an-accelerated-death-benefit-rider", question: "What is an accelerated death benefit (living benefit) rider?" },
  { slug: "can-i-buy-life-insurance-for-my-parents", question: "Can I buy life insurance for my parents?" },
  { slug: "what-happens-if-i-miss-a-premium-payment", question: "What happens if I miss a life insurance premium payment?" },
  { slug: "life-insurance-vs-a-will", question: "How is life insurance different from a will?" },
  { slug: "life-insurance-for-seniors-over-65", question: "How does life insurance work for seniors over 65?" },
];

const src = readFileSync(ARTICLES_PATH, "utf8");
const existing = [...src.matchAll(/slug:\s*"([^"]+)",[\s\S]*?question:\s*"([^"]+)"/g)].map((m) => ({ slug: m[1], question: m[2] }));
const existingSlugs = new Set(existing.map((e) => e.slug));

const pick = BACKLOG.find((b) => !existingSlugs.has(b.slug));
if (!pick) {
  console.log("All backlog questions already covered. Nothing to do.");
  process.exit(0);
}
console.log("Writing article:", pick.slug);

const today = new Date().toISOString().slice(0, 10);

// Strip em-dashes / en-dashes anywhere in the generated text (hard brand rule).
const clean = (s) => String(s).replace(/\s*[—–]\s*/g, ", ").replace(/[—–]/g, "-");
const deepClean = (v) =>
  typeof v === "string" ? clean(v)
  : Array.isArray(v) ? v.map(deepClean)
  : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepClean(x)]))
  : v;

let body;
if (process.env.DRY_RUN) {
  body = {
    dek: "DRY RUN stub. Replace me.",
    answer: "This is a dry-run stub answer used to test file insertion locally. It is not a real article.",
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

Voice: plain-talk, warm, honest, never salesy. He tells people when they do NOT need something. Lead with a short, direct, citable answer, then explain and add nuance. First person (I, my wife). The probate angle and a fifteen-minute conversation are fine to reference but do not force them into every piece.

Hard rules:
- NEVER use em-dashes or en-dashes. Use periods, commas, parentheses, or the word to for ranges.
- Educational, general information only. No specific premium dollar promises, no guarantees, no invented statistics, no made-up testimonials or client names. Use ranges and words like often, usually, and depends.
- Do not name specific insurance carriers.
- Accurate and broadly true for the US, with California or Texas context where natural.

Output ONLY a JSON object (no markdown, no preamble) with exactly these keys:
{"dek": string, "answer": string, "sections": [{"h": string, "p": [string, ...]}, ...], "related": [{"href": string, "label": string}, ...]}
- dek: one sentence meta description.
- answer: 2 to 4 sentence direct answer (the citable lead).
- sections: 2 to 4 sections, each a short heading h plus 1 to 2 paragraphs in p.
- related: 2 to 3 links. Use ONLY hrefs from the provided existing-article list, plus always include {"href": "/", "label": "About Billy Lush: local life insurance"}.`;

  const userPrompt = `Write the article answering this question (it becomes the H1): "${pick.question}"

For "related", pick 2 of these existing articles (use the exact href) and always add the home link:
${existing.map((e) => `- /learn/${e.slug}  (${e.question})`).join("\n")}

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

// Basic validation.
if (!article.dek || !article.answer || !article.sections.length) {
  console.error("Generated article is missing required fields:", JSON.stringify(article, null, 2));
  process.exit(1);
}
const blob = JSON.stringify(article);
if (blob.includes("—") || blob.includes("–")) {
  console.error("Em-dash or en-dash slipped through after cleaning, aborting.");
  process.exit(1);
}

// Serialize to a TypeScript object literal (JSON.stringify gives valid quoted, escaped strings).
const q = (s) => JSON.stringify(s);
const tsSections = article.sections
  .map((sec) => `      { h: ${q(sec.h)}, p: [${(sec.p || []).map(q).join(", ")}] },`)
  .join("\n");
const tsRelated = article.related
  .map((r) => `      { href: ${q(r.href)}, label: ${q(r.label)} },`)
  .join("\n");
const tsObject = `  {
    slug: ${q(article.slug)},
    question: ${q(article.question)},
    dek: ${q(article.dek)},
    updated: ${q(article.updated)},
    answer: ${q(article.answer)},
    sections: [
${tsSections}
    ],
    related: [
${tsRelated}
    ],
  },
`;

// Insert just before the ARTICLES array closes.
const anchor = "\n];\n\nexport const ARTICLE_BY_SLUG";
if (!src.includes(anchor)) {
  console.error("Could not find the ARTICLES array close anchor in", ARTICLES_PATH);
  process.exit(1);
}
const out = src.replace(anchor, "\n" + tsObject + "];\n\nexport const ARTICLE_BY_SLUG");
writeFileSync(ARTICLES_PATH, out);
console.log("Done. Added /learn/" + article.slug);
