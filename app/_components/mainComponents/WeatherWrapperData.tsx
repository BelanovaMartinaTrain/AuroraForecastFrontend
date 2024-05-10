import React from "react";
import TemperatureUnitsSwitch from "@/app/_components/uiComponents/TemperatureUnitsSwitch";
import ButtonRequestLocationPermReactQuery from "../uiComponents/ButtonRequestLocationPermReactQuery";

export default function WeatherData({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <>
            <TemperatureUnitsSwitch title={title} classes="mb-4 mt-1 md:mt-0  " />
            <ButtonRequestLocationPermReactQuery>{children}</ButtonRequestLocationPermReactQuery>
        </>
    );
}
