"use client";

import React, { useEffect, useState } from "react";
import WidgetViewWeather from "../subComponents/WidgetViewWeather";
import ProgressBar from "../../ui/ProgressBar";

export default function WidgetWeather() {
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0,
    });

    const [degrees, setDegreees] = useState("");
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setDegreees(localStorage.getItem("degrees") || "C");
        }
    }, []);

    useEffect(() => {
        async function checkPerm() {
            navigator.permissions.query({ name: "geolocation" }).then((result) => {
                if (result.state === "granted") {
                    setIsLocation(true);
                    getLocation();
                }
            });
            setIsLoading(false);
        }
        checkPerm();
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = Math.round(position.coords.latitude * 10) / 10;
                const lon = Math.round(position.coords.longitude * 10) / 10;
                setLocation({
                    lat: lat,
                    lon: lon,
                });
            },
            (error) => {
                setLocation({
                    lat: 0,
                    lon: 0,
                });
            }
        );
        setIsLocation(true);
        setIsLoading(false);
    }

    function handleClickC() {
        setDegreees("C");
        if (typeof window !== "undefined") {
            window.localStorage?.removeItem("degrees");
            window.localStorage?.setItem("degrees", "C");
        }
    }

    function handleClickF() {
        setDegreees("F");
        if (typeof window !== "undefined") {
            window.localStorage?.removeItem("degrees");
            window.localStorage?.setItem("degrees", "F");
        }
    }

    return (
        <>
            <div className="relative">
                <h2 className="font-h2 uppercase">Weather</h2>

                <button onClick={handleClickC} aria-label="change units to celsius" aria-selected={degrees === "C" ? "true" : "false"}>
                    <p className={`text-base absolute  -top-2 right-0 mr-9 p-1  ${degrees === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>
                        &#176;C
                    </p>
                </button>
                <button onClick={handleClickF} aria-label="change units to fahrenheit" aria-selected={degrees === "F" ? "true" : "false"}>
                    <p className={`text-base absolute right-0 mr-2 -top-2  p-1 ${degrees === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>
                        &#176;F
                    </p>
                </button>
            </div>
            {!!isLoading ? (
                <ProgressBar />
            ) : isLocation ? (
                <WidgetViewWeather location={location} degrees={degrees} />
            ) : (
                <button
                    className="  rounded-lg  text-black font-semibold enable-button center padding-small mt-3 bg-emerald-700 focus:bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-1"
                    onClick={getLocation}
                >
                    Enable location
                </button>
            )}
        </>
    );
}
