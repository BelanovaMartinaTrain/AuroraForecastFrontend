"use client";

import React, { useEffect, useRef, useState } from "react";
import WidgetViewWeather from "./widgetViewWeather";

type weatherProps = {
    lat: string;
    lon: string;
};

export default function WidgetWeather() {
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0,
    });
    const [isLocation, setIsLocation] = useState(false);

    // useEffect(() => {
    //     async function checkPerm() {
    //         navigator.permissions.query({ name: "geolocation" }).then((result) => {
    //             if (result.state === "granted") {
    //                 setIsLocation(true);
    //                 getLocation();
    //             }
    //         });
    //     }
    //     checkPerm();
    // }, []);

    function getLocation() {
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
        setIsLocation(true);
    }

    console.log(isLocation);

    return (
        <>
            <h2 className="uppercase margin-xs-btm font-h2">Weather</h2>
            {isLocation ? (
                <WidgetViewWeather {...location} />
            ) : (
                <button className="widget center padding-small focus:bg-black hover:bg-black" onClick={getLocation}>
                    Enable location
                </button>
            )}
        </>
    );
}
