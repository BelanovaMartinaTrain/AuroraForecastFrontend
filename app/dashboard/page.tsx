import Clock from "../_ui/Clock";
import { Graph } from "../_components/mainComponents/WidgetGraph";
import BasicWidget from "../_components/layoutComponents/BasicWidget";
import WidgetAuroraActivity from "../_components/mainComponents/WidgetAuroraActivity";
import WidgetSolarWind from "../_components/mainComponents/WidgetSolarWind";
import WidgetWeather from "../_components/mainComponents/WidgetWeather";
import WidgetImage from "../_components/mainComponents/WidgetImage";
import WidgetWeatherParams from "../_components/mainComponents/WidgetWeatherParams";
import WidgetViewWeather from "../_components/subComponents/WidgetViewWeatherSearchParams";

export default function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    return (
        <>
            <div className="grid ">
                <BasicWidget className={"widget center padding-small  backdrop-blur-sm lg:min-h-40 "}>
                    <WidgetAuroraActivity />
                </BasicWidget>
                <BasicWidget className={"widget center padding-small  backdrop-blur-sm lg:min-h-40 "}>
                    <WidgetSolarWind />
                </BasicWidget>

                <WidgetImage />
                <BasicWidget className={"grouped-widget"}>
                    <BasicWidget className={"widget  time-main center backdrop-blur-sm max-h-10"}>
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </BasicWidget>
                    <BasicWidget className={"widget center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]"}>
                        <WidgetWeatherParams>
                            <WidgetViewWeather />
                        </WidgetWeatherParams>
                    </BasicWidget>
                    <Graph />
                </BasicWidget>
            </div>
        </>
    );
}
