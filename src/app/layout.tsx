import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { seoConfig } from "@/config/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.siteName}`
  },
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.siteUrl),
  keywords: [...seoConfig.keywords],
  authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  applicationName: seoConfig.siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico"
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": seoConfig.rssPath
    }
  },
  verification: {
    ...(seoConfig.verification.google
      ? { google: seoConfig.verification.google }
      : {}),
    ...(seoConfig.verification.bing
      ? { other: { "msvalidate.01": seoConfig.verification.bing } }
      : {})
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.openGraphImagePath,
        width: 1200,
        height: 630,
        alt: "Thiago Soares | Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.openGraphImagePath]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
