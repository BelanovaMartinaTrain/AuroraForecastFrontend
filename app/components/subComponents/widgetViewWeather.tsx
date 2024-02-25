"use client";

import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../api/fetchData";
import ProgressBar from "../../ui/ProgressBar";
import Link from "next/link";

type weatherProps = {
    lat: number;
    lon: number;
};

export default function WidgetViewWeather(location: weatherProps) {
    let { lat, lon } = location;
    const [isLoading, setIsLoading] = useState(false);

    const [weather, setWeather] = useState({
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
    });

    useEffect(() => {
        async function fetchWeather() {
            setIsLoading(true);
            if (!!lat || !!lon) {
                try {
                    const weatherData = await fetchData(`http://165.227.128.185:8080/api/yr-met-weather/${lat}/${lon}`);
                    if (weatherData.cause) {
                        console.error("error", weatherData.cause);
                    } else {
                        setWeather(weatherData.properties.timeseries[0].data.instant.details);
                    }
                } catch {}
            }
            setIsLoading(false);
        }

        fetchWeather();
        const intervalID = setInterval(() => {
            fetchWeather();
        }, 1800000);
        return () => clearInterval(intervalID);
    }, [location]);

    return (
        <>
            <div className="quickview-div center">
                <div className={`center quickview-item width-100 padding-sm-btm ${!weather.air_pressure_at_sea_level && "text-neutral-800"}`}>
                    <p className="padding-xs-btm">Temperature</p>
                    <h3 className="padding-sm-btm">{Math.round(weather.air_temperature)} &#176;C</h3>
                    <p className="padding-xs-btm">Wind</p>
                    <h3>{Math.round(weather.wind_speed)} m/s </h3>
                </div>
                <div className={`center quickview-item width-100 margin-xs-btm ${!weather.air_pressure_at_sea_level && "text-neutral-800"}`}>
                    <p className="margin-sm-btm">Clouds </p>
                    <h3 className="font-smaller">Low: {Math.round(weather.cloud_area_fraction_low)} %</h3>
                    <h3 className="font-smaller">Middle: {Math.round(weather.cloud_area_fraction_medium)} %</h3>
                    <h3 className="font-smaller">High: {Math.round(weather.cloud_area_fraction_high)} %</h3>
                    <h3 className="font-smaller">Fog: {Math.round(weather.fog_area_fraction)} %</h3>
                </div>
            </div>

            {!isLoading ? (
                !weather.air_pressure_at_sea_level ? (
                    <p className="text-stone-600">Weather is not available</p>
                ) : (
                    <Link href="https://www.yr.no/en" target="_blank">
                        <p className=" font-medium text-stone-500">MET Norway</p>
                    </Link>
                )
            ) : (
                <ProgressBar />
            )}
        </>
    );
}
