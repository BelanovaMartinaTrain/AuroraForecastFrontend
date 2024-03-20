"use client";

import React, { useEffect, useState } from "react";
import ProgressBar from "../../_ui/ProgressBar";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import WidgetImageGeneral from "../mainComponents/WidgetImageGeneral";
import TemperatureUnitsSwitch from "@/app/_ui/TemperatureUnitsSwitch";

export default function WidgetWeatherSubpage() {
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { location, setLocation } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    async function checkPerm() {
        await navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
                setIsLocation(true);
                getLocation();
            } else {
                setLocation({ lon: null, lat: null });
            }
        });
        setIsLoading(false);
    }

    useEffect(() => {
        if (!lon || !lat) {
            checkPerm();
        } else {
            setIsLocation(true);
            setLocation({ lon: `${lon}`, lat: `${lat}` });
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [lon, lat]);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const numLat = Math.round(position.coords.latitude * 10) / 10;
                const numLon = Math.round(position.coords.longitude * 10) / 10;
                setLocation({ lon: `${numLon}`, lat: `${numLat}` });
            },
            (error) => {
                console.log(error);
                setLocation({ lon: null, lat: null });
            }
        );
        setIsLocation(true);
        setIsLoading(false);
    }

    return (
        <>
            <TemperatureUnitsSwitch title="Title" classes="" />
            {!!isLoading ? (
                <ProgressBar />
            ) : isLocation ? (
                !!lon || !!lat ? (
                    <WidgetImageGeneral
                        title={""}
                        //url={`https://www.yr.no/en/content/${lat},${lon}/meteogram.svg?mode=dark`}
                        url="/images/meteogram.svg"
                        timerDuration={3600000}
                        source={{ urlSource: "https://yr.no", nameSource: "MET Norway" }}
                    />
                ) : (
                    <ProgressBar />
                )
            ) : (
                <button
                    className="mt-3 text-black  px-5 py-3 rounded-lg font-bold focus:ring ring-black ring-opacity-10 gradient element-to-rotate hover:-translate-y-0.5"
                    onClick={getLocation}
                >
                    Enable location
                </button>
            )}
        </>
    );
}
