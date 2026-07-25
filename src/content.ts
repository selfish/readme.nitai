export const profile = {
  name: "Nitai Perez",
  label: "A working README",
  edition: "0.3",
  status: "Draft for discussion — not published",
  thesis: "I build engineering organizations that can think for themselves.",
  introduction:
    "The sentence above and the two quoted phrases below are the source-backed starting points. The rest of this page asks what they mean in practice; it does not yet speak for Nitai.",
};

export const systemLoop = [
  "Public wording",
  "Owner answers",
  "Exact render",
  "Publication",
];

export const principles = [
  {
    id: "thinking-organizations",
    kicker: "Public starting point",
    title: "Engineering organizations that can think for themselves.",
    lede: "This is the clearest confirmed premise for the page. The useful version still needs to define what independent thought changes in decisions, team boundaries, and day-to-day leadership.",
    paragraphs: [
      "Which decisions should stay close to the people with the freshest information? What context and authority have to travel with those decisions? Where does independent judgment stop and group-level coherence begin?",
      "How would a teammate know that the organization is getting better at thinking rather than simply moving faster? The final copy needs observable examples, not a polished synonym for autonomy.",
    ],
    notes: [
      {
        label: "Source status",
        detail: "Confirmed public wording supplied in issue #1.",
      },
      {
        label: "Owner answer needed",
        detail:
          "Define the decisions, boundaries, and evidence that make the phrase concrete.",
      },
    ],
  },
  {
    id: "leaders",
    kicker: "Public starting point",
    title: "Running a team of leaders",
    lede: "The phrase establishes the current group-leader frame. It does not yet establish Nitai’s scope, operating model, or view of the difference between leading a team and leading through leaders.",
    paragraphs: [
      "What is a group leader accountable for that a team leader is not? Which responsibilities live between teams, and which remain with each leader? What must be consistent across the group, and where should local judgment win?",
      "The answer should help team leaders understand the room they have, the support they can expect, and the decisions that should not wait. None of those practices should be inferred before Nitai describes them.",
    ],
    notes: [
      {
        label: "Source status",
        detail: "Confirmed public framing supplied in issue #1.",
      },
      {
        label: "Current owner question",
        detail:
          "In one or two sentences, define the accountability unique to a group leader.",
      },
    ],
  },
  {
    id: "ownership",
    kicker: "Public starting point",
    title:
      "Ownership is the architecture; the software ships as a side effect.",
    lede: "This is confirmed source wording, not yet an approved explanation. The page needs to unpack what ‘ownership’ means without turning the phrase into generic management advice.",
    paragraphs: [
      "Does ownership mean decision rights, responsibility for outcomes, control of trade-offs, or something else? What context, authority, boundaries, and feedback would have to exist for the word to be useful rather than ceremonial?",
      "What should teammates expect when ownership crosses team boundaries or when the named owner cannot control the outcome? A concrete answer will matter more than adding another principle beside the phrase.",
    ],
    notes: [
      {
        label: "Source status",
        detail: "Confirmed public wording supplied in issue #1.",
      },
      {
        label: "Owner answer needed",
        detail:
          "Define ownership through decisions, trade-offs, and a real boundary case.",
      },
    ],
  },
] as const;

export const workingContract = [
  {
    situation: "Direction",
    fromMe:
      "What context, constraints, and decision ownership can people expect?",
    fromYou:
      "When should a teammate challenge the premise rather than execute it?",
  },
  {
    situation: "Risk",
    fromMe:
      "Which risks should reach Nitai immediately, and through which path?",
    fromYou:
      "What does ‘early enough’ look like before certainty is available?",
  },
  {
    situation: "Disagreement",
    fromMe:
      "How does Nitai want evidence, dissent, and unresolved trade-offs presented?",
    fromYou:
      "When is a decision closed, and how should disagreement be recorded?",
  },
  {
    situation: "Feedback",
    fromMe:
      "What feedback cadence and level of directness should teammates expect?",
    fromYou:
      "How should feedback or bad news reach Nitai when the normal path fails?",
  },
  {
    situation: "Written work",
    fromMe:
      "Which decisions and context should survive the meeting that produced them?",
    fromYou:
      "What deserves a document, and what is better handled in conversation?",
  },
] as const;

export const openQuestions = [
  "How do you describe the group you lead without exposing confidential company details?",
  "What is a group leader accountable for that a team leader is not?",
  "What should teammates escalate immediately?",
  "How do you prefer disagreement and bad news to reach you?",
  "What are your meeting, written-document, and response-time defaults?",
  "What behavior earns trust, and what reliably damages it?",
  "Is there a leadership belief you have changed your mind about? If so, what changed it?",
  "Which public projects and contact paths belong here?",
] as const;

// These destinations are publicly linked from nit.ai. Their inclusion here and any
// machine-readable identity association still require owner approval.
export const links = [
  { label: "Personal site", href: "https://nit.ai" },
  { label: "GitHub", href: "https://github.com/selfish" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitaijperez" },
];
