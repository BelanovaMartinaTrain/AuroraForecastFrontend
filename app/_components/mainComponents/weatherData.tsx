"use client";

import React, { useEffect, useState } from "react";
import fetchData from "../../_api/fetchData";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import TemperatureUnitsSwitch from "@/app/_components/uiComponents/TemperatureUnitsSwitch";
import ButtonRequestLocationPerm from "../uiComponents/ButtonRequestLocationPerm";
import ProgressBar from "../uiComponents/ProgressBar";

export default function WeatherData({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const { location, weatherArray, setWeatherArray } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    console.log("weatherdata", lon, lat);

    async function fetchWeather(source?: string) {
        setIsLoading(true);
        if (!!lat || !!lon) {
            if (!weatherArray || source === "timer") {
                try {
                    const weatherData = await fetchData(`https://aurora-api.cloud/api/yr-met-weather/${lat}/${lon}`);
                    if (weatherData.cause || !("properties" in weatherData)) {
                        console.error("error", weatherData.cause);
                        throw new Error("Remote source is not available");
                    } else {
                        let tempArray = [];
                        for (let i = 0; i < 10; i++) {
                            tempArray.push({
                                ...weatherData.properties.timeseries[i].data.instant.details,
                                icon_code: weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code,
                                time: weatherData.properties.timeseries[i].time,
                            });

                            setWeatherArray(tempArray);
                        }
                    }
                } catch {
                    setWeatherArray(null);
                    setIsLoading(false);
                }
            }
        }
    }

    useEffect(() => {
        fetchWeather();
        const intervalID = setInterval(() => {
            fetchWeather("timer");
        }, 600000);
        return () => clearInterval(intervalID);
    }, [lon, lat]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <TemperatureUnitsSwitch title="10-hour weather forecast" classes="mb-4" />
            <ButtonRequestLocationPerm>
                {!!weatherArray ? <>{children}</> : isLoading ? <ProgressBar /> : !weatherArray && <p className="mt-8">Source is not available</p>}
            </ButtonRequestLocationPerm>
        </>
    );
}
