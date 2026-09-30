import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./midnight.css";
import "./editorial.css";
import "./navigation-glass.css";
import "./homepage-refinement.css";
import { SiteTheme } from "./theme";
export const metadata: Metadata = {
 title: "Nakama Growth — Be the brand they already know.",
 description: "Your brand, everywhere that matters. Nakama builds earned visibility for SaaS brands across AI answers, search, communities, editorial and video.",
 icons: {icon: "/favicon.svg", shortcut: "/favicon.svg"},
 robots: {index: false, follow: false},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" data-theme="dark" style={{overflowX:"clip"}}><body><SiteTheme>{children}</SiteTheme></body></html>;
}