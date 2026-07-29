export interface WorkflowStep {
  index: string;
  title: string;
  description: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    index: "01",
    title: "Discovery",
    description: "We start by understanding the brand, the objective, and the audience the campaign needs to reach.",
  },
  {
    index: "02",
    title: "Research",
    description: "Ground-level and market research into routes, locations, formats, and audience movement patterns.",
  },
  {
    index: "03",
    title: "Strategy",
    description: "A media and messaging plan built around where and how the audience will actually encounter the brand.",
  },
  {
    index: "04",
    title: "Creative Design",
    description: "Visual identity and creative assets adapted for the specific medium \u2014 vehicle, wall, board, or space.",
  },
  {
    index: "05",
    title: "Production",
    description: "Print, fabrication, and material production, quality-checked before deployment.",
  },
  {
    index: "06",
    title: "Execution",
    description: "On-ground installation and activation, coordinated across every location in the plan.",
  },
  {
    index: "07",
    title: "Reporting",
    description: "Documentation and campaign reporting so performance and delivery are visible and accountable.",
  },
];
