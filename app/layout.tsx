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
            <meta property="og:image" content="<generated>" />
            <meta property="og:image:type" content="<generated>" />
            <meta property="og:image:width" content="<generated>" />
            <meta property="og:image:height" content="<generated>" />
            <body className={quicksand.className}>
                <Providers>
                    <Header />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
