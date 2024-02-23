"use client";

import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";

export default function WidgetAuroraActivity() {
    const [kp, setKp] = useState<string>();
    const [storm, setStorm] = useState<string>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAuroraStats() {
            setIsLoading(true);

            try {
                const kpData = await fetchData(
                    "http://localhost:5176/api/planetary-k-index-mod"
                );
                const stormData = await fetchData(
                    "http://localhost:5176/api/sunstorm-events"
                );

                setKp(kpData);
                if (stormData[1].G.Text === "none") {
                    setStorm(stormData[0].G.Text);
                } else {
                    setStorm(stormData[0].G.Scale);
                }

                console.log(stormData);

                // if (weatherData.cause) {
                //     console.error("error", weatherData.cause);
                // } else {
                //     setWeather(
                //         weatherData.properties.timeseries[0].data.instant
                //             .details
                //     );}
            } catch {
                console.log("Aurora Fetch was unsuccessful");
            }

            setIsLoading(false);
        }

        fetchAuroraStats();
        const intervalID = setInterval(() => {
            fetchAuroraStats();
        }, 600000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <h2 className="center margin-xs-btm uppercase font-h2 ">
                Aurora activity
            </h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <div className="quickview-div grid-item padding-xs-btm ">
                    <div className="center quickview-item width-100 padding-sm-r">
                        <p className="relative padding-xs-btm">
                            Kp index
                            <span className="material-symbols-outlined info-icon">
                                <img
                                    src="/icons/info.svg"
                                    alt="info icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </p>
                        <h3 className="bigger-font">{kp}</h3>
                    </div>
                    <div className="center quickview-item width-100 padding-sm-r">
                        <p className="relative padding-xs-btm">Activity</p>
                        <h3 className="padding-sm-btm">Moderate</h3>
                        <p className="relative padding-xs-btm">
                            Geomagnetic storm
                            <span className="material-symbols-outlined info-icon">
                                <img
                                    src="/icons/info.svg"
                                    alt="info icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </p>

                        <h3 className="padding-xs-btm">{storm}</h3>
                    </div>
                </div>
            )}
        </>
    );
}
