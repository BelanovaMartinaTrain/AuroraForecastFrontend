"use client";

import WidgetImageGeneral from "../_components/mainComponents/WidgetImageGeneral";
import { useLocationContext } from "../_context/locationContext";
import WidgetWeather from "../_components/mainComponents/WidgetWeatherSubpage";

export default function Page() {
    const { location } = useLocationContext();
    const { lon, lat } = location;
    console.log(lon, lat);
    return (
        <WidgetWeather>
            <WidgetImageGeneral
                title={""}
                url={`https://www.yr.no/en/content/${lat},${lon}/meteogram.svg?mode=dark`}
                timerDuration={3600000}
                source={{ urlSource: "https://yr.no", nameSource: "MET Norway" }}
            />
        </WidgetWeather>
    );
}
