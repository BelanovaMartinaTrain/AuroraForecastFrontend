"use client";
import { useLocationAndWeatherContext, TWeatherObject } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";
import Link from "next/link";
import { toDayAndMonth, toHoursAndMinutes12h, toHoursAndMinutes24h, toSingleDay } from "@/app/_utils/timeFormatting";
import { useRef } from "react";
import fetchData from "@/app/_api/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useCurrentLocation } from "@/app/_hooks/useLocation";

type TWeatherArray = { weather: TWeatherObject[] };

export default function WeatherTable({ initialWeatherData }: { initialWeatherData: TWeatherArray }) {
    const tableRef = useRef<HTMLDivElement>(null);
    const PClassNames = " capitalize font-medium  text-nowrap border-none text-sm py-1 px-2 ";

    const { units } = useLocationAndWeatherContext();
    const { data: location } = useCurrentLocation();

    let lon: number | null;
    let lat: number | null;

    if (location) {
        lon = Math.round(location?.coords.longitude * 100) / 100;
        lat = Math.round(location?.coords.latitude * 100) / 100;
    } else {
        lon = null;
        lat = null;
    }

    const { data: weatherArray } = useQuery<TWeatherArray>({
        queryKey: ["weather"],
        queryFn: () => fetchData(`https://aurora-api.cloud/api/yr-met-weather-10hours?lon=${lon}&lat=${lat}`),
    });

    // this is for better user experience on mobile, the element alerts the user they can scroll and the click also scrolls the table
    // it depends on the browser some scroll back, some don't, but it's not the main function anyway just added bonus
    function handleClick() {
        if (!!tableRef) {
            if (tableRef.current!.scrollLeft === tableRef.current!.scrollWidth - tableRef.current!.offsetWidth) {
                tableRef.current!.scrollLeft = 0;
            } else {
                tableRef.current!.scrollLeft += tableRef.current!.offsetWidth;
            }
        }
    }

    // TODO refactor to using header and being standalone component then insert the data for more than 10 hours and separate by date
    return (
        <>
            <div ref={tableRef} className="overflow-x-auto scroll-p-5 scroll-smooth w-full pb-2 mb-1  md776:mb-7 ">
                <table className="w-full h-full  ">
                    <tbody className=" border-none">
                        <tr key={-1} className="border-t-0 border-x-0 border-b-black border-b-[3px] border-opacity-50 h-full">
                            <td className="capitalize font-medium !text-nowrap border-none text-sm 2xl:px-0">Date and time</td>
                            <td className={`${PClassNames} px-0`}>Temperature</td>
                            <td className={PClassNames}>Wind speed</td>
                            <td className={`${PClassNames} 2xl:px-2 `}>Clouds</td>
                            <td className={`${PClassNames} 2xl:px-0 `}>High clouds</td>
                            <td className={`${PClassNames} 2xl:px-0 `}>Middle clouds</td>
                            <td className={`${PClassNames} 2xl:px-0 `}>Low clouds</td>
                            <td className={`${PClassNames} 2xl:px-4 `}>Fog</td>
                        </tr>
                        {weatherArray?.weather.map((weather, index, weatherArray) => {
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
                                    <td className=" font-medium text-nowrap border-none text-sm tabular-nums lining-nums">
                                        {new Date(weather.time).toLocaleDateString(`${units === "C" ? "uk" : "us"}`, toDayAndMonth)}
                                        {`${units === "C" ? "." : ""}`}
                                        <span className="pl-2 ">{`    `}</span>
                                        {new Date(weather.time).toLocaleTimeString([], units === "C" ? toHoursAndMinutes24h : toHoursAndMinutes12h)}
                                    </td>
                                    <td className="capitalize font-medium text-nowrap flex justify-evenly border-none p-1 text-sm">
                                        <span className="text-nowrap">
                                            {" "}
                                            {units === "C"
                                                ? Math.round(weather.air_temperature)
                                                : Math.round(weather.air_temperature * (9 / 5) + 32)}{" "}
                                            &#176;{units}
                                        </span>{" "}
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
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pt-2">
                <p
                    className="animate-pulse flex justify-end cursor-pointer text-base md776:hidden "
                    aria-label="click to scroll the table"
                    onClick={handleClick}
                >
                    {"<< "}
                    <span className="text-xs lowercase pl-1 pt-1 md776:hidden "> scroll</span>
                </p>
            </div>
            <div className="flex justify-evenly p-1">
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
