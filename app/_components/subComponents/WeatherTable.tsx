"use client";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";
import Link from "next/link";
import SkeletonComponent from "../uiComponents/Skeleton";
import { toDayAndMonth, toHoursAndMinutes12h, toHoursAndMinutes24h, toSingleDay } from "@/app/_utils/timeFormatting";

export default function WeatherTable() {
    const PClassNames = "capitalize font-medium w-full  px-1";
    const { weatherArray, units, location } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    return (
        <>
            <div className="mb-8 min-w-52 overflow-x-scroll grid !grid-cols-1 ">
                <div key={-1} className="flex justify-stretch pt-1 pb-2 border-b-[1px] border-b-black border-opacity-50 w-full">
                    <p className="capitalize font-medium ">Date and time</p>
                    <div className="capitalize font-medium flex w-full ">
                        <p className={`${PClassNames}`}>Temperature </p>{" "}
                    </div>
                    <p className={PClassNames}>Wind speed</p>
                    <p className={PClassNames}>Clouds</p>
                    <button className={`${PClassNames} hidden md:hidden `}>{">>"}</button>
                    <p className={`${PClassNames}  md:block`}>High clouds</p>
                    <p className={`${PClassNames}  md:block`}>Middle clouds</p>
                    <p className={`${PClassNames}  md:block`}>Low clouds</p>
                    <p className={`${PClassNames}  lg:block`}>Fog</p>
                </div>
                {!!weatherArray ? (
                    weatherArray?.map((weather, index, weatherArray) => {
                        let isNewDay = false;
                        if (index < 9) {
                            const timestamp1 = new Date(weatherArray[index].time).toLocaleTimeString([], toSingleDay).split(",")[0];
                            const timestamp2 = new Date(weatherArray[index + 1].time).toLocaleTimeString([], toSingleDay).split(",")[0];
                            isNewDay = timestamp1 !== timestamp2;
                        }

                        return (
                            <div
                                key={index}
                                className={`flex justify-stretch py-1  w-full  ${
                                    isNewDay
                                        ? "border-b-[gainsboro] border-b-[2px] border-opacity-50"
                                        : "border-b-black border-b-[1px] border-opacity-50"
                                }`}
                            >
                                <p className=" font-medium min-w-28 text-nowrap px-1">
                                    {new Date(weather.time).toLocaleDateString(`${units === "C" ? "uk" : "us"}`, toDayAndMonth)}
                                    {`${units === "C" ? "." : ""}`}
                                    <span className="pl-2">{`    `}</span>
                                    {new Date(weather.time).toLocaleTimeString([], units === "C" ? toHoursAndMinutes24h : toHoursAndMinutes12h)}
                                </p>
                                <div className="capitalize font-medium flex justify-evenly  w-full px-1">
                                    <p className="place-items-start text-nowrap">
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

                                <p className="font-medium w-full lowercase text-nowrap px-1">
                                    {" "}
                                    {units === "C" ? `${Math.round(weather.wind_speed)} m/s` : `${Math.round(weather.wind_speed * 2.2369)} mph`}
                                </p>
                                <p className={PClassNames}>{Math.round(weather.cloud_area_fraction)} %</p>
                                <p className={`${PClassNames}  md:block`}>{Math.round(weather.cloud_area_fraction_high)} %</p>
                                <p className={`${PClassNames}  md:block`}>{Math.round(weather.cloud_area_fraction_medium)} %</p>
                                <p className={`${PClassNames}  md:block`}>{Math.round(weather.cloud_area_fraction_low)} %</p>
                                <p className={`${PClassNames}  lg:block`}>{Math.round(weather.fog_area_fraction)} %</p>
                            </div>
                        );
                    })
                ) : (
                    <SkeletonComponent numberOfLines={10} />
                )}
            </div>
            <div className="flex justify-evenly mt-5">
                <p className=" font-medium text-stone-500 text-[11px]  mr-2">
                    <Link
                        href={`https://www.google.com/maps/place/${lat},${lon}`}
                        target="_blank"
                        aria-label="Navigate to google maps to see used location on a map"
                    >
                        Used location: {lat}, {lon}
                    </Link>
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
