export const profile = {
  name: "Nitai Perez",
  label: "A working README",
  edition: "0.5",
  status: "Draft for discussion — not published",
  thesis: "I want to understand the world well enough to be useful in it.",
  introduction:
    "I’m Nitai: a father and partner first, then a builder, cook, diver, tinkerer, and someone who is curious about more things than he has time for. I care about being present, doing things properly, and making the path a little easier for the people who come after me. Work is part of that story, but it is not the beginning of it.",
};

export const recurringThemes = [
  "Family",
  "Curiosity",
  "Practical care",
  "Things made well",
];

export const principles = [
  {
    id: "life-at-the-centre",
    kicker: "Life",
    title: "Keep the important things at the centre",
    lede: "A full calendar and a full life are not the same thing.",
    paragraphs: [
      "Family is the centre of my life. I want to be an involved father and partner, not someone who loves his family mostly from a distance while doing impressive things elsewhere.",
      "I am ambitious, and I like difficult work. I do not think either requires treating the rest of life as an interruption. The harder and more interesting challenge is to make room for depth, responsibility, and presence at the same time.",
      "There will be exceptional weeks. They should remain exceptional. If everything is always urgent, the problem is no longer commitment; it is the way the system has been designed.",
    ],
    notes: [
      {
        label: "A useful measure",
        detail:
          "Success should still look like a life I would want to be present for.",
      },
      {
        label: "Not the goal",
        detail: "Becoming very efficient at being absent.",
      },
    ],
  },
  {
    id: "stay-curious",
    kicker: "Curiosity",
    title: "Follow the question a little further",
    lede: "The world becomes more generous when you keep asking how it works.",
    paragraphs: [
      "I have a hard time leaving a question alone when something does not quite make sense. I want the model beneath the details: the boundaries, the forces at work, and the few things that remain true when everything superficial changes.",
      "That instinct appears everywhere. It is why I can lose an evening to a cooking technique, a home system, a piece of technology, or some tiny question no reasonable person needed investigated. Diving offers the opposite pleasure: a world that does not care how quickly I can explain it.",
      "Depth is not automatically virtue. Sometimes a short answer really is enough. But life would be poorer if usefulness were the only reason to learn something.",
    ],
    notes: [
      {
        label: "What I enjoy",
        detail: "The moment a pile of details turns into an explanation.",
      },
      {
        label: "A recurring risk",
        detail: "Turning every interesting question into infrastructure.",
      },
    ],
  },
  {
    id: "care-is-practical",
    kicker: "Care",
    title: "Make care practical",
    lede: "Attention is one of the quietest ways we change another person’s day.",
    paragraphs: [
      "Care, for me, often looks practical: remembering the detail, noticing what will be needed, thinking ahead, removing a small obstacle, or making something easier without being asked.",
      "Not every difficult moment is a problem waiting to be engineered away. Sometimes the useful thing is a solution; sometimes it is patience, sympathy, or simply staying beside someone. The important part is noticing the person rather than reaching automatically for the tool I know best.",
      "I value directness for the same reason. ‘Yes’, ‘no’, and ‘I will know by Thursday’ are all kind answers when they are true. Clarity gives other people something solid to stand on.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail: "People feel considered, not managed.",
      },
      {
        label: "Easy to forget",
        detail: "Being useful begins with paying attention.",
      },
    ],
  },
  {
    id: "understand-the-problem",
    kicker: "Understanding",
    title: "Understand the problem, not only the task",
    lede: "Complexity is real. Confusion is not an unavoidable property of it.",
    paragraphs: [
      "A task can be completed without understanding the system around it. That may be enough for today, but it rarely helps with tomorrow. I ask many questions because I want to know which complexity belongs to the problem and which complexity came from choices we can change.",
      "Good explanations create freedom. Once people share a useful model, they can make decisions in situations nobody predicted, without waiting for a new set of instructions every time the scenery changes.",
      "This is as true for organisations as it is for software. The details stop feeling arbitrary when the shape underneath them becomes visible.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "The model explains the details instead of merely cataloguing them.",
      },
      {
        label: "Watch for",
        detail: "A long list of exceptions standing in for an explanation.",
      },
    ],
  },
  {
    id: "think-for-yourself",
    kicker: "Judgment",
    title: "Think for yourself—and leave room to be wrong",
    lede: "Agreement is comfortable. It is not the same as alignment, and alignment is not the same as truth.",
    paragraphs: [
      "I do not want people to optimise for agreeing with me. Hierarchy has a way of turning suggestions into instructions and opinions into facts; some of mine will be wrong. Form a view, explain it, and change it when the evidence changes.",
      "Independent thought is not endless debate. Once the relevant views have been heard and a decision is made, we should usually commit and move. New information can justify changing direction. Discomfort alone usually should not.",
      "The organisations I admire are not collections of people waiting to be correct on command. They understand enough, care enough, and trust one another enough to exercise judgment close to the work.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "The best answer can win without a person needing to win the argument.",
      },
      {
        label: "Watch for",
        detail: "Analysis that has quietly become fear of choosing.",
      },
    ],
  },
  {
    id: "leave-things-better",
    kicker: "Stewardship",
    title: "Leave things better than you found them",
    lede: "The immediate result matters. What remains after it matters too.",
    paragraphs: [
      "A clear note, better name, safer default, small script, or one removed step can keep the next person from paying the same cost. Repeated friction is information; becoming good at tolerating it is not the same as solving it.",
      "This is not a demand to build a platform for every inconvenience. Do the five-minute task when it is only a five-minute task. When it appears every week—or ten people must rediscover the same answer—the balance changes.",
      "Ownership, to me, means caring about the outcome beyond the edge of the ticket or team. It is not possession and it is not heroics. It is helping an important problem reach the context, authority, and attention it needs instead of letting it disappear between boundaries.",
      "Craft belongs here too. Names, interfaces, defaults, documents, and explanations shape the environment everyone inhabits. The work should feel considered, not endlessly polished—and it should be made at a pace people can sustain.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "Experience becomes structure instead of private knowledge or individual heroics.",
      },
      {
        label: "Help I value",
        detail:
          "Tell me when the remaining polish is worth less than moving on.",
      },
    ],
  },
] as const;

