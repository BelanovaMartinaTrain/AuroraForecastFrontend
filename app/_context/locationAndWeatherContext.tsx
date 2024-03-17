"use client";

import { createContext, useContext, useState } from "react";

type TCoordinates = {
    lon: string | null;
    lat: string | null;
};

type TUnits = "C" | "F" | "c" | "f";

type TLocationAndWeatherContext = {
    location: TCoordinates;
    setLocation: React.Dispatch<React.SetStateAction<TCoordinates>>;
    units: TUnits;
    setUnits: React.Dispatch<React.SetStateAction<TUnits>>;
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

    return (
        <LocationAndWeatherContext.Provider
            value={{
                location,
                setLocation,
                units,
                setUnits,
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
