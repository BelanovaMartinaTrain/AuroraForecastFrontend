"use client";

import React, { useEffect, useState } from "react";
import WidgetViewWeather from "../subComponents/WidgetViewWeather";
import ProgressBar from "../../ui/ProgressBar";

export default function WidgetWeather() {
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0,
    });
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [degrees, setDegreees] = useState("C");

    useEffect(() => {
        async function checkPerm() {
            navigator.permissions.query({ name: "geolocation" }).then((result) => {
                if (result.state === "granted") {
                    setIsLocation(true);
                    getLocation();
                }
            });
            setIsLoading(false);
        }
        checkPerm();
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = Math.round(position.coords.latitude * 10) / 10;
                const lon = Math.round(position.coords.longitude * 10) / 10;
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
        setIsLocation(true);
        setIsLoading(false);
    }

    function handleClickC() {
        console.log("click C");
        setDegreees("C");
    }

    function handleClickF() {
        console.log("click F");
        setDegreees("F");
    }

    return (
        <>
            <div className="grid grid-flow-col grid-rows-1 grid-cols-5  margin-xs-btm gap-2">
                <h2 className="col-span-3 uppercase  font-h2 pl-12 self-end">Weather</h2>
                <div className="  w-10  self-center items-center ">
                    <div className="flex justify-evenly">
                        <button onClick={handleClickC} aria-label="change units to celsius" aria-selected={degrees === "C" ? "true" : "false"}>
                            <p className={degrees === "C" ? "text-[gainsboro]" : "text-stone-500"}>&#176;C</p>
                        </button>
                        <button onClick={handleClickF} aria-label="change units to fahrenheit" aria-selected={degrees === "F" ? "true" : "false"}>
                            <p className={degrees === "F" ? "text-[gainsboro]" : "text-stone-500"}>&#176;F</p>
                        </button>
                    </div>
                </div>
            </div>
            {!!isLoading ? (
                <ProgressBar />
            ) : isLocation ? (
                <WidgetViewWeather location={location} degrees={degrees} />
            ) : (
                <button className="widget center padding-small focus:bg-black hover:bg-black" onClick={getLocation}>
                    Enable location
                </button>
            )}
        </>
    );
}
