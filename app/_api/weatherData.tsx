"use client";

import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { TWeatherObject, useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import TemperatureUnitsSwitch from "@/app/_ui/TemperatureUnitsSwitch";
import WeatherTable from "../_components/subComponents/WeatherTable";

export default function WeatherData() {
    const [isLoading, setIsLoading] = useState(false);
    const { location, units, weatherArray, setWeatherArray } = useLocationAndWeatherContext();
    const { lon, lat } = location;

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
                }
            }
        }
    }

    useEffect(() => {
        fetchWeather();
        setIsLoading(false);
        const intervalID = setInterval(() => {
            fetchWeather("timer");
            setIsLoading(false);
        }, 600000);
        return () => clearInterval(intervalID);
    }, [lon, lat]);

    return (
        <>
            <TemperatureUnitsSwitch title="10-hour weather forecast" classes="mb-4" />
            <WeatherTable weatherArray={weatherArray!} units={units} isLoading={isLoading} />
        </>
    );
}
