import Clock from "./ui/Clock";
import { Graph } from "./components/mainComponents/WidgetGraph";
import BasicWidget from "./components/layoutComponents/BasicWidget";
import WidgetAuroraActivity from "./components/mainComponents/WidgetAuroraActivity";
import WidgetSolarWind from "./components/mainComponents/WidgetSolarWind";
import WidgetWeather from "./components/mainComponents/WidgetWeather";
import WidgetImage from "./components/mainComponents/WidgetImage";

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
                        <WidgetWeather />
                    </BasicWidget>
                    <Graph />
                </BasicWidget>
            </div>
        </>
    );
}
