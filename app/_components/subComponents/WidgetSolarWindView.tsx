"use client";

import { useEffect, useState } from "react";
import fetchData from "../../_api/fetchData";
import ProgressBar from "../uiComponents/ProgressBar";
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
                const windData = await fetchData("https://aurora-api.cloud/api/solar-wind");
                const densityData = await fetchData("https://aurora-api.cloud/api/solar-wind-density-5min");
                const magData = await fetchData("https://aurora-api.cloud/api/magnetic-field");

                if (!windData || !densityData || !magData || !!windData.cause || !!densityData.cause || magData.cause) {
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
        }, 60 * 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            {!!isLoading && <ProgressBar />}

            <div className={`quickview-div ${!!isLoading && "visibility-hidden"}`}>
                <div className="center grid-item quickview-item width-100 ">
                    <p className=" mt-4">Speed</p>
                    <h3 className="pb-3">{wind} km/sec</h3>

                    <p className="">Density</p>

                    <h3 className="pb-2">{density} cm⁻³</h3>
                </div>
                <div className=" center quickview-item width-100">
                    <p className=" mb-1 mt-4">Magnetic field</p>
                    <h3>Bt: {magField.Bt} nT</h3>
                    <h3 className="pb-2">Bz: {magField.Bz} nT</h3>
                </div>
            </div>
            {!error ? (
                <p className="mt-5 font-medium text-stone-500 text-[11px] ">
                    <span className={`capitalize mr-1 ${!!isLoading ? "hidden" : ""}`}>Source:</span>
                    <Link
                        href="https://www.swpc.noaa.gov/"
                        className={`${!!isLoading ? "visibility-hidden" : ""}`}
                        aria-label="Link to source of used data - NOAA"
                        target="_blank"
                    >
                        NOAA
                    </Link>
                </p>
            ) : (
                <p className="mt-5 text-rose-800">{error}</p>
            )}
        </>
    );
}
