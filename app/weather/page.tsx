"use client";

import WidgetImageGeneral from "../_components/mainComponents/WidgetImageGeneral";
import { useLocationAndWeatherContext } from "../_context/locationAndWeatherContext";
import WidgetWeather from "../_components/mainComponents/WidgetWeatherSubpage";
import BasicWidget from "../_components/layoutComponents/BasicWidget";

export default function Page() {
    const { location } = useLocationAndWeatherContext();
    const { lon, lat } = location;
    console.log(lon, lat);
    return (
        <BasicWidget className={"widget center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]"}>
            <WidgetWeather>
                <WidgetImageGeneral
                    title={""}
                    url={`https://www.yr.no/en/content/${lat},${lon}/meteogram.svg?mode=dark`}
                    timerDuration={3600000}
                    source={{ urlSource: "https://yr.no", nameSource: "MET Norway" }}
                />
            </WidgetWeather>
        </BasicWidget>
    );
}
