/* ------------------------------------------------------------
   SHARED SITE DATA: single source of truth for the
   homepage and every location/topic page. Keep copy
   and facts here so a change ripples everywhere.
   ------------------------------------------------------------ */

export const SITE_URL = "https://billylushinsurance.com";

/* Agency locality identity for JSON-LD. Billy works from Newbury Park
   and no street address is published anywhere, so this stays at the
   city level. Do not add a street address without Billy's say-so. */
export const AGENCY_ADDRESS = {
  locality: "Newbury Park",
  region: "CA",
  postalCode: "91320",
  country: "US",
};

/* Default social share image (og:image / twitter:image) and the
   default image for Article JSON-LD. Dimensions are the real file
   dimensions (verified with `file` on 2026-08-22). */
export const SHARE_IMAGE = {
  url: `${SITE_URL}/images/billy-holding-loaves.jpg`,
  width: 1600,
  height: 1066,
};

export const FACTS = {
  phone: "(323) 580-9137", // confirmed by Billy 2026-06-10
  phoneE164: "+13235809137", // machine-readable form for JSON-LD telephone fields
  phoneHref: "tel:+13235809137",
  smsHref: "sms:+13235809137",
  email: "billy@billylushinsurance.com", // Porkbun forward → billylush@gmail.com
  // California
  caLicense: "CA Lic. #4247326", // original issue 10/28/2022
  caLicenseNo: "4247326",
  caLicenseVerifyUrl:
    "https://cdicloud.insurance.ca.gov/cal/LicenseNumberSearch?handler=Search&licenseNumber=4247326",
  // Texas (captured 2026-06-15, Life Agent Individual, issued 12/04/2024, exp 11/30/2026, Active)
  txLicense: "TX Lic. #3268220",
  txLicenseNo: "3268220",
  txLicenseVerifyUrl: "https://txapps.texas.gov/NASApp/tdi/TdiARManager",
};

/* BOOKING: Calendly drives the "pick a time" panel. */
export const BOOKING_URL =
  "https://calendly.com/billylush/15min?hide_gdpr_banner=1&primary_color=8a5a2b";

export const SHOWS = [
  { name: "Generation Kill", network: "HBO" },
  { name: "For All Mankind", network: "Apple TV+" },
];
export const IMDB_URL = "https://www.imdb.com/name/nm1312073/";
export const WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/Billy_Lush";

export const BAKERY = {
  site: "https://billybread.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Billy+Bread+Newbury+Park+CA",
};

// CA DOI company appointments (cdicloud.insurance.ca.gov, 2026-06-10)
export const CARRIERS = [
  "John Hancock",
  "Nationwide",
  "American General (AIG)",
  "Fidelity & Guaranty",
  "North American",
  "Sagicor",
  "AuguStar",
  "Life Insurance Co. of the Southwest",
];

export type Town = {
  name: string;
  slug: string;
  county: string;
  hq?: boolean;
  /* one distinct, human sentence per town so location pages aren't thin
     duplicate content; each names something real about the place. */
  blurb: string;
  /* per-town meta description for search results, with the estate angle
     woven in and phrased differently per town so pages are not clones. */
  meta: string;
  /* two or three paragraphs written for this town only: who lives here, what
     they usually ask, and how probate works for them (Ventura vs LA County). */
  local: string[];
  /* Learn articles that answer what this town asks most. */
  learn: string[];
};

