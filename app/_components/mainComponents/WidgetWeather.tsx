"use client";

import React, { useEffect, useState } from "react";
import WidgetViewWeather from "../subComponents/WidgetViewWeather";
import ProgressBar from "../../_ui/ProgressBar";

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
            await navigator.permissions.query({ name: "geolocation" }).then((result) => {
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
                <h2 className="font-h2 uppercase mb-4">Weather</h2>

                <button
                    className={` absolute  -top-2 right-0 mr-9 p-1  `}
                    onClick={handleClickC}
                    aria-description="change units to celsius"
                    aria-pressed={degrees === "C" ? "true" : "false"}
                >
                    <p className={`text-base ${degrees === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;C</p>
                </button>
                <button
                    className={` absolute right-0 mr-2 -top-2  p-1 ${degrees === "F" ? "text-[gainsboro]" : "text-stone-500"}`}
                    onClick={handleClickF}
                    aria-description="change units to fahrenheit"
                    aria-pressed={degrees === "F" ? "true" : "false"}
                >
                    <p className={` text-base ${degrees === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;F</p>
                </button>
            </div>
            {!!isLoading ? (
                <ProgressBar />
            ) : isLocation ? (
                <WidgetViewWeather location={location} degrees={degrees} />
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
