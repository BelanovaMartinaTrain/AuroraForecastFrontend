"use client";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";
import Link from "next/link";
import SkeletonComponent from "../uiComponents/Skeleton";

export default function WeatherTable() {
    const PClassNames = "capitalize font-medium w-full ";
    const { weatherArray, units, location } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    return (
        <>
            <div className="mb-8 ml-4">
                <div key={-1} className="flex justify-evenly pt-1 pb-2 border-b-[1px] border-b-black border-opacity-50">
                    <p className="capitalize font-medium min-w-28">Date and time</p>
                    <div className="capitalize font-medium flex w-full ">
                        <p className={`${PClassNames}`}>Temperature </p>{" "}
                    </div>
                    <p className={PClassNames}>Wind speed</p>
                    <p className={PClassNames}>Clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>High clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>Middle clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>Low clouds</p>
                    <p className={`${PClassNames} hidden lg:block`}>Fog</p>
                </div>
                {!!weatherArray ? (
                    weatherArray?.map((weather, index) => {
                        return (
                            <div key={index} className="flex justify-evenly py-1 border-b-[1px] border-b-black border-opacity-50">
                                <p className=" font-medium min-w-28">
                                    {new Date(weather.time).toLocaleDateString(`${units === "C" ? "uk" : "us"}`, {
                                        month: "numeric",
                                        day: "numeric",
                                    })}
                                    {`${units === "C" ? "." : ""}`}
                                    <span className="pl-2">{`    `}</span>
                                    {new Date(weather.time).toLocaleTimeString([], {
                                        hourCycle: `${units === "C" ? "h23" : "h12"}`,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                                <div className="capitalize font-medium flex justify-evenly  w-full ">
                                    <p className="place-items-start">
                                        {" "}
                                        {units === "C"
                                            ? Math.round(weather.air_temperature)
                                            : Math.round(weather.air_temperature * (9 / 5) + 32)}{" "}
                                        &#176;{units}
                                    </p>{" "}
                                    <img
                                        className=" "
                                        src={`icons/weather/${weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey]}.svg`}
                                        width="20px relaive top-0"
                                        alt={weatherAlt[weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey].slice(0, 2) as TWeatherAltKey]}
                                    />
                                </div>

                                <p className="font-medium w-full lowercase">
                                    {" "}
                                    {units === "C" ? `${Math.round(weather.wind_speed)} m/s` : `${Math.round(weather.wind_speed * 2.2369)} mph`}
                                </p>
                                <p className={PClassNames}>{Math.round(weather.cloud_area_fraction)} %</p>
                                <p className={`${PClassNames} hidden md:block`}>{Math.round(weather.cloud_area_fraction_high)} %</p>
                                <p className={`${PClassNames} hidden md:block`}>{Math.round(weather.cloud_area_fraction_medium)} %</p>
                                <p className={`${PClassNames} hidden md:block`}>{Math.round(weather.cloud_area_fraction_low)} %</p>
                                <p className={`${PClassNames} hidden lg:block`}>{Math.round(weather.fog_area_fraction)} %</p>
                            </div>
                        );
                    })
                ) : (
                    <SkeletonComponent numberOfLines={10} />
                )}
            </div>
            <div className="flex justify-evenly mt-5">
                <p className=" font-medium text-stone-500 text-[11px]  mr-2">
                    Used location: {lat}, {lon}
                </p>
                <p className=" font-medium text-stone-500 text-[11px]">
                    <span className="capitalize mr-1">Source:</span>
                    <Link href="https://www.yr.no/en" target="_blank" aria-label="Link to source of used data - Norway meteo institute">
                        MET Norway
                    </Link>
                </p>
            </div>
        </>
    );
}
