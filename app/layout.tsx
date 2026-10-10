import type { Metadata, Viewport } from "next";
import {SITE_URL,SITE_DESCRIPTION,organizationLd,websiteLd,JsonLd,FEEDS} from "@/lib/seo";
import "./fonts.css";
import {BookCallModal} from "@/components/booking/BookCall";
import "./globals.css";
import "./midnight.css";
import "./editorial.css";
import "./navigation-glass.css";
import "./homepage-refinement.css";
import "./answer-hero.css";
import "./polish-oct.css";
import "./perf-polish.css";
import { SiteTheme } from "./theme";
export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {default: "Nakama Growth — Be the brand they already know.", template: "%s — Nakama Growth"},
 description: SITE_DESCRIPTION,
 applicationName: "Nakama Growth",
 alternates: {canonical: "/", types: FEEDS},
 openGraph: {type: "website", siteName: "Nakama Growth", locale: "en_IN", url: "/", title: "Nakama Growth — Be the brand they already know.", description: SITE_DESCRIPTION},
 twitter: {card: "summary_large_image", title: "Nakama Growth — Be the brand they already know.", description: SITE_DESCRIPTION},
 icons: {icon: [{url: "/brand/nakama-favicon.svg", type: "image/svg+xml"}, {url: "/brand/icon-48.png", sizes: "48x48", type: "image/png"}, {url: "/brand/icon-96.png", sizes: "96x96", type: "image/png"}, {url: "/brand/icon-192.png", sizes: "192x192", type: "image/png"}], apple: [{url: "/brand/apple-touch-icon-180.png", sizes: "180x180"}]},
 robots: {index: true, follow: true, googleBot: {index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1}},
 verification: {google: "JMhvuB4Jbw7O0z011S4vD2yakTWoNid99_KNrOmIoGA"},
 formatDetection: {telephone: false, email: false, address: false},
};
export const viewport: Viewport = {width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0c0b0d", colorScheme: "dark"};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" data-theme="dark" style={{overflowX:"clip"}}><body><JsonLd data={[organizationLd,websiteLd]}/><SiteTheme>{children}</SiteTheme><BookCallModal/></body></html>;
}