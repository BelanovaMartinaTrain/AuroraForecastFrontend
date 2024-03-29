"use client";

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type THemisphere = "Southern" | "Northern";
type THemisphereContext = {
    hemisphere: THemisphere;
    setHemisphere: Dispatch<SetStateAction<THemisphere>>;
};

export const HemisphereContext = createContext<THemisphereContext | null>(null);

export default function HemisphereContextProvider({ children }: { children: React.ReactNode }) {
    const [hemisphere, setHemisphere] = useState<THemisphere>("Northern");

    return (
        <HemisphereContext.Provider value={{ hemisphere, setHemisphere }}>
            {children}
        </HemisphereContext.Provider>
    );
}

export function useHemisphereContext() {
    const context = useContext(HemisphereContext);
    if (!context) {
        throw new Error(
            "Location and weather context can only be used inside <HemisphereContextProvider/>"
        );
    }
    return context;
}
