export const profile = {
  name: "Nitai Perez",
  label: "A working README",
  status: "Draft for discussion — not published",
  thesis: "I build engineering organizations that can think for themselves.",
  introduction:
    "I’m a group leader working with leaders and teams. I try to make ownership real: clear context, explicit boundaries, and enough trust for decisions to happen without waiting for me.",
};

export const sections = [
  {
    id: "job",
    title: "How I see the job",
    paragraphs: [
      "My job is not to be the smartest person in every room. It is to help build a room that can make good decisions without me.",
      "Software is an outcome. The durable work is the system around it: people, responsibilities, feedback, and how quickly reality travels.",
    ],
  },
  {
    id: "expect",
    title: "What you can expect from me",
    items: [
      {
        term: "Context before instructions",
        detail:
          "I should explain the problem, the constraints, and why it matters—not only hand over a task.",
      },
      {
        term: "A clear call when one is needed",
        detail:
          "Debate is useful until delay costs more than another round of certainty. Then I will make or name the decision.",
      },
      {
        term: "Direct feedback",
        detail:
          "I will try to make feedback specific, timely, and about the work or behavior rather than the person.",
      },
      {
        term: "Room to own the outcome",
        detail:
          "If I ask you to own something, I should also make the boundaries and authority real.",
      },
    ],
  },
  {
    id: "ask",
    title: "What I ask from you",
    items: [
      {
        term: "Bring bad news early",
        detail:
          "A risk we can see is usually manageable. A risk hidden until the deadline is not.",
      },
      {
        term: "Disagree clearly",
        detail:
          "Say what you think, show the evidence, and make the trade-off visible. Agreement is not a prerequisite for trust.",
      },
      {
        term: "Own the whole result",
        detail:
          "Do not stop at the edge of a ticket when the actual user or system outcome is still broken.",
      },
    ],
  },
  {
    id: "defaults",
    title: "Working defaults",
    note: "These are defaults, not laws. Context wins, and I expect them to change as I learn.",
    items: [
      {
        term: "Write down decisions that will outlive the room",
        detail: "A short durable record beats a perfect memory of a meeting.",
      },
      {
        term: "Prefer small, reversible steps",
        detail:
          "Move quickly where we can undo the decision; slow down where we cannot.",
      },
      {
        term: "Make meetings earn their cost",
        detail:
          "Use them for decisions, disagreement, and shared understanding—not for reading status aloud.",
      },
    ],
  },
] as const;

export const links = [
  { label: "Personal site", href: "https://nit.ai" },
  { label: "GitHub", href: "https://github.com/selfish" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitai-perez" },
];
