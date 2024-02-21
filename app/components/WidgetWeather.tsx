"use client";

import React, { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

export default function WidgetWeather() {
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
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = Math.round(position.coords.latitude * 10) / 10;
                const lon = Math.round(position.coords.longitude * 10) / 10;
                console.log("POSITION", lat, lon);
                setLocation({
                    lat: lat,
                    lon: lon,
                });
            },
            (error) => {
                setLocation({
                    lat: 0,
                    lon: 0,
                });
            }
        );
    }, []);

    useEffect(() => {
        async function fetchWeather() {
            if (!!location.lat || !!location.lon) {
                const weather = await fetchData(`http:localhost:5176/api/yr-met-weather/${location.lat}/${location.lon}`);
                console.log(weather);
                setWeather(weather.properties.timeseries[0].data.instant.details);
            }
        }

        fetchWeather();
        const intervalID = setInterval(() => {
            fetchWeather();
        }, 1800000);
        return () => clearInterval(intervalID);
    }, [location]);

    console.log(weather);

    return (
        <>
            <h2 className="uppercase margin-xs-btm font-h2">Weather</h2>
            <div className="quickview-div center">
                <div className={`center quickview-item width-100 padding-sm-btm ${location.lat || location.lon ? "" : "text-neutral-800"}`}>
                    <p className="padding-xs-btm">Temperature</p>
                    <h3 className="padding-sm-btm">{Math.round(weather.air_temperature)} &#176;C</h3>
                    <p className="padding-xs-btm">Wind</p>
                    <h3>{Math.round(weather.wind_speed)} m/s </h3>
                </div>
                <div className={`center quickview-item width-100 padding-sm-btm ${location.lat || location.lon ? "" : "text-neutral-800"}`}>
                    <p className="margin-sm-btm">Clouds </p>
                    <h3 className="font-smaller">Low: {Math.round(weather.cloud_area_fraction_low)} %</h3>
                    <h3 className="font-smaller">Middle: {Math.round(weather.cloud_area_fraction_medium)} %</h3>
                    <h3 className="font-smaller">High: {Math.round(weather.cloud_area_fraction_high)} %</h3>
                    <h3 className="font-smaller">Fog: {Math.round(weather.fog_area_fraction)} %</h3>
                </div>
            </div>
        </>
    );
}
