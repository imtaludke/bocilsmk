import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
    metadataBase: new URL("https://bocilsmk.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'VjCYpxRj05H9baPmltJUxa6zqHUdwDWoOatkFtSJ9jk',
        yandex: '48f28cf50fb13bff',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "logo": "https://bocilsmk.pages.dev/favicon.ico",
        "url": "https://bocilsmk.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bocilsmk.pages.dev"
            },
            "foundingDate":"2025-01-26"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bocilsmk.pages.dev",
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bocilsmk.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
