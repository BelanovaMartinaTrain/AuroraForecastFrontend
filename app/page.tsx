import Clock from "./components/Clock";
import { Graph } from "./components/Graph";
import BasicWidget from "./components/BasicWidget";
import WidgetAuroraActivity from "./components/WidgetAuroraActivity";
import WidgetGeomagneticActivity from "./components/WidgetGeomagneticActivity";
import WidgetWeather from "./components/WidgetWeather";
import WidgetImage from "./components/WidgetImage";

export default function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    return (
        <>
            <div className="grid">
                <BasicWidget className={"widget center padding-small height-max-widget backdrop-blur-sm"}>
                    <WidgetAuroraActivity />
                </BasicWidget>
                <BasicWidget className={"widget center padding-small height-max-widget backdrop-blur-sm"}>
                    <WidgetGeomagneticActivity />
                </BasicWidget>
                <BasicWidget className={"grouped-widget"}>
                    <BasicWidget className={"widget heigth-100 time-main center backdrop-blur-sm"}>
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </BasicWidget>
                    <BasicWidget className={"widget center padding-small backdrop-blur-sm min-h-48"}>
                        <WidgetWeather />
                    </BasicWidget>
                    <Graph />
                </BasicWidget>
                <WidgetImage />
            </div>
        </>
    );
}
