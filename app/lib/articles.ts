/* ————————————————————————————————————————————————
   GEO / answer articles, written to directly answer the
   natural-language questions people ask Google & AI engines,
   in Billy's plain-talk, probate-aware voice. Each leads with
   a short, citable answer, then explains.
   ———————————————————————————————————————————————— */

export type Article = {
  slug: string;
  /* the question as people actually phrase it, used for the H1 + schema */
  question: string;
  /* one-line meta description / social dek */
  dek: string;
  updated: string; // ISO date
  /* the short, direct answer: featured-snippet + AI-citation bait */
  answer: string;
  sections: { h: string; p: string[] }[];
  related: { href: string; label: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "does-life-insurance-go-through-probate",
    question: "Does life insurance go through probate?",
    dek: "In almost every case, no. Life insurance with a named beneficiary pays out directly and skips probate entirely. Here's how it works, and the few exceptions that trip families up.",
    updated: "2026-06-15",
    answer:
      "No. In almost every case, life insurance does not go through probate. As long as you've named a living beneficiary, the death benefit is paid directly to that person, usually within a few weeks, and it never touches the probate court. It only ends up in probate in a handful of avoidable situations: when the estate itself is named as the beneficiary, when no beneficiary is named, or when the only beneficiary has already died and there's no contingent.",
    sections: [
      {
        h: "Why skipping probate matters so much",
        p: [
          "My wife works in probate real estate, so I see the aftermath up close. In California, probate routinely takes a year or more, and the statutory fees come straight out of what the family inherits. Meanwhile, the deceased person's bank accounts can be frozen while the court sorts things out, but the mortgage, the funeral home, and the utility company all still want to be paid this month.",
          "That gap (money owed now, money locked up for a year) is exactly where families get hurt. It's why a funeral so often ends up on someone's credit card.",
        ],
      },
      {
        h: "How life insurance gets around it",
        p: [
          "A life insurance policy is a contract, not an asset of your estate. When you name a beneficiary, you're telling the insurance company who to pay directly. That payment happens outside the will and outside probate; it doesn't wait on the court, and the fees that eat into a probate estate don't apply to it.",
          "That's the whole point of the tool: it puts cash in your family's hands within weeks, while everything else is still stuck.",
        ],
      },
      {
        h: "The exceptions that catch people",
        p: [
          "Life insurance can get pulled into probate in a few specific cases, and they're all preventable. First: if you name 'my estate' as the beneficiary (or name no one at all), the money flows into the estate and through probate. Second: if your only named beneficiary has died and you never named a contingent (backup) beneficiary, the proceeds default to the estate. Third: if you name a minor child directly, the court usually has to appoint someone to manage the money until they're an adult.",
          "The fixes are simple: name a person, name a contingent, and use a trust or custodian arrangement if minor children are involved. This is the kind of thing I check on in fifteen minutes.",
        ],
      },
    ],
    related: [
      { href: "/learn/what-is-final-expense-insurance", label: "What is final expense insurance?" },
      { href: "/learn/how-much-does-life-insurance-cost", label: "How much does life insurance cost?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "what-is-final-expense-insurance",
    question: "What is final expense insurance, and is it worth it?",
    dek: "Final expense insurance is a small whole-life policy built to pay out fast and cover a funeral. Here's what it costs, who it's right for, and who can safely skip it.",
    updated: "2026-06-15",
    answer:
      "Final expense insurance is a small whole-life policy, usually somewhere between $5,000 and $25,000, designed to pay out quickly so a funeral and final bills never land on a grieving family. It has level premiums that don't go up, it doesn't expire, and it's easier to qualify for than a large policy. It's worth it if your family couldn't comfortably cover those costs from savings; it's skippable if you already have liquid money set aside for exactly that.",
    sections: [
      {
        h: "What it actually covers",
        p: [
          "It's built for one honest job: the bill that arrives right after a death. A funeral in California runs five figures more often than people expect, and there are usually other small debts and final medical costs on top. Final expense pays a lump sum to your beneficiary fast, so they can handle all of that without reaching for a credit card.",
          "Because the coverage amount is modest, the application is simpler than full underwriting (often just health questions, no medical exam), which makes it a realistic option for older adults or people with some health history.",
        ],
      },
      {
        h: "Who it's genuinely right for",
        p: [
          "Parents and grandparents who want this one thing handled, so their kids aren't passing a hat. People who don't have a large pile of accessible savings earmarked for end-of-life costs. And anyone who's been quoted sky-high premiums for a big policy but still wants to leave their family covered for the essentials.",
        ],
      },
      {
        h: "Who can skip it",
        p: [
          "If you already have savings your family can reach quickly (not tied up in a house or a retirement account that takes time and paperwork to access), you may simply not need it. I'll tell you that straight. A final expense policy is a tool, not a trophy; if you don't need it, buying one isn't doing your family a favor.",
          "It's also worth knowing how it differs from a pre-paid funeral plan: a pre-need plan locks you into one funeral home, while final expense insurance pays cash your family can use however the moment requires.",
        ],
      },
    ],
    related: [
      { href: "/learn/does-life-insurance-go-through-probate", label: "Does life insurance go through probate?" },
      { href: "/learn/term-life-vs-whole-life-insurance", label: "Term vs whole life: which do you need?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "how-much-does-life-insurance-cost",
    question: "How much does life insurance cost?",
    dek: "Almost always less than people guess. Here's what really drives the price (age, health, type, and amount) and roughly what healthy adults pay for term coverage.",
    updated: "2026-06-15",
    answer:
      "Life insurance almost always costs less than people guess. A healthy adult in their 30s or 40s can often get a sizable term policy, hundreds of thousands in coverage, for roughly the price of a couple of takeout dinners a month. The real number depends on four things: your age, your health, the type of policy (term is cheapest), and how much coverage you want. The only way to get a true figure is a quick quote, but the ballpark is much friendlier than most people fear.",
    sections: [
      {
        h: "The four things that move the price",
        p: [
          "Age: the younger you lock it in, the cheaper it is, and it never gets cheaper than today. Health: your weight, blood pressure, nicotine use, and history matter, but plenty of common conditions are still very insurable. Type: term life is by far the least expensive per dollar of protection; permanent coverage (whole life, IUL) costs more because it lasts forever and builds cash value. Amount and term length: more coverage for longer costs more, but often less than you'd think.",
        ],
      },
      {
        h: "A realistic ballpark",
        p: [
          "For healthy non-smokers, term life is the workhorse, and the premiums surprise people in a good way: coverage that protects a mortgage and a young family often lands in the range of a modest monthly subscription, not a car payment. The exact figure swings with the factors above, so I won't pretend a website number is your number.",
          "What raises it: smoking, certain health conditions, older age, or choosing permanent coverage. What lowers it: buying younger, choosing term, being honest on the application so you're quoted accurately the first time.",
        ],
      },
      {
        h: "How to get your actual number",
        p: [
          "Skip the internet guess. In a fifteen-minute conversation I can ask the handful of questions that matter and come back with a real quote across the carriers I'm appointed with. And if the honest answer is that you need less than you thought, that's what I'll tell you. There's never a cost to find out; agents are paid by the carrier only when a policy is placed.",
        ],
      },
    ],
    related: [
      { href: "/learn/term-life-vs-whole-life-insurance", label: "Term vs whole life: which do you need?" },
      { href: "/learn/what-is-final-expense-insurance", label: "What is final expense insurance?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "term-life-vs-whole-life-insurance",
    question: "Term life vs. whole life: which one do you need?",
    dek: "Term covers a set period for the lowest cost; whole life is permanent and builds cash value. Here's the plain-English difference and how to choose between them.",
    updated: "2026-06-15",
    answer:
      "Term life insurance covers you for a set number of years (say 20 or 30) at the lowest possible cost; it's the right fit for the years your family depends on your income, like the mortgage-and-kids years. Whole life is permanent: it never expires, the premium never rises, and it builds cash value, which makes it the fit for lifelong needs and leaving something behind. Most families should start with term; some add a smaller permanent policy on top. They're tools for different jobs, not competitors.",
    sections: [
      {
        h: "Term life, in plain English",
        p: [
          "You pick a length (10, 20, or 30 years) and lock in a flat premium for that whole stretch. If something happens to you during the term, your family gets the full benefit. It's the most protection per dollar by a wide margin, which is why it fits the high-need years: while there's a mortgage to cover, kids to raise, and an income your family runs on.",
        ],
      },
      {
        h: "Whole life, in plain English",
        p: [
          "Whole life is permanent. It doesn't expire as long as you pay it, the premium never goes up, and part of what you pay builds cash value you can borrow against later. It costs more than term for the same death benefit, because it's designed to be there at ninety-five exactly as it was at thirty-five. It fits lifelong needs: a guaranteed legacy, final expenses, or covering a dependent who will always need support.",
        ],
      },
      {
        h: "How to actually choose",
        p: [
          "Start with the job you're solving. Protecting your family during the working, mortgage-paying years? Term, almost always. Wanting a guaranteed payout whenever it comes, or building a small permanent foundation? That's where whole life or indexed universal life earns its keep. Plenty of families do both: a large term policy for the big years, plus a modest permanent policy underneath it.",
          "The common mistake is buying expensive permanent coverage when a larger, cheaper term policy would have protected the family better right now. I'll always point you toward what fits, not what pays the most, and if term is all you need, I'll say so.",
        ],
      },
    ],
    related: [
      { href: "/learn/how-much-does-life-insurance-cost", label: "How much does life insurance cost?" },
      { href: "/learn/what-is-final-expense-insurance", label: "What is final expense insurance?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
