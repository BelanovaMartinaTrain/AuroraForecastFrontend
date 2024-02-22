import Link from "next/link";
import WidgetWeather from "../components/WidgetWeather";
import BasicWidget from "../components/BasicWidget";

export default function Home() {
    return (
        <BasicWidget className={"widget center padding-small height-max-widget backdrop-blur-sm"}>
            <WidgetWeather />
        </BasicWidget>
    );
}
