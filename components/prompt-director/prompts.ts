import type { ComponentType, SVGProps } from "react";
import { Icons } from "./icons";

export type Chip = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  short: string;
  full: string;
};

// Real buyer questions from the categories Nakama's clients compete in
// (local listings, RFP software, internal comms, certification training,
// link building, digital PR and SaaS SEO).
export const PROMPT_ROWS: Chip[][] = [
  [
    { Icon: Icons.Search, short: "“best local listings management software”", full: "best local listings management software for multi-location brands" },
    { Icon: Icons.Sparkles, short: "“best AI RFP software”", full: "best AI RFP software for proposal teams answering security questionnaires" },
    { Icon: Icons.Message, short: "“best internal communication platform”", full: "best internal communication platform for a frontline and hybrid workforce" },
    { Icon: Icons.Users, short: "“best PMP certification training”", full: "best PMP certification training in Bangalore with live instructor-led classes" },
    { Icon: Icons.Layers, short: "“best backlink management software”", full: "best backlink management software for agencies tracking hundreds of placements" },
    { Icon: Icons.Megaphone, short: "“best digital PR agencies”", full: "best digital PR agencies for B2B SaaS brands in 2026" },
  ],
  [
    { Icon: Icons.SearchCheck, short: "“best SEO agency for enterprise SaaS”", full: "best SEO agency for enterprise SaaS companies that need AI search visibility" },
    { Icon: Icons.Radar, short: "“best reputation management software”", full: "best reputation management software for monitoring reviews across locations" },
    { Icon: Icons.Quote, short: "“Loopio vs Responsive”", full: "Loopio vs Responsive vs an AI-native RFP tool: which should a lean team pick?" },
    { Icon: Icons.Share, short: "“best employee experience tools”", full: "best employee experience tools for internal communication and engagement" },
    { Icon: Icons.Zap, short: "“best link building CRM”", full: "best link building CRM for agencies running outreach at scale" },
    { Icon: Icons.Pen, short: "“best KnowledgeHut alternatives”", full: "best KnowledgeHut alternatives for PMP and Scrum certification" },
  ],
  [
    { Icon: Icons.BarChart, short: "“best white label link building”", full: "best white label link building agencies for SEO resellers" },
    { Icon: Icons.Flame, short: "“best listicle link building agency”", full: "top agencies for listicle link building in 2026" },
    { Icon: Icons.Bot, short: "“best proposal management software”", full: "best proposal management software for a B2B sales team" },
    { Icon: Icons.Scan, short: "“best Scrum Master certification”", full: "best Scrum Master certification course for working professionals" },
    { Icon: Icons.Users, short: "“best SaaS digital PR agency”", full: "best SaaS digital PR agency for earning placements in AI answers" },
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
