//import WidgetWeatherSubpage from "../_components/subComponents/WidgetWeatherSubpage";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WeatherData from "../_components/mainComponents/WeatherData";
import WeatherTable from "../_components/subComponents/WeatherTable";

//<WidgetWeatherSubpage />

export default function Page() {
    return (
        <BasicWidget className={"widget text-center content-center justify-items-center p-6 backdrop-blur-sm min-h-[430px] "}>
            <WeatherData title="10-hour weather forecast" url="https://aurora-api.cloud/api/yr-met-weather-10hours">
                <div>
                    <WeatherTable />
                </div>
            </WeatherData>
        </BasicWidget>
    );
}
