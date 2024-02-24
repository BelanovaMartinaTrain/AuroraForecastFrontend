"use client";

import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";

export default function WidgetAuroraActivity() {
    const [kp, setKp] = useState<string>("0");
    const [storm, setStorm] = useState<string>("none");
    const [activity, setActivity] = useState<string>("none");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAuroraStats() {
            setIsLoading(true);

            try {
                const kpData = await fetchData(
                    "http://165.227.128.185:8080/api/planetary-k-index-mod"
                );
                const stormData = await fetchData(
                    "http://165.227.128.185:8080/api/sunstorm-events"
                );

                setKp(kpData);
                if (stormData[1].G.Text === "none") {
                    setStorm(stormData[0].G.Text);
                } else {
                    setStorm(`G${stormData[0].G.Scale}`);
                }

                console.log(Number(kpData));

                if (Number(kpData) < 2) {
                    setActivity("Low");
                } else if (Number(kpData) >= 2 && Number(kp) < 5) {
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
            } catch {
                console.log("Aurora Fetch was unsuccessful");
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
            <h2 className="center margin-xs-btm uppercase font-h2 ">
                Aurora activity
            </h2>
            {!!isLoading && <ProgressBar />}
            <div
                className={`quickview-div grid-item padding-xs-btm ${
                    !!isLoading && "visibility-hidden"
                }`}
            >
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
                    <h3 className="padding-sm-btm ">{activity}</h3>
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

                    <h3 className="padding-xs-btm ">{storm}</h3>
                </div>
            </div>
        </>
    );
}
