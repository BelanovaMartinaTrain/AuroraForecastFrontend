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

    metadataBase: new URL("https://cdn.pixabay.com/"),
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
                content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg"
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
                content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg"
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
