//import WidgetWeatherSubpage from "../_components/subComponents/WidgetWeatherSubpage";
import { Suspense } from "react";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WeatherData from "../_components/mainComponents/WeatherData";
import WeatherTable from "../_components/subComponents/WeatherTable";
import SkeletonComponent from "../_components/uiComponents/Skeleton";

//<WidgetWeatherSubpage />

export default function Page() {
    return (
        <BasicWidget className={"widget center p-6 backdrop-blur-sm min-h-[445px]"}>
            <WeatherData title="10-hour weather forecast">
                <WeatherTable />
            </WeatherData>
        </BasicWidget>
    );
}
