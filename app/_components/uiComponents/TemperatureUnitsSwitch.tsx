"use client";

import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";

export default function TemperatureUnitsSwitch({ title, classes }: { title: string; classes: string }) {
    const { units, setUnits } = useLocationAndWeatherContext();

    //TODO Consider using local storage
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const textValue = `${(event.target as HTMLElement).innerText}`.split("°")[1];
        const units = textValue === "C" ? "C" : "F";
        setUnits(units);
    };

    return (
        <>
            <div className={`relative ${classes}`}>
                <h2 className={`font-h2 uppercase  ${title.length > 12 ? "pr-6 xs:pr-0 text-left pl-2 xs:text-center xs:pl-0" : ""} `}>{title}</h2>
                <button
                    className={` absolute  -top-2 right-0 mr-9 px-2 p-1`}
                    onClick={handleClick}
                    aria-description="change units to celsius"
                    aria-pressed={units === "C" ? "true" : "false"}
                >
                    <p className={`text-base ${units === "C" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;C</p>
                </button>
                <button
                    className={` absolute  right-0 mr-2 -top-2 px-2 p-1 ${units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}
                    onClick={handleClick}
                    aria-description="change units to fahrenheit"
                    aria-pressed={units === "F" ? "true" : "false"}
                >
                    <p className={` text-base ${units === "F" ? "text-[gainsboro]" : "text-stone-500"}`}>&#176;F</p>
                </button>
            </div>
        </>
    );
}
