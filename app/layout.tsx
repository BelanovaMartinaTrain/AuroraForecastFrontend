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
                property="og:image"
                content="https://cdn.pixabay.com/photo/2023/10/28/20/40/ai-generated-8348348_960_720.png"
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
