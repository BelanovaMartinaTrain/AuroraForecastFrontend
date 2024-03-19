"use client";

import React, { useEffect, useState } from "react";
import ProgressBar from "../../_ui/ProgressBar";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import WidgetImageGeneral from "../mainComponents/WidgetImageGeneral";

export default function WidgetWeatherSubpage() {
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { location, setLocation, units, setUnits } = useLocationAndWeatherContext();
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

    function handleClickC() {
        setUnits("C");
    }

    function handleClickF() {
        setUnits("F");
    }

    return (
        <>
            <div className="relative">
                <h2 className="font-h2 uppercase">Weather</h2>
                <button
                    className={` absolute  -top-2 right-0 mr-9 p-1  `}
                    onClick={handleClickC}
                    aria-description="change units to celsius"
                    aria-pressed={units === "C" ? "true" : "false"}
                >
                    <p className={`text-base ${units === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;C</p>
                </button>
                <button
                    className={` absolute right-0 mr-2 -top-2  p-1 ${units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}
                    onClick={handleClickF}
                    aria-description="change units to fahrenheit"
                    aria-pressed={units === "F" ? "true" : "false"}
                >
                    <p className={` text-base ${units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;F</p>
                </button>
            </div>
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
