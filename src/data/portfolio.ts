// PLACEHOLDER DATA
// Campaign photos, results, and case-study specifics are not yet confirmed by the client.
// Replace `image`, `metric`, and `summary` fields with verified campaign material before launch.

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  metricLabel: string;
  metricValue: string;
  isPlaceholder: true;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Auto Rickshaw Fleet Branding",
    category: "Vehicle & Transit",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Vehicles",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
  {
    id: "p2",
    title: "City Hoarding Campaign",
    category: "Outdoor",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Sites",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
  {
    id: "p3",
    title: "Retail Storefront Rollout",
    category: "Retail & Dealer",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Outlets",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
  {
    id: "p4",
    title: "Product Launch Activation",
    category: "Brand Activation",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Footfall",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
  {
    id: "p5",
    title: "Bus Branding Route Campaign",
    category: "Vehicle & Transit",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Routes",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
  {
    id: "p6",
    title: "Corporate Gifting Rollout",
    category: "Merchandise",
    summary: "Placeholder case study \u2014 campaign photos and results pending client confirmation.",
    metricLabel: "Units",
    metricValue: "\u2014",
    isPlaceholder: true,
  },
];
