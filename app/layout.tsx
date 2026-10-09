import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./midnight.css";
import "./editorial.css";
import "./navigation-glass.css";
import "./homepage-refinement.css";
import "./answer-hero.css";
import { SiteTheme } from "./theme";
export const metadata: Metadata = {
 title: "Nakama Growth — Be the brand they already know.",
 description: "Your brand, everywhere that matters. Nakama builds earned visibility for SaaS brands across AI answers, search, communities, editorial and video.",
 icons: {icon: [{url: "/brand/nakama-favicon.svg", type: "image/svg+xml"}, {url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png"}], shortcut: "/favicon.svg", apple: [{url: "/brand/apple-touch-icon-180.png", sizes: "180x180"}]},
 robots: {index: false, follow: false},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" data-theme="dark" style={{overflowX:"clip"}}><body><SiteTheme>{children}</SiteTheme></body></html>;
}