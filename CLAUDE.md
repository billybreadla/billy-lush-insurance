# Billy Lush Insurance: Next.js/Netlify site

Live at billylushinsurance.com. Probate / final-expense niche. Billy Lush (owner)
is a working actor and non-technical; explains issues by behavior. No em-dashes in
any user-facing copy.

# Subagent delegation

- `explorer` (read-only): use AUTOMATICALLY to answer "where/how does X work"
  research questions before editing. It can't modify files, so it's always safe.
- `test-runner`, `implementer`, `deep-reasoner`: only when Billy names them.
  Editing agents must NEVER run a Netlify production deploy (`--prod`) without
  Billy's explicit go-ahead.

# Learn articles: draft weekly, auto-promote weekly

Every article topic must intersect life insurance with death, probate,
inheritance, or executorship.

Two scheduled GitHub Actions run against the same `content-drafts/` queue,
both writing straight to `main` (they share the `learn-article-main-writes`
concurrency group so they never race each other):

- `.github/workflows/weekly-learn-article.yml` (`generate-article.mjs`):
  picks the next uncovered question from its backlog, writes one article
  draft, and commits it as `content-drafts/YYYY-MM-DD-slug.json`. Runs the
  1st and 3rd Tuesday of the month.
- `.github/workflows/weekly-learn-article-promote.yml`
  (`promote-article.mjs`): every Tuesday at 9am Pacific, takes the OLDEST
  file in `content-drafts/` (FIFO by the date prefix in its filename),
  appends it into ARTICLES in `app/lib/articles.ts`, deletes the draft file,
  and pushes. The next Netlify build publishes it. No human review step.

Billy can still intervene before Tuesday: open Claude Code, review a file in
`content-drafts/`, and ask for edits, a rewrite, or to promote/skip it out of
order. Deleting a draft removes it from the queue; editing one in place is
picked up by whichever promotion runs next. To publish something ahead of
schedule, or in a different order than the queue's FIFO date, promote it by
hand and it never reaches the automated step at all.
