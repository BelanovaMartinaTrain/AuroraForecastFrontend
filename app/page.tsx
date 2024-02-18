import Image from "next/image";
import Clock from "./components/Clock";
import { Graph } from "./components/Graph";
import BasicWidget from "./components/BasicWidget";
import WidgetAuroraActivity from "./components/WidgetAuroraActivity";
import WidgetGeomagneticActivity from "./components/WidgetGeomagneticActivity";
import WidgetWeather from "./components/WidgetWeather";

export default function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    return (
        <>
            <div className="grid">
                <BasicWidget className={"widget center padding-small height-max-widget"}>
                    <WidgetAuroraActivity />
                </BasicWidget>
                <BasicWidget className={"widget center padding-small height-max-widget"}>
                    <WidgetGeomagneticActivity />
                </BasicWidget>
                <BasicWidget className={"grouped-widget"}>
                    <BasicWidget className={"widget heigth-100 time-main center"}>
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </BasicWidget>
                    <BasicWidget className={"widget center padding-small"}>
                        <WidgetWeather />
                    </BasicWidget>
                    <Graph />
                </BasicWidget>

                <div className="widget center padding-small grid-item">
                    <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
                    <img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" alt="image of the latest aurora activity" className="img-latest " />
                </div>
            </div>
        </>
    );
}
