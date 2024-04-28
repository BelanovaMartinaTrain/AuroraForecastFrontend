"use client";

import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import Link from "next/link";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { TWeatherAltKey, weatherAlt } from "@/app/_utils/weatherAltText";

export default function WeatherWidget() {
    const { location, weatherArray, units } = useLocationAndWeatherContext();
    const { lon, lat } = location;

    const weather = weatherArray![0] || {
        air_pressure_at_sea_level: 0,
        air_temperature: 0,
        cloud_area_fraction: 0,
        cloud_area_fraction_high: 0,
        cloud_area_fraction_low: 0,
        cloud_area_fraction_medium: 0,
        dew_point_temperature: 0,
        fog_area_fraction: 0,
        relative_humidity: 0,
        ultraviolet_index_clear_sky: 0,
        wind_from_direction: 0,
        wind_speed: 0,
        icon_code: "none",
        time: "",
    };

    return (
        <>
            <div className="flex text-center justify-center justify-items-center items-center z-0">
                <div
                    className={`text-center justify-center justify-items-center content-center items-center grid w-full padding-sm-btm ${
                        !weather.air_pressure_at_sea_level && "text-neutral-800"
                    }`}
                >
                    <p className="mb-1">Temperature</p>
                    <div className="flex">
                        <h3 className="mb-3">
                            {units === "C" ? Math.round(weather.air_temperature) : Math.round(weather.air_temperature * (9 / 5) + 32)} &#176;{units}
                        </h3>
                        <img
                            className="ml-2 place-self-start "
                            src={`icons/weather/${weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey]}.svg`}
                            width="25px"
                            alt={weatherAlt[weatherSymbolKeys[weather.icon_code as TWeatherSymbolKey].slice(0, 2) as TWeatherAltKey]}
                        />
                    </div>
                    <p className="mb-1">Wind</p>
                    {units === "C" ? <h3>{Math.round(weather.wind_speed)} m/s </h3> : <h3>{Math.round(weather.wind_speed * 2.2369)} mph </h3>}
                </div>
                <div
                    className={`text-center justify-center justify-items-center content-center items-center grid w-full margin-xs-btm ${
                        !weather.air_pressure_at_sea_level && "text-neutral-800"
                    }`}
                >
                    <p className="mb-1">Clouds </p>
                    <h3 className="font-smaller">Low: {Math.round(weather.cloud_area_fraction_low)} %</h3>
                    <h3 className="font-smaller">Middle: {Math.round(weather.cloud_area_fraction_medium)} %</h3>
                    <h3 className="font-smaller">High: {Math.round(weather.cloud_area_fraction_high)} %</h3>
                    <h3 className="font-smaller mb-1 ">Fog: {Math.round(weather.fog_area_fraction)} %</h3>
                </div>
            </div>

            {!weather.air_pressure_at_sea_level ? (
                <p className="text-stone-600">Weather is not available</p>
            ) : (
                <div className="flex justify-evenly mt-5">
                    <p className=" font-medium text-stone-500 text-[11px]  mr-2">
                        <Link
                            href={`https://www.google.com/maps/place/${lat},${lon}`}
                            target="_blank"
                            aria-label="Navigate to google maps to see used location on a map"
                            tabIndex={6}
                        >
                            Used location: {lat}, {lon}
                        </Link>
                    </p>
                    <p className=" font-medium text-stone-500 text-[11px]">
                        <span className="capitalize mr-1">Source:</span>
                        <Link
                            href="https://www.yr.no/en"
                            target="_blank"
                            aria-label="Link to source of used data - Norway meteo institute"
                            tabIndex={6}
                        >
                            MET Norway
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
}
