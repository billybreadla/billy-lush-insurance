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

# Learn articles: draft first, human approves

Every article topic must intersect life insurance with death, probate,
inheritance, or executorship. The scheduled GitHub Action no longer publishes
anything. Each run generates one article draft and commits it to main as
`content-drafts/YYYY-MM-DD-slug.json`. Nothing in app/ changes, so the site
never publishes a draft on its own.

Billy's flow: open Claude Code in this repo, ask it to review the new file in
content-drafts/, and request edits or a rewrite. When a draft is good,
promotion is moving that article object into ARTICLES in app/lib/articles.ts
(Claude Code does this on request); the next Netlify build then publishes it.
Rejected drafts just get deleted from content-drafts/.
