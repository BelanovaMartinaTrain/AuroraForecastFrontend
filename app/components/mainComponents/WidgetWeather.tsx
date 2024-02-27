"use client";

import React, { useEffect, useState } from "react";
import WidgetViewWeather from "../subComponents/WidgetViewWeather";
import ProgressBar from "../../ui/ProgressBar";

export default function WidgetWeather() {
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0,
    });

    const [degrees, setDegreees] = useState("");
    const [isLocation, setIsLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setDegreees(localStorage.getItem("degrees") || "C");
        }
    }, []);

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
        setDegreees("C");
        if (typeof window !== "undefined") {
            window.localStorage?.removeItem("degrees");
            window.localStorage?.setItem("degrees", "C");
        }
    }

    function handleClickF() {
        setDegreees("F");
        if (typeof window !== "undefined") {
            window.localStorage?.removeItem("degrees");
            window.localStorage?.setItem("degrees", "F");
        }
    }

    return (
        <>
            <div className="grid grid-flow-col grid-rows-1 grid-cols-3  margin-xs-btm 2sm:flex md:grid 2sm:justify-between ">
                <h2 className="col-span-2 uppercase pl-16 2sm:pl-0 md:pl-16 font-h2  self-center">Weather</h2>
                <div className=" col-span-1 w-12  self-center items-center ">
                    <div className="flex justify-evenly pr-2">
                        <button onClick={handleClickC} aria-label="change units to celsius" aria-selected={degrees === "C" ? "true" : "false"}>
                            <p className={`text-base pr-1 ${degrees === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;C</p>
                        </button>
                        <button onClick={handleClickF} aria-label="change units to fahrenheit" aria-selected={degrees === "F" ? "true" : "false"}>
                            <p className={`text-base px-2 ${degrees === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;F</p>
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
