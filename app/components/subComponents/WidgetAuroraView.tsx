"use client";

import { useEffect, useState } from "react";
import fetchData from "../../api/fetchData";
import ProgressBar from "../../ui/ProgressBar";
import Link from "next/link";

export default function WidgetAuroraView() {
    const [kp, setKp] = useState<string>("0");
    const [storm, setStorm] = useState<string>("none");
    const [activity, setActivity] = useState<string>("none");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchAuroraStats() {
            setIsLoading(true);
            setError("");
            try {
                const kpData = await fetchData("http://165.227.128.185:8080/api/planetary-k-index-mod");
                const stormData = await fetchData("http://165.227.128.185:8080/api/sunstorm-events");

                if (!!kpData.cause || !!stormData.cause) {
                    throw new Error("Source is unreachable");
                }
                setKp(kpData);
                if (stormData[0].G.Text === "none") {
                    setStorm(stormData[0].G.Text);
                } else {
                    setStorm(`G${stormData[0].G.Scale}`);
                }

                if (Number(kpData) <= 2) {
                    setActivity("Low");
                } else if (Number(kpData) > 2 && Number(kp) < 5) {
                    setActivity("Moderate");
                } else if (Number(kpData) >= 5 && Number(kp) < 6) {
                    setActivity("High");
                } else if (Number(kpData) >= 6) {
                    setActivity("Very high");
                } else {
                    setActivity("n/a");
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

        fetchAuroraStats();
        const intervalID = setInterval(() => {
            fetchAuroraStats();
        }, 60000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            {!!isLoading && <ProgressBar />}
            <div className={`quickview-div grid-item padding-xs-btm ${!!isLoading && "visibility-hidden"}`}>
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm mt-2">Kp index</p>
                    <h3 className="bigger-font ">{kp}</h3>
                </div>
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm">Activity</p>
                    <h3 className="padding-sm-btm ">{activity}</h3>
                    <p className="relative padding-xs-btm">Geomagnetic storm</p>

                    <h3 className="padding-xs-btm pb-2">{storm}</h3>
                </div>
            </div>
            {!error ? (
                <Link href="https://www.swpc.noaa.gov/" className={`${!!isLoading && "visibility-hidden"}`} target="_blank">
                    <p className="mt-2 font-medium text-stone-500">NOAA</p>
                </Link>
            ) : (
                <p className="text-rose-800">{error}</p>
            )}
        </>
    );
}