export const TOWNS: Town[] = [
  {
    name: "Newbury Park",
    slug: "newbury-park",
    county: "Ventura County",
    hq: true,
    blurb:
      "It's home base, where I bake, where my kids go to school, and where you can find me most Fridays with flour on my hands. If you're in Newbury Park, we're practically neighbors.",
    meta:
      "Term, whole life, final expense & IUL in Newbury Park, from the agent down the street, set up so money reaches your family fast and never sits in probate.",
    local: [
      "Newbury Park is where I live, so the families here are usually people I'd run into at school pickup or the grocery store anyway. A lot of them bought their homes years ago, and those houses are now worth far more than anyone planned for. That is great news, right up until someone dies without a plan and the house lands in probate.",
      "If a Newbury Park homeowner dies and the house isn't in a trust or otherwise set up to pass directly, the estate usually goes through the Ventura County Superior Court. In California that commonly takes nine months to well over a year. A life insurance policy with a named beneficiary skips that line entirely and usually pays within weeks, which is often what keeps a mortgage paid and a family in the house while the rest gets sorted out.",
      "My wife works in probate real estate, so I hear the other side of these stories: the family that has to sell because nobody could cover the bills in the meantime. Most of what I do in Newbury Park is make sure that isn't you."
    ],
    learn: ["does-life-insurance-go-through-probate", "life-insurance-and-a-house-in-probate", "how-much-life-insurance-do-i-need"],
  },
  {
    name: "Thousand Oaks",
    slug: "thousand-oaks",
    county: "Ventura County",
    blurb:
      "From the Conejo to the new builds off the 23, Thousand Oaks families are exactly who I built this for: mortgages, kids, and parents to look after, all at once.",
    meta:
      "Term, whole life, final expense & IUL for Thousand Oaks families, with straight answers on estate and probate situations, when the timing matters most.",
    local: [
      "Thousand Oaks is a city of two stages of life at once. There are young families stretching to afford a first home, and there are parents and grandparents who have been here thirty years and are starting to think about what they leave behind. Often it's the same family, with a couple in their forties looking after both their kids and their own parents.",
      "For the younger side, the question is usually how much term coverage replaces an income and pays off a mortgage if something happens. For the older side, it's final expense coverage, or permanent coverage sized to pay the costs of settling an estate so nobody has to sell something in a hurry.",
      "Thousand Oaks is in Ventura County, so if an estate here needs probate, it goes through the Ventura County Superior Court. Life insurance with a current beneficiary designation pays outside of that process, which is why I always check who is actually named on a policy before anything else."
    ],
    learn: ["how-much-life-insurance-do-i-need", "what-is-final-expense-insurance", "who-should-i-name-as-beneficiary"],
  },
  {
    name: "Westlake Village",
    slug: "westlake-village",
    county: "Los Angeles County",
    blurb:
      "Around the lake the questions skew toward permanent coverage and leaving something behind: whole life and IUL done without the hard sell. I'll tell you straight what fits.",
    meta:
      "Term, whole life & IUL near Westlake Village, shaped by what your kids inherit and kept out of probate, from a licensed local agent.",
    local: [
      "In Westlake Village the question is usually less about whether a family can get by and more about what happens to what they've built. Homes here carry real value, and most families want their kids to inherit it without a forced sale or a year of paperwork.",
      "Most of Westlake Village sits on the Los Angeles County side of the line, so an estate that needs probate here usually goes through the Los Angeles County Superior Court, not Ventura County like the rest of the Conejo Valley. Permanent life insurance, whole life or IUL, can put cash in heirs' hands quickly to cover taxes, costs, and time, while the rest of the estate is settled.",
      "I'm not the guy who pushes IUL on everyone. It fits some people well and others not at all, and I'll tell you which one you are. Sometimes a trust plus a simple term policy does the job better, and I'll say so."
    ],
    learn: ["what-is-indexed-universal-life-insurance", "what-is-cash-value-life-insurance", "claim-timeline-vs-probate-timeline"],
  },
  {
    name: "Oak Park",
    slug: "oak-park",
    county: "Ventura County",
    blurb:
      "A tight, family-first town, the kind of place where a name still gets passed across a fence. That's how nearly all my work comes, and Oak Park is no exception.",
    meta:
      "Oak Park life insurance from a neighbor: term, whole life, final expense & IUL, set up so what you leave reaches your people without getting stuck in probate.",
    local: [
      "Oak Park is unincorporated Ventura County, a small, close community where most people find their plumber, their tutor, and their insurance agent the same way: someone they trust tells them a name. That's how nearly all of my work comes, so Oak Park is exactly my kind of town.",
      "Families here tend to be busy and well organized, and the gap I see most often isn't a missing policy. It's an old beneficiary form: a policy from a first job, a group plan through work, or a designation that never got updated after a new baby or a divorce.",
      "If an Oak Park estate ends up in probate, it runs through the Ventura County Superior Court. Keeping beneficiary designations current is the cheapest, fastest way to keep insurance money out of that process, and it takes about ten minutes to check."
    ],
    learn: ["beneficiary-mistakes-probate", "is-life-insurance-through-work-enough", "what-is-a-contingent-beneficiary"],
  },
  {
    name: "Agoura Hills",
    slug: "agoura-hills",
    county: "Los Angeles County",
    blurb:
      "Just over the hill from the bakery. Whether it's term coverage for the young-family years or final expense for a parent, the fifteen-minute conversation travels the 101 just fine.",
    meta:
      "Term for the young-family years, final expense for a parent, IUL in between: Agoura Hills coverage from Billy Lush, including estate and probate situations.",
    local: [
      "Agoura Hills is just over the county line from the bakery, which matters more than you'd think. Agoura is in Los Angeles County, so probate here runs through the Los Angeles County Superior Court, a different system from your neighbors a few miles west in Thousand Oaks.",
      "Agoura families are often in the middle years: kids at home, a mortgage, and parents who are getting older. Term life is usually the workhorse for the kid-and-mortgage years. Final expense coverage often makes sense for a parent, so a funeral and final bills never land on the kids.",
      "If you have a parent with health issues, don't assume they can't get covered. Some final expense policies ask only a few health questions, and a few ask none. The tradeoff is the price and a waiting period, and I'll walk you through both honestly."
    ],
    learn: ["what-is-final-expense-insurance", "life-insurance-with-a-pre-existing-condition", "term-life-vs-whole-life-insurance"],
  },
  {
    name: "Moorpark",
    slug: "moorpark",
    county: "Ventura County",
    blurb:
      "Moorpark runs on the same thing I do: neighbors who know each other. Kitchen-table coverage for families who'd rather buy from someone they can actually find.",
    meta:
      "Moorpark families can cover term, whole life, final expense & IUL with a neighbor, set up so the money arrives quickly instead of waiting on probate.",
    local: [
      "Moorpark has a lot of younger families, many in newer neighborhoods, many who moved here because it's one of the more reachable places in Ventura County to own a home. That usually means a big mortgage and one or two incomes the whole plan depends on.",
      "For most Moorpark families the right answer is simple: an affordable term policy that runs until the kids are grown and the mortgage is mostly paid. It's often less per month than people expect, and buying younger and healthier locks in a better rate.",
      "Moorpark estates that need probate go through the Ventura County Superior Court. A term policy with the right beneficiary named pays around probate, usually within weeks of a claim, which is exactly when a young family needs it."
    ],
    learn: ["how-much-does-life-insurance-cost", "when-is-the-best-age-to-buy-life-insurance", "how-long-does-life-insurance-take-to-pay-out"],
  },
  {
    name: "Camarillo",
    slug: "camarillo",
    county: "Ventura County",
    blurb:
      "From the old town to the newer tracts, Camarillo families ask me the same honest questions about cost and final expense, and leave with a real number, not an internet guess.",
    meta:
      "Honest answers on cost and final expense for Camarillo families, plus term, whole life & IUL set up to pay fast after a death, outside of probate court.",
    local: [
      "Camarillo has a large retired community, including Leisure Village, and the Camarillo question is often about a parent: how to make sure a funeral and final bills don't fall on the kids, and how to get coverage at seventy-something without a big medical exam.",
      "That's what final expense insurance is built for. It's a smaller whole life policy, usually enough for a funeral and final bills, and many policies ask only a few health questions. It isn't the right fit for everyone, and I'll tell you when a prepaid funeral plan or simply setting money aside makes more sense.",
      "Camarillo is in Ventura County, so estates here that need probate go through the Ventura County Superior Court. Insurance with a named beneficiary pays directly to that person, which means the funeral home can be paid in weeks instead of waiting for probate to finish."
    ],
    learn: ["what-is-final-expense-insurance", "do-i-need-a-medical-exam-for-life-insurance", "spouse-died-first-steps"],
  },
  {
    name: "Simi Valley",
    slug: "simi-valley",
    county: "Ventura County",
    blurb:
      "Simi's a working-family town, and term life is usually the workhorse that fits it best: the most protection per dollar for the years that need it most.",
    meta:
      "Simi Valley term life that fits working-family budgets, plus whole life, final expense & IUL, built so a death benefit pays your family fast, outside probate.",
    local: [
      "Simi Valley is a working-family town, and families here tend to be practical. They want to know what it costs, what it covers, and whether they really need it. Usually the answer is term life: the most protection per dollar for the years when a family depends on a paycheck.",
      "A common Simi Valley situation is a family counting on life insurance from work. It's a good start, but it usually covers only a year or two of salary, and it can disappear when the job does. A small personal policy on top is often enough to close the gap.",
      "Simi Valley is in Ventura County, so probate here runs through the Ventura County Superior Court. Whatever coverage you have, the beneficiary designation decides whether it pays your family directly or gets stuck with the rest of the estate."
    ],
    learn: ["is-life-insurance-through-work-enough", "term-life-vs-whole-life-insurance", "how-much-life-insurance-do-i-need"],
  },
];

