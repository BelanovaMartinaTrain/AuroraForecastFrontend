import WidgetWeatherSubpage from "../_components/subComponents/WidgetWeatherSubpage";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WeatherData from "../_api/weatherData";

export default function Page() {
    return (
        <BasicWidget className={"widget center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]"}>
            <WeatherData />
            <WidgetWeatherSubpage />
        </BasicWidget>
    );
}
