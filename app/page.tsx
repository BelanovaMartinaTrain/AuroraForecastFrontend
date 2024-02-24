import Clock from "./components/Clock";
import { Graph } from "./components/Graph";
import BasicWidget from "./components/BasicWidget";
import WidgetAuroraActivity from "./components/WidgetAuroraActivity";
import WidgetGeomagneticActivity from "./components/WidgetGeomagneticActivity";
import WidgetWeather from "./components/WidgetWeather";
import WidgetImage from "./components/WidgetImage";
import WidgetGeomagneticActivityModal from "./components/WidgetGeomagneticActivityModal";

export default function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    return (
        <>
            <div className="grid">
                <BasicWidget
                    className={
                        "widget center padding-small height-max-widget backdrop-blur-sm lg:min-h-40 "
                    }
                >
                    <WidgetAuroraActivity />
                </BasicWidget>
                <BasicWidget
                    className={
                        "widget center padding-small height-max-widget backdrop-blur-sm lg:min-h-40 "
                    }
                >
                    <WidgetGeomagneticActivityModal />
                </BasicWidget>

                <WidgetImage />
                <BasicWidget className={"grouped-widget"}>
                    <BasicWidget
                        className={
                            "widget  time-main center backdrop-blur-sm max-h-10"
                        }
                    >
                        <Clock
                            className="font-smaller"
                            time={now.getTime()}
                            tmzAbrr={tmzAbrr}
                        />
                        <Clock
                            className="font-smaller"
                            time={now.getTime()}
                            timezone="UTC"
                            tmzAbrr={tmzAbrr}
                        />
                    </BasicWidget>
                    <BasicWidget
                        className={
                            "widget center padding-small backdrop-blur-sm min-h-[152px] lg:min-h-[202px]"
                        }
                    >
                        <WidgetWeather />
                    </BasicWidget>
                    <Graph />
                </BasicWidget>
            </div>
        </>
    );
}
