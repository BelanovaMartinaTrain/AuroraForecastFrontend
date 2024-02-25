import Link from "next/link";
import WidgetWeather from "../components/mainComponents/WidgetWeather";
import BasicWidget from "../components/layoutComponents/BasicWidget";

export default function Page() {
    return (
        <BasicWidget className={"widget center padding-small height-max-widget backdrop-blur-sm"}>
            <WidgetWeather />
        </BasicWidget>
    );
}
