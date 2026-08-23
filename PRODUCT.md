# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: a person who already has a reason to trust Billy, checking whether he is real.** A neighbor, a bakery customer, a referral from Anne, someone who met him around Newbury Park. They arrive already half-sold on the person and need to confirm the license, the credentials, and that this is a legitimate practice rather than a side hustle. They convert by calling or booking, not by reading.

**Secondary: a stranger searching.** Someone in the Conejo Valley or Texas looking up a specific question, most often about probate, final expense, or how much coverage costs. The fifteen articles and the eight town pages exist for them.

Confirmed by Billy 2026-08-15: the site serves **both, with credibility first**. Where the two conflict, the referral visitor wins. A page that ranks well but makes a referred neighbor hesitate is a loss.

Underneath both: people in or near a hard moment. Someone who just lost a parent, someone settling an estate, someone who finally admitted they need to sort this out. The emotional register of the site is a product decision, not a style one.

## Product Purpose

Billy Lush is a licensed life insurance agent (California since 2022, Texas since 2024). The site exists to convert trust into a fifteen-minute conversation.

Everything on it serves one action: get a real person to call, text, email, or book a short consult. Success is a booked conversation with someone who already believes he is honest.

## Positioning

**The agent you already know, who is standing next to the problem.**

Three things combine here in a way a competing agent cannot copy:

1. **He is genuinely local and genuinely visible.** He runs a bakery in the same town, most Fridays with flour on his hands. The site's own line does the work: come buy a loaf, look him in the eye, and decide for yourself. That is an unusual and disarming trust mechanism in a category built on cold calls.
2. **The probate adjacency is real and personal.** His wife, Anne Clare Lush, is a probate and trust Realtor. She meets families after a death; he makes sure the money is there before it. Between them they see both halves of the same event.
3. **A verifiable public record.** Twenty years as a working actor with IMDb and Wikipedia entries, plus two license numbers that link straight to state lookup tools. Most agents can offer neither.

The anti-position matters as much: this is not a call center, not a lead-form funnel, and not a follow-up campaign. The stated promise is "you talk, I listen, and you leave with real numbers," including being told when nothing is needed.

## Operating Context

- **Live at `https://billylushinsurance.com`**, a Next.js site on Netlify under the same account as the other properties.
- **Licensed in two states with different realities.** California is local, face to face, Conejo Valley. Texas is statewide and remote, with no personal presence behind it. The site should never let Texas copy borrow California's neighbor credibility.
- **Conversion paths, in the order the site presents them:** call (323) 580-9137, text, email, book fifteen minutes on the calendar, or submit the lead form. The form goes to Netlify Forms and lands in Billy's inbox, with a honeypot as the only spam defense.
- **Nine active carrier appointments**, most of them accumulation-oriented (John Hancock, Nationwide, AIG/American General, Fidelity & Guaranty, North American, Sagicor, AuguStar, Life Insurance Co. of the Southwest). Final-expense capability came separately through the FEX Contracting relationship.
- **Content is code.** All fifteen articles, the FAQs, the town blurbs, and every business fact live in TypeScript (`app/lib/site.ts`, `app/lib/articles.ts`). There is no CMS, so a copy change is a deploy.
- **Netlify production deploys are metered** on the shared account. Preview freely, publish deliberately.
- **Billy is new to working leads.** He is a licensed and appointed agent, but the practice is young. The site is ahead of the book of business, not behind it.

## Capabilities and Constraints

**What the site does today**

- Homepage with a hero, an interactive coverage estimator, a story and proof section, four product explainers (term, whole life, final expense, IUL), twelve FAQs, a local service area, a booking embed, and a lead form.
- Eight town pages across the Conejo Valley, plus a Texas statewide page, each with its own copy, products, FAQs, and neighbor links.
- Fifteen educational articles built for question-shaped search, each with a short direct answer up top.
- Extensive JSON-LD: InsuranceAgency, Person with credentials, Service, OfferCatalog, FAQPage, Article, and BreadcrumbList, plus a dynamic sitemap.
- Hardened response headers (HSTS, frame-ancestors, nosniff, referrer policy, permissions policy).

**Constraints future work must respect**

- **Every factual claim must be verifiable.** License numbers, issue dates, carrier names, and credits are real and are linked to public lookups. This is a trust business and a regulated one, so nothing may be softened, rounded, or embellished for rhythm.
- **Never invent social proof.** The testimonials array is deliberately empty, with a comment in the code saying real attributable quotes only. That decision stands. No invented reviews, no stock faces, no "trusted by hundreds."
- **No financial, tax, or legal advice.** The footer disclaimer says so and the copy must stay consistent with it. Articles explain; they do not advise.
- **State differences are legally material.** Product availability, features, and terms vary by state and are subject to underwriting. Copy may not flatten that.
- **No em-dashes** anywhere.
- **Carrier names are used factually, never as endorsements.** No carrier logos are displayed, and that is the safer posture.
- The estimator produces a ballpark, not a quote, and must always read that way.