export const TOWN_BY_SLUG = Object.fromEntries(TOWNS.map((t) => [t.slug, t]));

export type Product = {
  nick: string;
  title: string;
  body: string;
  fit: string;
};

export const PRODUCTS: Product[] = [
  {
    nick: "The workhorse",
    title: "Term Life",
    body: "The most protection per dollar, for the years that need it most: the mortgage, the kids, the income your family runs on. Pick a term, lock a flat premium, done.",
    fit: "most families, most of the time.",
  },
  {
    nick: "The keeper",
    title: "Whole Life",
    body: "Permanent coverage that never expires, with a premium that never goes up and cash value that builds along the way. It's there at ninety-five exactly as it was at thirty-five.",
    fit: "lifelong needs, and leaving something behind, guaranteed.",
  },
  {
    nick: "The small kindness",
    title: "Final Expense",
    body: "A modest policy with one honest job: it pays out fast, so a funeral never becomes a debt your family carries while they grieve.",
    fit: "parents & grandparents who want this one thing handled.",
  },
  {
    nick: "The flexible one",
    title: "Indexed Universal Life",
    body: "Permanent coverage whose cash value earns interest tied to a market index, with a built-in floor for the down years. More moving parts, worth a real conversation.",
    fit: "people who've covered the basics and want options. If it's not right for you, I'll say so.",
  },
];

