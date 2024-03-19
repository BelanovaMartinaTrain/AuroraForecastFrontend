"use client";

import React, { useEffect, useState } from "react";
import fetchData from "../../_api/fetchData";
import ProgressBar from "../../_ui/ProgressBar";
import Link from "next/link";
import { useLocationAndWeatherContext, TWeatherObject } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";

export default function WeatherTable() {
    const [isLoading, setIsLoading] = useState(false);
    const { location, units, weatherArray, setWeatherArray } = useLocationAndWeatherContext();
    const { lon, lat } = location;
    const [icon, setIcon] = useState<TWeatherSymbolKey>("none");
    const [altText, setAltText] = useState("none");
    const PClassNames = "capitalize font-medium w-full ";

    async function fetchWeather(source?: string) {
        setIsLoading(true);
        if (!!lat || !!lon) {
            if (!weatherArray || source === "timer") {
                try {
                    const weatherData = await fetchData(`https://aurora-api.cloud/api/yr-met-weather/${lat}/${lon}`);
                    if (weatherData.cause) {
                        console.error("error", weatherData.cause);
                    } else {
                        setIcon(weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                        let localIcon: TWeatherSymbolKey = weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;

                        let tempArray = [];
                        for (let i = 0; i < 10; i++) {
                            console.log(weatherData.properties.timeseries[i]);
                            tempArray.push({
                                ...weatherData.properties.timeseries[i].data.instant.details,
                                icon_code: weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code,
                                time: weatherData.properties.timeseries[i].time,
                            });

                            setWeatherArray(tempArray);
                        }

                        let icon_num = weatherSymbolKeys[localIcon].slice(0, 2);
                        setAltText(weatherAlt[icon_num as TWeatherAltKey]);
                    }
                } catch {}
            } else {
                console.log("else");
            }
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchWeather();
        const intervalID = setInterval(() => {
            fetchWeather("timer");
        }, 600000);
        return () => clearInterval(intervalID);
    }, [lon, lat]);

    return (
        <div className="mb-8">
            <div key={-1} className="flex justify-evenly py-1 border-b-[1px] border-b-black">
                <p className="capitalize font-medium min-w-36">Date and time</p>
                <div className="capitalize font-medium flex w-full mr-6">
                    <p className={PClassNames}>Temperature </p>{" "}
                </div>
                <p className={PClassNames}>Icon</p>
                <p className={PClassNames}>Wind speed</p>
                <p className={PClassNames}>Clouds</p>
                <p className={PClassNames}>High clouds</p>
                <p className={PClassNames}>Middle clouds</p>
                <p className={PClassNames}>Low clouds</p>
                <p className={PClassNames}>Fog</p>
            </div>
            {!!weatherArray &&
                weatherArray?.map((weather, index) => {
                    return (
                        <div key={index} className="flex justify-evenly py-1 border-b-[1px] border-b-black">
                            <p className="capitalize font-medium min-w-36">
                                {new Date(weather.time).toLocaleDateString("uk", {
                                    month: "numeric",
                                    day: "numeric",
                                })}
                                .<span className="pl-2">{`    `}</span>
                                {new Date(weather.time).toLocaleTimeString([], {
                                    hourCycle: "h23",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                            <div className="capitalize font-medium flex   w-full ml-6">
                                <p className="">{weather.air_temperature} &#176;C </p>{" "}
                                <img
                                    className=" "
                                    src={`icons/weather/${weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey]}.svg`}
                                    width="20px relaive top-0"
                                    alt={weatherAlt[weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey].slice(0, 2) as TWeatherAltKey]}
                                />
                            </div>
                            <p className={PClassNames}>
                                {weatherAlt[weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey].slice(0, 2) as TWeatherAltKey]}
                            </p>
                            <p className={PClassNames}>{weather.wind_speed} m/s</p>
                            <p className={PClassNames}>{weather.cloud_area_fraction * 10} %</p>
                            <p className={PClassNames}>{weather.cloud_area_fraction_high * 10} %</p>
                            <p className={PClassNames}>{weather.cloud_area_fraction_medium * 10} %</p>
                            <p className={PClassNames}>{weather.cloud_area_fraction_low * 10} %</p>
                            <p className={PClassNames}>{weather.fog_area_fraction * 10} %</p>
                        </div>
                    );
                })}
        </div>
    );
}

//     {!isLoading ? (
//         !weather.air_pressure_at_sea_level ? (
//             <p className="text-stone-600">Weather is not available</p>
//         ) : (
//             <div className="flex justify-evenly mt-5">
//                 <p className=" font-medium text-stone-500 text-[11px]  mr-2">
//                     Used location: {lat}, {lon}
//                 </p>
//                 <p className=" font-medium text-stone-500 text-[11px]">
//                     <span className="capitalize mr-1">Source:</span>
//                     <Link href="https://www.yr.no/en" target="_blank" aria-label="Link to source of used data - Norway meteo institute">
//                         MET Norway
//                     </Link>
//                 </p>
//             </div>
//         )
//     ) : (
//         <ProgressBar />
//     )}
// </>

//     );
