import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import Header from "./_components/layoutComponents/Header";
import { Providers } from "./_context/providers";
import Footer from "./_components/layoutComponents/Footer";
import LocationAndWeatherContextProvider from "./_context/locationAndWeatherContext";
import HemisphereContextProvider from "./_context/hemisphereContext";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aurora Forecast",
    description: "Web-app to get accurate and easy to read aurora forecast data",
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
            <meta property="og:url" content="https://aurora-forecast-frontend.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Aurora Forecast" />
            <meta property="og:description" content="Web-app to get accurate and easy to read aurora forecast data" />
            <meta property="og:image" content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="aurora-forecast-frontend.vercel.app" />
            <meta property="twitter:url" content="https://aurora-forecast-frontend.vercel.app/" />
            <meta name="twitter:title" content="Aurora Forecast" />
            <meta name="twitter:description" content="Web-app to get accurate and easy to read aurora forecast data" />
            <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2023/11/01/18/32/mountains-8358708_1280.jpg" />

            <body className={`${quicksand.className} grid-main-layout grid-cols-1  h-[98vh]`}>
                <LocationAndWeatherContextProvider>
                    <Providers>
                        <HemisphereContextProvider>
                            <Header />
                            <main>
                                <div>{children}</div>
                            </main>
                        </HemisphereContextProvider>
                    </Providers>
                </LocationAndWeatherContextProvider>
                <Footer />
                <div className="text-[8px] text-stone-700  font-semibold mt-auto max-h-3 p-2 ">
                    Image generated by AI: author{" "}
                    <a
                        href="https://pixabay.com/users/evamichalkova-1091520/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8465061"
                        target="_blank"
                        area-label="navigate to the page of image author"
                    >
                        Eva Michálková
                    </a>{" "}
                    from{" "}
                    <a
                        href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8465061"
                        target="_blank"
                        area-label="navigate to the page of image hosting Pixabay"
                    >
                        Pixabay
                    </a>
                </div>
            </body>
        </html>
    );
}
