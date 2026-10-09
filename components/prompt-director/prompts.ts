import type { ComponentType, SVGProps } from "react";
import { Icons } from "./icons";

export type Chip = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  short: string;
  full: string;
};

// Real buyer questions from the categories Nakama's clients compete in
// across many kinds of business: software, D2C, local services, education and travel.
export const PROMPT_ROWS: Chip[][] = [
  [
    { Icon: Icons.Search, short: "“best local listings management software”", full: "best local listings management software for multi-location brands" },
    { Icon: Icons.Sparkles, short: "“best CRM for real estate agents”", full: "best CRM for a small real estate team that needs fast lead follow-up" },
    { Icon: Icons.Message, short: "“best internal communication platform”", full: "best internal communication platform for a frontline and hybrid workforce" },
    { Icon: Icons.Users, short: "“best PMP certification training”", full: "best PMP certification training with live instructor-led classes" },
    { Icon: Icons.Layers, short: "“best payroll software for startups”", full: "best payroll software for a 20-person startup with remote employees" },
    { Icon: Icons.Megaphone, short: "“best moisturiser for sensitive skin”", full: "best fragrance-free moisturiser for sensitive skin under ₹1,000" },
  ],
  [
    { Icon: Icons.SearchCheck, short: "“best project management tool for agencies”", full: "best project management tool for a 15-person creative agency" },
    { Icon: Icons.Radar, short: "“best reputation management software”", full: "best reputation management software for monitoring reviews across locations" },
    { Icon: Icons.Quote, short: "“Shopify vs WooCommerce”", full: "Shopify vs WooCommerce: which is better for a new D2C brand?" },
    { Icon: Icons.Share, short: "“best boutique hotel in Goa”", full: "best boutique hotel in Goa for a quiet weekend away" },
    { Icon: Icons.Zap, short: "“best accounting software for freelancers”", full: "best accounting software for freelancers who invoice in multiple currencies" },
    { Icon: Icons.Pen, short: "“best online coding bootcamp”", full: "best online coding bootcamp for working professionals switching careers" },
  ],
  [
    { Icon: Icons.BarChart, short: "“best cybersecurity training for employees”", full: "best cybersecurity awareness training for a 200-person company" },
    { Icon: Icons.Flame, short: "“best protein powder for beginners”", full: "best protein powder for beginners with no added sugar" },
    { Icon: Icons.Bot, short: "“best AI meeting notes app”", full: "best AI meeting notes app for sales calls" },
    { Icon: Icons.Scan, short: "“best dental clinic near me”", full: "best dental clinic for invisible aligners near me" },
    { Icon: Icons.Users, short: "“best HR software for small business”", full: "best HR software for a small business with hourly staff" },
    { Icon: Icons.Search, short: "“best Yext alternatives”", full: "best Yext alternatives for managing local listings" },
  ],
];


/** Connector nodes from cardboard: {x, y, corner} in a 1421×177 viewBox. */
export const NODES = [
  { x: 386, y: 115.5, corner: 282 },
  { x: 1105, y: 114.5, corner: 1140 },
  { x: 1031, y: 114.5, corner: 1140 },
  { x: 996, y: 166.5, corner: 1140 },
  { x: 301, y: 166.5, corner: 282 },
  { x: 434, y: 166.5, corner: 282 },
] as const;

export function burstDx(node: (typeof NODES)[number]) {
  const i = node.corner - node.x;
  const sign = Math.sign(i) || 1;
  return i + 10 * sign + (sign > 0 ? -3 : -4);
}
