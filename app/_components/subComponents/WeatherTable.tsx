"use client";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import { TWeatherSymbolKey, weatherSymbolKeys } from "@/app/_utils/weatherSymbolKeys";
import { weatherAlt, TWeatherAltKey } from "@/app/_utils/weatherAltText";

export default function WeatherTable() {
    const PClassNames = "capitalize font-medium w-full ";
    const { weatherArray, units } = useLocationAndWeatherContext();

    return (
        <>
            <div className="mb-8">
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
                {!!weatherArray &&
                    weatherArray?.map((weather, index) => {
                        return (
                            <div key={index} className="flex justify-evenly py-1 border-b-[1px] border-b-black border-opacity-50">
                                <p className="capitalize font-medium min-w-28">
                                    {new Date(weather.time).toLocaleDateString("uk", {
                                        month: "numeric",
                                        day: "numeric",
                                    })}
                                    .<span className="pl-2">{`    `}</span>
                                    {new Date(weather.time).toLocaleTimeString([], {
                                        hourCycle: "h23",
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
                    })}
            </div>
        </>
    );
}