## Niche: committed (Aug 22, 2026)

Positioning: estate-transition life insurance. We help families set up coverage so money reaches them fast and outside probate when a death happens, and we help surviving spouses and executors handle what they have inherited.

Why this and not the alternatives:
1. It fits the carrier shelf (term, IUL, annuity-capable carriers) far better than burial-policy positioning.
2. It sits on our only real distribution channel: Anne Clare's probate real estate work meets these exact families at the hardest moment.
3. The homepage has told this story since launch. Formalizing it prevents drift; it does not change the site.

Rejected: final expense as the brand. Its customers come from paid lead vendors and funeral-home channels, not organic search or referrals, and the shelf there is thin. Final expense remains a product line we gladly sell.

Retired: generalist framing. Every page now answers one question: how does money reach my family without getting stuck?

Public language guide: write the way families talk at kitchen tables: after a death, what my kids inherit, stuck in probate. Never "estate planning solutions"; we coordinate with attorneys, we do not draft documents or give legal or tax advice. Describe Anne's practice truthfully; never imply a shared firm or shared license.

Content rule going forward: Learn articles must intersect life insurance with death, probate, inheritance, or executorship. Generic product explainers are retired.

## Open / undecided

- **Privacy policy and terms pages do not exist.** Neither does explicit consent language on the lead form, which collects a phone number. For a licensed agent collecting contact details with intent to call, this is a real gap rather than a nicety. Flagged here, not fixed.
- Whether Texas is a genuine growth market or a byproduct of holding the license has not been decided.

## Brand Commitments

- **Name:** Billy Lush Insurance. **Voice:** plainspoken, warm, unhurried, a neighbor rather than a salesperson. The existing copy is the reference, and it is good: "No homework, no pressure, no follow-up campaign. If you don't need anything, I'll tell you that too."
- **The bakery is part of the pitch, on purpose.** The invitation to come find him on a Friday is a real differentiator and should be protected in any redesign.
- **Family-team positioning is the chosen direction.** Confirmed with Billy 2026-08-15: lean into Billy and Anne as a pair who cover both sides of a probate situation. **Boundary to hold:** describe the true relationship, two separately licensed professionals who are married and refer to each other, and never imply a single registered firm, joint license, or shared practice that does not legally exist. In a regulated business the honest version is also the safe one.
- **Visual world in place, theme named "Under the Oak":** parchment `#f5efe2`, deep oak green `#1f3b2c`, acorn `#8a5a2b`, with Young Serif for display, Newsreader for body, DM Mono for labels, and a paper grain overlay. Recorded as an existing commitment; the full visual system belongs in a DESIGN.md that does not exist yet.
- No em-dashes.

## Evidence on Hand

**Real and verifiable**

- California license #4247326, in good standing since 2022, with a live link to the state lookup.
- Texas license #3268220, issued December 2024.
- Nine confirmed carrier appointments, taken from the California Department of Insurance record.
- Twenty years as a working actor, with IMDb (nm1312073) and Wikipedia entries, including Generation Kill and For All Mankind.
- A featured mention in Dos Vientos Living, the neighborhood magazine.
- Billy Bread as a real, visitable local business at billybread.com.
- Anne Clare Lush's probate and trust real estate practice at anneclarelush.com.

**Absences future work must not fabricate**

- **No client testimonials, reviews, ratings, or named clients.** The empty testimonials array is a deliberate choice on a trust business.
- No policies-sold count, no client count, no assets figure, no years-in-practice claim beyond the licensing dates.
- No professional designations beyond the state licenses.
- No carrier endorsement, sponsorship, or preferred-agent status.
- No claim of a joint firm with Anne.
- No Texas local presence.

## Product Principles

1. **Verifiable or absent.** In a regulated trust business, an unprovable claim costs more than the space it fills. If it cannot be linked to a public record, it does not go on the page.
2. **The referred neighbor outranks the search visitor.** Both matter, but when a choice has to be made, protect the experience of someone who arrived already trusting him.
3. **Meet people near a hard moment with plain language.** Death, probate, and money are the subject. Cleverness reads as evasion here, and warmth is not the same as softness.
4. **The bakery is the differentiator, so keep it in reach.** "Come find me Friday" does work no headline can.
5. **Sell the conversation, not the policy.** Every surface is trying to earn fifteen minutes, not close a sale. The promise that he will say "you don't need anything" is part of what makes the call safe to book.

## Accessibility & Inclusion

No formal standard has been set and no accessibility pass has been done, which is a known gap.

Product-specific considerations for any future pass: a meaningful share of this audience is older, some are recently bereaved, and several will read on a phone in poor conditions. Body text is currently 1.0625rem with a 1.65 line height, which is a reasonable floor but not generous for this audience. Contrast between the oak green ink and the parchment ground should be verified rather than assumed. Every conversion path must be reachable without precision tapping, and the phone number in particular should be large, obvious, and tappable everywhere it appears.
