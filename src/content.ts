export const profile = {
  name: "Nitai Perez",
  label: "A working README",
  edition: "0.4",
  status: "Draft for discussion — not published",
  thesis: "Build judgment, not dependence.",
  introduction:
    "I care about teams that think for themselves, understand the problem beneath the task, and leave the path easier for whoever comes next. This is a working account of the environment I try to create—and of the ways I can make it harder than intended.",
};

export const systemLoop = [
  "Understand the problem",
  "Choose and commit",
  "Learn from the work",
  "Leave the system stronger",
];

export const principles = [
  {
    id: "think-for-yourself",
    kicker: "Judgment",
    title: "Think for yourself",
    lede: "Agreement is comfortable. It is not the same as alignment, and alignment is not the same as truth.",
    paragraphs: [
      "I do not want people to optimise for agreeing with me. Hierarchy has a way of turning suggestions into instructions and opinions into facts; some of mine will be wrong. Form a view, explain it, and change it when the evidence changes.",
      "Discussion still needs an end. Once the relevant views have been heard and a decision is made, we should usually commit and move. New information can justify changing direction. Discomfort alone usually should not.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail: "The best answer wins; no person needs to win the argument.",
      },
      {
        label: "Watch for",
        detail: "Analysis that has quietly become fear of choosing.",
      },
    ],
  },
  {
    id: "understand-the-problem",
    kicker: "Understanding",
    title: "Understand the problem, not only the task",
    lede: "Complexity is real. Confusion is not an unavoidable property of it.",
    paragraphs: [
      "I tend to ask many questions because I want the model underneath the details: the boundaries, the things that remain true when the implementation changes, and the complexity that belongs to the problem rather than to choices we made.",
      "A task can be completed without understanding the system around it. That may be enough for today, but it rarely scales. Understanding creates judgment—and makes the next problem possible without waiting for exact instructions.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "The details stop being surprising because the model explains them.",
      },
      {
        label: "Watch for",
        detail: "A long list of exceptions standing in for an explanation.",
      },
    ],
  },
  {
    id: "leave-the-path-easier",
    kicker: "Leverage",
    title: "Leave the path easier",
    lede: "Solving the immediate problem matters. Keeping the learning matters too.",
    paragraphs: [
      "A short note, clearer interface, small script, safer default, or one removed step can prevent the next person from paying the same cost. Repeated friction is information; we should not merely become better at tolerating it.",
      "This is not a request to build a platform for every inconvenience. Do the five-minute task when it is only a five-minute task. When it appears every week—or ten people must rediscover the same answer—the balance changes.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail: "Experience becomes structure instead of individual heroics.",
      },
      {
        label: "Watch for",
        detail:
          "Automation whose maintenance costs more than the friction it removes.",
      },
    ],
  },
  {
    id: "ownership-is-outcomes",
    kicker: "Ownership",
    title: "Care about the outcome",
    lede: "Ownership is useful because someone must make sure a problem moves. It is not a border around where everyone else stops caring.",
    paragraphs: [
      "A customer problem does not become less real because it sits between teams. This does not mean everyone should solve everything; it means helping the problem find the right owner, context, and attention.",
      "For me, ownership is less about possessing an area and more about refusing to let an important outcome quietly fall through the gaps.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "The problem reaches a person who has the context and authority to move it.",
      },
      {
        label: "Watch for",
        detail: "Tickets and team boundaries becoming reasons not to care.",
      },
    ],
  },
  {
    id: "people-and-craft",
    kicker: "Standards",
    title: "Craft matters. People matter more.",
    lede: "There is a meaningful difference between something that works and something that is good. There is also a life beyond the work.",
    paragraphs: [
      "Names, interfaces, defaults, documentation, and explanations are not cosmetic. Small amounts of friction and ambiguity accumulate until they become the environment everyone works inside. The work should feel considered—not endlessly polished.",
      "Difficult periods happen. They should remain meaningful exceptions. When every week requires unusual effort, the problem is no longer commitment; it is design. A healthy team should achieve difficult things without making exhaustion its identity.",
    ],
    notes: [
      {
        label: "What good looks like",
        detail:
          "Work we are proud to name, built at a pace people can sustain.",
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

export const aboutMe = [
  "I think out loud. A half-formed thought from me can sound like an instruction, so ask when the difference is unclear.",
  "I go deep when something does not make sense. This sometimes produces useful systems and sometimes produces a system for a five-minute problem.",
  "Care is practical for me: attention, remembering details, thinking ahead, and trying to make life easier. I am still learning when sympathy is more useful than a solution.",
  "Family is the centre of my life. I want difficult work to coexist with being an involved father and partner—not merely loving my family from a distance.",
  "I value clarity more than social vagueness. ‘Yes’, ‘no’, and ‘I will know by Thursday’ are all excellent answers.",
  "Outside work, the same tendencies turn into diving, cooking, home systems, technology, and learning much more than necessary about small questions.",
] as const;

export const links = [
  { label: "Personal site", href: "https://nit.ai" },
  { label: "Cookbook", href: "https://cook.nit.ai" },
  { label: "GitHub", href: "https://github.com/selfish" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitaijperez" },
];
