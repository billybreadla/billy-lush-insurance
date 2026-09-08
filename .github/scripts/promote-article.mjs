#!/usr/bin/env node
/*
 * Learn-article auto-promoter for Billy Lush Insurance.
 *
 * Takes the oldest draft in content-drafts/ (FIFO by the date prefix in its
 * filename), appends it to ARTICLES in app/lib/articles.ts, and deletes the
 * draft file. Nothing is reviewed by a human first; this is the automated
 * half of the flow described in CLAUDE.md, run on a weekly schedule instead
 * of on request.
 *
 * Run by .github/workflows/weekly-learn-article-promote.yml.
 */
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync, appendFileSync } from "node:fs";

const ARTICLES_PATH = "app/lib/articles.ts";
const DRAFTS_DIR = "content-drafts";
const CLOSE_MARKER = "];\n\nexport const ARTICLE_BY_SLUG";

if (!existsSync(DRAFTS_DIR)) {
  console.log("No content-drafts directory. Nothing to promote.");
  process.exit(0);
}

const files = readdirSync(DRAFTS_DIR)
  .filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.json$/.test(f))
  .sort();

if (!files.length) {
  console.log("No drafts queued. Nothing to promote.");
  process.exit(0);
}

const draftPath = `${DRAFTS_DIR}/${files[0]}`;
const article = JSON.parse(readFileSync(draftPath, "utf8"));

const articlesSrc = readFileSync(ARTICLES_PATH, "utf8");
if (new RegExp(`slug:\\s*"${article.slug}"`).test(articlesSrc)) {
  console.error(`Slug "${article.slug}" is already live in ${ARTICLES_PATH}. Removing stale draft without promoting.`);
  rmSync(draftPath);
  process.exit(0);
}
if (!articlesSrc.includes(CLOSE_MARKER)) {
  console.error(`Could not find the expected close marker in ${ARTICLES_PATH}. Aborting without changes.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
article.updated = today;

const q = (s) => JSON.stringify(s);
const indent = (lines, spaces) => lines.map((l) => " ".repeat(spaces) + l);

const sectionLines = article.sections.flatMap((s) => [
  "{",
  `  h: ${q(s.h)},`,
  "  p: [",
  ...indent(s.p.map((p) => `${q(p)},`), 4),
  "  ],",
  "},",
]);

const relatedLines = article.related.map((r) => `{ href: ${q(r.href)}, label: ${q(r.label)} },`);

const entryLines = [
  "{",
  `  slug: ${q(article.slug)},`,
  `  question: ${q(article.question)},`,
  `  dek: ${q(article.dek)},`,
  `  updated: ${q(article.updated)},`,
  "  answer:",
  `    ${q(article.answer)},`,
  "  sections: [",
  ...indent(sectionLines, 4),
  "  ],",
  "  related: [",
  ...indent(relatedLines, 4),
  "  ],",
  "},",
];

const entryBlock = indent(entryLines, 2).join("\n") + "\n";

const updatedSrc = articlesSrc.replace(CLOSE_MARKER, entryBlock + CLOSE_MARKER);
writeFileSync(ARTICLES_PATH, updatedSrc);
rmSync(draftPath);

console.log(`Promoted "${article.slug}" into ${ARTICLES_PATH} and removed ${draftPath}.`);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `slug=${article.slug}\npromoted=true\n`);
}
