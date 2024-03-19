"use client";

import { createContext, useContext, useState } from "react";

type TCoordinates = {
    lon: string | null;
    lat: string | null;
};

type TUnits = "C" | "F" | "c" | "f";

export type TWeatherObject = {
    air_pressure_at_sea_level: number;
    air_temperature: number;
    cloud_area_fraction: number;
    cloud_area_fraction_high: number;
    cloud_area_fraction_low: number;
    cloud_area_fraction_medium: number;
    dew_point_temperature: number;
    fog_area_fraction: number;
    relative_humidity: number;
    ultraviolet_index_clear_sky: number;
    wind_from_direction: number;
    wind_speed: number;
    icon_code: string;
    time: string;
};

type TLocationAndWeatherContext = {
    location: TCoordinates;
    setLocation: React.Dispatch<React.SetStateAction<TCoordinates>>;
    units: TUnits;
    setUnits: React.Dispatch<React.SetStateAction<TUnits>>;
    weatherArray: TWeatherObject[] | null;
    setWeatherArray: React.Dispatch<React.SetStateAction<TWeatherObject[] | null>>;
};

type TLocationAndWeatherContextProviderProps = {
    children: React.ReactNode;
};

export const LocationAndWeatherContext = createContext<TLocationAndWeatherContext | null>(null);

export default function LocationAndWeatherContextProvider({ children }: TLocationAndWeatherContextProviderProps) {
    const [location, setLocation] = useState<TCoordinates>({
        lon: null,
        lat: null,
    });
    const [units, setUnits] = useState<TUnits>("C");
    const [weatherArray, setWeatherArray] = useState<TWeatherObject[] | null>(null);

    return (
        <LocationAndWeatherContext.Provider
            value={{
                location,
                setLocation,
                units,
                setUnits,
                weatherArray,
                setWeatherArray,
            }}
        >
            {children}
        </LocationAndWeatherContext.Provider>
    );
}

export function useLocationAndWeatherContext() {
    const context = useContext(LocationAndWeatherContext);
    if (!context) {
        throw new Error("Location and weather context can only be used inside <LocationAndWeatherContextProvider/>");
    }
    return context;
}
