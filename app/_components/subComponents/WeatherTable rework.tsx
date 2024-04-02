"use client";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";
import Link from "next/link";
import SkeletonComponent from "../uiComponents/Skeleton";
import { toDayAndMonth, toHoursAndMinutes12h, toHoursAndMinutes24h, toSingleDay } from "@/app/_utils/timeFormatting";

export default function WeatherTable() {
    const PClassNames = "capitalize font-medium  text-nowrap border-none text-sm p-1";
    const { weatherArray, units, location } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    return (
        <>
            <table className="w-full h-full mb-14 ">
                <tbody className=" border-none">
                    <tr key={-1} className="border-t-0 border-x-0 border-b-black border-b-[3px] border-opacity-50 h-full">
                        <td className="capitalize font-medium !text-nowrap border-none text-sm">Date and time</td>
                        <td className="capitalize font-medium border-none ">
                            <p className={`${PClassNames}`}>Temperature </p>{" "}
                        </td>
                        <td className={PClassNames}>Wind speed</td>
                        <td className={PClassNames}>Clouds</td>
                        <td className={`${PClassNames}  `}>High clouds</td>
                        <td className={`${PClassNames}  `}>Middle clouds</td>
                        <td className={`${PClassNames}  `}>Low clouds</td>
                        <td className={`${PClassNames}  `}>Fog</td>
                    </tr>
                    {!!weatherArray ? (
                        weatherArray?.map((weather, index, weatherArray) => {
                            let isNewDay = false;
                            if (index < 9) {
                                const timestamp1 = new Date(weatherArray[index].time).toLocaleTimeString([], toSingleDay).split(",")[0];
                                const timestamp2 = new Date(weatherArray[index + 1].time).toLocaleTimeString([], toSingleDay).split(",")[0];
                                isNewDay = timestamp1 !== timestamp2;
                            }

                            return (
                                <tr
                                    key={index}
                                    className={` border-t-0 border-x-0 ${
                                        isNewDay
                                            ? "border-b-[gainsboro] border-b-[2px] border-opacity-50"
                                            : "border-b-black border-b-[1px] border-opacity-50"
                                    }`}
                                >
                                    <td className=" font-medium text-nowrap border-none text-sm">
                                        {new Date(weather.time).toLocaleDateString(`${units === "C" ? "uk" : "us"}`, toDayAndMonth)}
                                        {`${units === "C" ? "." : ""}`}
                                        <span className="pl-2">{`    `}</span>
                                        {new Date(weather.time).toLocaleTimeString([], units === "C" ? toHoursAndMinutes24h : toHoursAndMinutes12h)}
                                    </td>
                                    <td className="capitalize font-medium text-nowrap flex justify-evenly border-none text-sm">
                                        <p className="text-nowrap">
                                            {" "}
                                            {units === "C"
                                                ? Math.round(weather.air_temperature)
                                                : Math.round(weather.air_temperature * (9 / 5) + 32)}{" "}
                                            &#176;{units}
                                        </p>{" "}
                                        <img
                                            className=" text-nowrap"
                                            src={`icons/weather/${weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey]}.svg`}
                                            width="20px relaive top-0"
                                            alt={weatherAlt[weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey].slice(0, 2) as TWeatherAltKey]}
                                        />
                                    </td>

                                    <td className="font-medium text-nowrap border-none text-sm">
                                        {" "}
                                        {units === "C" ? `${Math.round(weather.wind_speed)} m/s` : `${Math.round(weather.wind_speed * 2.2369)} mph`}
                                    </td>
                                    <td className={PClassNames}>{Math.round(weather.cloud_area_fraction)} %</td>
                                    <td className={`${PClassNames}  `}>{Math.round(weather.cloud_area_fraction_high)} %</td>
                                    <td className={`${PClassNames}  `}>{Math.round(weather.cloud_area_fraction_medium)} %</td>
                                    <td className={`${PClassNames}  `}>{Math.round(weather.cloud_area_fraction_low)} %</td>
                                    <td className={`${PClassNames} `}>{Math.round(weather.fog_area_fraction)} %</td>
                                </tr>
                            );
                        })
                    ) : (
                        <SkeletonComponent numberOfLines={10} />
                    )}
                </tbody>
            </table>
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
