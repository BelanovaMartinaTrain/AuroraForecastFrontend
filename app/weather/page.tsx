import fetchData from "../_api/fetchData";
import WeatherData from "../_components/mainComponents/WeatherWrapperData";
import WeatherTable from "../_components/subComponents/WeatherTable";

export default async function Page() {
    const initialWeatherData = await fetchData("http://aurora-api.cloud:8080/api/yr-met-weather-10hours?lon=17&lat=40");

    return (
        <div className="widget text-center content-center justify-items-center p-6 backdrop-blur-sm min-h-[430px] ">
            <WeatherData title="10-hour weather forecast">
                <div>
                    <WeatherTable initialWeatherData={initialWeatherData} />
                </div>
            </WeatherData>
        </div>
    );
}
