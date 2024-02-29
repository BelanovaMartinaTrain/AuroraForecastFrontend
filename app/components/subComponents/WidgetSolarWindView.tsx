"use client";

import { useEffect, useState } from "react";
import fetchData from "../../api/fetchData";
import ProgressBar from "../../ui/ProgressBar";
import Link from "next/link";

export default function WidgetViewSolarWind() {
    const [wind, setWind] = useState<string>();
    const [density, setDensity] = useState<string>();
    const [magField, setMagField] = useState({
        Bt: "",
        Bz: "",
    });
    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchWindStats() {
            setIsLoading(true);
            setError("");
            try {
                const windData = await fetchData("http://209.38.184.216:8080/api/solar-wind");
                const densityData = await fetchData("http://209.38.184.216:8080/api/solar-wind-density-5min");
                const magData = await fetchData("http://209.38.184.216:8080/api/magnetic-field");

                if (!!windData.cause || !!densityData.cause || magData.cause) {
                    throw new Error("Source is unreachable");
                } else {
                    //console.log(
                    //     windData.WindSpeed,
                    //     fluxData.Flux,
                    //     magData.Bt,
                    //     magData.Bz
                    // );
                    setWind(windData.WindSpeed);
                    setDensity(densityData[densityData.length - 1][1]);
                    setMagField({ Bt: magData.Bt, Bz: magData.Bz });
                }

                // if (weatherData.cause) {
                //     console.error("error", weatherData.cause);
                // } else {
                //     setWeather(
                //         weatherData.properties.timeseries[0].data.instant
                //             .details
                //     );}
            } catch (error) {
                console.log(error);
                setError(`${error}`);
            }

            setIsLoading(false);
        }

        fetchWindStats();
        const intervalID = setInterval(() => {
            fetchWindStats();
        }, 60000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            {!!isLoading && <ProgressBar />}

            <div className={`quickview-div ${!!isLoading && "visibility-hidden"}`}>
                <div className="center grid-item quickview-item width-100 ">
                    <p className="relative mt-2">Speed</p>
                    <h3 className="pb-3">{wind} km/sec</h3>

                    <p className="relative">Density</p>

                    <h3 className="pb-2">{density} cm⁻³</h3>
                </div>
                <div className=" center quickview-item width-100">
                    <p className="relative mb-1">Magnetic field</p>
                    <h3>Bt: {magField.Bt} nT</h3>
                    <h3 className="pb-2">Bz: {magField.Bz} nT</h3>
                </div>
            </div>
            {!error ? (
                <p className="mt-3 font-medium text-stone-500 text-xs ">
                    <span className={`capitalize mr-1 ${!!isLoading ? "hidden" : ""}`}>Source:</span>
                    <Link
                        href="https://www.swpc.noaa.gov/"
                        className={`${!!isLoading && "visibility-hidden"}`}
                        aria-label="Link to source of used data - NOAA"
                        target="_blank"
                    >
                        NOAA
                    </Link>
                </p>
            ) : (
                <p className="text-rose-800">{error}</p>
            )}
        </>
    );
}