export type Faq = { q: string; a: string[] };

export const FAQS: Faq[] = [
  {
    q: "What actually happens to the money when someone dies?",
    a: [
      "Usually nothing fast, and that's the problem. Bank accounts can freeze while the estate is sorted out. If there's property and no living trust, the estate can land in probate, which in California routinely takes a year or more and carries fees that come out of what the family inherits. Meanwhile the funeral home, the mortgage, and the utility company all still want to be paid this month.",
      "Life insurance works differently: it pays your beneficiaries directly, usually within weeks, and it doesn't go through probate at all. That's the whole point: money that shows up when everything else is stuck.",
    ],
  },
  {
    q: "Is final expense insurance worth it, or is it a gimmick?",
    a: [
      "It's a real tool with an honest job: it's a small whole life policy designed to pay out quickly and cover a funeral, which in California runs five figures more often than people expect, so the cost never lands on a grieving family's credit card.",
      "Is it for everyone? No. If you have savings set aside that your family can actually reach quickly, you may not need it. That's the kind of thing I'll tell you straight in fifteen minutes.",
    ],
  },
  {
    q: "How much does life insurance cost?",
    a: [
      "Almost always less than people guess, especially term coverage in your 30s, 40s, or 50s. The real answer depends on three things: your age, your health, and how much protection you want. That's a fifteen-minute conversation, and you'll leave it with a real number instead of an internet guess.",
    ],
  },
  {
    q: "Wait, aren't you the bread guy?",
    a: [
      "Guilty. I'm the Billy behind Billy Bread, the sourdough bakery here in Newbury Park. I bake on Fridays, and the rest of the week I help local families with life insurance.",
      "I mention it because it tells you something no agency website can: I live here, my kids go to school here, and you know exactly where to find me. Literally: most Fridays I'll be the one holding bread.",
    ],
  },
  {
    q: "What does talking to you cost?",
    a: [
      "Nothing, ever. Insurance agents are paid by the insurance company when a policy is placed; advice, quotes, and the math are free to you. And if after fifteen minutes the honest answer is that you don't need anything new, that's exactly what I'll say.",
    ],
  },
];
