import WeatherData from "../_components/mainComponents/WeatherWrapperData";
import WeatherTable from "../_components/subComponents/WeatherTable";

export default function Page() {
    return (
        <div className="widget text-center content-center justify-items-center p-6 backdrop-blur-sm min-h-[430px] ">
            <WeatherData title="10-hour weather forecast" url="https://aurora-api.cloud/api/yr-met-weather-10hours">
                <div>
                    <WeatherTable />
                </div>
            </WeatherData>
        </div>
    );
}
