import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aurora Forecast",
    description:
        "Web-app to get accurate and easy to read aurora forecast data",
    icons: "/favicons/favicon.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta
                property="og:url"
                content="https://aurora-forecast-frontend.vercel.app/"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Aurora Forecast" />
            <meta
                property="og:description"
                content="Web-app to get accurate and easy to read aurora forecast data"
            />
            <meta
                property="og:image"
                content="https://opengraph.b-cdn.net/production/documents/a7a40c4a-83bd-4cb5-a18d-3913af33a64c.jpg?token=A-yvlxWcRMD7HWkI79fjuIt6B7s2-6NvKKLo70nCU7A&height=1500&width=1200&expires=33244787708"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:domain"
                content="aurora-forecast-frontend.vercel.app"
            />
            <meta
                property="twitter:url"
                content="https://aurora-forecast-frontend.vercel.app/"
            />
            <meta name="twitter:title" content="Aurora Forecast" />
            <meta
                name="twitter:description"
                content="Web-app to get accurate and easy to read aurora forecast data"
            />
            <meta
                name="twitter:image"
                content="https://opengraph.b-cdn.net/production/documents/a7a40c4a-83bd-4cb5-a18d-3913af33a64c.jpg?token=A-yvlxWcRMD7HWkI79fjuIt6B7s2-6NvKKLo70nCU7A&height=1500&width=1200&expires=33244787708"
            />

            <body className={quicksand.className}>
                <Providers>
                    <Header />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
