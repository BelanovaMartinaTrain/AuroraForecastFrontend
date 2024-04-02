//import WidgetWeatherSubpage from "../_components/subComponents/WidgetWeatherSubpage";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WeatherData from "../_components/mainComponents/WeatherData";
import WeatherTable from "../_components/subComponents/WeatherTable rework";

//<WidgetWeatherSubpage />

export default function Page() {
    return (
        <BasicWidget className={"widget center p-6 backdrop-blur-sm min-h-[430px] overflow-x-auto scroll-p-5 w-full"}>
            <WeatherData title="10-hour weather forecast" url="https://aurora-api.cloud/api/yr-met-weather-10hours">
                <WeatherTable />
            </WeatherData>
        </BasicWidget>
    );
}
