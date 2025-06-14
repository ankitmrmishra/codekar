import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codekar-sand.vercel.app"),
  title: {
    default: "CodeKar - Level Up Your Web Skills Through Real Challenges",
    template: "%s | CodeKar",
  },
  description:
    "Master frontend development through real challenges. Practice machine coding rounds, CSS battles, compete globally, and track your progress. Join thousands of developers leveling up their web skills.",
  keywords: [
    "frontend challenges",
    "web development",
    "coding practice",
    "CSS battles",
    "machine coding",
    "interview prep",
    "JavaScript challenges",
    "developer skills",
    "programming practice",
    "web skills",
  ],
  authors: [{ name: "CodeKar Team" }],
  creator: "CodeKar",
  publisher: "CodeKar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codekar-sand.vercel.app",
    siteName: "CodeKar",
    title: "CodeKar - Level Up Your Web Skills Through Real Challenges",
    description:
      "Master frontend development through real challenges. Practice machine coding rounds, CSS battles, compete globally, and track your progress.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CodeKar - Level Up Your Web Skills",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnkitMishraexe",
    creator: "@AnkitMishraexe",
    title: "CodeKar - Level Up Your Web Skills Through Real Challenges",
    description:
      "Master frontend development through real challenges. Practice machine coding rounds, CSS battles, compete globally, and track your progress.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://codekar-sand.vercel.app",
  },
  category: "technology",
  classification: "Web Development Platform",

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Theme color for browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CodeKar",
              description:
                "Master frontend development through real challenges. Practice machine coding rounds, CSS battles, compete globally, and track your progress.",
              url: "https://codekar-sand.vercel.app",

              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://codekar-sand.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black p-2`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
