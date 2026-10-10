import type { Metadata } from "next";
import "./fonts.css";
import {BookCallModal} from "@/components/booking/BookCall";
import "./globals.css";
import "./midnight.css";
import "./editorial.css";
import "./navigation-glass.css";
import "./homepage-refinement.css";
import "./answer-hero.css";
import "./polish-oct.css";
import { SiteTheme } from "./theme";
export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.nakama.in"),
 openGraph: {type: "website", siteName: "Nakama Growth", title: "Nakama Growth — Be the brand they already know.", description: "Earned visibility across AI answers, search, communities, editorial and video."},
 twitter: {card: "summary_large_image", title: "Nakama Growth — Be the brand they already know.", description: "Earned visibility across AI answers, search, communities, editorial and video."},
 title: "Nakama Growth — Be the brand they already know.",
 description: "Your brand, everywhere that matters. Nakama builds earned visibility for SaaS brands across AI answers, search, communities, editorial and video.",
 icons: {icon: [{url: "/brand/nakama-favicon.svg", type: "image/svg+xml"}, {url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png"}], shortcut: "/favicon.svg", apple: [{url: "/brand/apple-touch-icon-180.png", sizes: "180x180"}]},
 robots: {index: false, follow: false},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" data-theme="dark" style={{overflowX:"clip"}}><body><SiteTheme>{children}</SiteTheme><BookCallModal/></body></html>;
}