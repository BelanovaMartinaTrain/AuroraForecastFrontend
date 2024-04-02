"use client";

import React, { useEffect, useState } from "react";
import fetchData from "../../_api/fetchData";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import TemperatureUnitsSwitch from "@/app/_components/uiComponents/TemperatureUnitsSwitch";
import ButtonRequestLocationPerm from "../uiComponents/ButtonRequestLocationPerm";
import ProgressBar from "../uiComponents/ProgressBar";

export default function WeatherData({ children, title, url }: { children: React.ReactNode; title: string; url: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { location, weatherArray, setWeatherArray } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    async function fetchWeather(source?: string) {
        if (!!lat || !!lon) {
            if (!weatherArray || source === "timer") {
                try {
                    setIsLoading(true);
                    const weatherData = await fetchData(`${url}?lat=${lat}&lon=${lon}`);
                    setIsLoading(false);
                    if (weatherData.cause || !("weather" in weatherData)) {
                        console.error("error", weatherData.cause);
                        throw new Error("Remote source is not available");
                    } else {
                        setWeatherArray(weatherData.weather);
                    }
                } catch {
                    setWeatherArray(null);
                    setIsLoading(false);
                    setIsError(true);
                }
            }
        }
    }

    useEffect(() => {
        fetchWeather();
        const intervalID = setInterval(() => {
            fetchWeather("timer");
        }, 60 * 10 * 1000);
        return () => clearInterval(intervalID);
    }, [lon, lat]);

    return (
        <>
            <TemperatureUnitsSwitch title={title} classes="mb-4 mt-1 md:mt-0 " />
            <ButtonRequestLocationPerm>
                {!!weatherArray ? <>{children}</> : isLoading ? <ProgressBar /> : isError && <p className="mt-8">Source is not available</p>}
            </ButtonRequestLocationPerm>
        </>
    );
}
