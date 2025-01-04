import Clock from "../_components/uiComponents/Clock";
import { Graph } from "../_components/mainComponents/GraphWidget";
import WidgetImage from "../_components/mainComponents/ImageWidget";
import WeatherData from "../_components/mainComponents/WeatherWrapperData";
import WeatherWidget from "../_components/subComponents/WeatherWidget";
import AuroraAndSolarWindWidget from "../_components/mainComponents/AuroraAndSolarWindWidget";
import fetchData from "../_api/fetchData";

export default async function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    const initialWeatherData = await fetchData("http://aurora-api.cloud:8080/api/yr-met-weather-10hours?lon=17&lat=40");

    return (
        <>
            <div className="display-grid ">
                <div className="widget text-center content-center justify-items-center padding-small  backdrop-blur-sm lg:min-h-40 ">
                    <AuroraAndSolarWindWidget type="activity" />
                </div>
                <div className="widget text-center content-center justify-items-center padding-small  backdrop-blur-sm lg:min-h-40 ">
                    <AuroraAndSolarWindWidget type="wind" />
                </div>

                <WidgetImage />
                <div className="grouped-widget">
                    <div className="widget hidden md:flex justify-around p-2 text-center content-center justify-items-center items-center backdrop-blur-sm max-h-10">
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </div>
                    <div className="widget text-center content-center justify-items-center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]">
                        <WeatherData title="Weather">
                            <div>
                                <WeatherWidget initialWeatherData={initialWeatherData} />
                            </div>
                        </WeatherData>
                    </div>
                    <Graph />
                </div>
            </div>
        </>
    );
}
