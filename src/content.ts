export const profile = {
  name: "Nitai Perez",
  label: "A working README",
  edition: "0.2",
  status: "Draft for discussion — not published",
  thesis: "I build engineering organizations that can think for themselves.",
  introduction:
    "This is a working model of how I see leadership, engineering, and the systems around both. The language is provisional; the underlying questions are the point.",
};

export const systemLoop = ["Context", "Authority", "Decisions", "Feedback"];

export const principles = [
  {
    id: "decision-system",
    kicker: "Systems, not heroes",
    title: "An organization is a decision-making system.",
    lede: "Software is the visible output. The deeper product is the environment that decides what to build, notices when it is wrong, and changes course without waiting for rescue.",
    paragraphs: [
      "I care about how context travels, where authority sits, how disagreement becomes a decision, and whether feedback changes the system. Healthy paths let teams move with judgment instead of permission.",
      "A group that routes every consequential call through one person can look controlled. Usually it is just queued. The interesting question is not whether a leader made a good decision, but whether the organization is becoming better at making the next one.",
    ],
    notes: [
      {
        label: "Design test",
        detail:
          "Can the decision be made where the freshest information lives?",
      },
      {
        label: "Failure mode",
        detail: "Escalation becomes the default interface to leadership.",
      },
    ],
  },
  {
    id: "ownership",
    kicker: "The architecture of ownership",
    title: "Ownership is not an assignment. It is a shape.",
    lede: "Telling someone to own an outcome changes very little unless the surrounding system gives them the context, authority, boundaries, and feedback required to do it.",
    paragraphs: [
      "Responsibility without authority is ceremony. Authority without context is gambling. Useful ownership aligns both, then makes the edges explicit enough that people can act without guessing which invisible rule they are about to break.",
      "This is why I think ownership is architecture: it is expressed in interfaces, decision rights, review paths, and the distance between an observation and a response. The software often ships as a side effect of getting those relationships right.",
    ],
    notes: [
      {
        label: "Design test",
        detail:
          "Does the named owner control the trade-offs that determine the outcome?",
      },
      {
        label: "Failure mode",
        detail: "Accountability is clear only after something goes wrong.",
      },
    ],
  },
  {
    id: "leaders",
    kicker: "Running a team of leaders",
    title: "Leading leaders means designing the conditions they lead in.",
    lede: "The work moves from directing execution to improving the quality of independent leadership: shared context, honest standards, useful constraints, and room for different answers.",
    paragraphs: [
      "Consistency should come from a legible operating system, not from asking every leader to imitate the same personality. The aim is coherent judgment across teams without flattening the local knowledge that makes each team effective.",
      "That makes the group leader accountable for more than the sum of team plans. The boundaries between teams, the quality of their leaders, and the decisions that fall through the gaps are part of the product too. This wording still needs sharpening with real examples.",
    ],
    notes: [
      {
        label: "Design test",
        detail:
          "Can two leaders make different choices while remaining strategically coherent?",
      },
      {
        label: "Open edge",
        detail:
          "Define the accountability that exists between—not inside—the teams.",
      },
    ],
  },
  {
    id: "reality",
    kicker: "Information integrity",
    title: "Reality should travel faster than reassurance.",
    lede: "Bad news is usually cheapest when it first becomes true. A useful management system rewards early signal, clear disagreement, and changes of mind before certainty becomes expensive.",
    paragraphs: [
      "I want risks surfaced while there are still choices, feedback specific enough to act on, and dissent expressed in a form the decision can use. Agreement is pleasant; shared visibility is more valuable.",
      "The leader’s response teaches the system what to hide next time. Punish the messenger, demand confidence theatre, or confuse challenge with disloyalty, and the dashboards may improve while the organization becomes less knowable.",
    ],
    notes: [
      {
        label: "Design test",
        detail:
          "What happens to the first person who says the plan is not working?",
      },
      {
        label: "Failure mode",
        detail: "Status gets greener as confidence gets weaker.",
      },
    ],
  },
  {
    id: "engineering",
    kicker: "Engineering judgment",
    title: "Good engineering keeps the important options open.",
    lede: "Speed is not the number of decisions made per week. It is the rate of useful learning without accumulating consequences the organization can no longer understand or reverse.",
    paragraphs: [
      "I prefer small, observable, reversible steps when the terrain is uncertain. Irreversible choices deserve more evidence; reversible ones deserve less theatre. The distinction matters more than a blanket preference for moving fast or moving carefully.",
      "Technical quality is part of organizational design. Clear interfaces, boring failure modes, legible trade-offs, and systems that tell the truth reduce the amount of coordination required to do good work.",
    ],
    notes: [
      {
        label: "Design test",
        detail:
          "Will the system reveal a wrong assumption before the cost of changing it spikes?",
      },
      {
        label: "Failure mode",
        detail:
          "Process compensates for software nobody can safely reason about.",
      },
    ],
  },
] as const;

export const workingContract = [
  {
    situation: "Direction",
    fromMe: "Context, constraints, and a clear decision owner.",
    fromYou: "Challenge the premise before optimizing the task.",
  },
  {
    situation: "Risk",
    fromMe: "A response that makes early signal worth repeating.",
    fromYou: "Bring the uncomfortable version while choices still exist.",
  },
  {
    situation: "Disagreement",
    fromMe: "A call when another round of certainty costs too much.",
    fromYou:
      "Make the evidence and trade-off visible; do not hide the dissent.",
  },
  {
    situation: "Execution",
    fromMe: "Real authority inside explicit boundaries.",
    fromYou: "Own the user or system outcome, not only the ticket edge.",
  },
  {
    situation: "Memory",
    fromMe: "Decisions that outlive the room should be written down.",
    fromYou: "Leave the next person a system they can understand.",
  },
] as const;

export const openQuestions = [
  "What is a group leader accountable for that a team leader is not?",
  "Which behaviors earn trust quickly—and which damage it reliably?",
  "What deserves a meeting, and what deserves a durable written record?",
  "Where should teams optimize for consistency, and where for local judgment?",
  "Which leadership belief have I changed my mind about, and what changed it?",
] as const;

export const links = [
  { label: "Personal site", href: "https://nit.ai" },
  { label: "GitHub", href: "https://github.com/selfish" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitaijperez" },
];
