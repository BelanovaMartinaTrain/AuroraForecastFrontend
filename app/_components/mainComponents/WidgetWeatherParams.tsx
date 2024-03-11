"use client";

import React, { useEffect, useState } from "react";
import ProgressBar from "../../_ui/ProgressBar";
import { useRouter } from "next/navigation";
import WidgetViewWeatherSearchParams from "../subComponents/WidgetViewWeatherSearchParams";

export default function WidgetWeather({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    async function checkPerm() {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
                setIsLocation(true);
                getLocation();
            } else {
                router.push(`?${new URLSearchParams({ ...searchParams, lon: "null", lat: "null" })}`);
            }
        });
        setIsLoading(false);
    }

    useEffect(() => {
        if (!searchParams.lon && !searchParams.lat) {
            checkPerm();
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    function getLocation() {
        router.push(`?${new URLSearchParams({ ...searchParams, lon: "null", lat: "null" })}`);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = Math.round(position.coords.latitude * 10) / 10;
                const lon = Math.round(position.coords.longitude * 10) / 10;
                router.push(`?${new URLSearchParams({ ...searchParams, lon: `${lon}`, lat: `${lat}` })}`);
            },
            (error) => {
                console.log(error);
                router.push(`?${new URLSearchParams({ ...searchParams, lon: "null", lat: "null" })}`);
            }
        );
        setIsLocation(true);
        setIsLoading(false);
    }

    function handleClickC() {
        router.push(`?${new URLSearchParams({ ...searchParams, units: "C" })}`);
    }

    function handleClickF() {
        router.push(`?${new URLSearchParams({ ...searchParams, units: "F" })}`);
    }

    return (
        <>
            <div className="relative">
                <h2 className="font-h2 uppercase mb-4">Weather</h2>

                <button
                    className={` absolute  -top-2 right-0 mr-9 p-1  `}
                    onClick={handleClickC}
                    aria-description="change units to celsius"
                    aria-pressed={searchParams.units === "C" ? "true" : "false"}
                >
                    <p className={`text-base ${searchParams.units === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;C</p>
                </button>
                <button
                    className={` absolute right-0 mr-2 -top-2  p-1 ${searchParams.units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}
                    onClick={handleClickF}
                    aria-description="change units to fahrenheit"
                    aria-pressed={searchParams.units === "F" ? "true" : "false"}
                >
                    <p className={` text-base ${searchParams.units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;F</p>
                </button>
            </div>
            {!!isLoading ? (
                <ProgressBar />
            ) : isLocation ? (
                <WidgetViewWeatherSearchParams
                    lon={searchParams.lon as unknown as string | null}
                    lat={searchParams.lat as unknown as string | null}
                    degrees={searchParams.units as unknown as string}
                />
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
