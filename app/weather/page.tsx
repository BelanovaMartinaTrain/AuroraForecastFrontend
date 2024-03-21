//import WidgetWeatherSubpage from "../_components/subComponents/WidgetWeatherSubpage";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WeatherData from "../_components/mainComponents/weatherData";
import WeatherTable from "../_components/subComponents/WeatherTable";

//<WidgetWeatherSubpage />

export default function Page() {
    return (
        <BasicWidget className={"widget center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]"}>
            <WeatherData title="10-hour weather forecast">
                <WeatherTable />
            </WeatherData>
        </BasicWidget>
    );
}
