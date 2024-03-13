"use client";

import { createContext, useContext, useState } from "react";

type TCoordinates = {
    lon: string | null;
    lat: string | null;
};

type TUnits = "C" | "F" | "c" | "f";

type TLocationContext = {
    location: TCoordinates;
    setLocation: React.Dispatch<React.SetStateAction<TCoordinates>>;
    units: TUnits;
    setUnits: React.Dispatch<React.SetStateAction<TUnits>>;
};

type TLocationContextProviderProps = {
    children: React.ReactNode;
};

export const LocationContext = createContext<TLocationContext | null>(null);

export default function LocationContextProvider({ children }: TLocationContextProviderProps) {
    const [location, setLocation] = useState<TCoordinates>({
        lon: null,
        lat: null,
    });
    const [units, setUnits] = useState<TUnits>("C");

    return (
        <LocationContext.Provider
            value={{
                location,
                setLocation,
                units,
                setUnits,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}

export function useLocationContext() {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("Location context can only be used inside <LocationContextProvider/>");
    }
    return context;
}
