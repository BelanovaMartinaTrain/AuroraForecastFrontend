"use client";

import React, { useEffect, useState } from "react";
import fetchData from "../../_api/fetchData";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import TemperatureUnitsSwitch from "@/app/_components/uiComponents/TemperatureUnitsSwitch";
import ButtonRequestLocationPerm from "../uiComponents/ButtonRequestLocationPerm";
import ProgressBar from "../uiComponents/ProgressBar";

export default function WeatherData({ children, title, url }: { children: React.ReactNode; title: string; url: string }) {
    // TODO refactor to general fetch function with react-query
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { location, weatherArray, setWeatherArray } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    async function fetchWeather(source?: string) {
        if (!!lat || !!lon) {
            // timer as a source is set by setTimer in the useEffect => meaning don't fetch data again unless the timer runs out
            if (!weatherArray || source === "timer") {
                try {
                    const weatherData = await fetchData(`${url}?lat=${lat}&lon=${lon}`);

                    //TODO this workaround for error handling, needs some more work (or will be solved by react-query)
                    if (weatherData.cause || !("weather" in weatherData)) {
                        console.error("error", weatherData.cause);
                        throw new Error("Remote source is not available");
                    } else {
                        setWeatherArray(weatherData.weather);
                    }
                } catch {
                    setWeatherArray(null);
                    setIsError(true);
                }
            }
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        fetchWeather();

        const intervalID = setInterval(() => {
            setIsLoading(true);
            fetchWeather("timer");
        }, 10 * 60 * 1000); // fetch every 10 minutes
        return () => clearInterval(intervalID);
    }, [lon, lat]);

    return (
        <>
            <TemperatureUnitsSwitch title={title} classes="mb-4 mt-1 md:mt-0  " />
            <ButtonRequestLocationPerm>
                {!!weatherArray ? <>{children}</> : isLoading ? <ProgressBar /> : isError && <p className="mt-8">Source is not available</p>}
            </ButtonRequestLocationPerm>
        </>
    );
}
