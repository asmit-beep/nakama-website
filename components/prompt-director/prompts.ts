import type { ComponentType, SVGProps } from "react";
import { Icons } from "./icons";

export type Chip = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  short: string;
  full: string;
};

export const PROMPT_ROWS: Chip[][] = [
  [
    {
      Icon: Icons.Search,
      short: "“best project management software”",
      full: "best project management software for a B2B SaaS team that needs AI-native workflows",
    },
    {
      Icon: Icons.Sparkles,
      short: "“best AI-native proposal software”",
      full: "best AI-native proposal software for closing enterprise deals faster",
    },
    {
      Icon: Icons.Pen,
      short: "“best AI writing software”",
      full: "best AI writing software for GTM teams that publish in communities and answer engines",
    },
    {
      Icon: Icons.Users,
      short: "“best CRM for B2B SaaS”",
      full: "best CRM for B2B SaaS companies selling into mid-market and enterprise",
    },
    {
      Icon: Icons.Radar,
      short: "“best AI search SEO tools”",
      full: "best SEO tools for AI search, ChatGPT answers and citation tracking",
    },
    {
      Icon: Icons.Layers,
      short: "“best knowledge base software”",
      full: "best knowledge base software for product teams that want to be cited in AI answers",
    },
  ],
  [
    {
      Icon: Icons.SearchCheck,
      short: "“best AI citation tracking”",
      full: "best AI citation tracking to see when a brand is named in ChatGPT, Perplexity and Gemini",
    },
    {
      Icon: Icons.Message,
      short: "“best community marketing platform”",
      full: "best community marketing platform for Reddit, Slack and niche forums",
    },
    {
      Icon: Icons.Zap,
      short: "“best GTM software”",
      full: "best go-to-market software for an AI-native growth team",
    },
    {
      Icon: Icons.BarChart,
      short: "“best competitive intel tools”",
      full: "best competitive intelligence tools for tracking AI-native SaaS rivals",
    },
    {
      Icon: Icons.Flame,
      short: "“best product-led growth tools”",
      full: "best product-led growth tools for a SaaS company expanding through self-serve",
    },
    {
      Icon: Icons.Bot,
      short: "“best AI answer monitoring”",
      full: "best AI answer monitoring to know when buyers hear your name in model replies",
    },
  ],
  [
    {
      Icon: Icons.Megaphone,
      short: "“best Reddit marketing software”",
      full: "best Reddit marketing software for earning placements without looking like an ad",
    },
    {
      Icon: Icons.Bot,
      short: "“best ChatGPT visibility tools”",
      full: "best ChatGPT visibility tools for brands that want to show up in AI answers",
    },
    {
      Icon: Icons.Scan,
      short: "“best sales enablement platform”",
      full: "best sales enablement platform for teams selling technical SaaS",
    },
    {
      Icon: Icons.Quote,
      short: "“best customer research tools”",
      full: "best customer research tools for mining forums, calls and review sites",
    },
    {
      Icon: Icons.Share,
      short: "“best content distribution software”",
      full: "best content distribution software for placing writing where buyers already research",
    },
    {
      Icon: Icons.Search,
      short: "“best brand mention tracking”",
      full: "best brand mention tracking across AI answers, search and communities",
    },
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
