/* ————————————————————————————————————————————————
   SHARED SITE DATA: single source of truth for the
   homepage and every location/topic page. Keep copy
   and facts here so a change ripples everywhere.
   ———————————————————————————————————————————————— */

export const SITE_URL = "https://billylushinsurance.com";

export const FACTS = {
  phone: "(323) 580-9137", // confirmed by Billy 2026-06-10
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
};

export const TOWNS: Town[] = [
  {
    name: "Newbury Park",
    slug: "newbury-park",
    county: "Ventura County",
    hq: true,
    blurb:
      "It's home base, where I bake, where my kids go to school, and where you can find me most Fridays with flour on my hands. If you're in Newbury Park, we're practically neighbors.",
  },
  {
    name: "Thousand Oaks",
    slug: "thousand-oaks",
    county: "Ventura County",
    blurb:
      "From the Conejo to the new builds off the 23, Thousand Oaks families are exactly who I built this for: mortgages, kids, and parents to look after, all at once.",
  },
  {
    name: "Westlake Village",
    slug: "westlake-village",
    county: "Los Angeles County",
    blurb:
      "Around the lake the questions skew toward permanent coverage and leaving something behind: whole life and IUL done without the hard sell. I'll tell you straight what fits.",
  },
  {
    name: "Oak Park",
    slug: "oak-park",
    county: "Ventura County",
    blurb:
      "A tight, family-first town, the kind of place where a name still gets passed across a fence. That's how nearly all my work comes, and Oak Park is no exception.",
  },
  {
    name: "Agoura Hills",
    slug: "agoura-hills",
    county: "Los Angeles County",
    blurb:
      "Just over the hill from the bakery. Whether it's term coverage for the young-family years or final expense for a parent, the fifteen-minute conversation travels the 101 just fine.",
  },
  {
    name: "Moorpark",
    slug: "moorpark",
    county: "Ventura County",
    blurb:
      "Moorpark runs on the same thing I do: neighbors who know each other. Kitchen-table coverage for families who'd rather buy from someone they can actually find.",
  },
  {
    name: "Camarillo",
    slug: "camarillo",
    county: "Ventura County",
    blurb:
      "From the old town to the newer tracts, Camarillo families ask me the same honest questions about cost and final expense, and leave with a real number, not an internet guess.",
  },
  {
    name: "Simi Valley",
    slug: "simi-valley",
    county: "Ventura County",
    blurb:
      "Simi's a working-family town, and term life is usually the workhorse that fits it best: the most protection per dollar for the years that need it most.",
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