export const workingContract = [
  {
    situation: "Direction",
    fromMe:
      "Context, constraints, a desired outcome, and clarity on whether I am exploring, suggesting, or deciding.",
    fromYou:
      "Use your judgment. Challenge the premise when you see a better path; do not optimise for agreement.",
  },
  {
    situation: "Risk",
    fromMe:
      "Support when reality changes, without treating a changed plan as a personal failure.",
    fromYou:
      "Say difficult things early. You do not need certainty or a complete solution before raising a concern.",
  },
  {
    situation: "Disagreement",
    fromMe:
      "A real hearing for evidence and dissent, followed by a clear decision when discussion has done its job.",
    fromYou:
      "Be direct and precise. Once we decide, commit unless new information changes the decision.",
  },
  {
    situation: "Feedback",
    fromMe:
      "Honest feedback, useful context, public credit, and protection when the situation becomes difficult.",
    fromYou:
      "Tell me when I am creating noise, avoiding a decision, or stepping too deeply into something you own.",
  },
  {
    situation: "Mistakes",
    fromMe:
      "Make the situation safe first; then look for learning and action rather than someone to carry the discomfort.",
    fromYou:
      "Be accountable: help understand what happened and leave behind a system less likely to repeat it.",
  },
] as const;

export const smallThings = [
  "I think out loud. A half-formed thought from me can sound like an instruction, so ask when the difference is unclear.",
  "I will happily learn much more than necessary about a small question. Sometimes this is useful. It is nearly always interesting.",
  "Cooking appeals to the same part of me as engineering: constraints, technique, iteration, and then something people can share around a table.",
  "Diving is a welcome lesson in entering a world on its terms rather than expecting it to adapt to mine.",
  "I like homes and tools that quietly remove friction, though I occasionally create a great deal of friction while arranging this.",
  "I value clarity more than social vagueness. A truthful answer delivered kindly is usually a good place to begin.",
] as const;

export const links = [
  { label: "Personal site", href: "https://nit.ai" },
  { label: "Cookbook", href: "https://cook.nit.ai" },
  { label: "GitHub", href: "https://github.com/selfish" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitaijperez" },
];
