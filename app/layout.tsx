import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./_components/layoutComponents/Header";
import { Providers } from "./_context/providers";
import Footer from "./_components/layoutComponents/Footer";
import LocationAndWeatherContextProvider from "./_context/locationAndWeatherContext";
import HemisphereContextProvider from "./_context/hemisphereContext";

const quicksand = Quicksand({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
    title: "Aurora Forecast",
    description: "Web-app to get accurate and easy to read aurora forecast data",
    icons: "/favicons/favicon.ico",
    keywords: "aurora northern lights forecast activity solar wind hemisphere bz bt density speed kp geomagnetic storm graph",

    metadataBase: new URL("https://cdn.pixabay.com/"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta property="og:url" content="https://auroraforecast.online/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Aurora Forecast" />
            <meta property="og:description" content="Web-app to get accurate and easy to read aurora forecast data" />
            <meta property="og:image" content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="aurora-forecast-frontend.vercel.app" />
            <meta property="twitter:url" content="https://auroraforecast.online/" />
            <meta name="twitter:title" content="Aurora Forecast" />
            <meta name="twitter:description" content="Web-app to get accurate and easy to read aurora forecast data" />
            <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg" />

            <body className={`${quicksand.className} grid-main-layout grid-cols-1  h-[98vh] `}>
                <LocationAndWeatherContextProvider>
                    <Providers>
                        <HemisphereContextProvider>
                            <Header />
                            <main className="mt-1 mx-auto max-w-3xl xl:max-w-[clamp(769px,60vw,1024px)]">
                                <div>{children}</div>
                            </main>
                        </HemisphereContextProvider>
                    </Providers>
                </LocationAndWeatherContextProvider>
                <Footer />
            </body>
        </html>
    );
}
