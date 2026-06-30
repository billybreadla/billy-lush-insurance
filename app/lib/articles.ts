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
  {
    slug: "how-much-life-insurance-do-i-need",
    question: "How much life insurance do I actually need?",
    dek: "A plain-talk guide from a California and Texas life insurance agent on how to figure out the right amount of life insurance for your family.",
    updated: "2026-06-20",
    answer: "The right amount of life insurance depends on what you want it to do: replace income, pay off debts, cover final expenses, or some combination of all three. A common starting point is ten to twelve times your annual income, but that number shifts based on your mortgage, dependents, debts, and whether a spouse earns income too. There is no single magic number, and honestly, some people need far less than they think. The goal is to pick an amount that solves a real problem for the people you would leave behind.",
    sections: [
      { h: "Start with the problem you are trying to solve", p: ["Before anyone talks numbers, I always ask one question first: what would actually go wrong financially if you died tomorrow? For a parent with young kids and a mortgage, the answer is usually income replacement. For a retiree with no debt and grown children, it might just be covering final expenses and leaving a small gift. Those are very different problems, and they need very different amounts of insurance.", "Once you know the problem, you can size the solution. If your family needs your income for fifteen more years, multiply your salary by something close to that number and adjust down for savings you already have, any Social Security survivor benefits, or a spouse's income. If you mostly want to keep the house, look at your mortgage payoff balance. Working from a real goal beats picking a round number out of thin air."] },
      { h: "The DIME method is a useful, if imperfect, checklist", p: ["A lot of agents use something called the DIME formula: Debts, Income replacement, Mortgage, and Education costs for your kids. You add those up and you have a rough ceiling. I like it as a starting checklist because it forces you to think about each category separately instead of guessing. The weakness is that it can push you toward more coverage than you need if you are not careful to subtract the assets you already have.", "For example, if you have a solid emergency fund, a paid-off car, and a 401k your spouse could tap, those things reduce the gap your life insurance needs to fill. I have talked to plenty of people in the Conejo Valley who already had enough savings to cover several of the DIME categories and really only needed a modest policy to handle the mortgage and a few years of living expenses. Knowing what you already have is just as important as knowing what you owe."] },
      { h: "When less is more, and when people underestimate", p: ["Not everyone needs a large policy. Single adults with no dependents and no co-signed debts often need very little, maybe just enough to cover burial costs and any remaining student loans. Retirees who have already paid off their home and built up savings sometimes find that a small final expense policy is all that makes sense. I will always tell you when I think a smaller policy fits better, because overselling someone protection they do not need is not something I am willing to do.", "On the other side, young parents tend to underestimate their needs significantly. Child care, a stay-at-home spouse's economic contribution, and future tuition costs add up faster than people expect. A fifteen-minute conversation about your actual monthly budget and your family's plans usually surfaces numbers that a quick online calculator misses. If you are not sure where you land, that conversation costs you nothing and it tends to clear things up quickly."] },
    ],
    related: [
      { href: "/learn/how-much-does-life-insurance-cost", label: "How much does life insurance cost?" },
      { href: "/learn/term-life-vs-whole-life-insurance", label: "Term life vs. whole life: which one do you need?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "do-i-need-a-medical-exam-for-life-insurance",
    question: "Do I need a medical exam to get life insurance?",
    dek: "Learn when a medical exam is required for life insurance, when you can skip it, and how to decide which path makes sense for your situation.",
    updated: "2026-06-20",
    answer: "No, you do not always need a medical exam to get life insurance. Many policies today are issued through a process called accelerated or simplified underwriting, which uses data and health questions instead of a paramedical exam. That said, fully underwritten policies that do require an exam often come with lower premiums and higher coverage amounts, so skipping the exam is not always the better deal. The right answer depends on your age, health, how much coverage you need, and how quickly you need it in force.",
    sections: [
      { h: "Two main paths: exam required vs. no-exam", p: ["When you apply for life insurance, the insurance company needs to figure out how much risk they are taking on by covering you. The traditional way to do that is a fully underwritten application, which includes a paramedical exam. A technician comes to your home or office, usually at no cost to you, and checks your blood pressure, height, weight, and draws a small blood and urine sample. The whole thing takes about 30 minutes. The insurer then reviews those results alongside your medical records and driving history before making a decision. This process can take several weeks, but it usually unlocks the best available rates and the highest coverage amounts, often into the millions of dollars.", "The no-exam path has grown a lot in recent years. Simplified issue policies ask you a short list of health questions but skip the bloodwork. Accelerated underwriting uses third-party data sources, like prescription history and motor vehicle records, to make a decision quickly, sometimes within minutes or hours. These policies can be a great fit if you are in reasonably good health and want coverage in place fast. Final expense insurance, which is a smaller whole-life policy aimed at covering end-of-life costs, often has very lenient underwriting and is designed for older adults or people with health conditions who might not qualify elsewhere."] },
      { h: "When skipping the exam makes sense, and when it does not", p: ["No-exam coverage is often a good fit if you are younger and in good health and just want a straightforward term policy without the waiting period. It can also make sense if you have a specific time crunch, like a lender requiring you to show proof of coverage quickly. And if you have a health history that might complicate a full exam, some simplified-issue or guaranteed-issue products are specifically designed to give you options.", "On the other hand, if you are looking for a large death benefit, say $500,000 or more, many insurers will still require a full exam before they will offer you their best rates. Taking the exam when you are healthy is usually worth it because the savings over a 20 or 30 year term can be significant. I always tell people: do not assume the no-exam route is the easier or cheaper route. Sometimes it is, and sometimes a 30-minute appointment saves you a meaningful amount of money every single month for decades."] },
      { h: "A few things worth knowing before you decide", p: ["Your age plays a big role here. Carriers generally have more appetite for no-exam policies on younger applicants, sometimes up to age 60, but the cutoffs and rules vary. California and Texas both have a healthy market for no-exam products, so you usually have real choices no matter which state you are in.", "The best move is to compare both options side by side. Get a quote assuming you would take the exam, and get a quote for an accelerated or simplified product, and look at both the cost and the coverage amount. If the numbers are close, skipping the exam is convenient. If there is a big gap, the exam is probably worth your afternoon. I am happy to walk through that comparison with anyone who reaches out, no pressure either way."] },
    ],
    related: [
      { href: "/learn/how-much-does-life-insurance-cost", label: "How much does life insurance cost?" },
      { href: "/learn/what-is-final-expense-insurance", label: "What is final expense insurance, and is it worth it?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "life-insurance-with-a-pre-existing-condition",
    question: "Can I get life insurance with a pre-existing health condition?",
    dek: "A pre-existing health condition does not automatically disqualify you from life insurance, though it may affect your options and cost.",
    updated: "2026-06-23",
    answer: "Yes, you can usually get life insurance with a pre-existing health condition. The condition, how well it is managed, and how long ago it was diagnosed all factor into what a carrier will offer you. Some people qualify for standard or even preferred coverage, while others do better with products designed for higher-risk applicants. The short version: do not assume you are uninsurable until you have actually looked.",
    sections: [
      { h: "What counts as a pre-existing condition, and why does it matter?", p: ["Insurers broadly define a pre-existing condition as any health issue that existed before you applied, whether that is Type 2 diabetes, heart disease, high blood pressure, a history of cancer, sleep apnea, or dozens of other diagnoses. During underwriting, the carrier is trying to estimate risk. A condition that is well-controlled with medication and has been stable for several years looks very different to an underwriter than the same condition that is newly diagnosed or poorly managed.", "That does not mean a rough health history closes every door. It usually means the carrier adjusts the price, puts a temporary rating on your policy, or in some cases excludes a specific cause of death. Each company weighs conditions differently, which is one reason working with an independent agent matters. I can shop your situation across multiple carriers instead of being locked into one company's guidelines."] },
      { h: "What types of policies are available if standard underwriting turns you down?", p: ["If a fully underwritten term or whole life policy is not accessible right now, there are other options worth knowing about. Simplified issue policies skip the medical exam and ask only a short health questionnaire. Guaranteed issue policies ask no health questions at all and approve virtually everyone within a certain age range, usually 45 to 85. Final expense insurance is a common example of a guaranteed or simplified issue product, and it is specifically designed to cover end-of-life costs when other coverage is hard to get.", "The trade-off with these products is real: the death benefit is smaller (often in the range of a few thousand to around twenty-five thousand dollars), the premiums are higher per dollar of coverage, and most include a graded benefit period, usually two years, during which a non-accidental death pays back premiums plus interest rather than the full face amount. For someone whose options are limited, that coverage can still mean a great deal to their family."] },
      { h: "Practical steps if you have a health condition and want coverage", p: ["First, gather your records. Knowing your diagnosis date, current medications, A1C or other relevant numbers, and the name of your treating physician helps underwriting move faster and can actually work in your favor if your condition is well-managed. A controlled A1C or a clean post-treatment scan tells a better story than silence.", "Second, be honest on your application. Misrepresenting your health is called material misrepresentation, and it can give a carrier grounds to deny a claim when your family needs that money most. I have seen what happens to families in probate when assets get tied up because paperwork was not handled correctly. A denied life insurance claim is a different kind of heartbreak, and it is avoidable. Tell the truth, let me find the carrier whose underwriting fits your situation, and you will be in a much better position."] },
    ],
    related: [
      { href: "/learn/what-is-final-expense-insurance", label: "What is final expense insurance, and is it worth it?" },
      { href: "/learn/do-i-need-a-medical-exam-for-life-insurance", label: "Do I need a medical exam to get life insurance?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
  {
    slug: "is-life-insurance-through-work-enough",
    question: "Is the life insurance from my job enough?",
    dek: "Group life insurance through work is a great starting point, but for most people with dependents it is not enough coverage on its own.",
    updated: "2026-06-30",
    answer: "For most people with a family to support, the life insurance offered through your job is not enough on its own. Group coverage is usually capped at one to two times your annual salary, and financial planners generally suggest having closer to ten to twelve times your income in coverage. The bigger issue is that you do not own that policy, your employer does, and if you leave the job or get laid off, the coverage usually disappears with it.",
    sections: [
      { h: "What group life insurance at work actually gives you", p: ["Most employers who offer life insurance give you what is called group term coverage. The benefit is often one times your annual salary, sometimes two times if you are lucky, and some employers let you buy supplemental coverage on top of that. The premium is either free or very low, which makes it feel like a solid deal, and it is, as far as it goes. You usually do not need a medical exam to enroll, which is genuinely valuable if you have health issues.", "The catch is that the benefit amount is tied to your salary, not to what your family would actually need to replace your income, pay off a mortgage, cover childcare, or keep the kids in school. A salary of sixty thousand dollars a year sounds like a lot of life insurance until you run the real numbers on what your household would need over ten or twenty years."] },
      { h: "The portability problem nobody talks about until it is too late", p: ["Here is the thing that worries me most about relying entirely on work coverage. You do not own that policy. Your employer does. If you get laid off, change jobs, retire early, or your company goes through a restructuring, that coverage can end immediately. Some plans offer a conversion option, meaning you can convert to an individual policy without proving insurability, but the converted policy is often expensive and the window to act is short, usually around thirty days.", "I have seen this play out in hard ways. Someone loses a job in their fifties, maybe after a health scare, and suddenly they are trying to get individual coverage when they are older and their health has changed. Buying your own term policy while you are young and healthy locks in your rate and your coverage no matter what happens with your employer."] },
      { h: "So what should you actually do?", p: ["Think of the group coverage at work as a bonus layer, not the foundation. If you have a spouse, kids, a mortgage, or anyone who depends on your income, it makes sense to have your own individual policy underneath it. Term life insurance is usually the most affordable way to build that foundation, and rates are often lower than people expect, especially if you are in your twenties, thirties, or early forties and reasonably healthy.", "A good starting exercise is to add up your mortgage balance, the years of income your family would need to replace, any debts, and future costs like college. Compare that number to what your employer provides. The gap is what you need to fill. If you want help thinking through that math, I am happy to walk through it with you. No pressure, just a conversation."] },
    ],
    related: [
      { href: "/learn/how-much-life-insurance-do-i-need", label: "How much life insurance do I actually need?" },
      { href: "/learn/how-much-does-life-insurance-cost", label: "How much does life insurance cost?" },
      { href: "/", label: "About Billy Lush: local life insurance" },
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
